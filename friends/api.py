# -*- encoding: utf-8 -*-

from django.core.exceptions import ValidationError
from django.db.models import Q
from rest_framework import mixins, viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from friends.models import FriendRequest, Friend
from friends.permissions import NoDeleteFriend, NoDeleteRequestFriend
from friends.serializers import FriendRequestSerializer, FriendSerializer, CreateFriendRequestSerializer
from profile.models import Profile


class FriendRequestViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
						mixins.DestroyModelMixin, mixins.UpdateModelMixin,
						viewsets.GenericViewSet):
	queryset = FriendRequest.objects.all()
	serializer_class = FriendRequestSerializer
	permission_classes = (IsAuthenticated, NoDeleteRequestFriend, )

	def get_serializer_class(self):
		if self.action == 'create':
			return CreateFriendRequestSerializer
		else:
			return FriendRequestSerializer

	def get_queryset(self):
		if self.request.user.is_superuser:
			queryset = FriendRequest.objects.all()
		else:
			profile = self.request.user.profile
			if self.request.method == 'PATCH':
				queryset = FriendRequest.objects.filter(to_friend=profile, accepted=False)
			else:
				queryset = FriendRequest.objects.filter((Q(from_friend=profile) | Q(to_friend=profile)), accepted=False)\
					.select_related('from_friend__user', 'to_friend__user')
		return queryset

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.DATA, files=request.FILES)

		if serializer.is_valid():
			to_friend = Profile.objects.get(user__email=serializer.init_data['to_friend'])
			FriendRequest.objects.create(from_friend=request.user.profile, to_friend=to_friend)
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def update(self, request, *args, **kwargs):
		partial = kwargs.pop('partial', False)
		self.object = self.get_object_or_none()

		serializer = self.get_serializer(self.object, data=request.DATA,
						files=request.FILES, partial=partial)

		if not serializer.is_valid():
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		try:
			self.pre_save(serializer.object)
		except ValidationError as err:
			# full_clean on model instance may be called in pre_save,
			# so we have to handle eventual errors.
			return Response(err.message_dict, status=status.HTTP_400_BAD_REQUEST)

		FriendRequest.objects.accept_request(serializer.object)
		return Response(serializer.data, status=status.HTTP_200_OK)


class FriendsViewSet(mixins.ListModelMixin, mixins.DestroyModelMixin,
						viewsets.GenericViewSet):
	queryset = Friend.objects.all()
	serializer_class = FriendSerializer
	permission_classes = (IsAuthenticated, NoDeleteFriend, )

	def get_queryset(self):
		if self.request.user.is_superuser:
			queryset = Friend.objects.all()
		else:
			profile = self.request.user.profile
			queryset = Friend.objects.filter(Q(from_friend=profile) | Q(to_friend=profile))\
				.select_related('from_friend__user', 'to_friend__user')
		return queryset

	# Also delete friendship request
	def post_delete(self, obj):
		my = self.request.user.profile
		if obj.to_friend == my:
			other_user = obj.from_friend
		else:
			other_user = obj.to_friend

		friendship = FriendRequest.objects.filter(from_friend=my, to_friend=other_user)
		if friendship.exists():
			friendship.delete()
		else:
			FriendRequest.objects.filter(to_friend=my, from_friend=other_user).delete()
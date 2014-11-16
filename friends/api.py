from django.core.exceptions import ValidationError
from django.db.models import Q
from rest_framework import mixins, viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from friends.models import FriendRequest, Friend
from friends.permissions import NoDeleteFriend, NoDeleteRequestFriend
from friends.serializers import FriendRequestSerializer, FriendSerializer


class FriendRequestViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
						mixins.DestroyModelMixin, mixins.UpdateModelMixin,
						viewsets.GenericViewSet):
	queryset = FriendRequest.objects.all()
	serializer_class = FriendRequestSerializer
	permission_classes = (IsAuthenticated, NoDeleteRequestFriend, )

	def get_queryset(self):

		if self.request.user.is_superuser:
			queryset = FriendRequest.objects.all()
		else:
			profile = self.request.user.profile
			if self.request.method == 'PATCH':
				queryset = FriendRequest.objects.filter(to_friend=profile, accepted=False)
			else:
				queryset = FriendRequest.objects.filter((Q(from_friend=profile) | Q(to_friend=profile)), accepted=False)
		return queryset

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
			queryset = Friend.objects.filter(Q(from_friend=profile) | Q(to_friend=profile))
		return queryset
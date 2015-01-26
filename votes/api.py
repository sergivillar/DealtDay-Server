from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from answer.models import Answer
from votes.models import Vote
from votes.permissions import VotePermissions
from votes.serializers import VoteSerializer


class VoteViewSet(viewsets.ModelViewSet):
	queryset = Vote.objects.all()
	serializer_class = VoteSerializer
	permission_classes = (IsAuthenticated, VotePermissions,)

	def get_queryset(self):

		profile = self.request.user.profile
		if self.request.user.is_superuser:
			queryset = Vote.objects.all()
		else:
			queryset = Vote.objects.filter(voter=profile)
			evento = self.request.QUERY_PARAMS.get('evento', None)
			if evento is not None:
				queryset = queryset.filter(vote__event=evento)
		return queryset

	# Metodo que nos permite eliminar todos los votos de un usuario en un evento y actualizarlo con los nuevos votos
	def create(self, request, *args, **kwargs):

		if request.user.is_authenticated():
			with transaction.atomic():
				first_answer = Answer.objects.get(id=request.DATA['votes'][0])
				evento = first_answer.event
				Vote.objects.filter(voter=request.user.profile, vote__event=evento).delete()

				for vote in request.DATA['votes']:
					vote_dict = {}
					vote_dict['vote'] = vote
					serializer = self.get_serializer(data=vote_dict)
					if serializer.is_valid():
						answer = Answer.objects.get(id=vote)
						Vote.objects.create(voter=request.user.profile, vote=answer)
					else:
						return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
				return Response("OK", status=status.HTTP_201_CREATED)
		else:
			return Response(status=status.HTTP_403_FORBIDDEN)
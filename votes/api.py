from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
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
		return queryset

	# Metodo para asignar evento a creador
	def pre_save(self, obj):
		obj.voter = self.request.user.profile
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from votes.models import Vote
from votes.serializers import VoteSerializer


class VoteViewSet(viewsets.ModelViewSet):
	queryset = Vote.objects.all()
	serializer_class = VoteSerializer
	permission_classes = (IsAuthenticated,)
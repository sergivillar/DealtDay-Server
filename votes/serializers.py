# -*- encoding: utf-8 -*-
from django.db.models import Count

from rest_framework import serializers
from answer.models import Answer
from event.models import UserHasEvent
from votes.models import Vote
import datetime


class VoteSerializer(serializers.ModelSerializer):
	voter = serializers.RelatedField(read_only=True)
	type = serializers.SerializerMethodField('get_vote_type')

	class Meta:
		model = Vote

	def get_vote_type(self, obj):
		answer = Answer.objects.get(pk=obj.vote.pk)
		type = answer.type
		return type

	def validate(self, attrs):

		profile = self.context['request'].user.profile

		if 'vote' in attrs:
			vote = attrs['vote']
			if not UserHasEvent.objects.filter(event=vote.event, profile=profile).exists():
				raise serializers.ValidationError({"ErrorVotacion": "No puedes votar esta opción. No estás invitando a este evento."})

			time_now = datetime.datetime.now()
			fin_evento = vote.event.time_to_close.replace(tzinfo=None)
			if fin_evento < time_now:
				raise serializers.ValidationError({"ErrorVotacion": "Este evento ya ha finalizado."})

			if Vote.objects.filter(vote=vote, voter=profile).exists():
				raise serializers.ValidationError({"ErrorVotacion": "Ya has votado esta opción."})

			num_res_event = int(vote.event.num_answers)
			type_vote = vote.type
			votes = Vote.objects.values('vote__type').filter(voter=profile, vote__event=vote.event).annotate(Count("vote__type"))

			for vote in votes:
				if type_vote == vote['vote__type']:
					if int(vote['vote__type__count']) >= num_res_event:
						raise serializers.ValidationError({"ErrorVotacion": "No puedes votar más opciones de este tipo."})

		return attrs

# -*- encoding: utf-8 -*-

import datetime
from rest_framework import serializers
from event.models import Event, UserHasEvent
from friends.models import Friend

MINIMUM_TITLE_LENGTH = 4
MAXIMUM_TITLE_LENGTH = 120


class EventSerializer(serializers.ModelSerializer):
	is_owner = serializers.SerializerMethodField('check_if_owner')
	users = serializers.SerializerMethodField('users_in_event')

	class Meta:
		model = Event
		write_only_fields = ('timestamp',)
		read_only_fields = ('owner',)

	def check_if_owner(self, obj):
		if obj.owner == self.context['request'].user.profile:
			return True
		return False

	def users_in_event(self, obj):
		users = UserHasEvent.objects.filter(event=obj)
		serializer = ShareEventSerializer(instance=users, many=True)
		return serializer.data

	def validate(self, attrs):

		if 'time_to_close' in attrs:
			time_now = datetime.datetime.now()
			time_close = attrs['time_to_close'] - time_now
			if time_close < datetime.timedelta(hours=1):
				raise serializers.ValidationError({"TimeError": "El evento no puede finalizar en menos de 1 hora."})

		if 'title' in attrs:
			if len(attrs['title']) < MINIMUM_TITLE_LENGTH:
				raise serializers.ValidationError({"TituloInvalido": "Título muy corto. Minimo: 4 caracteres."})

		if 'num_answers' in attrs:
			if int(attrs['num_answers']) == 0:
				raise serializers.ValidationError({"NumRespuestasInvalido": "El número de respuestas permitidas no puede ser 0."})

		return attrs


class ShareEventSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserHasEvent

	def validate(self, attrs):

		if 'event' in attrs and 'profile' in attrs:
			event = attrs['event']
			profile = self.context['request'].user.profile
			friend_to_invite = attrs['profile']
			if UserHasEvent.objects.filter(event=event, profile=friend_to_invite).exists():
				raise serializers.ValidationError({"YaInvitado": "Este usuario ya está invitado a este evento."})

			user = self.context['request'].user.profile
			if event.owner != user:
				raise serializers.ValidationError({"ErrorInvitando": "No puedes invitar usuarios a un evento que no es tuyo."})

			if not Friend.objects.filter(to_friend=friend_to_invite, from_friend=profile).exists() and not Friend.objects.filter(from_friend=friend_to_invite, to_friend=profile).exists():
				raise serializers.ValidationError({"ErrorInvitando": "No puedes invitar a un usuario que no sea amigo tuyo."})



		return attrs
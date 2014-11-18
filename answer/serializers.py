# -*- encoding: utf-8 -*-

from rest_framework import serializers
from answer.models import Answer
from event.models import UserHasEvent


class AnswerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Answer
		read_only_fields = ('profile',)

	def validate(self, attrs):

		profile = self.context['request'].user.profile

		if self.context['request'].method == 'PATCH':
			answer = self.object
			if answer.profile != profile:
				raise serializers.ValidationError({"OpcionError": "No puedes modificar las opciones de otros usuarios."})

			if 'event' in attrs:
				raise serializers.ValidationError({"OpcionError": "No puedes modificar el evento al que pertenece la opción."})
			if 'type' in attrs:
				raise serializers.ValidationError({"OpcionError": "No puedes modificar el tipo al que pertenece la opción."})
		else:
			event = attrs['event']
			answer = attrs['answer']

			if not event.open:
				if event.owner != profile:
					raise serializers.ValidationError({"OpcionError": "No puedes añadir opciones a este evento. No eres el dueño."})
			else:
				if not UserHasEvent.objects.filter(profile=profile, event=event).exists():
					raise serializers.ValidationError({"OpcionError": "No puedes añadir opciones a este evento. No estas invitado."})

			length = len(answer) - answer.count(' ')
			if length == 0:
				raise serializers.ValidationError({"OpcionError": "No se pueden añadir opciones vacias."})

		return attrs
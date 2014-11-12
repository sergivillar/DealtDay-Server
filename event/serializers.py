# -*- encoding: utf-8 -*-

import datetime
from rest_framework import serializers
from event.models import Event

MINIMUM_TITLE_LENGTH = 4
MAXIMUM_TITLE_LENGTH = 120


class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event
		write_only_fields = ('timestamp', )

	def validate(self, attrs):
		if attrs['time_to_close']:
			time_now = datetime.datetime.now()
			time_close = attrs['time_to_close'] - time_now
			if time_close < datetime.timedelta(hours=1):
				raise serializers.ValidationError({"TimeError": "El evento no puede finalizar en menos de 1 hora."})

		if len(attrs['title']) < MINIMUM_TITLE_LENGTH:
			raise serializers.ValidationError({"TituloInvalido": "Título muy corto. Minimo: 4 caracteres."})

		if int(attrs['num_answers']) == 0:
			raise serializers.ValidationError({"NumRespuestasInvalido": "El número de respuestas permitidas no puede ser 0."})

		return attrs
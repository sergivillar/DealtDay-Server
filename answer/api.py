# -*- encoding: utf-8 -*-

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from answer.models import Answer
from answer.permissions import AnswerPermissions
from answer.serializers import AnswerSerializer
from answer.settings import ANSWERS_TYPE
from event.models import UserHasEvent


class AnswerViewSet(viewsets.ModelViewSet):
	queryset = Answer.objects.all()
	serializer_class = AnswerSerializer
	permission_classes = (IsAuthenticated, AnswerPermissions,)

	def get_queryset(self):

		queryset = Answer.objects.all()
		if self.request.method != 'DELETE':
			profile = self.request.user.profile
			if self.request.user.is_superuser:
				queryset = Answer.objects.all()
			else:
				events = UserHasEvent.objects.filter(profile=profile).values_list('event__id')
				queryset = Answer.objects.filter(event__in=events)
				
				evento = self.request.QUERY_PARAMS.get('evento', None)
				if evento is not None:
					queryset = queryset.filter(event=evento)
		return queryset

	# Metodo para asignar profile a answer
	def pre_save(self, obj):
		obj.profile = self.request.user.profile

	# Metodo para comprobar el tipo de respuestas que tiene un evento
	def post_save(self, obj, created=False):
		if self.request.method == 'POST':
			event = obj.event
			type = str(obj.type)

			if type == ANSWERS_TYPE[0][0] and not event.has_options:
				event.has_options = True
				event.save()
			elif type == ANSWERS_TYPE[1][0] and not event.has_dates:
				event.has_dates = True
				event.save()

	# Metodo para comprobar que tipo de respuestas quedan en el evento
	def post_delete(self, obj):
		event = obj.event
		type = str(obj.type)

		if not Answer.objects.filter(event=event, type=type).exists():
			if type == ANSWERS_TYPE[0][0]:
				event.has_options = False
				event.save()
			elif type == ANSWERS_TYPE[1][0]:
				event.has_dates = False
				event.save()
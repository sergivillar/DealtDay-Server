# -*- encoding: utf-8 -*-

from django.db import transaction
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from event.models import Event, UserHasEvent
from event.permissions import NoDeleteUserHasEvent, NoDeleteEvent
from event.serializers import EventSerializer, ShareEventSerializer, EventDetailSerializer
from rest_framework import status, mixins


class EventViewSet(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer
	permission_classes = (IsAuthenticated, NoDeleteEvent)

	def get_queryset(self):

		profile = self.request.user.profile
		if self.request.user.is_superuser:
			queryset = Event.objects.all()
		else:
			events = UserHasEvent.objects.filter(profile=profile).values_list('event__id')
			queryset = Event.objects.filter(id__in=events).order_by('time_to_close')
		return queryset

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return EventDetailSerializer
		return EventSerializer

	def create(self, request, *args, **kwargs):

		serializer = self.get_serializer(data=request.DATA, files=request.FILES)

		if serializer.is_valid():
			with transaction.atomic():
				self.pre_save(serializer.object)
				self.object = serializer.save(force_insert=True)
				self.post_save(self.object, created=True)
			headers = self.get_success_headers(serializer.data)
			return Response(serializer.data, status=status.HTTP_201_CREATED,
			                headers=headers)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	# Metodo para asignar evento a creador
	def pre_save(self, obj):
		obj.owner = self.request.user.profile

	# Metodo para crear tambien el evento en tabla UserHasEvent
	def post_save(self, obj, created=False):
		if self.request.method == 'POST':
			UserHasEvent.objects.create(event=obj, profile=obj.owner)


class ShareEventViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                        mixins.DestroyModelMixin, viewsets.GenericViewSet):
	queryset = UserHasEvent.objects.all()
	serializer_class = ShareEventSerializer
	permission_classes = (IsAuthenticated, NoDeleteUserHasEvent,)

	def get_queryset(self):

		queryset = UserHasEvent.objects.all()
		if self.request.method != 'DELETE':
			profile = self.request.user.profile
			if self.request.user.is_superuser:
				queryset = UserHasEvent.objects.all()
			else:
				queryset = UserHasEvent.objects.filter(profile=profile)
		return queryset


class EventWithAnswers(APIView):
	def post(self, request):
		if request.user.is_authenticated():
			event = EventSerializer(data=request.DATA['event'])
			answers = request.DATA['answers']
			for answer in answers:
				if answer['answer'] == '':
					return Response({"OpcionError": "No se pueden añadir opciones vacias."}, status=status.HTTP_400_BAD_REQUEST)
			if event.is_valid():
				Event.objects.create_event_with_answers(request.user, event, answers)
				return Response('OK', status=status.HTTP_201_CREATED)
			return Response(event.errors, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response(status=status.HTTP_403_FORBIDDEN)

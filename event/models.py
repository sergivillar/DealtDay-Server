# -*- encoding: utf-8 -*-

from django.db import models
from profile.models import Profile
from django.db import transaction

class EventManager(models.Manager):
	def create_event_with_answers(self, user, event, answers):
		""" Creacion de evento con respuestas asociadas. """
		with transaction.atomic():
			event = Event.objects.create(title=event.init_data['title'], time_to_close=event.init_data['time_to_close'], num_answers=event.init_data['num_answers'],
			                             open=event.init_data['open'], voters_public=event.init_data['voters_public'], owner=user.profile)
			UserHasEvent.objects.create(event=event, profile=user.profile)
			from answer.models import Answer
			for answer in answers:
				Answer.objects.create(answer=answer['answer'], type=answer['type'], event=event, profile=user.profile)


class Event(models.Model):
	title = models.CharField(max_length=128)
	timestamp = models.DateTimeField(auto_now_add=True)
	time_to_close = models.DateTimeField(help_text="Cuando finaliza el evento")
	num_answers = models.IntegerField(default=1, help_text="Número de opciones que se pueden elegir")
	has_options = models.BooleanField(default=False)
	has_dates = models.BooleanField(default=False)
	open = models.BooleanField(default=False,
	                           help_text="Si 'True', los usuarios invitados al evento pueden añadir mas opciones a la votación")
	voters_public = models.BooleanField(default=False,
	                                    help_text="Si 'True', otros usuarios pueden ver quieén ha votado cada opción")

	owner = models.ForeignKey(Profile)

	objects = EventManager()

	def __unicode__(self):
		return u'{0} ({1})'.format(self.title, self.owner)


class UserHasEvent(models.Model):
	profile = models.ForeignKey(Profile)
	event = models.ForeignKey(Event)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.profile, self.event.title)


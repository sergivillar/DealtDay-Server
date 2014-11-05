from django.db import models
from answer.settings import ANSWERS_TYPE
from event.models import Event
from profile.models import Profile


class Answer(models.Model):
	answer = models.CharField(max_length=64)
	type = models.CharField(max_length=2, choices=ANSWERS_TYPE)

	event = models.ForeignKey(Event)
	user = models.ForeignKey(Profile, help_text="Help to know which user created the answer")

	def __unicode__(self):
		return u'{0} ({1})'.format(self.answer, self.event.title)

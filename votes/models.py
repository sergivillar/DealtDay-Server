from django.db import models
from answer.models import Answers
from profile.models import Profile


class Votes(models.Model):
	voter = models.ForeignKey(Profile)
	vote = models.ForeignKey(Answers)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.vote.answer, self.voter.username)
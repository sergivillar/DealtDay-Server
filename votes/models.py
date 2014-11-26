from django.db import models
from answer.models import Answer
from profile.models import Profile


class Vote(models.Model):
	voter = models.ForeignKey(Profile)
	vote = models.ForeignKey(Answer)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.vote.answer, self.voter.nick)
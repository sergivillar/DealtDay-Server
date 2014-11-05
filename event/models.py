from django.db import models
from profile.models import Profile


class Event(models.Model):
	title = models.CharField(max_length=128)
	timestamp = models.DateTimeField(auto_now_add=True)
	time_to_close = models.DateTimeField(help_text="When the event finish")
	num_answers = models.IntegerField(default=1, help_text="Number of options you can select")
	has_options = models.BooleanField(default=False)
	has_dates = models.BooleanField(default=False)
	open = models.BooleanField(default=False, help_text="If True, users in the event can add more options")
	voters_public = models.BooleanField(default=False, help_text="If True, others users can see what you have voted")

	owner = models.ForeignKey(Profile)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.title, self.owner.username)


class UserHasEvent(models.Model):
	user = models.ForeignKey(Profile)
	event = models.ForeignKey(Event)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.user.username, self.event.title)


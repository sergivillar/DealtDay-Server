from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
	user = models.OneToOneField(User)
	nick = models.CharField(max_length=35)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.user.username, self.nick)
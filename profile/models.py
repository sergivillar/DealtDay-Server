from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
	user = models.OneToOneField(User)

	def __unicode__(self):
		return str(self.user.username)
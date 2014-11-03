from django.contrib.auth.models import User
from django.db import models


class Friends(models.Model):
	from_user = models.ForeignKey(User)
	to_user = models.ForeignKey(User)

	def __unicode__(self):
		return u'{0} ({1})'.format(self.from_user.username, self.to_user.username)
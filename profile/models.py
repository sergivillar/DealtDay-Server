from django.contrib.auth.models import User
from django.db import models

class ProfileManager(models.Manager):
	def update_password(self, email, password):
		""" Cambiar password usuario. """
		user = User.objects.get(email=email)
		user.set_password(password)
		user.save()


class Profile(models.Model):
	user = models.OneToOneField(User)
	nick = models.CharField(max_length=35)

	objects = ProfileManager()

	def __unicode__(self):
		return u'{0} ({1})'.format(self.user.username, self.nick)
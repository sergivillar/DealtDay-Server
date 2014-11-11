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

	objects = ProfileManager()

	def __unicode__(self):
		return str(self.user.username)
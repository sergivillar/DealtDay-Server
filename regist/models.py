from django.db import models


class Regist(models.Model):
	email = models.EmailField(unique=True)
	password = models.CharField(max_length=128)
	encrypt = models.CharField(max_length=128)
	activate = models.BooleanField(default=False)

	def __unicode__(self):
		return u'{0}'.format(self.email)
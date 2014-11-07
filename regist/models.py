import base64
from uuid import uuid4
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.db import models
from django.db import transaction
from django.template.loader import get_template
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMultiAlternatives
from django.template import Context


class RegistrationManager(models.Manager):
	def create_inactive_user(self, email, password, ):
		""" Creacion objeto registro usuario. """
		with transaction.atomic():
			user_token = uuid4()
			user_regist = Regist()
			user_regist.password = make_password(password)
			user_regist.email = email
			user_regist.encrypt = user_token
			user_regist.save()
			self.send_email(email, user_token)

	def activate_user(self, encrypm):
		""" Pasar objeto registro a True y crear Profile del usuario activo """
		with transaction.atomic():
			reg = Regist.objects.get(encrypt=encrypm)
			reg.activate = True
			reg.save()
			username = reg.email.split('@')[0]
			user = User.objects.create_user(username=username, email=reg.email, password=reg.password)
			Token.objects.create(user=user)
			user.save()

	def send_email(self, email, user_token):
		""" Creacion y envio de correo de actiavion. """
		html_email = get_template('regist/email.html')

		mailencryp = base64.b64encode(email)

		text_content = 'Haz click en el siguiente enlace para activar tu cuenta de usuario: http://127.0.0.1:8000/join/' \
		               + str(user_token) + '/' + mailencryp

		d = Context({'encrypt': user_token, 'mensaje': text_content})

		html_content = html_email.render(d)

		message = EmailMultiAlternatives('Registro de usuario de DealtDay', text_content, to=[email])
		message.attach_alternative(html_content, "text/html")
		message.send()


class Regist(models.Model):
	email = models.EmailField(unique=True)
	password = models.CharField(max_length=128)
	encrypt = models.CharField(max_length=128)
	activate = models.BooleanField(default=False)

	objects = RegistrationManager()

	def __unicode__(self):
		return u'{0}'.format(self.email)
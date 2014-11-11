# -*- encoding: utf-8 -*-

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.template import loader
from django.utils.http import urlsafe_base64_encode
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from profile.serializers import LoginSerializer, ForgotPasswordSerializer


@api_view(['POST'])
def login_user(request):
	serializer = LoginSerializer(data=request.DATA)
	if serializer.is_valid():

		username = serializer.init_data['email'].split('@')[0]
		user = authenticate(username=username, password=serializer.init_data['password'])

		if user is not None:
			if user.is_active:
				login(request, user)
				response = {}
				response['email'] = serializer.init_data['email']
				response['token'] = user.auth_token.key
				return Response(response, status=status.HTTP_200_OK)
			else:
				return Response({"ErrorLogin": "El usuario aun no ha sido activado."},
				                status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({"ErrorLogin": "Password o usuario incorrectos."}, status=status.HTTP_400_BAD_REQUEST)
	else:
		return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def forgot_password(request):
	serializer = ForgotPasswordSerializer(data=request.DATA)
	if serializer.is_valid():
		user = User.objects.get(email=serializer.init_data['email'])
		if user.is_active:
			domain = '127.0.0.1:8000'
			c = {
			'email': user.email,
			'domain': domain,
			'site_name': "DealtDay",
			'uid': urlsafe_base64_encode(str(user.pk)),
			'user': user,
			'token': default_token_generator.make_token(user),
			'protocol': 'http',
			}


			#subject = loader.render_to_string('registration/password_reset_subject.txt', c)
			# Email subject *must not* contain newlines
			#subject = ''.join(subject.splitlines())
			message = loader.render_to_string('profile/password_reset_email.html', c)
			send_mail('DealtDat recuperar contraseña', message, None, [user.email])

	else:
		return Response({"ErrorUser": "El usuario no esta activo"}, status=status.HTTP_400_BAD_REQUEST)

	return Response("Email enviado correctamente", status=status.HTTP_200_OK)

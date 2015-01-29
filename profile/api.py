# -*- encoding: utf-8 -*-

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.template import loader
from django.utils.http import urlsafe_base64_encode
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from profile.models import Profile
from profile.serializers import LoginSerializer, ForgotPasswordSerializer, ChangePasswordSerializer, \
	ChangeNickSerializer, UserInfoSerializer


@api_view(['POST'])
def login_user(request):
	serializer = LoginSerializer(data=request.DATA)
	if serializer.is_valid():

		user = authenticate(username=serializer.init_data['email'], password=serializer.init_data['password'])

		if user is not None:
			if user.is_active:
				login(request, user)
				response = {}
				response['email'] = serializer.init_data['email']
				response['token'] = user.auth_token.key
				return Response(response, status=status.HTTP_200_OK)
			else:
				return Response(
					{"ErrorLogin": "El usuario aun no ha sido activado. Revisa tu correo para activar la cuenta."},
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
			domain = '130.206.85.248'
			c = {
			'email': user.email,
			'domain': domain,
			'site_name': "DealtDay",
			'uid': urlsafe_base64_encode(str(user.pk)),
			'user': user,
			'token': default_token_generator.make_token(user),
			'protocol': 'http',
			}


			# subject = loader.render_to_string('registration/password_reset_subject.txt', c)
			# Email subject *must not* contain newlines
			#subject = ''.join(subject.splitlines())
			message = loader.render_to_string('profile/password_reset_email.html', c)
			send_mail('DealtDat recuperar contraseña', message, None, [user.email])

			return Response({"EmailEnviado": "Email enviado correctamente."}, status=status.HTTP_200_OK)
		else:
			return Response({"ErrorUser": "El usuario no esta activo."}, status=status.HTTP_400_BAD_REQUEST)

	else:
		return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def change_password(request):
	serializer = ChangePasswordSerializer(data=request.DATA)

	if serializer.is_valid():
		Profile.objects.update_password(request.user.email, password=serializer.init_data['password'])
		return Response({'ContraseñaCambiada': 'Contraseña actualizada correctamente.'}, status=status.HTTP_200_OK)
	else:
		return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def change_nick(request):
	serializer = ChangeNickSerializer(data=request.DATA)

	if serializer.is_valid():
		profile = Profile.objects.get(user=request.user)
		profile.nick = serializer.init_data['nick']
		profile.save()
		return Response({'NickCambiado': 'Nick actualizado correctamente.'}, status=status.HTTP_200_OK)
	else:
		return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def user_info(request):
	if request.user.is_authenticated():
		serializer = UserInfoSerializer(instance=request.user.profile)
		return Response(serializer.data, status=status.HTTP_200_OK)
	else:
		return Response(status=status.HTTP_403_FORBIDDEN)
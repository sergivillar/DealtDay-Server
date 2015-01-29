# -*- encoding: utf-8 -*-

import re
from django.contrib.auth.models import User
from rest_framework import serializers
from profile.models import Profile

MINIMUM_PASSWORD_LENGTH = 6
MAXIMUM_PASSWORD_LENGTH = 20
MINIMUM_NICK_LENGTH = 4
MAXIMUM_NICK_LENGTH = 25

REGEX_VALID_PASSWORD = (
	## Don't allow any spaces, e.g. '\t', '\n' or whitespace etc.
	r'^(?!.*[\s])'
	'(?!.*[/\%@=]).'
	'{,}$')


class LoginSerializer(serializers.Serializer):
	email = serializers.CharField()
	password = serializers.CharField(write_only=True)

	def validate(self, attrs):

		if 'email' not in attrs:
			raise serializers.ValidationError('Email es requerido')

		if 'password' not in attrs:
			raise serializers.ValidationError('Password es requerida')

		return attrs


class ForgotPasswordSerializer(serializers.Serializer):
	email = serializers.EmailField()


class ChangePasswordSerializer(serializers.Serializer):
	password = serializers.CharField(write_only=True)
	password_2 = serializers.CharField(write_only=True)

	def password_valitade(self, password):
		if re.match(REGEX_VALID_PASSWORD, password):
			return True
		return False

	def validate(self, attrs):
		if attrs['password'] != attrs['password_2']:
			raise serializers.ValidationError({"PasswordDiferente": "Las passwords no coinciden."})

		if len(attrs['password']) < MINIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError({"PasswordInvalida": "Password muy corta. Minimo: " + str(MINIMUM_PASSWORD_LENGTH) + " caracteres."})

		if len(attrs['password']) > MAXIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError({"PasswordInvalida": "Password muy larga. Máximo: " + str(MAXIMUM_PASSWORD_LENGTH) + " caracteres."})

		if not self.password_valitade(attrs['password']):
			raise serializers.ValidationError({"PasswordInvalida": "Formato de password invalida (no permitido: espacios, /, \, %, @, = )."})

		return attrs


class ChangeNickSerializer(serializers.Serializer):
	nick = serializers.CharField()

	def validate(self, attrs):

		if len(attrs['nick']) < MINIMUM_NICK_LENGTH:
			raise serializers.ValidationError({"NickInvalido": "Nick muy corto. Minimo: " + str(MINIMUM_NICK_LENGTH) + " caracteres."})

		if len(attrs['nick']) > MAXIMUM_NICK_LENGTH:
			raise serializers.ValidationError({"NickInvalido": "Nick muy largo. Máximo: " + str(MAXIMUM_NICK_LENGTH) + " caracteres."})

		return attrs


class ProfileSerializer(serializers.ModelSerializer):

	class Meta:
		model = Profile


class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = ('id', 'first_name', 'last_name', 'username', 'email')


class UserInfoSerializer(serializers.ModelSerializer):
	user = UserSerializer()

	class Meta:
		model = Profile
		depth = 1
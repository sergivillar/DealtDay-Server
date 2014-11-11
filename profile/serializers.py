from rest_framework import serializers


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
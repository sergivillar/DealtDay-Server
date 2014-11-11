import re
from rest_framework import serializers
from regist.models import Regist

MINIMUM_PASSWORD_LENGTH = 6
MAXIMUM_PASSWORD_LENGTH = 20
REGEX_VALID_PASSWORD = (
	## Don't allow any spaces, e.g. '\t', '\n' or whitespace etc.
	r'^(?!.*[\s])'
	'(?!.*[/\%@=]).'
	'{,}$')


class RegistSerializer(serializers.ModelSerializer):
	encrypt = serializers.CharField(read_only=True)
	password_2 = serializers.CharField(write_only=True)

	class Meta:
		model = Regist
		write_only_fields = ('password', 'id',)

	def to_native(self, obj):
		data = super(RegistSerializer, self).to_native(obj)
		if 'encrypt' in data:
			if data['encrypt'] == None or data['encrypt'] == "":
				del data['encrypt']
		return data

	def password_valitade(self, password):
		if re.match(REGEX_VALID_PASSWORD, password):
			return True
		return False

	def validate(self, attrs):

		if Regist.objects.filter(email=attrs['email']).exists():
			if Regist.objects.get(email=attrs['email']).activate:
				raise serializers.ValidationError({"EmailActivado": "Esta email ya tiene una cuenta activa."})

		if attrs['password'] != attrs['password_2']:
			raise serializers.ValidationError({"PasswordDiferente": "Las passwords no coinciden."})

		if len(attrs['password']) < MINIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError({"PasswordInvalida": "Password muy corta. Minimo: 6 caracteres."})

		if len(attrs['password']) > MAXIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError({"PasswordInvalida": "Password muy larga. Maximo: 20 caracteres."})

		if not self.password_valitade(attrs['password']):
			raise serializers.ValidationError({"PasswordInvalida": "Formato de password invalida (no permitido: espacios, /, \, %, @, = )."})

		return attrs
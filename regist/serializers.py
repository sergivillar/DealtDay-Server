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

		if 'email' not in attrs:
			raise serializers.ValidationError('Email is a required field')

		if Regist.objects.filter(email=attrs['email']).exists():
			raise serializers.ValidationError("This email is already registered")

		if len(attrs['password']) < MINIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError('Too short password. Minimum: 6 characters')

		if len(attrs['password']) > MAXIMUM_PASSWORD_LENGTH:
			raise serializers.ValidationError("Too long password. Max: 20 characters")

		if not self.password_valitade(attrs['password']):
			raise serializers.ValidationError("Invalid format password (not allowed: spaces, /, \, %, @, =)")

		return attrs
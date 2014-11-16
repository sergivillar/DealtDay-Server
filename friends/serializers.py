# -*- encoding: utf-8 -*-

from rest_framework import serializers
from friends.models import FriendRequest, Friend


class FriendRequestSerializer(serializers.ModelSerializer):

	class Meta:
		model = FriendRequest
		read_only_fields = ('from_friend',)

	def validate(self, attrs):

		if 'to_friend' in attrs:
			from_profile = self.context['request'].user.profile
			to_profile = attrs['to_friend']

			if Friend.objects.filter(from_friend=to_profile, to_friend=from_profile).exists():
				raise serializers.ValidationError({"ErrorPeticion": "Ya sois amigos."})

			if Friend.objects.filter(from_friend=from_profile, to_friend=to_profile).exists():
				raise serializers.ValidationError({"ErrorPeticion": "Ya sois amigos."})

			if from_profile == to_profile:
				raise serializers.ValidationError({"ErrorPeticion": "No te puedes enviar una solicitud de amistad a ti mismo."})

			if FriendRequest.objects.filter(from_friend=from_profile, to_friend=to_profile, accepted=False).exists():
				raise serializers.ValidationError({"PeticionExistente": "Ya le has enviado una solicitud de amistad a ese usuario."})

			if FriendRequest.objects.filter(from_friend=to_profile, to_friend=from_profile, accepted=False).exists():
				raise serializers.ValidationError({"PeticionExistente": "Ese usuario ya te ha envitado una solicitud de amistad."})

		if self.context['request'].method == 'PATCH':
			if 'from_friend' in attrs or 'to_friend' in attrs:
				raise serializers.ValidationError({"ErrorPeticion": "No se puede modificar la peticion de amistad."})

			if self.object.accepted:
				raise serializers.ValidationError({"ErrorPeticion": "Solicitud de amistad ya aceptada."})

		return attrs


class FriendSerializer(serializers.ModelSerializer):

	class Meta:
		model = Friend
		depth = 1
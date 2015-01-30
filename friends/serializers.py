# -*- encoding: utf-8 -*-

from rest_framework import serializers
from friends.models import FriendRequest, Friend
from profile.serializers import ProfileSerializer


class FriendRequestSerializer(serializers.ModelSerializer):
	from_friend = serializers.SerializerMethodField('get_from_friend')
	to_friend = serializers.SerializerMethodField('get_to_friend')

	class Meta:
		model = FriendRequest
		# read_only_fields = ('from_friend',)

	def get_to_friend(self, obj):
		data = {}
		data['email'] = obj.to_friend.user.email
		data['nick'] = obj.to_friend.nick
		return data

	def get_from_friend(self, obj):
		data = {}
		data['email'] = obj.from_friend.user.email
		data['nick'] = obj.from_friend.nick
		return data

	def validate(self, attrs):

		if 'to_friend' in attrs:
			from_profile = self.context['request'].user.profile
			to_profile = attrs['to_friend']

			if Friend.objects.filter(from_friend=to_profile, to_friend=from_profile).exists():
				raise serializers.ValidationError({"ErrorPeticion": "Ya sois amigos."})

			if Friend.objects.filter(from_friend=from_profile, to_friend=to_profile).exists():
				raise serializers.ValidationError({"ErrorPeticion": "Ya sois amigos."})

			if from_profile == to_profile:
				raise serializers.ValidationError(
					{"ErrorPeticion": "No te puedes enviar una solicitud de amistad a ti mismo."})

			if FriendRequest.objects.filter(from_friend=from_profile, to_friend=to_profile, accepted=False).exists():
				raise serializers.ValidationError(
					{"PeticionExistente": "Ya le has enviado una solicitud de amistad a ese usuario."})

			if FriendRequest.objects.filter(from_friend=to_profile, to_friend=from_profile, accepted=False).exists():
				raise serializers.ValidationError(
					{"PeticionExistente": "Ese usuario ya te ha envitado una solicitud de amistad."})

		if self.context['request'].method == 'PATCH':
			if 'from_friend' in attrs or 'to_friend' in attrs:
				raise serializers.ValidationError({"ErrorPeticion": "No se puede modificar la peticion de amistad."})

			if self.object.accepted:
				raise serializers.ValidationError({"ErrorPeticion": "Solicitud de amistad ya aceptada."})

		return attrs


class FriendSerializer(serializers.ModelSerializer):
	friend = serializers.SerializerMethodField('get_friend')

	class Meta:
		model = Friend
		write_only_fields = ('from_friend', 'to_friend',)

	def get_friend(self, obj):
		profile = self.context['request'].user.profile
		if obj.to_friend == profile:
			data = {}
			data['nick'] = obj.from_friend.nick
			data['id'] = obj.from_friend.id
			data['email'] = obj.from_friend.user.email
			return data
		elif obj.from_friend == profile:
			data = {}
			data['nick'] = obj.to_friend.nick
			data['id'] = obj.to_friend.id
			data['email'] = obj.to_friend.user.email
			return data


class CreateFriendRequestSerializer(serializers.Serializer):
	to_friend = serializers.EmailField()
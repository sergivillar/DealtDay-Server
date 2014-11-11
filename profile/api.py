from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from profile.serializers import LoginSerializer


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
				return Response({"ErrorLogin": "El usuario aun no ha sido activado"}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({"ErrorLogin": "Password o usuario incorrectos"}, status=status.HTTP_400_BAD_REQUEST)
	else:
		return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)
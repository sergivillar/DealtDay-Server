from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from regist.models import Regist
from regist.serializers import RegistSerializer


@api_view(['POST'])
def create_regist(request):
    serialized = RegistSerializer(data=request.DATA)
    if serialized.is_valid():
        Regist.objects.create_inactive_user(serialized.init_data['email'], serialized.init_data['password'])
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
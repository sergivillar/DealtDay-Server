from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from event.models import Event
from event.permissions import NoCreateObjectsToOtherUser
from event.serializers import EventSerializer
from rest_framework import status


class EventViewSet(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer
	permission_classes = (IsAuthenticated, NoCreateObjectsToOtherUser)

	def create(self, request, *args, **kwargs):

		serializer = self.get_serializer(data=request.DATA, files=request.FILES)

		if serializer.is_valid():
			# Metodo para comprobar permisos propios
			self.check_object_permissions(request, serializer.object)
			self.pre_save(serializer.object)
			self.object = serializer.save(force_insert=True)
			self.post_save(self.object, created=True)
			headers = self.get_success_headers(serializer.data)
			return Response(serializer.data, status=status.HTTP_201_CREATED,
			                headers=headers)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
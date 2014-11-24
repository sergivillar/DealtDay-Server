from rest_framework import permissions
from rest_framework.exceptions import MethodNotAllowed


class NoDeleteUserHasEvent(permissions.BasePermission):
	def has_object_permission(self, request, view, obj):
		# Read permissions are allowed to any request,
		# so we'll always allow GET, HEAD or OPTIONS requests.
		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.event.owner.user == request.user


class NoDeleteEvent(permissions.BasePermission):

	def has_permission(self, request, view):
		if request.method == 'PUT':
			raise MethodNotAllowed('PUT', detail=None)
		else:
			return True

	def has_object_permission(self, request, view, obj):
		# Read permissions are allowed to any request,
		# so we'll always allow GET, HEAD or OPTIONS requests.
		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.owner.user == request.user
from rest_framework import permissions
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.permissions import BasePermission


class VotePermissions(BasePermission):

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

			if request.method == 'DELETE':
				if obj.voter.user == request.user:
					return True

			return obj.voter.user == request.user
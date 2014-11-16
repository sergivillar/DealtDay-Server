from rest_framework import permissions


class NoDeleteFriend(permissions.BasePermission):
	def has_object_permission(self, request, view, obj):
		# Read permissions are allowed to any request,
		# so we'll always allow GET, HEAD or OPTIONS requests.
		if request.method in permissions.SAFE_METHODS:
			return True

		if request.method == 'PUT':
			if request.user.is_superuser:
				return True
			else:
				return False

		if request.method == 'PATCH':
			return obj.to_friend.user == request.user

		return obj.from_friend.user == request.user
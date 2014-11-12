from django.contrib.auth import logout
from django.http import HttpResponseRedirect


def logout_user(request):
	if logged_user(request.user):
		logout(request)
	return HttpResponseRedirect('/')


def logged_user(user_to_check):
	if user_to_check.is_authenticated():
		if user_to_check.is_active:
			return True
	return False
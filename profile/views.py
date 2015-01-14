from django.contrib.auth import logout
from django.shortcuts import redirect
from django.views.generic import TemplateView, View
from settings import AFTER_LOGOUT_URL


def logged_user(user_to_check):
	if user_to_check.is_authenticated():
		if user_to_check.is_active:
			return True
	return False


class LoginView(TemplateView):
	template_name = "profile/login-index.html"


class LogoutView(View):
	"""
	Logout a user and redirect it to the AFTER_LOGOUT_URL
	"""
	def get(self, request):
		if logged_user(request.user):
			logout(request)
		return redirect(AFTER_LOGOUT_URL)
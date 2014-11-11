# View for activate User
import base64
from django.http import HttpResponseRedirect
from regist.models import Regist


def alta(request, encrypm, mailencrypm):
	reg = Regist.objects.get(encrypt=encrypm)
	mailm = base64.b64decode(mailencrypm)

	if reg is not None:
		if reg.email == mailm:
			if reg.activate == False:
				Regist.objects.activate_user(encrypm)

	return HttpResponseRedirect('/login/')
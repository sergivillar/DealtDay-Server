# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect


def indexView(request):
	if request.user.is_authenticated():
		return render(request, 'dealtday/index.html')
	else:
		return redirect('/login')
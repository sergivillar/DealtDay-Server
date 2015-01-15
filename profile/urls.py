# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from views import LogoutView, loginView

urlpatterns = patterns('',
    url(r'^login/?$', loginView, name='login'),
    url(r'^logout/?$', LogoutView.as_view(), name='logout'),
)

# -*- coding: UTF-8 -*-
from dealtday.settings.base import *

SECRET_KEY = '1&(6g)nfni)4f%7o0h4)-*$s1(surx5m0l^zzp*wvb#_z=tcu='

#DEBUG = False
#TEMPLATE_DEBUG = DEBUG

ROOT_URLCONF = 'dealtday.urls'
WSGI_APPLICATION = 'dealtday.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dealtday',
        'USER': 'root',
        'PASSWORD': 'ysolotransportamateria',
    }
}

ALLOWED_HOSTS = ['*']

MEDIA_ROOT = '/var/apps/dealtday/media/'
MEDIA_URL = ''

STATIC_ROOT = '/var/apps/dealtday/static/'
STATIC_URL = '/static/'

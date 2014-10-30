# -*- coding: UTF-8 -*-
from dealtday.settings.base import *

SECRET_KEY = 's3s4m0bb+$s6ipg@lv2h+r)c+iz(e_f#o6vc0eodrfn9vcypws0n#i)6$3$4M0'

DEBUG = False
TEMPLATE_DEBUG = DEBUG

ROOT_URLCONF = 'sesamo.urls'
WSGI_APPLICATION = 'sesamo.wsgi.application'

#Obviusly change this ;)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'sesamo', # Or path to database file if using sqlite3.
        # The following settings are not used with sqlite3:
        'USER': 'sesauser',
        'PASSWORD': '@sesamitis33',
        'HOST': '', # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': '', # Set to empty string for default.
    }
}

ALLOWED_HOSTS = ['*']

MEDIA_ROOT = '/var/apps/sesamo/media/'
MEDIA_URL = ''

STATIC_ROOT = '/var/apps/sesamo/static/'
STATIC_URL = '/static/'

PUSH_NOTIFICATIONS_SETTINGS = {
        "GCM_API_KEY": "AIzaSyDDmISduCssHLasakyTsUEh9HlqpNH2DkM",
        "APNS_CERTIFICATE": os.path.join(BASE_DIR, 'settings', 'certs', 'dist.pem'),
}
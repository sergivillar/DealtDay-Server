"""
Django settings for DealtDay project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.join(os.path.dirname(__file__), '../', '..').replace('\\', '/')

ADMINS = (('Sergio', 'sergio.fernandezj@gmail.com'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1&(6g)nfni)4f%7o0h4)-*$s1(surx5m0l^zzp*wvb#_z=tcu='

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'rest_framework',
	'rest_framework.authtoken',
	'regist',
	'answer',
	'event',
	'friends',
	'profile',
	'votes',
)

MIDDLEWARE_CLASSES = (
'django.contrib.sessions.middleware.SessionMiddleware',
'django.middleware.common.CommonMiddleware',
'django.middleware.csrf.CsrfViewMiddleware',
'django.contrib.auth.middleware.AuthenticationMiddleware',
'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
'django.contrib.messages.middleware.MessageMiddleware',
'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'dealtday.urls'

WSGI_APPLICATION = 'dealtday.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
'default': {
'ENGINE': 'django.db.backends.mysql',
'NAME': 'dealtday',
'USER': 'root',
'PASSWORD': '',
'HOST': '',
'PORT': '',
}
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'Europe/Madrid'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTHENTICATION_BACKENDS = ('profile.backends.EmailAuthBackend',)

STATIC_URL = '/static/'

TEMPLATE_DIRS = (PROJECT_ROOT + '/templates',
                 PROJECT_ROOT + '/static/templates',)

STATICFILES_DIRS = (PROJECT_ROOT + '/static', )

REST_FRAMEWORK = {
'DEFAULT_AUTHENTICATION_CLASSES': (  # TODO quitar basic al finalizar desarrollo
                                     'rest_framework.authentication.BasicAuthentication',
                                     'rest_framework.authentication.SessionAuthentication',
                                     'rest_framework.authentication.TokenAuthentication',
)
}

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'dealtday.confirmation@gmail.com'
EMAIL_HOST_PASSWORD = 'brujamala'
EMAIL_PORT = 587

DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
SERVER_EMAIL = EMAIL_HOST_USER
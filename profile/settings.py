# -*- coding: utf-8 -*-
from dealtday import settings


AFTER_LOGOUT_URL = getattr(settings, 'AFTER_LOGOUT_URL', '/')

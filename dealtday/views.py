# -*- coding: utf-8 -*-
from django.views.generic import TemplateView


class IndexView(TemplateView):
    '''
    Renders the index page
    '''
    template_name = "dealtday/index.html"
from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    #Usuario
    url(r'^alta/(?P<encrypm>[0-9A-Za-z=_\-]+)/(?P<mailencrypm>[0-9A-Za-z=_\-]+)$', 'regist.views.alta'),

    #API Usuario
    url(r'^api/', include('regist.urls')),
)

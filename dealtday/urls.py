from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    #API Usuario
    url(r'^api/', include('regist.urls')),
)

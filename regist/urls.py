from django.conf.urls import patterns, url

urlpatterns = patterns('',
                       url(r'^user/register', 'regist.api.create_regist'),
)
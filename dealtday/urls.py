from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth import views
from rest_framework.routers import DefaultRouter

from answer.api import AnswerViewSet
from dealtday.views import IndexView
from event.api import EventViewSet, ShareEventViewSet
from friends.api import FriendRequestViewSet, FriendsViewSet
from votes.api import VoteViewSet


router = DefaultRouter()

router.register(r'answer', AnswerViewSet)
router.register(r'event', EventViewSet)
router.register(r'share', ShareEventViewSet)
router.register(r'friend_request', FriendRequestViewSet)
router.register(r'friends', FriendsViewSet)
router.register(r'vote', VoteViewSet)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    #Web
    url(r'^$', IndexView.as_view(), name='index'), # login required

    #Usuario
    url(r'^alta/(?P<encrypm>[0-9A-Za-z=_\-]+)/(?P<mailencrypm>[0-9A-Za-z=_\-]+)$', 'regist.views.alta'),
    url(r'^api/login', 'profile.api.login_user'),
    url(r'^logout', 'profile.views.logout_user'),
    url(r'^api/change-password', 'profile.api.change_password'),
    url(r'^api/forgot-password', 'profile.api.forgot_password'),
    url(r'^api/nick', 'profile.api.change_nick'),
    #TODO cambiar template reset pass form
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.password_reset_confirm, {'template_name': 'profile/password_reset_confirm.html'}, name='password_reset_confirm'),
    #TODO cambiar template reset done
    url(r'^reset/done/$', views.password_reset_complete, name='password_reset_complete'),

    #API Usuario
    url(r'^api/', include('regist.urls')),
    url(r'^api/', include(router.urls)),
)

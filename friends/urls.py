from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from friends.api import FriendRequestViewSet, FriendstViewSet

router = DefaultRouter()

router.register(r'friend_request', FriendRequestViewSet)
router.register(r'friends', FriendstViewSet)

urlpatterns = patterns('',
					url(r'^', include(router.urls)),
)
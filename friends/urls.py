from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from friends.api import FriendRequestViewSet, FriendsViewSet

router = DefaultRouter()

router.register(r'friend_request', FriendRequestViewSet)
router.register(r'friends', FriendsViewSet)

urlpatterns = patterns('',
					url(r'^', include(router.urls)),
)
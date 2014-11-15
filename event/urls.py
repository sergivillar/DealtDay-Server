from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from event.api import EventViewSet, ShareEventViewSet

router = DefaultRouter()

router.register(r'event', EventViewSet)
router.register(r'share', ShareEventViewSet)

urlpatterns = patterns('',
					url(r'^', include(router.urls)),
)
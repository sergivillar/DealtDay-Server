from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from event.api import EventViewSet

router = DefaultRouter()

router.register(r'event', EventViewSet)

urlpatterns = patterns('',
					url(r'^', include(router.urls)),
)
from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from answer.api import AnswerViewSet

router = DefaultRouter()

router.register(r'answer', AnswerViewSet)

urlpatterns = patterns('',
					url(r'^', include(router.urls)),
)
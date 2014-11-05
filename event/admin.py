from django.contrib import admin
from event.models import Event, UserHasEvent

admin.site.register(Event)
admin.site.register(UserHasEvent)
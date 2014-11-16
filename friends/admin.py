from django.contrib import admin
from friends.models import Friend, FriendRequest

admin.site.register(Friend)
admin.site.register(FriendRequest)
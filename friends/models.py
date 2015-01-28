from django.db import models
from django.db import transaction
from profile.models import Profile


class FriendRequestManager(models.Manager):
	def accept_request(self, friend_request):
		""" Pasar objeto FriendRequest a True y crear Friend del usuario activo """
		with transaction.atomic():
			friend_request.accepted = True
			friend_request.save()
			Friend.objects.create(from_friend=friend_request.from_friend, to_friend=friend_request.to_friend)

class FriendRequest(models.Model):
	from_friend = models.ForeignKey(Profile, related_name='friendship_requests_sent')
	to_friend = models.ForeignKey(Profile, related_name='friendship_requests_received')
	timestamp = models.DateTimeField(auto_now_add=True)
	accepted = models.BooleanField(default=False)

	objects = FriendRequestManager()

	class Meta:
		unique_together = (('to_friend', 'from_friend'), )

	def __unicode__(self):
		return u'{0} ({1})'.format(self.from_friend.nick, self.to_friend.nick)


class Friend(models.Model):
	from_friend = models.ForeignKey(Profile, related_name='from_friend_set')
	to_friend = models.ForeignKey(Profile, related_name='to_friend_set')
	created = models.DateTimeField(auto_now_add=True)

	class Meta:
		unique_together = (('to_friend', 'from_friend'), )

	def __unicode__(self):
		return u'{0} ({1})'.format(self.from_friend.nick, self.to_friend.nick)
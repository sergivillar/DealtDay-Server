# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Friend',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('from_friend', models.ForeignKey(related_name='from_friend_set', to='profile.Profile')),
                ('to_friend', models.ForeignKey(related_name='to_friend_set', to='profile.Profile')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='FriendRequest',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('accepted', models.BooleanField(default=False)),
                ('from_friend', models.ForeignKey(related_name='friendship_requests_sent', to='profile.Profile')),
                ('to_friend', models.ForeignKey(related_name='friendship_requests_received', to='profile.Profile')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterUniqueTogether(
            name='friendrequest',
            unique_together=set([('to_friend', 'from_friend')]),
        ),
        migrations.AlterUniqueTogether(
            name='friend',
            unique_together=set([('to_friend', 'from_friend')]),
        ),
    ]

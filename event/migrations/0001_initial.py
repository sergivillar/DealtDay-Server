# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('time_to_close', models.DateTimeField(help_text=b'Cuando finaliza el evento')),
                ('num_answers', models.IntegerField(default=1, help_text=b'N\xc3\xbamero de opciones que se pueden elegir')),
                ('has_options', models.BooleanField(default=False)),
                ('has_dates', models.BooleanField(default=False)),
                ('open', models.BooleanField(default=False, help_text=b"Si 'True', los usuarios invitados al evento pueden a\xc3\xb1adir mas opciones a la votaci\xc3\xb3n")),
                ('voters_public', models.BooleanField(default=False, help_text=b"Si 'True', otros usuarios pueden ver qui\xc3\xa9n ha votado cada opci\xc3\xb3n")),
                ('owner', models.ForeignKey(to='profile.Profile')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserHasEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('event', models.ForeignKey(to='event.Event')),
                ('profile', models.ForeignKey(to='profile.Profile')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]

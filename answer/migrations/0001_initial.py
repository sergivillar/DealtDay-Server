# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '__first__'),
        ('profile', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('answer', models.CharField(max_length=64)),
                ('type', models.CharField(max_length=2, choices=[(b'TX', b'Texto'), (b'DT', b'Date')])),
                ('event', models.ForeignKey(to='event.Event')),
                ('profile', models.ForeignKey(help_text=b'Help to know which user created the answer', to='profile.Profile')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]

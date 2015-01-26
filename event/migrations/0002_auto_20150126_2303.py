# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='voters_public',
            field=models.BooleanField(default=False, help_text=b"Si 'True', otros usuarios pueden ver qui\xc3\xa9n ha votado cada opci\xc3\xb3n"),
            preserve_default=True,
        ),
    ]

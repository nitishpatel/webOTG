# Generated by Django 3.1.1 on 2020-09-09 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0003_auto_20200909_1950'),
    ]

    operations = [
        migrations.AddField(
            model_name='website',
            name='color',
            field=models.CharField(default='#9b59b6', max_length=200),
        ),
    ]

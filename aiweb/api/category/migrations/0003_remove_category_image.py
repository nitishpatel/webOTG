# Generated by Django 2.2.1 on 2020-09-05 07:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_auto_20200904_2116'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='image',
        ),
    ]
# Generated by Django 2.2.1 on 2020-09-05 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='website',
            name='landing',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='website',
            name='navbar',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='website',
            name='social',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
# Generated by Django 3.1.2 on 2020-10-24 06:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tasks',
            old_name='Description',
            new_name='description',
        ),
        migrations.AddField(
            model_name='tasks',
            name='start_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, verbose_name='start_date'),
        ),
        migrations.AddField(
            model_name='tasks',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 4.1.7 on 2023-02-23 12:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sub',
            old_name='created_at',
            new_name='createdAt',
        ),
        migrations.RenameField(
            model_name='sub',
            old_name='update_at',
            new_name='updatedAt',
        ),
    ]
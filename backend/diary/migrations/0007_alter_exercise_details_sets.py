# Generated by Django 3.2.4 on 2021-07-04 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0006_alter_exercise_details_sets'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise_details',
            name='sets',
            field=models.JSONField(default=dict, null=True),
        ),
    ]

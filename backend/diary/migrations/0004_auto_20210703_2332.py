# Generated by Django 3.2.4 on 2021-07-03 23:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0003_auto_20210702_2225'),
    ]

    operations = [
        migrations.AddField(
            model_name='workout',
            name='exercises',
            field=models.ManyToManyField(through='diary.Exercise_Details', to='diary.Exercise'),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='name',
            field=models.CharField(max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='exercise_details',
            name='duration',
            field=models.TimeField(null=True),
        ),
        migrations.AlterField(
            model_name='exercise_details',
            name='exercise_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='diary.exercise'),
        ),
        migrations.AlterField(
            model_name='exercise_details',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='exercise_details',
            name='sets',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='exercise_details',
            name='workout_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='diary.workout'),
        ),
        migrations.AlterField(
            model_name='workout',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='workout',
            name='is_completed',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='workout',
            name='name',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='workout',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]
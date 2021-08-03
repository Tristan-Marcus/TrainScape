from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    last_name = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']
    
    def __str__(self):
        return "{}".format(self.email)


class Exercise(models.Model):
    name = models.CharField(primary_key=True, max_length=50)

    # TODO: Add image field
    #image = 

    description = models.TextField(blank=True, null=True)
    # exercise_id = models.AutoField(primary_key=True)


class Workout(models.Model): 
    name = models.CharField(max_length=30, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    date = models.DateField(blank=True, null=True, auto_now_add=True)
    notes = models.TextField(blank=True, null=True)
    exercises = models.ManyToManyField(Exercise, through='WorkoutExerciseDetail')
    workout_id = models.AutoField(primary_key=True)
    is_completed = models.BooleanField(null=True)

    def __str__(self):
        return "id: " + str(self.workout_id) + "\n" + "name: " + self.name + "\n" + "date: " + str(self.date) + "\n" + "is_completed: " + str(self.is_completed)

    class Meta:
        ordering = ['date']

def details_data():
    return {'set_1':{'reps':0, 'weight':0, 'distance':0, 'is_completed':False}}

class WorkoutExerciseDetail(models.Model):
    sets = models.JSONField(default=details_data, blank=True, null=True)                       
    notes = models.TextField(blank=True, null=True)
    duration = models.TimeField(blank=True, null=True)
    workout_id = models.ForeignKey(Workout, null=True, on_delete=models.CASCADE)
    exercise_name = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    


from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Exercise(models.Model):
    name = models.CharField(max_length=40, null=True)

    # TODO: Add image field
    #image = 

    description = models.TextField(blank=True, null=True)
    exercise_id = models.AutoField(primary_key=True)


class Workout(models.Model): 
    name = models.CharField(max_length=30, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
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
    sets = models.JSONField(default=details_data, null=True)                       
    notes = models.TextField(blank=True, null=True)
    duration = models.TimeField(null=True)
    workout_id = models.ForeignKey(Workout, null=True, on_delete=models.CASCADE)
    exercise_id = models.ForeignKey(Exercise, null=True, on_delete=models.CASCADE)
    


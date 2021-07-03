from django.db import models
import django.db.models.deletion

# Create your models here.
class Exercise(models.Model):
    exercise_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    description = models.TextField()
    #* This is for uploading a file to the DB
    # * Data stored in DB will be the image path ?
    # image = models.FileField(upload_to='images/' blank=True, null=True)


class Workout(models.Model):
    workout_id = models.AutoField(primary_key=True)
    
    # TODO: Add User later on
    # user_id: int

    # TODO Add Exercises later on
    # exercises = models.ManyToManyField(Exercise, through 'Exercise_Details')

    name = models.CharField(max_length=30)
    date = models.DateField(blank=True, auto_now_add=True)
    notes = models.TextField(blank=True)
    is_completed = models.BooleanField()

    def __str__(self):
        return "id: " + str(self.workout_id) + "\n" + "name: " + self.name + "\n" + "date: " + str(self.date) + "\n" + "is_completed: " + str(self.is_completed)


class Exercise_Details(models.Model):
    workout_id = models.ForeignKey(Workout, on_delete=models.CASCADE)
    exercise_id = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    duration = models.TimeField()
    sets = models.JSONField() # sets = [set_1, set_2, set_3, ... , set_n]
                              # set_n = {
                              #     Reps:         int, 
                              #     Weight:       int, 
                              #     Distance:     int, 
                              #     is_completed: bool
                              # }

    notes = models.TextField(blank=True)


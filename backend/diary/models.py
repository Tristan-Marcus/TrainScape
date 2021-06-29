from django.db import models
import django.db.models.deletion

# Create your models here.
class Exercise(models.Model):
    exercise_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    description = models.TextField()
    #* This is for uploading a file to the DB, however what is stored
    #* Data stored in DB will be the image path 
    # image = models.FileField(upload_to='images/' blank=True, null=True)
    duration = models.TimeField()
    sets = models.JSONField()
    notes = models.TextField(blank=True)


class Workout(models.Model):
    #* Primary Key
    #* WorkoutID:       int
    workout_id = models.AutoField(primary_key=True)

    #* Foreign Key
    #* UserID:          int
    # TODO: Add User later on

    #* Array of Foreign Keys
    #* Exercises:       array[ ExerciseID, ExerciseID, ... , ExerciseID]
    # TODO Add Exercises later on
    # exercises = models.ForeignKey(Exercise, on_delete=django.db.models.deletion.CASCADE)

    #* Workout Name:    str
    name = models.CharField(max_length=30)
    #* Workout Date:    date
    date = models.DateField(blank=True, auto_now_add=True)
    #* Notes:           str
    notes = models.TextField(blank=True)
    #* Completed:       bool
    is_completed = models.BooleanField()

    def serialize(self):
        return {
            "id": self.workout_id,
            "name": self.name,
            "data": self.date,
            "is_completed": self.is_completed
        }
    
    def __str__(self):
        return "id: " + str(self.workout_id) + "\n" + "name: " + self.name + "\n" + "date: " + str(self.date) + "\n" + "is_completed: " + str(self.is_completed)




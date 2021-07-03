from django.conf import settings

from rest_framework import serializers

from .models import (
    Workout, 
    Exercise, 
    Exercise_Details
)


class WorkoutSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Workout
        fields = ['workout_id', 'name', 'date', 'notes', 'is_completed']

class ExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercise
        fields = ['exercise_id', 'name', 'description']

class Exercise_Details_Serializers(serializers.ModelSerializer):

    class Meta:
        model = Exercise_Details
        fields = ['workout_id', 'exercise_id', 'duration', 'sets', 'notes']
from django.conf import settings

from rest_framework import serializers

from .models import (
    CustomUser,
    Workout, 
    Exercise, 
    WorkoutExerciseDetail
)

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = CustomUser
        fields = '__all__'


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'
        #fields = ['workout_id', 'user', 'name', 'exercises', 'date', 'notes', 'is_completed']

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name', 'description']

class WorkoutExerciseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExerciseDetail
        fields = ['workout_id', 'exercise_name', 'sets', 'duration', 'notes']
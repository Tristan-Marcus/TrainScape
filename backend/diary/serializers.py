from django.conf import settings

from rest_framework import serializers

from .models import (
    Workout, 
    Exercise, 
    WorkoutExerciseDetail
)

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'
        #fields = ['workout_id', 'user', 'name', 'exercises', 'date', 'notes', 'is_completed']

        def get_name(self, obj):
            return obj.name
        
        def get_exercises(self, obj):
            return obj.exercises

        def get_date(self, obj):
            return obj.date
        
        def get_notes(self, obj):
            return obj.notes
        
        def get_status(self, obj):
            return obj.is_completed

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['exercise_id', 'name', 'description']

class WorkoutExerciseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExerciseDetail
        fields = ['workout_id', 'exercise_id', 'sets', 'duration', 'notes']
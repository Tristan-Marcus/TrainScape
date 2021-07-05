from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.utils.http import is_safe_url

from rest_framework import serializers
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Workout, Exercise, WorkoutExerciseDetail
from .serializers import WorkoutCreateSerializer, WorkoutSerializer, ExerciseSerializer, WorkoutExerciseDetailSerializer


# TODO: Home view
def home_view(request, *args, **kwargs):
    pass


# TODO: Validate the creation
# TODO: Add user auth / permissions
@api_view(['POST'])
def workout_create_view(request, *args, **kwargs):
    workout_data = request.POST
    serializer = WorkoutCreateSerializer(workout_data)
    
    serializer.save()
    
    return Response(serializer.data, status=201)
    
    #return Response({}, status=400)


@api_view(['GET'])
def workout_list_view(request, *args, **kwargs):
    querySet = Workout.objects.all()

    serializer = WorkoutSerializer(querySet, many = True)

    return Response(serializer.data, status = 200)


@api_view(['GET'])
def workout_view(request, workout_id, *args, **kwargs):
    querySet = Workout.objects.filter(workout_id=workout_id)

    if not querySet.exists():
        return Response({}, status=404)

    obj = querySet.first()

    serializer = WorkoutSerializer(obj)

    return Response(serializer.data, status=200)


# TODO: Add user permissions
@api_view(['DELETE', 'POST'])
def workout_delete_view(request, workout_id, *args, **kwargs):
    querySet = Workout.objects.filter(workout_id=workout_id)

    if not querySet.exists():
        return Response({}, status=404)

    obj = querySet.first()
    obj.delete()

    return Response({"message": "You have deleted workout %d" %workout_id}, status=200)


# TODO: Workout action view
# TODO: Add user permissions


# TODO: Exercise List view
@api_view(['GET'])
def exercise_list_view(request, *args, **kwargs):
    querySet = Exercise.objects.all()

    serializer = ExerciseSerializer(querySet, many = True)

    return Response(serializer.data, status = 200)


# TODO: Workout Exercise Details list view
@api_view(['GET'])
def workout_exercise_detail_view(request, workout_id, exercise_id, *args, **kwargs):
    querySet = WorkoutExerciseDetail.objects.filter(workout_id = workout_id, exercise_id=exercise_id)

    if not querySet.exists():
        return Response({}, status = 404)

    obj = querySet.first()

    serializer = WorkoutExerciseDetailSerializer(obj)

    return Response(serializer.data, status = 200)


# TODO: Workout Exercise Details action view
# TODO: Add user permissions
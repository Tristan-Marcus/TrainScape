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

from .models import Workout, Exercise, Exercise_Details 

from .serializers import WorkoutSerializer, ExerciseSerializer, Exercise_Details_Serializers



# Create your views here.

# TODO: Home view
def home_view(request, *args, **kwargs):
    pass

# TODO: Workout creation view
@api_view(['POST']) # http method, the client == POST
#@authentication_classes(['SessionAuthentication'])
#@permission_classes([IsAuthenticated])
def workout_create_view(request, *args, **kwargs):
    pass


# TODO: Workout list view
@api_view(['GET'])
def workout_list_view(request, *args, **kwargs):
    querySet = Workout.objects.all()

    serializer = WorkoutSerializer(querySet, many = True)

    return Response(serializer.data, status = 200)


# TODO: Workout delete view
# TODO: Workout action view


# TODO: Exercise List view
@api_view(['GET'])
def exercise_list_view(request, *args, **kwargs):
    querySet = Exercise.objects.all()

    serializer = ExerciseSerializer(querySet, many = True)

    return Response(serializer.data, status = 200)


# TODO: Exercise_Details list view
@api_view(['GET'])
def exercise_detail_view(request, *args, **kwargs):
    querySet = Exercise_Details.objects.filter(id = exercise_id)

    if not querySet.exists():
        return Response({}, status = 404)

    obj = querySet.all()

    serializer = Exercise_Details_Serializers(obj)

    return Response(serializer.data, status = 200)

# TODO: Exercise_Details action view
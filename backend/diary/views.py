from django.conf import settings
from django.utils.http import is_safe_url
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import (
    Workout, 
    Exercise, 
    WorkoutExerciseDetail,
)

from .serializers import (
    WorkoutSerializer,
    ExerciseSerializer,
    WorkoutExerciseDetailSerializer,
)

ALLOWED_HOSTS = settings.ALLOWED_HOSTS


# TODO: Home view
@api_view(['GET'])
def home_view(request, *args, **kwargs):
    return Response("There is currently no Home page", status=200)


@api_view(['GET'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_list_view(request, user):
    try:
        workouts = Workout.objects.filter(user=user)

    except ObjectDoesNotExist:
        return Response("You have no workouts!", status=404)
    
    serializer = WorkoutSerializer(workouts, many=True)

    return Response(serializer.data, status=200)


@api_view(['GET'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_view(request, workout_id):
    try:
        workout = Workout.objects.get(workout_id=workout_id)
        
    except ObjectDoesNotExist:
        return Response("This workout Does Not Exist", status=404)

    serializer = WorkoutSerializer(workout, many=False)

    return Response(serializer.data, status=200)


@api_view(['POST'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_create_view(request):
    serializer = WorkoutSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data, status=201)

@api_view(['POST'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_exercise_create_view(request):
    serializer = WorkoutExerciseDetailSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data, status=201)


@api_view(['DELETE'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_delete_view(request, workout_id):
    try:
        workout = Workout.objects.get(workout_id=workout_id)
    except ObjectDoesNotExist:
        return Response("This workout Does Not Exist", status=404)

    workout.delete()

    return Response({"message": "You have deleted workout %d" %workout_id}, status=200)


@api_view(['POST'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_update_view(request, workout_id):
    try:
        workout = Workout.objects.get(workout_id=workout_id)
    except ObjectDoesNotExist:
        return Response("This workout Does Not Exist", status=404)

    serializer = WorkoutSerializer(instance=workout, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data, status=200)


@api_view(['GET'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def exercise_list_view(request):
    try:
        exercises = Exercise.objects.all()
    except ObjectDoesNotExist:
        return Response("There are no exercises in the library", status=404)

    serializer = ExerciseSerializer(exercises, many=True)

    return Response(serializer.data, status=200)


@api_view(['GET'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_exercise_detail_view(request, workout_id, exercise_name):
    try:
        exercise = WorkoutExerciseDetail.objects.get(workout_id=workout_id, exercise_name=exercise_name)
    except ObjectDoesNotExist:
        return Response("There is no such exercise in this workout", status=404)

    serializer = WorkoutExerciseDetailSerializer(exercise)

    return Response(serializer.data, status=200)


@api_view(['POST'])
#@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def workout_exercise_update_view(request, workout_id, exercise_name):
    try:
        exercise = WorkoutExerciseDetail.objects.get(workout_id=workout_id, exercise_name=exercise_name)
    except ObjectDoesNotExist:
        return Response("There is no such exercise in this workout", status=404)
    
    serializer = WorkoutExerciseDetailSerializer(instance=exercise, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data, status=200)
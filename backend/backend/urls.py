from django.contrib import admin
from django.urls import path, include

from diary.views import (
    home_view,
    workout_view,
    workout_list_view,
    workout_create_view,
    workout_delete_view,
    exercise_list_view,
    workout_exercise_detail_view,
    
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),
    path('workouts/', workout_list_view),
    path('workouts/<int:workout_id>', workout_view),
    path('create-workout/', workout_create_view),
    path('workouts/<int:workout_id>/delete', workout_delete_view),
    path('workouts/<int:workout_id>/<int:exercise_id>', workout_exercise_detail_view),
    path('exercises/', exercise_list_view),
    
]

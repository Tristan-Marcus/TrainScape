from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.home_view, name='diary'),
    path('auth/', include('rest_auth.urls')), # login/, logout/, password/reset/, password/change/, user/
    path('auth/register', include('rest_auth.registration.urls')), 
    path('workouts/user<int:user>', views.workout_list_view, name="workouts"),
    path('workouts/<int:workout_id>/', views.workout_view, name='workout'),
    path('workouts/add-exercise/', views.workout_exercise_create_view, name='add-exercise'),
    path('workouts/<int:workout_id>/<str:exercise_name>/', views.workout_exercise_detail_view, name='workout-exercise-details'),
    path('create-workout', views.workout_create_view, name='create-workout'),
    path('delete-workout/<int:workout_id>/', views.workout_delete_view, name='delete-workout'),
    path('update-workout/<int:workout_id>/', views.workout_update_view, name="update-workout"),
    path('exercises/', views.exercise_list_view, name='exercises'),
    path('update-exercise/<int:workout_id>/<str:exercise_name>', views.workout_exercise_update_view, name='update-exercise')
]
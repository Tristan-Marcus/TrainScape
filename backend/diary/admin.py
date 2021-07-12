from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import * 
from .forms import CreateUserForm, UpdateUserForm

class UserAdmin(UserAdmin):
    add_form = CreateUserForm
    form = UpdateUserForm
    model = User
    list_display = ['email']


class WorkoutAdmin(admin.ModelAdmin):
    search_fields = ['user__username', 'user__email']
    class Meta:
        model = Workout


class WorkouExerciseDetailAdmin(admin.ModelAdmin):
    search_fields = ['workout_id__name', 'exercise_id__name']
    class Meta:
        model = WorkoutExerciseDetail


admin.site.register(User, UserAdmin)
admin.site.register(Exercise)
admin.site.register(Workout, WorkoutAdmin)
admin.site.register(WorkoutExerciseDetail, WorkouExerciseDetailAdmin)
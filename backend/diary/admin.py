from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import * 
from .forms import CustomUserCreationForm, CustomUserChangeForm

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email']


class WorkoutAdmin(admin.ModelAdmin):
    search_fields = ['user__username', 'user__email']
    class Meta:
        model = Workout


class WorkouExerciseDetailAdmin(admin.ModelAdmin):
    search_fields = ['workout_id__name', 'exercise_id__name']
    class Meta:
        model = WorkoutExerciseDetail


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Exercise)
admin.site.register(Workout, WorkoutAdmin)
admin.site.register(WorkoutExerciseDetail, WorkouExerciseDetailAdmin)
from django.contrib import admin

from .models import * 

class WorkoutAdmin(admin.ModelAdmin):
    search_fields = ['user__username', 'user__email']

    class Meta:
        model = Workout

class WorkouExerciseDetailAdmin(admin.ModelAdmin):
    search_fields = ['workout_id__name', 'exercise_id__name']

    class Meta:
        model = WorkoutExerciseDetail

admin.site.register(Exercise)
admin.site.register(Workout, WorkoutAdmin)
admin.site.register(WorkoutExerciseDetail, WorkouExerciseDetailAdmin)
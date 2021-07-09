from django import forms

from .models import Workout

class WorkoutForm(forms.ModelForm):
    class Meta:
        model = Workout
        fields = ['name', 'exercises', 'date', 'notes', 'is_completed']
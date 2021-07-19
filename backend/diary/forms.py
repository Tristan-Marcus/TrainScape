from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'first_name', 'last_name']


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = CustomUserCreationForm.Meta.fields

from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import User

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = '__all__'


class UpdateUserForm(UserChangeForm):
    class Meta:
        model = User
        fields = CreateUserForm.Meta.fields

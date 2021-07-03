"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from diary.views import (
    home_view,
    workout_list_view,
    exercise_list_view,
    exercise_detail_view,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),
    path('workouts/', workout_list_view),
    path('exercises/', exercise_list_view),
    path('exercises/<int:exercise_id>', exercise_detail_view)
]

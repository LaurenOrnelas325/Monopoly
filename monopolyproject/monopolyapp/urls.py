from django.urls import path
from . import views

app_name = 'monopolyapp'
urlpatterns = [
    path('', views.GamePage, name='gamePage')
]
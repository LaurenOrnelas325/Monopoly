from django.urls import path
from . import views

app_name = 'monopolyapp'

urlpatterns = [
    path('', views.GamePage, name='gamePage'),
    path('profile', views.profile_view.as_view(), name ='profile_view')
]
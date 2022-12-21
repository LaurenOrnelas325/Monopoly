from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views
from .views import SignUpView

router = DefaultRouter()
router.register('usersapp', views.UserViewSet, basename='usersapp')

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('currentuser/', views.CurrentUserView.as_view()),
    
]
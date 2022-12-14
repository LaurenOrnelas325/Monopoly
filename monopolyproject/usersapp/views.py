from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from django.views.generic.edit import CreateView
from django.views.generic import DetailView
from django.urls import reverse_lazy
from usersapp.models import CustomUser
from django.shortcuts import get_object_or_404


from api.serializers import UserSerializer
from api.permissions import IsAuthorOrReadOnly
from .forms import CustomUserCreationForm, CustomUserChangeForm

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    template_name = 'registration/signup.html'
    success_url = reverse_lazy('login')

class CurrentUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomUser
    serializer_class = UserSerializer
    permission_classes = [IsAuthorOrReadOnly]
    
    
    def get_object(self):
        return get_object_or_404(CustomUser, username=self.kwargs['username'])
    
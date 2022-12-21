from django.shortcuts import render
from django.views.generic import ListView
from .models import GameInstance

def GamePage(request):
    return render(request, 'gamepage.html')

class profile_view(ListView):
    model = GameInstance
    template_name = 'user_profile.html'
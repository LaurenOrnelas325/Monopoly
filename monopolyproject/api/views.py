from rest_framework import generics, viewsets

from monopolyapp.models import GameInstance
from .serializers import GameInstanceSerializer
    
class PostGameResults(viewsets.ModelViewSet):
    queryset = GameInstance.objects.all()
    serializer_class = GameInstanceSerializer
from django.db import models

from usersapp.models import CustomUser

# Create your models here.
class GameInstance(models.Model):
    winner = models.ForeignKey(CustomUser, related_name="monopolyapp", on_delete=models.CASCADE, null=True)
    rounds = models.IntegerField(null=True)
    
    def __str__(self):
        return str(self.rounds)
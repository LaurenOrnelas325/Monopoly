from rest_framework import serializers
from usersapp.models import CustomUser

from monopolyapp.models import GameInstance

class NestedGameInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameInstance
        fields = ('id', 'winner', 'rounds')


class NestedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username')

class GameInstanceSerializer(serializers.ModelSerializer):
    author_detail = NestedUserSerializer(read_only=True, source='author')
    class Meta:
        model = GameInstance
        fields = ('id', 'winner', 'rounds', 'author_detail')   
      
        
class UserSerializer(serializers.ModelSerializer):
    game_detail = NestedUserSerializer(many=True, source='GameInstance', read_only=True)
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'wins', 'losses', 'game_detail')
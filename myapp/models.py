from django.db import models

class Player(models.Model):
    name = models.CharField('Player name', max_length=20)
    email_address = models.EmailField('Email')

    def __str__(self):
        return self.name
    
class Month(models.Model):
    month_played = models.CharField(max_length=20)

    def __str__(self):
        return self.month_played

class Game(models.Model):
    player = models.ManyToManyField(Player, blank=True)
    number = models.CharField('Game number', max_length=20)
    game_time = models.CharField(max_length=20)
    m = models.ForeignKey(Month, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.number
    

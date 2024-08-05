from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from datetime import datetime
from django.contrib.auth.models import User

from .models import Game
from .forms import GameForm

def index(request):
    form = UserCreationForm()
    now = datetime.now().date
    users = User.objects.all()
    return render(request, 'index.html', {'form':form, 'now':now, 'users':users})

def personal_data(request):
     all_games = Game.objects.all()
     form = GameForm
     return render(request, 'registration/user_data.html', {'all_games': all_games, 'form': form})
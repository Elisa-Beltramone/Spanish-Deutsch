from django.contrib import admin
from .models import Player
from .models import Game
from .models import Month


admin.site.register(Player)
admin.site.register(Game)
admin.site.register(Month)
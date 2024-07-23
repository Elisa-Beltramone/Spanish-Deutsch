from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm

def index(request):
    form = UserCreationForm()
    return render(request, 'index.html', {'form':form})

# def logout_user(request):
#     logout(request)
#     messages.success(request, ("You logged out"))
#     return redirect('home')

def login_user(request):
    return render(request, 'registration/register_user.html', {})

def logout_user(request):
    return redirect('index')

def register_user(request):
    
    return render(request, 'registration/register_user.html', {})
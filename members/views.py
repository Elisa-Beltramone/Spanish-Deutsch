from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm

def login_user(request):
    return render(request, 'authenticate/login.html', {})

def logout_user(request):
    logout(request)
    messages.success(request, ("You logged out"))
    return redirect('index')

# def register_user(request):
    # if request.method == "POST":
        # form = UserCreationForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         username = form.cleaned_data['username']
    #         password = form.cleaned_data['password1']
    #         user = authenticate(username=username, password=password)
    #         login(request, user)
    #         messages.success(request, ("Registration successful!"))
    #         return redirect('index')
    #     else:
    #         form = UserCreationForm()           
        
        # return render(request, 'registration/register_user.html', {})
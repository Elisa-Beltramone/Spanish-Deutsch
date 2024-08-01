from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('personal_data', views.personal_data, name='personal_data'),
]
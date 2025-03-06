from django.urls import path
from . import views

urlpatterns = [
    path('', views.memory_game, name='memory_game'),
    path('memory/', views.memory_page, name='memory_page'),
]

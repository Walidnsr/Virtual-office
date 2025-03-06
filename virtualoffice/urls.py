from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='/desktop/', permanent=False)),  # Redirige la racine vers /desktop/
    path('accounts/', include('accounts.urls')),
  
    path('terminal/', include('terminal.urls')),
    path('desktop/', include('desktop.urls')),
  
    path('chatbot/', include('chatbot.urls')),
    path('calculator/', include('calculator.urls')),
    path('memorygame/', include('memorygame.urls')),  # Ajout de Memory Game
    path('stickynotes/', include('stickynotes.urls')),  # Ajout de Sticky Notes
    path('drawing/', include('drawing.urls')),          # Ajout de Drawing

    path('clock/', include('clock.urls')),              # Ajout de Clock
    path('musicplayer/', include('musicplayer.urls')),    # Ajout de Music Player
]

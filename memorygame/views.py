from django.shortcuts import render
from .models import AppModel 
def memory_game(request):
    return render(request, 'memorygame/memorygame.html')  # Nouveau chemin

def memory_page(request):
    return render(request, 'memorygame/memory.html')  # Nouveau chemin
def dashboard(request):
    apps = AppModel.objects.all()  # Récupère toutes les applications enregistrées
    print("Apps chargées :", apps)  # Ajout d'un print pour le débogage
    return render(request, 'dashboard.html', {'apps': apps})
from django.shortcuts import render
from django.http import JsonResponse
from .models import Drawing
import json

def drawing_page(request):
    return render(request, 'drawing/drawing.html')

def save_drawing(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        drawing = Drawing(name=data['name'], image=data['image'])
        drawing.save()
        return JsonResponse({"message": "Dessin enregistré avec succès !"}, status=201)
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

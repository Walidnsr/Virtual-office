from django.shortcuts import render, redirect
from .models import Note

def note_list(request):
    notes = Note.objects.all()  # Récupère toutes les notes
    return render(request, 'stickynotes/note_list.html', {'notes': notes})

def add_note(request):
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        if title and content:
            Note.objects.create(title=title, content=content)
        return redirect("note_list")  

    return render(request, "stickynotes/add_note.html")

def delete_note(request, note_id):
    note = Note.objects.get(id=note_id)
    note.delete()
    return redirect("note_list")  
def index(request):
    return render(request, 'stickynotes/index.html')
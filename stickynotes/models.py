from django.db import models


from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=100)  # Titre de la note
    content = models.TextField()  # Contenu de la note
    created_at = models.DateTimeField(auto_now_add=True)  # Date de création

    def __str__(self):
        return self.title

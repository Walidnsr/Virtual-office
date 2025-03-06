from django.db import models

class Drawing(models.Model):
    name = models.CharField(max_length=255, default="Untitled")
    image = models.TextField()  # Stocke l'image en base64
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

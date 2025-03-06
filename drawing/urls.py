from django.urls import path
from .views import drawing_page, save_drawing

urlpatterns = [
    path('', drawing_page, name="drawing"),
    path('save/', save_drawing, name="save_drawing"),
]

from .views import QrListCreateView, QrDetailView
from django.urls import path


urlpatterns = [
    path('qr/', QrListCreateView.as_view()),
    path('qr/<int:pk>/', QrDetailView.as_view()),
]

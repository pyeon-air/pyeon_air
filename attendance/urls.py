from attendance.views import QrApi
from django.urls import path

urlpatterns = [
    path('qr/', QrApi.as_view()),
]

from django.conf.urls import url
from django.urls import path
from management import views

urlpatterns = [
    path('member_api', views.TestAPI.as_view()),
]
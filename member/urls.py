from django.conf.urls import url
from django.urls import path
from member import views

urlpatterns = [
    path('post_login', views.UserLogInAPI.as_view()),
]
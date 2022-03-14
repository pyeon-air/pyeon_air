from django.conf.urls import url
from django.urls import path
from completion import views
urlpatterns = [
    path('temp', views.sayhi.as_view()),
    path('', views.completionPage, name='index'),
    path('/status/<user_id>', views.changeStatus, name="status")
]
from django.conf.urls import url
from django.urls import path,include
from management import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'student_management', views.StudentManagement)


urlpatterns = [
    path("", include(router.urls))
]
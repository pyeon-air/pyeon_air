from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from management.serializers import StudentManagementSerializer
from django.contrib.auth import get_user_model


User = get_user_model()

class StudentManagement(ReadOnlyModelViewSet):
    """
    입교생 관리 페이지에서 수강생들을 조회
    """
    queryset = User.objects.all()
    serializer_class = StudentManagementSerializer
    permission_classes = [AllowAny] # 추후 권한 설정이 필요한 부분
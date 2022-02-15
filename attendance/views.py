from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import InOutLogSerializer, QrInfoSerializer
from .models import InOutLog, QrInfo


# QR
class QrApi(APIView):
    def get(self, request):
        queryset = QrInfo.objects.all()
        serializer = QrInfoSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        return 


# 입퇴실 인원 현황
class API(APIView):
    def get(self, request):
        return

    def post(self, request):
        return 


# 출석확인
class API(APIView):
    def get(self, request):
        return

    def post(self, request):
        return 
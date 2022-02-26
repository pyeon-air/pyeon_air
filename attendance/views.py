from os import stat
from urllib import request
from rest_framework import status
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics

from .serializers import InOutLogSerializer, QrInfoSerializer
from .models import InOutLog, QrInfo


# QR
class QrView(APIView):
    def get(self, request):
        serializer = QrInfoSerializer(QrInfo.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = QrInfoSerializer(data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data, status=201)


# class QrViewSet(ModelViewSet):
#     queryset = QrInfo.objects.all()
#     serializer_class = QrInfoSerializer()

#     def create(self, request, *args, **kargs):
#         # get_serializer : 위에서 지정한 QrInfoSerializer를 가짐
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
        
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

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
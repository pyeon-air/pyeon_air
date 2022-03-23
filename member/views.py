from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from .models import User
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import permission_classes, authentication_classes
from member import serializers
from drf_yasg.utils       import swagger_auto_schema
from drf_yasg             import openapi      
import json
from django.http import JsonResponse

@permission_classes([AllowAny])
class UserLogInAPI(APIView):
    @swagger_auto_schema(tags=['로그인 관련 API'], request_body=serializers.UserLoginSerializer)
    # @transaction.atomic
    # https://brownbears.tistory.com/573 확인해보기
    def post(self, request, *args, **kwargs):
        serializer = serializers.UserLoginSerializer(data = request.data)
        if not serializer.is_valid(raise_exception=True):
            return Response(
                {"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT
                )

        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user['username'] == "None":
            return Response(
                {"message": "로그인이 실패했습니다. 아이디와 비밀번호를 확인해주세요."}, status=status.HTTP_401_UNAUTHORIZED
                )
        
        return JsonResponse(
            {
                "user": user['username'], 
                "token": user['token']
            }, status = status.HTTP_200_OK
        )
        
        

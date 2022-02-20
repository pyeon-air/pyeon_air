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

# class AccountListAPI(APIView):
#     def get(self, request):
#         queryset = Account.objects.all()
#         serializer = Account_Serializer(queryset, many = True)
#         return Response(serializer.data)

#     def post(self,request):
#         return Response('this is post request')
@permission_classes([AllowAny])
class UserLogInAPI(APIView):
    @swagger_auto_schema(tags=['로그인을 진행합니다.'], request_body=serializers.UserLogInSerializer)
    # @transaction.atomic
    # https://brownbears.tistory.com/573 확인해보기
    # serializer_class = serializers.AccountLogInSerializer
    def post(self, request, *args, **kwargs):
        serializer = serializers.UserLogInSerializer(data = request.data)
        # serializer = self.get_serializer(data=request.data)
        
        if not serializer.is_valid(raise_exception=True):
            return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)

        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        # return Response(user)
        if user['username'] == "None":
            return Response({"message": "fail", "user": user}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(
            {
                "user": serializers.UserSerializer(
                    user, context=self.get_serializer_context()
                ).data, 
                "token": user['token']
            }
        )
        

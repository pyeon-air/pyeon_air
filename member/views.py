from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from .models import Account
from rest_framework.views import APIView
from .serializers import Account_Serializer

class AccountListAPI(APIView):
    def get(self, request):
        queryset = Account.objects.all()
        serializer = Account_Serializer(queryset, many = True)
        return Response(serializer.data)

    def post(self,request):
        return print('haha')
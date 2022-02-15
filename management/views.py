from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from member.models import Account
from member.serializers import AccountSerializer

class TestAPI(APIView):
    def get(self, request):
        queryset = Account.objects.all()
        serializer = AccountSerializer(queryset, many = True)
        return Response(serializer.data)
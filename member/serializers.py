from rest_framework import serializers
from .models import AccountLoginLog,Account,Companylist

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class AccountLoginLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountLoginLog
        fields = '__all__'

class CompanylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companylist
        fields = '__all__'
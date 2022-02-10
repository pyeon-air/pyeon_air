from rest_framework import serializers
from .models import Account_login_log,Account,Companylist

class Account_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class Account_login_log_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Account_login_log
        fields = '__all__'

class Companylist_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Companylist
        fields = '__all__'
from rest_framework import serializers
from .models import UserLoginLog,User,Companylist
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login


JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserLoginLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLoginLog
        fields = '__all__'

class CompanylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companylist
        fields = '__all__'

class UserLogInSerializer(serializers.Serializer):
    username = serializers.CharField(help_text='회원 ID')
    password = serializers.CharField(help_text='회원 비밀번호', write_only = True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        username = data.get("account_name")
        password = data.get("password", None)
        user = Account.objects.get(account_name = username)

        if user is None:
            return {'username': 'None'}
        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)

        except user.DoesNotExist:
            raise serializers.ValidationError(
                'User with given username and password does not exist'
            )
        return {
            'username': user.account_name,
            'token': jwt_token
        }
   
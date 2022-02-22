from rest_framework import serializers
from .models import UserLoginLog,User,Companylist
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import get_user_model


JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER


User = get_user_model()

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


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password", None)
        # 사용자 아이디와 비밀번호로 로그인 구현(<-> 사용자 아이디 대신 이메일로도 가능)
        user = authenticate(data, username=username, password=password)
        
        if user is None:
            return {'username': 'None'}
        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)
            return {
            'username': user.username,
            'token': jwt_token
        }

        except User.DoesNotExist:
            raise serializers.ValidationError(
                'User with given username and password does not exist'
            )
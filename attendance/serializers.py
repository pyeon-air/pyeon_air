from rest_framework import serializers
from .models import InOutLog, QrInfo

# QR관리
class QrInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrInfo
        fields = '__all__'


class InOutLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = InOutLog
        fields = '__all__'



# 입퇴실 인원 현황
class Serializer(serializers.ModelSerializer):
    class Meta:
        pass


# 출석확인
class Serializer(serializers.ModelSerializer):
    class Meta:
        pass


    

    
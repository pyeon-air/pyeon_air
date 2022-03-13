from rest_framework import serializers
from attendance import models

# QR관리 Serializer
class QrInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QrInfo
        fields = '__all__'

# 입퇴실 인원 현황 Serializer
class InCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.InCheck
        fields = '__all__'


class OutCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OutCheck
        fields = '__all__'



# 출석확인 Serializer
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Attendance
        fields = '__all__'


    

    

from unicodedata import category
from django.urls import set_urlconf
from rest_framework import serializers
from attendance import models

# QR관리 Serializer
class QrInfoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QrInfo
        fields = '__all__'


class QrInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QrInfo
        fields = ['qr_category', 'start_date', 'end_date', 'qr_notice']



class Temp(serializers.ModelSerializer):
    class Meta:
        model = models.QrInfo
        fields = '__all__'



# 입퇴실 인원 현황 Serializer
class InCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.InCheck
        # fields = '__all__'
        exclude = ['user_id'] # user_id error



class OutCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OutCheck
        # fields = '__all__'
        exclude = ['user_id'] # user_id error



class InOutCheckSerializer(serializers.Serializer):
    CHECK_CATEGORY = [
        ('입실', '입실'),
        ('퇴실', '퇴실')
    ]

    STATUS_CATEGORY = [
        ('false', '미완료'),
        ('true', '완료'),
    ]
    category = serializers.ChoiceField(help_text='카테고리', choices=CHECK_CATEGORY)
    status = serializers.ChoiceField(help_text='입/퇴실 완료 여부',
    choices=STATUS_CATEGORY)




# 출석확인 Serializer
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Attendance
        fields = '__all__'


    

    

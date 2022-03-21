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
    course_id = serializers.CharField(source='user.course_id') # memeber app - User model의 course_id
    username = serializers.StringRelatedField() # member app - User model의 __str__

    class Meta:
        model = models.InCheck
        fields = ['course_id', 'username', 'state', 'in_time', 'created_at']



class OutCheckSerializer(serializers.ModelSerializer):
    course_id = serializers.CharField(source='user.course_id') # memeber app - User model의 course_id
    username = serializers.StringRelatedField() # member app - User model의 __str__

    class Meta:
        model = models.OutCheck
        fields = ['course_id', 'username', 'state', 'out_time', 'created_at']



class InOutCheckSerializer(serializers.Serializer):
    CHECK_CATEGORY = [
        ('in', '입실'),
        ('out', '퇴실')
    ]

    STATE_CATEGORY = [
        ('all', '전체'),
        ('false', '미완료'),
        ('true', '완료'),
    ]
    category = serializers.ChoiceField(help_text='카테고리', choices=CHECK_CATEGORY)
    state = serializers.ChoiceField(help_text='입/퇴실 완료 여부',
    choices=STATE_CATEGORY)


class InListSerializerSub(serializers.Serializer):
    course_id = serializers.CharField(source='user.course_id') # memeber app - User model의 course_id
    user = serializers.CharField()
    state = serializers.BooleanField()
    in_time = serializers.DateTimeField()

    class Meta:
        model = models.InCheck
        fields = '__all__'

class OutListSerializerSub(serializers.Serializer):
    course_id = serializers.CharField(source='user.course_id') # memeber app - User model의 course_id
    user = serializers.CharField()
    state = serializers.BooleanField()
    out_time = serializers.DateTimeField()

    class Meta:
        model = models.OutCheck
        fields = '__all__'

class InOutListSerializer(serializers.Serializer):
    inList = InListSerializerSub(many=True)
    outList = OutListSerializerSub(many=True)


class InOutCheckDetailSerializer(serializers.Serializer):
    course_id = serializers.CharField(help_text='수강생 코드')
    # username = serializers.CharField(help_text='수강생명')



# 출석확인 Serializer
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Attendance
        fields = '__all__'


    

    

from dataclasses import field
from this import d
from rest_framework import serializers
from .models import InOutLog, QrInfo


class InOutLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = InOutLog
        fields = '__all__'

# QR
# QR_CATEGORY = (
#         ('IN', 'check in'),
#         ('OUT', 'check out'),
# )

# class QrInfoSerializer(serializers.Serializer):
#     qr_category = serializers.ChoiceField(choices=QR_CATEGORY)
#     start_date = serializers.DateTimeField()
#     end_date = serializers.DateTimeField()
#     qr_content = serializers.CharField(help_text='qrcontent')
#     qr_notice = serializers.CharField(help_text='qrcontent')
    
#     def create(self, validated_data):
#         return QrInfo.objects.create(**validated_data)
    
#     def update(self, instance, validated_data):
#         instance.qr_content = validated_data.get('start_date', instance.start_date)
#         instance.save()
#         return instance
        
class QrInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrInfo
        fields = '__all__'






# 입퇴실 인원 현황
class Serializer(serializers.ModelSerializer):
    class Meta:
        pass


# 출석확인
class Serializer(serializers.ModelSerializer):
    class Meta:
        pass


    

    
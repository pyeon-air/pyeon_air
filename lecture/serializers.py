from rest_framework import serializers
from .models import LectureAttendLog,LectureInfo

class LectureAttendLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureAttendLog
        fields = '__all__'

class LectureInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureInfo
        fields = '__all__'
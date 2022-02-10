from rest_framework import serializers
from .models import Lecture_attend_log,Lecture_info

class Lecture_attend_log_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture_attend_log
        fields = '__all__'

class Lecture_info_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture_attend_log
        fields = '__all__'
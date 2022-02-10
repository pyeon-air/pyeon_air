from rest_framework import serializers
from .models import Question_answer, Notice

class Question_answer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Question_answer
        fields = '__all__'

class Notice_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'

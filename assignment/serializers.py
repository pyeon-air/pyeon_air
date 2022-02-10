from rest_framework import serializers
from .models import Assignment_create_info

class Assignment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment_create_info
        fields = '__all__'
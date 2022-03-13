from rest_framework import serializers
from .models import AssignmentCreateInfo

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignmentCreateInfo
        fields = '__all__'
from rest_framework import serializers
from .models import In_out_log

class In_out_log_Serializer(serializers.ModelSerializer):
    class Meta:
        model = In_out_log
        fields = '__all__'
from rest_framework import serializers
from .models import InOutLog

class In_out_log_Serializer(serializers.ModelSerializer):
    class Meta:
        model = InOutLog
        fields = '__all__'
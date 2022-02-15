from django.contrib import admin
from .models import InOutLog, QrInfo

# Register your models here.
admin.site.register(InOutLog)
admin.site.register(QrInfo)
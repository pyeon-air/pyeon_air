from django.contrib import admin
from attendance import models

# Register your models here.
admin.site.register(models.QrInfo)
admin.site.register(models.InCheck)
admin.site.register(models.OutCheck)
admin.site.register(models.Attendance)
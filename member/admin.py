from django.contrib import admin
from .models import User, UserLoginLog, Companylist
# Register your models here.

admin.site.register(User)
admin.site.register(UserLoginLog)
admin.site.register(Companylist)

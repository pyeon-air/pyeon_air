from django.contrib import admin
from .models import Account, AccountLoginLog, Companylist
# Register your models here.

admin.site.register(Account)
admin.site.register(AccountLoginLog)
admin.site.register(Companylist)

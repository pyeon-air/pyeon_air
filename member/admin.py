from django.contrib import admin
from .models import Account, Account_login_log, Companylist
# Register your models here.

admin.site.register(Account)
admin.site.register(Account_login_log)
admin.site.register(Companylist)

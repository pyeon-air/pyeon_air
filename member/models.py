from django.db import models

# Create your models here.
class Account(models.Model):
    account_id = models.AutoField(primary_key = True, unique = True, null = False)
    course_id = models.CharField(max_length = 20, null = False)
    email = models.CharField(max_length = 50, unique = True, null = False)
    account_name = models.CharField(max_length = 20, null = False)
    password = models.CharField(max_length = 100, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    password_updated_at = models.DateTimeField(auto_now = True, null = False)
    role = models.CharField(max_length = 20, null = False) # master, student, teacher, assistant -> choice field 설정 나중에 고려해볼것
    company_name = models.ForeignKey(Companylist, related_name = "account", on_delete = models.CASCADE, db_column = "company_name", null = True) # null 값 변경?

    def __str__(self):
        return self.account_name


class Account_login_log(models.Model):
    login_log_id = models.AutoField(primary_key = True, null = False, unique = True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    account_id = models.ForeignKey('member.Account', related_name = 'account_login_log', on_delete = models.CASCADE, null = False) # fk account -> account_id
    logout_at = models.DateTimeField(auto_now = True)
    ip = models.GenericIPAddressField(null = True)# ip type이 존재하는것으로 기억함

    def __str__(self):
        return self.login_log_id



class Companylist(models.Model):
    company_id = models.AutoField(primary_key = True, null = False, unique = True)
    company_name = models.CharField(null = False, max_length=20,unique = True)
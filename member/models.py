from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    course_id = models.CharField(max_length = 20, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    password_updated_at = models.DateTimeField(auto_now = True, null = False)
    ROLE_CHOICES = (
        ('MA', 'Master'),
        ('ST', 'Student'),
        ('TE', 'Teacher'),
        ('AS', 'Assistant')
    )
    role = models.CharField(max_length = 2, choices = ROLE_CHOICES, null = False) 
    company_name = models.ForeignKey('member.Companylist', related_name = "User", on_delete = models.CASCADE, db_column = "company_name", null = True) # null 값 변경?
    address = models.CharField(max_length = 100, null = True)
    birth = models.DateField(null = True)
    contact = models.CharField(null = True, max_length = 11)
    other = models.CharField(max_length = 500, null = True, blank= True)
    in_progress = models.BooleanField(null = False, default = True)

    def __str__(self):
        return self.username

class UserLoginLog(models.Model):
    login_log_id = models.AutoField(primary_key = True, null = False, unique = True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    user_id = models.ForeignKey('member.User', related_name = 'account_login_log', on_delete = models.CASCADE, null = False) # fk account -> account_id
    logout_at = models.DateTimeField(auto_now = True)
    ip = models.GenericIPAddressField(null = True)# ip type이 존재하는것으로 기억함

    def __str__(self):
        return self.login_log_id



class Companylist(models.Model):
    company_id = models.AutoField(primary_key = True, null = False, unique = True)
    company_name = models.CharField(null = False, max_length=20,unique = True)

    def __str(self):
        return self.company_name
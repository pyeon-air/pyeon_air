from django.db import models

# Create your models here.

#room meta data
class RTL(models.Model):
    rtl_id = models.AutoField(primary_key=True, unique=True, null=False)
    room_code = models.CharField(null=False)
    room_pass = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=False)
    room_title = models.CharField(null=False, max_length=100)
    ## 링크 있는 사용자 허용 여부 // False => 소속이 맞아야.
    attend_all = models.BooleanField(default=True)
    

    '''
    RTL 로그인 사용자 인증 방법
    패스워드를 지정하고 링크를 생성한다.
    해당 링크가 있다면 가능
    '''
    ## fk 1: N
    company_naem= models.ForeignKey('member.Company_list')
    


class RTLGenLog(models.Model):
    log_id = models.AutoField(primary_key=True, unique=True, null=False)
    ## 로그 생성 일 -> 보관일 이후 삭제하는 법??
    created_at = models.DateTimeField(null=False)



class RTLConnectLog(models.Model):
    ip = models.GenericIPAddressField(null = True)


class chattingLog(models.Model):
    pass


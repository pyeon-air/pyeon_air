from pyexpat import model
from tracemalloc import start
from django.db import models

# Create your models here.
class InOutLog(models.Model):
    in_out_log_id = models.AutoField(primary_key = True, unique = True, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    in_at = models.DateTimeField(auto_now = True)
    out_at = models.DateTimeField(auto_now = True)
    account_id = models.ForeignKey('member.Account', related_name = 'in_out_log', on_delete = models.CASCADE, null = False) # fk account -> account_id

    def __str__(self):
        return self.in_out_log_id


class QrInfo(models.Model):
    QR_CATEGORY = [
        ('IN', 'check in'),
        ('OUT', 'check out'),
    ]

    qr_id = models.AutoField(primary_key=True, unique=True, null=False)
    qr_category = models.CharField(max_length=3, choices=QR_CATEGORY, default='IN')
    start_date = models.DateTimeField(null=False)
    end_date = models.DateTimeField(null=False)
    qr_content = models.CharField(max_length=50, null=False)
    qr_notice = models.CharField(max_length=50, null=False)
    qr_link = models.CharField(max_length=200, null=False, default='')
    # created_at = models.DateTimeField(auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'QR table'

    def __str__(self) -> str:
        return f'{self.qr_id}, {self.qr_category}, {self.start_date}, {self.start_time}, {self.end_date}, {self.end_time}, {self.qr_content}, {self.qr_notice}'

    def qr_valid_time(self):
        '''
            QR의 유효시간을 계산
        '''
        valid_time = None
        return valid_time



class Attendance(models.Model):
    ATTENDANCE_CATEGORY = [
        ('공가', '공가'),
        ('외출', '외출'),
        ('지각', '지각'),
        ('결석', '결석'),
    ]

    # account_id = models.ForeignKey('member.Account', related_name = 'account_login_log', on_delete = models.CASCADE, null = False) # 임시, 수정 필요
    category = models.CharField(max_length=2, choices=ATTENDANCE_CATEGORY, default='IN')
    reason = models.CharField(max_length=50, null=False)
    file = models.FileField(upload_to='uploads/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'Attendance'
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


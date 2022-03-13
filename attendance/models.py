from django.db import models

# qr table
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
        verbose_name = 'qr_info'


#  table
class InCheck(models.Model):
    in_id = models.AutoField(primary_key = True, unique = True, null = False)
    
    in_at = models.DateTimeField(blank=True)
    account_id = models.ForeignKey('member.Account', related_name = 'in_out_log', on_delete = models.CASCADE, null = False) # fk account -> account_id
    created_at = models.DateTimeField(auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'In_check'


class OutCheck(models.Model):
    in_out_log_id = models.AutoField(primary_key = True, unique = True, null = False)
    in_at = models.DateTimeField(auto_now = True)
    out_at = models.DateTimeField(auto_now = True)
    account_id = models.ForeignKey('member.Account', related_name = 'in_out_log', on_delete = models.CASCADE, null = False) # fk account -> account_id
    created_at = models.DateTimeField(auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'In_check'


#  table
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
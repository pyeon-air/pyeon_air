from django.db import models

# qr table
class QrInfo(models.Model):
    QR_CATEGORY = [
        ('IN', 'check in'),
        ('OUT', 'check out'),
    ]

    qr_id = models.AutoField('ID',primary_key=True, unique=True, null=False)
    qr_category = models.CharField('CATEGROY', max_length=3, choices=QR_CATEGORY, default='IN')
    start_date = models.DateTimeField('START DATE', null=False)
    end_date = models.DateTimeField('END DATE', null=False)
    qr_content = models.CharField('CONTENT', max_length=50, null=False)
    qr_notice = models.CharField('NOTICE', max_length=50, null=False)
    qr_image = models.ImageField('IMAGE', upload_to='qr/%Y/%m/%d/', blank=True, null=True)
    # qr_link = models.CharField('LINK', max_length=200, null=False, default='')
    created_at = models.DateTimeField('CREATE DT', auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'qr_info'

    def __str__(self):
        return self.qr_id



#  입퇴실 table
class InCheck(models.Model):
    in_id = models.AutoField('ID', primary_key = True, unique = True, null = False)
    user_id = models.ForeignKey('member.User', related_name = 'check_in_user', on_delete = models.CASCADE, null = False)
    in_time = models.DateTimeField(blank=True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'In_check'

    def __str__(self):
        return str('IN CHECK:' + self.user_id) 



class OutCheck(models.Model):
    out_id = models.AutoField(primary_key = True, unique = True, null = False)
    user_id = models.ForeignKey('member.User', related_name = 'check_out_user', on_delete = models.CASCADE, null = False)
    out_time = models.DateTimeField(blank=True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'Out_check'

    def __str__(self):
        return str('OUT CHECK:' + self.user_id)



#  출석확인 table
class Attendance(models.Model):
    ATTENDANCE_CATEGORY = [
        ('공가', '공가'),
        ('외출', '외출'),
        ('지각', '지각'),
        ('결석', '결석'),
    ]

    user_id = models.ForeignKey('member.User', related_name = 'attendance_user', on_delete = models.CASCADE, null = False)
    category = models.CharField(max_length=2, choices=ATTENDANCE_CATEGORY, default='')
    reason = models.CharField(max_length=50, null=False)
    file = models.FileField(upload_to='uploads/%Y/%m/%d/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)

    class Meta:
        ordering = []
        verbose_name = 'Attendance'
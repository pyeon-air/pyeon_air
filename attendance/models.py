from sqlite3 import Time
from django.db import models

class TimeStampedModel(models.Model):
    """ Time Stamped Model """
    created_at = models.DateTimeField('CREATE DT', auto_now_add = True)
    updated_at = models.DateTimeField('UPDATE DT', auto_now=True)

    class Meta:
        abstract = True



# qr table
class QrInfo(TimeStampedModel):
    """ QR Info Model """
    QR_CATEGORY = [
        ('IN', 'check in'),
        ('OUT', 'check out'),
    ]

    qr_id = models.AutoField('ID',primary_key=True, unique=True, null=False)
    qr_category = models.CharField('CATEGROY', max_length=3, choices=QR_CATEGORY, default='IN')
    start_date = models.DateTimeField('START DATE', null=False)
    end_date = models.DateTimeField('END DATE', null=False)
    qr_token = models.CharField('CONTENT', max_length=50, blank=True, null=True)
    qr_image = models.ImageField('IMAGE', upload_to='qr/%Y/%m/%d/', blank=True, null=True)
    qr_notice = models.CharField('NOTICE', max_length=50, null=False)

    class Meta:
        ordering = []
        verbose_name = 'qr info'

    def __str__(self):
        return 'QR:' + str(self.qr_id)



class QrImage(TimeStampedModel):
    """ QR Image Model """
    qr_id = models.ForeignKey('attendance.QrInfo', related_name='images', on_delete=models.CASCADE)
    image = models.ImageField('IMAGE', upload_to='qr/%Y/%m/%d/', blank=True, null=True)

    def __str__(self):
        return self.image.name



#  입퇴실 table
class InCheck(TimeStampedModel):
    """ In Check Model (입실) """
    in_id = models.AutoField('ID', primary_key = True, unique = True, null = False)
    user = models.ForeignKey('member.User', related_name= 'check_in_user', on_delete = models.CASCADE, null=False)
    state = models.BooleanField('STATE', blank=True)
    in_time = models.DateTimeField(blank=True)

    class Meta:
        ordering = []
        verbose_name = 'In check'

    def __str__(self):
        return f'IN : {str(self.user)} / {str(self.state)}'
        



class OutCheck(TimeStampedModel):
    """ Out Check Model (퇴실) """
    out_id = models.AutoField(primary_key = True, unique = True, null = False)
    user = models.ForeignKey('member.User', related_name = 'check_out_user', on_delete = models.CASCADE, null = False)
    state = models.BooleanField('STATE', blank=True)
    out_time = models.DateTimeField(blank=True)

    class Meta:
        ordering = []
        verbose_name = 'Out check'

    def __str__(self):
        return f'OUT : {str(self.user)} / {str(self.state)}'



#  출석확인 table
class Attendance(TimeStampedModel):
    """ Attendance Model """
    ATTENDANCE_CATEGORY = [
        ('공가', '공가'),
        ('외출', '외출'),
        ('지각', '지각'),
        ('결석', '결석'),
    ]

    user_id = models.ForeignKey('member.User', related_name = 'attendance_user', on_delete = models.CASCADE, null = False)
    category = models.CharField('CATEGORY', max_length=2, choices=ATTENDANCE_CATEGORY, default='')
    reason = models.CharField('REASON', max_length=50, null=False)
    file = models.FileField('FILE',upload_to='uploads/%Y/%m/%d/', blank=True, null=True)

    class Meta:
        ordering = []
        verbose_name = 'Attendance'
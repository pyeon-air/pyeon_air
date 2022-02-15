from django.db import models

# Create your models here.
class LectureInfo(models.Model):
    lecture_id = models.AutoField(primary_key=True, unique=True, null = False)
    title = models.CharField(max_length = 100, null = False)
    lecture_type = models.CharField(max_length = 20, null = False) # recorded, realtime 구분해야함.
    lecture_link = models.CharField(max_length = 255, null = False) # for S3 bucket
    is_available = models.BooleanField(default = False, null = False)
    lecture_start_at = models.DateTimeField(null = False)
    lecture_end_at = models.DateTimeField()
    company_name = models.CharField(max_length = 20, null = False) 
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    is_assignment = models.BooleanField(default= False, null = False)
    
    def __str__(self):
        return self.title


class LectureAttendLog(models.Model):
    lecture_log_id = models.AutoField(primary_key=True, unique=True, null = False)
    lecture_id = models.ForeignKey('LectureInfo', related_name = 'lecture_attend_log', on_delete = models.CASCADE, null = False) # fk lecture_info -> lecture_id
    account_id = models.IntegerField(null = False)
    progress_rate = models.IntegerField(null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)

    def __str__(self):
        return self.lecture_log_id
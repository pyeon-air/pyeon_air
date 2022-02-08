from django.db import models

# Create your models here.
class Lecture_file(models.Model):
    lecture_file_id = models.AutoField(primary_key = True, unique = True, null = False)
    lecture_id = models.ForeignKey('lecture.Lecture_info', related_name = 'lecture_file',on_delete = models.CASCADE, null = False) # fk 등록 필요 lecture_info -> lecture_id
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    company_name = models.ForeignKey('member.Companylist', related_name = 'lecture_file', on_delete = models.CASCADE, null = False) # fk company
    file_name = models.CharField(max_length = 50, null = False)
    file_url = models.CharField(max_length=255, null = False)

    def __str__(self):
        return self.lecture_file_id
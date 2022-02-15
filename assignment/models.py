from django.db import models

# Create your models here.
class AssignmentCreateInfo(models.Model):
    assignment_id = models.AutoField(primary_key = True, null = False, unique = True)
    lecture_id = models.ForeignKey('lecture.LectureInfo', related_name = 'assignment_lecture_id', on_delete = models.CASCADE, db_column = 'lecture_id', null = True) # fk lecture_info 
    account_id = models.ForeignKey('member.Account', related_name = 'assignment_account_id', on_delete = models.CASCADE, db_column = 'account_id', null = True) # fk account_id
    assignment_info = models.CharField(max_length = 500)
    assignment_start_at = models.DateTimeField()
    assignment_end_at = models.DateTimeField()
    title = models.CharField(null = False, max_length = 50)
    attachment_url = models.CharField(max_length = 255)
    file_url = models.CharField(max_length = 255, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)

    def __str__(self):
        return self.title


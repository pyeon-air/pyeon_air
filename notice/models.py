from django.db import models


# Create your models here.
class Notice(models.Model):
    notice_id = models.AutoField(primary_key = True, unique = True, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    title = models.CharField(null = True, max_length = 100)
    content = models.CharField(max_length = 1000)
    attachment_url = models.CharField(max_length = 255)
    user_id = models.ForeignKey('member.User', related_name = "Notice", on_delete = models.CASCADE, db_column = "user_id", null = True)


    def __str__(self):
        return self.title


class QuestionAnswer(models.Model):
    question_id = models.AutoField(primary_key = True, null=False, unique = True)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    updated_at = models.DateTimeField(auto_now = True, null = False)
    question_title = models.CharField(max_length = 50, null = False)
    question_content = models.CharField(max_length = 1000)
    is_answered = models.BooleanField(default = False, null = False)
    question_user_name = models.IntegerField(null = False) # 작성자의 account id
    answer_user_name = models.IntegerField() # 답변자의 account id
    answer_content = models.CharField(max_length = 1000)

    def __str__(self):
        return self.question_title
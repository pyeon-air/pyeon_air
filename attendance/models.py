from django.db import models

# Create your models here.
class In_out_log(models.Model):
    in_out_log_id = models.AutoField(primary_key = True, unique = True, null = False)
    created_at = models.DateTimeField(auto_now_add = True, null = False)
    in_at = models.DateTimeField(auto_now = True)
    out_at = models.DateTimeField(auto_now = True)
    account_id = models.ForeignKey('member.Account', related_name = 'in_out_log', on_delete = models.CASCADE, null = False) # fk account -> account_id

    def __str__(self):
        return self.in_out_log_id
from django.contrib import admin
from .models import Question_answer, Notice
# Register your models here.

admin.site.register(Question_answer)
admin.site.register(Notice)
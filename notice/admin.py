from django.contrib import admin
from .models import QuestionAnswer, Notice
# Register your models here.

admin.site.register(QuestionAnswer)
admin.site.register(Notice)
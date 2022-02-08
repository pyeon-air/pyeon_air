# Generated by Django 3.2.11 on 2022-02-08 08:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('member', '0001_initial'),
        ('lecture', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lecture_file',
            fields=[
                ('lecture_file_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('file_name', models.CharField(max_length=50)),
                ('file_url', models.CharField(max_length=255)),
                ('company_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lecture_file', to='member.companylist')),
                ('lecture_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lecture_file', to='lecture.lecture_info')),
            ],
        ),
    ]

# Generated by Django 3.2.11 on 2022-03-03 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0003_auto_20220221_1128'),
    ]

    operations = [
        migrations.AddField(
            model_name='qrinfo',
            name='qr_link',
            field=models.CharField(default='', max_length=200),
        ),
    ]

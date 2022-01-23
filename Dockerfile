FROM python:3

WORKDIR /project

ADD ./requirements.txt /project/
RUN pip install -r requirements.txt

ADD ./pyronAir /project/newproject/
ADD ./gunicorn   /project/gunicorn/
ADD ./manage.py  /project/

CMD ["gunicorn", "newproject.wsgi", "-c", "gunicorn/prod.py"]


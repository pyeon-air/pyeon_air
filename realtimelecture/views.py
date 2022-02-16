from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

# class RealTimeLectureAPI(APIView):
def main_view(request):
    context = {}

    return render(request, 'realtimelecture/main.html', context=context)

    # def post(self,request):
    #     return print('haha')
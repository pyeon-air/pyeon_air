from django.shortcuts import render, redirect, get_object_or_404
from member.models import User
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.db.models import Q, Count



# Create your views here.
@permission_classes([AllowAny])
class sayhi(APIView):
    # readonlymodelviewset
    def get(self, request):
        return render(request, 'completion/a.html')
        
def completionPage(request):
    kw = request.GET.get('kw', '')
    so = request.GET.get('so', 'all')

    if so == 'all':
        user_list = User.objects.all()
    elif so == 'progress':
        user_list = User.objects.filter(in_progress=True)
    elif so == 'completed':
        user_list = User.objects.filter(in_progress=False)
    
    if kw:
        user_list = User.objects.filter(
            Q(username__icontains=kw)
        ).distinct()
    
    context = {'user_list': user_list, 'kw':kw, 'so':so}
    return render(request, 'completion/completion_test.html', context)

def changeStatus(request, user_id):
    user = User.objects.get(id=user_id)
    if user.in_progress:
        user.in_progress = False
        user.save()
    else:
        user.in_progress = True
        user.save()

    return redirect('index')



    # def updateCompletion(request, user_id):
    # user = User.objects.get(pk=user_id)
    # user.in_progress = request.POST.get('completion_type')
    # user.save()
    # sort: db에서 불러올 때
    # return status(200)
    # return redirect('')



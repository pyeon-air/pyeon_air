from ast import Delete
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework import permissions, authentication

from .createQr import create_qrcode

from .serializers import InOutLogSerializer, QrInfoSerializer
from .models import InOutLog, QrInfo


# QR
class QrListCreateView(ListModelMixin, CreateModelMixin, generics.GenericAPIView):
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAuthenticated,]
    queryset = QrInfo.objects.all()
    serializer_class = QrInfoSerializer    

    def get(self, request, *args, **kwargs):
        """
        QR 코드를 조회하는 API입니다.
        """
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        """
        QR 코드를 생성하는 API입니다.
        """
        qr_content = request.data['start_date'] + request.data['end_date']

        # create qr    
        qr_link = create_qrcode(company='temp', qr_text=qr_content, file_name=qr_content, qr_size=10)

        request.data['qr_content'] = qr_content
        request.data['qr_link'] = qr_link

        print(request.data['qr_content'])
        print(request.data['qr_link'])

        return self.create(request, *args, **kwargs)

    
class QrDetailView(RetrieveModelMixin, DestroyModelMixin, generics.GenericAPIView):
    queryset = QrInfo.objects.all()
    serializer_class = QrInfoSerializer    

    def get(self, request, *args, **kwargs):
        """
        특정 QR 코드를 조회하는 API입니다.
        """
        return super().destroy(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        """
        QR 코드를 삭제하는 API입니다.
        """
        return super().destroy(request, *args, **kwargs)


# 입퇴실 인원 현황
class API(APIView):
    def get(self, request):
        return

    def post(self, request):
        return 


# 출석확인
class API(APIView):
    def get(self, request):
        return

    def post(self, request):
        return 
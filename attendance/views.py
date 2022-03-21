from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, ListCreateAPIView, RetrieveDestroyAPIView
from rest_framework.response import Response
from attendance import serializers

from attendance.utils import create_qrcode

from attendance.models import QrInfo, InCheck, OutCheck, Attendance
from attendance.serializers import QrInfoListSerializer, QrInfoSerializer, InCheckSerializer, OutCheckSerializer, AttendanceSerializer, InOutCheckSerializer, InOutCheckDetailSerializer,InOutListSerializer

from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# QR
@permission_classes([AllowAny])
class QrListCreateView(ListCreateAPIView):
    queryset = QrInfo.objects.all()
    serializer_class = QrInfoListSerializer    

    @swagger_auto_schema(tags=['QR 관리'], responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        """
        QR 코드를 조회하는 API
        """
        return self.list(request, *args, **kwargs)

    @swagger_auto_schema(tags=['QR 관리'], request_body=QrInfoSerializer, responses={200: "Success"})
    def post(self, request, *args, **kwargs):
        """
        QR 코드를 생성하는 API
        """
        start_date, _ = request.data['start_date'].split('T')
        end_date, _ = request.data['end_date'].split('T')
        qr_token = f'{start_date}&{end_date}'
        
        img = create_qrcode(company='temp', qr_text=qr_token, file_name=qr_token, qr_size=10)

        request.data['qr_token'], request.data['qr_image'] = qr_token, img

        return self.create(request, *args, **kwargs)


@permission_classes([AllowAny])
class QrDetailView(RetrieveDestroyAPIView):
    queryset = QrInfo.objects.all()
    serializer_class = QrInfoSerializer    

    @swagger_auto_schema(tags=['QR 관리'], responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        '''
        특정 QR 조회 API
        '''
        return self.retrieve(request, *args, **kwargs)

    @swagger_auto_schema(tags=['QR 관리'], responses={200: "Success"})
    def delete(self, request, *args, **kwargs):
        '''
        특정 QR 삭제 API
        '''
        return self.destroy(request, *args, **kwargs)
        
        

# 입퇴실 인원 현황
@permission_classes([AllowAny])
class InOutCheckListAPIView(APIView):
    serializer_class = InOutCheckSerializer

    @swagger_auto_schema(tags=['입퇴실 인원 현황'], query_serializer=InOutCheckSerializer, responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        '''
        입/퇴실 구분, 입실 완료/미완료 조회 API
        '''
        category = request.GET.get('category', '입실')
        state = request.GET.get('state', 'all')

        if state == 'true':
            state = True
        elif state == 'false':
            state = False

        if category == 'in':
            if state == 'all':
                queryset = InCheck.objects.all()
            else:
                queryset = InCheck.objects.filter(state=state)
            serializer = InCheckSerializer(instance=queryset, many=True)
        
        if category == 'out':
            if state == 'all':
                queryset = OutCheck.objects.all()
            else:
                queryset = OutCheck.objects.filter(state=state)
            serializer = OutCheckSerializer(instance=queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


@permission_classes([AllowAny])
class InOutCheckDetailAPIView(APIView):
    queryset = InCheck.objects.all()
    serializer_class = InOutCheckDetailSerializer

    @swagger_auto_schema(tags=['입퇴실 인원 현황'], query_serializer=InOutCheckDetailSerializer, responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        '''
        특정 인원 입/퇴실 구분, 입실 완료/미완료 조회 API
        '''
        course_id = request.GET.get('course_id', "")
        # username = request.GET.get('username', "")

        inList = InCheck.objects.filter(user__course_id=course_id)
        outList = OutCheck.objects.filter(user__course_id=course_id)

        data = {
            'inList': inList,
            'outList': outList
        }

        serializer = InOutListSerializer(instance=data)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    



# 출석확인
@permission_classes([AllowAny])
class AttendanceListAPIView(ListAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    
    @swagger_auto_schema(tags=['출석 확인'], responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        '''
        출석 확인 조회 API(작업중)
        '''
        return self.list(request, *args, **kwargs)


@permission_classes([AllowAny])
class AttendanceDetailAPIView(RetrieveAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

    @swagger_auto_schema(tags=['출석 확인'], responses={200: "Success"})
    def get(self, request, *args, **kwargs):
        '''
        특정 인원 출석 확인 조회 API(작업중)
        '''
        return self.retrieve(request, *args, **kwargs)
    
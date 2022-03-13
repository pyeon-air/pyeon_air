from attendance import views
from django.urls import path


urlpatterns = [
    # qr관리
    path('qrinfo/', views.QrListCreateView.as_view(), name='qr-list'),
    path('qrinfo/<int:pk>/', views.QrDetailView.as_view(),name='qr-detail'),

    # 실시간 입퇴실
    path('inoutcheck/', views.InOutCheckListAPIView.as_view(), name='inoutcheck-list'),
    path('inoutcheck/<int:pk>/', views.InOutCheckDetailAPIView.as_view(), name='inoutcheck-detail'),

    # # 출석 확인
    path('attendance/', views.AttendanceListAPIView.as_view(), name='attendance-list'),
    path('attendance/<int:pk>/', views.AttendanceDetailAPIView.as_view(), name='attendance-detial')
]

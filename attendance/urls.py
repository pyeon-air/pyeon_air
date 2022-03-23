from attendance import views
from django.urls import path


urlpatterns = [
    # qr관리
    path('qr/', views.QrListCreateView.as_view(), name='qr-list'),
    path('qr/<int:pk>/', views.QrDetailView.as_view(),name='qr-detail'),

    # 실시간 입퇴실
    path('inouts/', views.InOutCheckListAPIView.as_view(), name='in/outcheck-list'),
    path('inout/', views.InOutCheckDetailAPIView.as_view(), name='in/outcheck-detail'),

    # 출석 확인
    path('check/', views.AttendanceListAPIView.as_view(), name='attendance-list'),
    path('check/<int:pk>/', views.AttendanceDetailAPIView.as_view(), name='attendance-detial')
]

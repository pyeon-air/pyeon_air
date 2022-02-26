from xml.etree.ElementInclude import include
from attendance.views import QrView
from rest_framework.routers import DefaultRouter
from django.urls import path

# route = DefaultRouter()
# route.register(r'qr', QrViewSet, basename='qr')

qr_list = QrView.as_view({
    'get':'list',
    'post': 'create'
})

# qr_detail = QrView.as_view({
#     'delete': 'destroy'
# })


urlpatterns = [
    # path(route, include(route.urls))
    path('qr/', qr_list, name='qr-list'),
    # path('qr/<int:pk>', qr_detail, name='qr-detail'),
]

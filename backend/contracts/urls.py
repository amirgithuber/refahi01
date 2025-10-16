from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContractViewSet, health_check

router = DefaultRouter()
router.register(r'contracts', ContractViewSet, basename='contract')

urlpatterns = [
    path('api/', include(router.urls)),
    path('health/', health_check, name='health_check'),
]
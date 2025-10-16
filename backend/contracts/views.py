from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Contract
from .serializers import ContractSerializer

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all().order_by('name')
    serializer_class = ContractSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'address', 'category']
    filterset_fields = ['category'] # برای فیلتر کردن از طریق منوی کشویی
    ordering_fields = ['name']

from django.http import JsonResponse

def health_check(request):
    """
    A simple health check endpoint.
    """
    return JsonResponse({"status": "ok"})
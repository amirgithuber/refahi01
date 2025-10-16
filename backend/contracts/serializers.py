from rest_framework import serializers
from .models import Contract

class ContractSerializer(serializers.ModelSerializer):

    type_display = serializers.CharField(source='get_type_display', read_only=True)
    class Meta:
        model = Contract
        fields = '__all__'
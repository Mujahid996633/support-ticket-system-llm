from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        # Includes all fields: title, description, category, priority, status, created_at
        fields = '__all__'
        # created_at is auto-set, so it should be read-only
        read_only_fields = ('created_at',)
      

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TicketViewSet

# The router automatically generates URL patterns for our ViewSet
router = DefaultRouter()
router.register(r'tickets', TicketViewSet, basename='ticket')

urlpatterns = [
    path('', include(router.urls)),
]

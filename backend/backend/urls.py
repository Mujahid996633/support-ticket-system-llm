from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tickets.urls')), # This connects our app URLs to the /api/ prefix
]

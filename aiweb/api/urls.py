from django.urls import path, include

from . import views



urlpatterns = [
    path('user/', include('api.user.urls')),
    path('category/', include('api.category.urls')),
]

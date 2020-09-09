from rest_framework import routers
from django.urls import path, include

from . import views

router = routers.DefaultRouter()
router.register(r'', views.WebsiteViewSets)

urlpatterns = [
    path('register/', views.createsite,name="create site"),
    path('', include(router.urls)),

]

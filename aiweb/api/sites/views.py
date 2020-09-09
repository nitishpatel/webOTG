from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from api.user.models import CustomUser
from .models import Website
from .serializers import WebsiteSerializer
from api.category.models import Category
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.
class WebsiteViewSets(viewsets.ModelViewSet):
    queryset = Website.objects.all().order_by('url')
    serializer_class = WebsiteSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user','url')
    
@csrf_exempt
def createsite(request):
    if not request.method == "POST":
        return JsonResponse({
            'error':'SEND A POST REQUEST WITH VALID PARAMETERS ONLY'
        })
    
    websiteurl = request.POST['websiteUrl']
    print(websiteurl)
    UserModel = get_user_model()
    try:
        sites = Website.objects.get(url=websiteurl)
    except Website.DoesNotExist:
        sites = None
    category = Category.objects.get(pk=request.POST['categoryid'])
    print(sites)
    if sites:
        return JsonResponse({
            "error":"Website Url Already Exists"
        })
    try:
        user = UserModel.objects.get(pk=request.POST['userid'])
        site = Website(url = websiteurl,user=user,category=category)
        site.save()
        return JsonResponse({
            "success":"Site created successfully"
        })
    except UserModel.DoesNotExist:
        return JsonResponse({
            error:"Invalid Email"
        })
    




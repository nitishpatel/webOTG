from django.db import models
from api.category.models import Category
from api.user.models import CustomUser
# Create your models here.
class Website(models.Model):
    url = models.SlugField(max_length=250,unique=True)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    color = models.CharField(max_length=200,default="#9b59b6")
    brand = models.CharField(max_length=200,null=True,blank=True)
    title = models.CharField(max_length=200,null=True,blank=True)
    subtitle = models.CharField(max_length=500,null=True,blank=True)
    navbar = models.CharField(max_length=200,null=True,blank=True)
    landing = models.JSONField(max_length=200,null=True,blank=True)
    social = models.CharField(max_length=200,null=True,blank=True)

    def __str__(self):
        return self.url
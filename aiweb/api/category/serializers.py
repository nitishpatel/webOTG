from rest_framework import serializers
from .models import Category
from rest_framework import viewsets


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name','description')

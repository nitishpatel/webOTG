from rest_framework import serializers
from .models import Website
class WebsiteSerializer(serializers.ModelSerializer):
    landing = serializers.JSONField()
    class Meta:
        model = Website
        fields = ('id','url','user','category','color','title','subtitle','navbar','landing','social')
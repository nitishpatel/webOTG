from rest_framework import serializers
from .models import Website
class WebsiteSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Website
		fields = ('url','user','category','title','subtitle','navbar','landing','social')
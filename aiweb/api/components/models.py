from django.db import models
from api.category.models import Category
# Create your models here.
COMPONENT_TYPES = (
    ("Navbar",'Navbar'),
    ('Landing','Landing'),
    ('About','About'),
    ('Projects','Projects'),
    ('Social','Social')
)
class Component(models.Model):
    type = models.CharField(max_length=200,choices=COMPONENT_TYPES,default='Navbar')
    category = models.ManyToManyField(Category)
    jsId = models.IntegerField()

    def __str__(self):
        return str(self.type+"-"+str(self.jsId))
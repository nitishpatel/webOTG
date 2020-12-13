import random
import json
from .quote import quotes
from .photos import getPhoto
from api.components.models import Component
def createPortfolioSite():
    cid = 1
    navbar = Component.objects.filter(category=cid,type='Navbar')
    navbarId = random.choice(navbar).jsId
    landingPageId = random.choice(Component.objects.filter(category=cid,type='Landing')).jsId
    
    landing = {}
    landing['id'] = landingPageId
    landing['slogan'] = random.choice(quotes)
    landing['title'] = "Your Brand Name Here"
    landing['image'] =  getPhoto()
    landing['about'] =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    
    

    return landing,navbarId


from api.components.models import Component
import random
from .photos import getPhoto
from .quote import quotes

class WebsiteTemplate:
    def __init__(self, cid):
        self.cid = cid
    
    def navbar(self):
        navbars =  Component.objects.filter(type='Navbar',category=self.cid)
        navbar = random.choice(navbars).jsId
        return navbar
    def landing(self):
        landings = Component.objects.filter(type='Landing',category=self.cid)
        landingid = random.choice(landings).jsId

        landing = {}
        landing['id'] = landingid
        landing['slogan'] = random.choice(quotes)
        landing['title'] = "Your Brand Name Here"
        landing['image'] =  getPhoto()
        landing['about'] =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

        return landing
    
    def about(self):
        abouts = Component.objects.filter(type='About',category=self.cid)
        aboutid = random.choice(abouts).jsId

        about = {}
        about['id'] = aboutid
        about['title'] = "About"
        about['aboutpara'] =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        about['link'] = 'https://nitishpatel.github.io/'
        about['image'] = getPhoto()

        return about
    def project(self):
        projects = Component.objects.filter(type='Projects',category=self.cid)
        projectid = random.choice(projects).jsId

        project = {}
        project['id'] = projectid
        for i in range(0,4):
            project["name"+str(i)]="Project Name"
            project["image"+str(i)]= getPhoto()
            project["summary"+str(i)]= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            


        return project
    
    def social(self):
        socials = Component.objects.filter(type='Social',category=self.cid)
        socialid = random.choice(socials).jsId
        
        social = {}
        social['id']=socialid
        social['instagram']="www.instagram.com/web.otg"
        social['facebook']="www.facebook.com/"
        social['github']="www.github.com/nitishpatel"
        social['dribble']="www.github.com/"
        social['linkedin']="www.linkedin.com/"
        social['wattapad']="www.wattapad.com/"
        social['twitter']="www.twitter.com/"

        return social


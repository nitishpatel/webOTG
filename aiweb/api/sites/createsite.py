import random
import json
from .quote import quotes
from .photos import getPhoto
json_data = json.dumps({})
def createPortfolioSite():
    landingPageId = random.randint(3,3)
    navbarId = None
    landing = {}
    landing['id'] = landingPageId
    landing['slogan'] = random.choice(quotes)
    landing['title'] = "Your Brand Name Here"
    landing['image'] =  getPhoto()
    landing['about'] =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    

    return landing,navbarId


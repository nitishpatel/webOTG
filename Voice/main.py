import speech_recognition as sr

# Initialize recognizer class (for recognizing the speech)

r = sr.Recognizer()
fo = open("foo.html", "w+")
# Reading Microphone as source
# listening the speech and store in audio_text variable

with sr.Microphone() as source:
    print("Talk")
    audio_text = r.listen(source)
    print("Time over, thanks")
# recoginize_() method will throw a request error if the API is unreachable, hence using exception handling
    text = ""
    try:
        # using google speech recognition
        # print("Text: "+r.recognize_google(audio_text))
        text = r.recognize_google(audio_text)
    except:
         print("Sorry, I did not get that")
        
    # print(text)
    text = list(text.split())
    for i in range(len(text)):
        if text[i] == "heading":
            str = "<h1>"
            heading = text[i+1:]
            heading = " ".join(i for i in heading)
            str+=heading
            str+="</h1>"
            fo.write(str)
            break
# ChatBot
---
This program uses OpenAI, to create a chatbot. 

The goal is to make a NextJS/React App that calls the OpenAI Service and allows for a simple conversation to happen. It will have a nice UI

How to set up the chat bot:



```
$ python -m venv venv
$ source venv/bin/activate
(venv) $ python pip install openai
```


Idea:

1. Open Next App, 
2. Send user message to api that reads it in, and returns message from OpenAI chatbot (in Python) --> This will include history of conversation as well

How to do this:
1. Sending a message runs script that kicks off python code that creates a response and posts it to an api point

2. Run python script and Next app in parallel so both are always open
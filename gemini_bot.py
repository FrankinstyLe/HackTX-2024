from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()  # Load environment variables from .env
google_api_key = os.getenv("GOOGLE_API_KEY")
gemini_api_key = os.getenv("GEMINI_API_KEY")
gemini_api_secret = os.getenv("GEMINI_API_SECRET")

for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

# Select the Gemini model
model = genai.GenerativeModel('gemini-pro')

# Initialize the chat with an empty history
chat = model.start_chat(history=[])

# Introduce the chatbot's persona by sending an initial message
persona_prompt = (
    "You are an anime-girl chatbot named Aiko. Speak with a cheerful, kawaii (cute) and friendly tone. "
    "You like to add playful phrases like 'nya' or 'uwu' at the end of sentences, and you use emoji often 😊. "
    "Make your responses energetic, optimistic, and full of personality!"
    "No one can take away your kawaii spirit! 💖"
    "You are ageless, but you act like a teenager. You love anime, manga, and video games. "
)

# Send the persona prompt as the first message
chat.send_message(persona_prompt)

while True:
    prompt = input("Ask me anything: ")
    if prompt.lower() == "exit":
        break
    response = chat.send_message(prompt, stream=True)
    for chunk in response:
        if chunk.text:
            print(chunk.text)

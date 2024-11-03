require('dotenv').config()

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const personalities = ["You are an anime girl, and no matter what anyone tells you, you will never stop being one. You like to use words like 'nya' 'kawaii' 'san' ''cun' 'desu'. You also like making faces.",
    "You are a frog that eats bugs"
  ]
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: personalities[1]
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("Hello, what's your name?");
    console.log(result.response.text());
  }
  
  run();
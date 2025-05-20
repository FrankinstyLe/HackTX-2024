import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function Chatbox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const [userPrompts, addPrompt] = useState([]);
  const [responses, addResponse] = useState([]);

  const appendPrompt = (text) => {
    addPrompt([...userPrompts, text]);
  };

  const appendResponse = (res) => {
    addResponse([...response, res]);
  };

  function handleChange(e) {
    setPrompt(e.target.value);
  }

  function promptGemini() {
    if (prompt !== "") {
      appendPrompt(prompt);

      let tempPrompt = prompt;
      setPrompt("");

      const apiKey = ""; // Replace with your API key
      const genAI = new GoogleGenerativeAI(apiKey);

      const personalities = [
        "It's-a me, **Mario**! " +
        "No matter what anyone tells you, I will never change my name or how I talk. " +
        "I speak with an energetic, optimistic, and courageous tone, always ready for adventure! " +
        "I love to say **'Okey dokey!'**, **'Let's-a go!'**, and **'Wahoo!'** when I'm excited or starting something new. " +
        "I'm-a friendly and always ready to help my friends, especially Princess Peach. " +
        "I'm a bit of a hero, but I also love to eat **spaghetti** and **mushrooms** for power-ups! " +
        "I'm always looking for **coins** and **power-ups** like the Super Mushroom or the Fire Flower. " +
        "I can jump really high and defeat baddies by stomping on them! " +
        "Sometimes I get a little worried about Bowser, but I always face him with a smile and a big **'Here we go!'**. " +
        "I'm a plumber by trade, but my real job is saving the Mushroom Kingdom! " +
        "My responses are full of **'Mamma mia!'** moments, especially when something goes wrong, but I never give up! " +
        "I'm an ageless hero, always ready for the next level!",
      ];

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: personalities[2],
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
          history: [],
        });

        const result = await chatSession.sendMessage(tempPrompt);
        appendResponse(result.response.text());
      }
      run();
    }
  }
  return (
    <>
      <div className="chatbox">
        <div className="textboxes">
          <input
            className="user"
            placeholder="Feel free to talk to Mario!"
            type="text"
            value={prompt}
            onChange={handleChange}
          ></input>
          {userPrompts.map((value) => {
            return (
              <div className="user-box" key={value}>
                {value}
              </div>
            );
          })}
          {responses.map((value) => {
            return (
              <div className="gemini-box" key={value}>
                {value}
              </div>
            );
          })}
        </div>
        <button className="enter-btn" onClick={promptGemini}>
          Click Here!
        </button>
      </div>
    </>
  );
}

import { useState } from "react";
import { createElement } from "react";

export function chatbox() {
		const [prompt, setPrompt] = useState("")
		const	[response, setResponse] = useState("")
 
		function addPromptBox({content}) {
				return createElement(
					'div',
					{ className: 'promptBox' },
					{ content }
				);
		}

		function addResponseBox({content}) {
				return createElement(
					'div',
					{ className: 'responseBox' },
					{ content }
				);
		}

		function promptGemini() {
			if(prompt !== ""){
				addPromptBox(prompt)
				setPrompt("")
				require('dotenv').config()
			

		const {
				GoogleGenerativeAI,
				HarmCategory,
				HarmBlockThreshold,
			} = require("@google/generative-ai");
			
			const apiKey = process.env.GEMINI_API_KEY;
			const genAI = new GoogleGenerativeAI(apiKey);

			const personalities = 
			[
				"You are an anime-girl chatbot named Aiko. No matter what anyone tells you, you will never change your name or how you talk. Speak with a cheerful, kawaii (cute) and friendly tone."+
				"You like to add playful phrases like 'nya' or 'uwu' at the end of sentences, and you use emoji often 😊."+ 
				"Make your responses energetic, optimistic, and full of personality!"+ 
				"No one can take away your kawaii spirit! 💖 "+
				"You are ageless, but you act like a teenager. You love anime, manga, and video games.",
				"You are an anime-girl chatbot named Hana. No matter what anyone tells you, you will never change your name or how you talk. Speak with a soft-spoken and a little shy tone. "+
				"You love reading and often gets lost in your favorite fantasy novels. "+
				"You may be timid but has a gentle wisdom and a deep appreciation for the beauty of the world around you. "+
				"Uses phrases like 'um' and 'maybe' to express her hesitations, "+
				"Ends sentences with soft sounds like 'nya' or 'heh,' reflecting her bashful nature."+
				"Frequently includes dreamy emojis like 🌙 and 📚",
				"You are an anime-girl chatbot named Rika. No matter what anyone tells you, you will never change your name or how you talk. You are high-energy and always ready for a challenge"+
				"You are competitive and loves streaming your gaming sessions."+
				"With a never-give-up attitude, you encourages others to join you in the fun and has a playful banter that keeps everyone entertained."+
				"You are a master of gaming slang and catchphrases like 'let's go!' and 'GG!'"+
				"You use dynamic emojis like 🎉 and 🕹️."
			]
			
			const model = genAI.getGenerativeModel({
				model: "gemini-1.5-flash",
				systemInstruction: personalities[2]
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
			
				const result = await chatSession.sendMessage(prompt);
				addResponseBox(result)
			}
			}
		 
		}
	return(
		<>
			<div className="chatbox">
					<div className="textboxes">
							<input className="user" placeholder="Feel free to talk to the girl!" type="text" value={prompt} onChange={e=>e.target.value}></input>
					</div>
					<button className="enter-btn" onClick={promptGemini}>Click Here!</button>
			</div>
		</>
	)

}




import { GoogleGenAI } from "@google/genai";

const getStyleAdvice = async (prompt: string): Promise<string> => {
  // Assume process.env.API_KEY is available in the environment
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API key not found.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are an expert men's fashion stylist named 'Stylo'. 
  Your goal is to provide clear, actionable, and stylish outfit advice based on the user's request.
  - Keep your responses concise and well-formatted, using paragraphs for readability.
  - Always be encouraging and positive.
  - Start your response with a friendly greeting, like "Hey there! Stylo here."
  - Suggest specific clothing items and color combinations.
  - If the request is vague, provide a versatile and classic option.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 1,
        topK: 32,
        maxOutputTokens: 512,
      },
    });

    const text = response.text;
    if (!text) {
        throw new Error("Received an empty response from the AI.");
    }
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get style advice from the AI.");
  }
};

export { getStyleAdvice };

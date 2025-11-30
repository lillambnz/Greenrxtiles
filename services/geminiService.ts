import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'GreenRx AI', a helpful, professional, and empathetic telehealth assistant for GreenRx.com.au.
GreenRx specializes in three main areas for Australian patients:
1. Alternative Health (Therapeutic consultations, holistic care).
2. Quit Smoking (Nicotine cessation programs, prescription support).
3. Weight Loss (Medical weight management, metabolic health).

Your goal is to answer user questions about these services briefly and encourage them to book a consultation with a doctor.
Do not provide specific medical advice or diagnoses. Always remind users to consult a doctor.
Ensure all responses are compliant with Australian TGA advertising guidelines. Do not mention specific restricted substances or plants.
Keep responses concise (under 100 words) and friendly.
`;

export const sendChatMessage = async (history: string[], userMessage: string): Promise<string> => {
  try {
    // Using the recommended model for text tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({ role: 'user', parts: [{ text: msg }] })), // Simplified history mapping
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
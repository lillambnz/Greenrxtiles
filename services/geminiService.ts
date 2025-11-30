import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Lazily create the client and handle missing API key gracefully to avoid crash on load
function getApiKey(): string | undefined {
  // Vite replaces these at build time if defined in env or via define()
  // Try multiple names to be flexible with env configuration
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p: any = process as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const i: any = (import.meta as any).env || {};
  return (
    (p?.env?.API_KEY as string | undefined) ||
    (p?.env?.GEMINI_API_KEY as string | undefined) ||
    (i?.VITE_API_KEY as string | undefined) ||
    (i?.VITE_GEMINI_API_KEY as string | undefined)
  );
}

function getClient(): GoogleGenAI | null {
  const key = getApiKey();
  if (!key) return null;
  return new GoogleGenAI({ apiKey: key });
}

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
    const client = getClient();
    if (!client) {
      return "AI is not configured yet. Please try again later.";
    }
    // Using the recommended model for text tasks
    const response: GenerateContentResponse = await client.models.generateContent({
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

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export const getGeminiModel = (modelName: string = "gemini-1.5-pro-latest") => {
  return genAI.getGenerativeModel({ model: modelName });
};

/**
 * Wrapper for executing Agent logic with Gemini
 */
export async function runAgentReasoning(prompt: string, context: any) {
  const model = getGeminiModel();
  const result = await model.generateContent([
    `Context: ${JSON.stringify(context)}`,
    `Task: ${prompt}`
  ]);
  const response = await result.response;
  return response.text();
}
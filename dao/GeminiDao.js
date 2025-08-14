import { GoogleGenAI } from "@google/genai";

export default class GeminiDao {
  constructor() {
    this.ai = new GoogleGenAI({});
  }

  async callGeminiAPI(prompt) {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      console.log(response.text);
      
      return response.text || 'No response from Gemini.';
    } catch (error) {
      console.error('Gemini API error:', error);
      throw error;
    }
  }
}
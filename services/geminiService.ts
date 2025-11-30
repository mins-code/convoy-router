import { GoogleGenAI, Type } from "@google/genai";
import { RouteAnalysis } from '../types';

// Ensure API key is available
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeRouteWithAI = async (
  start: string,
  end: string,
  vehicleCount: number
): Promise<RouteAnalysis> => {
  if (!apiKey) {
    console.warn("API Key missing, returning mock analysis");
    return mockAnalysis();
  }

  try {
    const prompt = `
      Act as a military logistics AI component of the "Code Red" system.
      Analyze a convoy movement from "${start}" to "${end}" with ${vehicleCount} vehicles.
      Consider:
      1. Potential civilian traffic bottlenecks.
      2. Strategic risk assessment.
      3. Weather impacts (assume current season).
      
      Output a structured JSON response.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            routeId: { type: Type.STRING },
            riskLevel: { type: Type.STRING, enum: ["LOW", "MEDIUM", "HIGH"] },
            estimatedDuration: { type: Type.STRING },
            checkpoints: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            trafficCongestion: { type: Type.NUMBER, description: "Percentage probability 0-100" },
            weatherImpact: { type: Type.STRING },
            strategicNote: { type: Type.STRING }
          },
          required: ["routeId", "riskLevel", "estimatedDuration", "checkpoints", "trafficCongestion", "strategicNote"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as RouteAnalysis;
    }
    throw new Error("Empty response from AI");

  } catch (error) {
    console.error("AI Analysis failed:", error);
    return mockAnalysis();
  }
};

const mockAnalysis = (): RouteAnalysis => ({
  routeId: `MOCK-${Math.floor(Math.random() * 1000)}`,
  riskLevel: 'MEDIUM',
  estimatedDuration: '2 Hours 15 Mins',
  checkpoints: ['Alpha Checkpoint', 'Bridge crossing', 'City Outskirts'],
  trafficCongestion: 65,
  weatherImpact: 'Clear visibility, minor wind.',
  strategicNote: 'High traffic volume expected near urban centers. Recommended to maintain 50m vehicle spacing.'
});

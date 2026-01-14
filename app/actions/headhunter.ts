"use server";

import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.OBJECT,
      properties: {
        role_title: { type: SchemaType.STRING },
        company_name: { type: SchemaType.STRING },
        seniority_level: { 
          type: SchemaType.STRING,
          enum: ["Junior", "Mid", "Senior", "Lead"] 
        },
        tech_stack: { 
          type: SchemaType.ARRAY,
          items: { type: SchemaType.STRING }
        },
        summary: { type: SchemaType.STRING },
      },
      required: ["role_title", "company_name", "seniority_level", "tech_stack", "summary"],
    },
  },
});

export async function analyzeJobDescription(jobText: string) {
  if (!apiKey) {
    return { error: "API Key not configured." };
  }

  if (!jobText || jobText.trim().length < 10) {
    return { error: "Please provide a valid job description." };
  }

  try {
    const prompt = `
      You are an expert Senior Technical Recruiter and Headhunter.
      Analyze the following job description and extract the key information into the specified JSON format.
      Be precise. If the company name is not found, use "Unknown".
      For the summary, write a single punchy sentence about the core mission of this role.

      JOB DESCRIPTION:
      ${jobText}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Headhunter Agent Error:", error);
    return { error: "Failed to analyze job description. Please try again." };
  }
}

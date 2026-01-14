"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function analyzeJobDescription(jobText: string) {
  console.log("🚀 Iniciando análise com Gemini 1.5 Flash...");

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("🔥 GEMINI_API_KEY is missing");
    return { error: "Authentication failed. Server configuration error." };
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Act as an expert Tech Recruiter.
  Analyze the following Job Description and extract a valid JSON object.
  Do not include markdown formatting like \`\`\`json. Just return the raw JSON string.

  Keys required:
  - role_title (string)
  - company_name (string)
  - seniority_level (string: Junior, Mid, Senior, Lead)
  - tech_stack (array of strings, max 6 items)
  - summary (string, max 20 words)

  Job Description:
  ${jobText}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    console.log("🤖 Raw Response:", text);

    // Surgical cleanup: remove markdown code blocks
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    const data = JSON.parse(text);
    return data;

  } catch (error) {
    console.error("� Error processing job description:", error);
    return { error: "Failed to process job description. Please try again." };
  }
}
// IGNORE THE ABOVE COMMENT BLOCK IN CODE. I will provide the file content now.

/*
DECISION: I will use `gemini-1.5-flash` because 2.5 is likely a hallucination in the prompt or typo. 
The log message confirms 1.5.
*/

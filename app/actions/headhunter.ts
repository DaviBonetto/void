"use server";

export async function analyzeJobDescription(jobText: string) {
  console.log("🚀 Initializing Headhunter via OpenRouter (deepseek/deepseek-r1-0528:free)...");

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("🔥 OPENROUTER_API_KEY is missing.");
    return { error: "Server configuration error: Missing API Key." };
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "VOID Agent",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-0528:free",
        "messages": [
          {
            "role": "system",
            "content": "You are an elite Tech Recruiter. Analyze the Job Description. Return ONLY a raw JSON object (no markdown, no backticks, no reasoning text) with these exact keys: role_title, company_name, seniority_level, tech_stack (array of strings), summary."
          },
          {
            "role": "user",
            "content": jobText
          }
        ],
        "temperature": 0.1 // Lower temperature for DeepSeek R1 to focus on JSON
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`🔥 OpenRouter API Error (${response.status} ${response.statusText}):`, errorText);
      return { error: `OpenRouter Error: ${response.status} - ${errorText}` };
    }

    const json = await response.json();
    let content = json.choices[0].message.content;
    
    console.log("🤖 Raw Response:", content);

    // Robust JSON Extraction: Find the first '{' and last '}'
    const startIndex = content.indexOf('{');
    const endIndex = content.lastIndexOf('}');

    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        content = content.substring(startIndex, endIndex + 1);
    } else {
        // Fallback cleanup if strict finding fails
        content = content.replace(/```json/g, "").replace(/```/g, "").trim();
    }

    try {
        const data = JSON.parse(content);
        return data;
    } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        console.error("Failed Content:", content);
        return { error: "Failed to parse AI response. Please try again." };
    }

  } catch (error) {
    console.error("🔥 Headhunter Execution Failed:", error);
    return { error: "Failed to analyze job description via OpenRouter." };
  }
}

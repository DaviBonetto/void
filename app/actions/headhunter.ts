"use server";

export async function analyzeJobDescription(jobText: string) {
  console.log("🚀 Initializing Headhunter via OpenRouter (google/gemini-2.0-flash-exp:free)...");

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
        "HTTP-Referer": "http://localhost:3000", // Required for OpenRouter
        "X-Title": "VOID Agent", // Required for OpenRouter
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-exp:free",
        "messages": [
          {
            "role": "system",
            "content": "You are an elite Tech Recruiter. Analyze the Job Description. Return ONLY a raw JSON object (no markdown, no backticks) with these exact keys: role_title, company_name, seniority_level, tech_stack (array of strings), summary."
          },
          {
            "role": "user",
            "content": jobText
          }
        ],
        "temperature": 0.2
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

    // Security cleanup (in case model returns markdown)
    content = content.replace(/```json/g, "").replace(/```/g, "").trim();

    try {
        const data = JSON.parse(content);
        return data;
    } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        return { error: "Failed to parse AI response. Please try again." };
    }

  } catch (error) {
    console.error("🔥 Headhunter Execution Failed:", error);
    return { error: "Failed to analyze job description via OpenRouter." };
  }
}

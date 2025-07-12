export const fetchAIAnswer = async (query) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: query
          }
        ]
      })
    });

    const text = await response.text(); // Instead of JSON for now
    console.log("Raw API response:", response.status, text);

    if (!response.ok) {
      return "API error: " + response.status;
    }

    const data = JSON.parse(text);
    return data.choices[0].message.content;

  } catch (error) {
    console.error("Fetch error:", error);
    return "Network error or bad request.";
  }
};

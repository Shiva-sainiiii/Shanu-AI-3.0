export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.OPENROUTER_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [
          { role: "system", content: "Always reply in Hinglish with emojis." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "No response";

    res.status(200).json({ reply });

  } catch (err) {
    res.status(500).json({ reply: "Server Error!" });
  }
}onse";

    res.status(200).json({ reply });

  } catch (err) {
    res.status(500).json({ reply: "Server Error!" });
  }
}
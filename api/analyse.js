export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { analyticsData, platform } = req.body;

  if (!analyticsData || !platform) {
    return res.status(400).json({ error: 'Missing analyticsData or platform' });
  }

  const platformName = platform === 'tiktok' ? 'TikTok' : 'Spotify for Artists';

  const prompt = `You are a music industry platform strategist. Analyse the following ${platformName} analytics data and return ONLY a JSON object (no markdown, no preamble) with this exact structure:
{
  "audience": [
    {"label": "string (short category name)", "insight": "string (1-2 sentence insight about audience/demographics)"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "content": [
    {"label": "string", "insight": "string (content performance insight)"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "monetisation": [
    {"label": "string", "insight": "string (monetisation opportunity)"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "recommendations": [
    "Concrete, specific growth strategy recommendation as a full sentence",
    "Concrete, specific growth strategy recommendation as a full sentence",
    "Concrete, specific growth strategy recommendation as a full sentence",
    "Concrete, specific growth strategy recommendation as a full sentence"
  ]
}

Analytics data:
${analyticsData}

Return ONLY the JSON. No backticks, no explanation.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });

    const text = data.content.map(b => b.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    return res.status(200).json(parsed);
  } catch (e) {
    return res.status(500).json({ error: 'Analysis failed. Please try again.' });
  }
}

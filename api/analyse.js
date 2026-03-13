export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { analyticsData, analyticsDataB, platform, mode } = req.body;

  if (!analyticsData || !platform) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const platformName = platform === 'tiktok' ? 'TikTok' : platform === 'spotify' ? 'Spotify for Artists' : 'Instagram';
  const isComparison = mode === 'comparison' && analyticsDataB;

  const prompt = isComparison
    ? `You are a music industry platform strategist. Compare these two periods of ${platformName} analytics and return ONLY a JSON object (no markdown, no preamble) with this exact structure:
{
  "audience": [
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "short change summary e.g. +12% growth"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"}
  ],
  "content": [
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"}
  ],
  "monetisation": [
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"},
    {"label": "string", "insight": "string", "change": "up|down|neutral", "changeText": "string"}
  ],
  "recommendations": [
    "Specific recommendation based on what changed between periods",
    "Specific recommendation based on what changed between periods",
    "Specific recommendation based on what changed between periods",
    "Specific recommendation based on what changed between periods"
  ],
  "chart": {
    "type": "bar",
    "title": "Key metrics comparison",
    "labels": ["Metric 1", "Metric 2", "Metric 3", "Metric 4"],
    "periodA": "Last month",
    "periodB": "This month",
    "dataA": [number, number, number, number],
    "dataB": [number, number, number, number],
    "unit": "string e.g. K views or % or followers"
  }
}

Period A (older):
${analyticsData}

Period B (newer):
${analyticsDataB}

For the chart, extract 4 comparable numeric metrics that exist in both periods (e.g. followers, views, likes, shares). Normalise to sensible units (e.g. thousands). Return ONLY the JSON.`

    : `You are a music industry platform strategist. Analyse this ${platformName} analytics data and return ONLY a JSON object (no markdown, no preamble) with this exact structure:
{
  "audience": [
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "content": [
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "monetisation": [
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"},
    {"label": "string", "insight": "string"}
  ],
  "recommendations": [
    "Concrete, specific growth strategy recommendation",
    "Concrete, specific growth strategy recommendation",
    "Concrete, specific growth strategy recommendation",
    "Concrete, specific growth strategy recommendation"
  ],
  "chart": {
    "type": "bar",
    "title": "Audience breakdown",
    "labels": ["label1", "label2", "label3", "label4", "label5"],
    "data": [number, number, number, number, number],
    "unit": "string e.g. % or K views"
  }
}

For the chart, extract the most interesting numeric breakdown from the data — age groups, traffic sources, or top content views. Use percentages or raw numbers. Return ONLY the JSON.

Analytics data:
${analyticsData}`;

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
        max_tokens: 1500,
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

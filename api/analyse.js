const BENCHMARKS = {
  tiktok: {
    nano: { label: '1K–10K followers', followers: [1000, 10000], avgWatchTime: 6, completionRate: 28, engagementRate: 4.5, fypTraffic: 65 },
    micro: { label: '10K–50K followers', followers: [10000, 50000], avgWatchTime: 8, completionRate: 32, engagementRate: 3.8, fypTraffic: 70 },
    mid: { label: '50K–200K followers', followers: [50000, 200000], avgWatchTime: 9, completionRate: 35, engagementRate: 3.2, fypTraffic: 74 },
    macro: { label: '200K+ followers', followers: [200000, Infinity], avgWatchTime: 10, completionRate: 38, engagementRate: 2.5, fypTraffic: 78 }
  },
  spotify: {
    nano: { label: '0–5K monthly listeners', listeners: [0, 5000], savesRate: 8, playlistAddRate: 3, followerRatio: 0.15 },
    micro: { label: '5K–20K monthly listeners', listeners: [5000, 20000], savesRate: 11, playlistAddRate: 5, followerRatio: 0.18 },
    mid: { label: '20K–100K monthly listeners', listeners: [20000, 100000], savesRate: 14, playlistAddRate: 7, followerRatio: 0.22 },
    macro: { label: '100K+ monthly listeners', listeners: [100000, Infinity], savesRate: 18, playlistAddRate: 10, followerRatio: 0.28 }
  },
  instagram: {
    nano: { label: '1K–10K followers', followers: [1000, 10000], engagementRate: 4.2, reachRate: 28, reelPlaysRatio: 1.8 },
    micro: { label: '10K–50K followers', followers: [10000, 50000], engagementRate: 3.1, reachRate: 22, reelPlaysRatio: 2.1 },
    mid: { label: '50K–200K followers', followers: [50000, 200000], engagementRate: 2.4, reachRate: 18, reelPlaysRatio: 2.4 },
    macro: { label: '200K+ followers', followers: [200000, Infinity], engagementRate: 1.8, reachRate: 14, reelPlaysRatio: 2.8 }
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { analyticsData, analyticsDataB, platform, mode } = req.body;
  if (!analyticsData || !platform) return res.status(400).json({ error: 'Missing required fields' });

  const platformName = platform === 'tiktok' ? 'TikTok' : platform === 'spotify' ? 'Spotify for Artists' : 'Instagram';
  const isComparison = mode === 'comparison' && analyticsDataB;
  const benchmarkData = JSON.stringify(BENCHMARKS[platform]);

  const prompt = isComparison
    ? `You are a music industry platform strategist. Compare these two periods of ${platformName} analytics. Return ONLY a JSON object with this exact structure:
{
  "audience": [{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"}],
  "content": [{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"}],
  "monetisation": [{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"},{"label":"string","insight":"string","change":"up|down|neutral","changeText":"string"}],
  "recommendations": ["string","string","string","string"],
  "calendar": [
    {"day":"Mon","type":"string e.g. Reel|Story|Post","idea":"short content idea","rationale":"one sentence why based on data"},
    {"day":"Tue","type":"string","idea":"string","rationale":"string"},
    {"day":"Wed","type":"string","idea":"string","rationale":"string"},
    {"day":"Thu","type":"string","idea":"string","rationale":"string"},
    {"day":"Fri","type":"string","idea":"string","rationale":"string"},
    {"day":"Sat","type":"string","idea":"string","rationale":"string"},
    {"day":"Sun","type":"string","idea":"string","rationale":"string"},
    {"day":"Mon","type":"string","idea":"string","rationale":"string"},
    {"day":"Tue","type":"string","idea":"string","rationale":"string"},
    {"day":"Wed","type":"string","idea":"string","rationale":"string"},
    {"day":"Thu","type":"string","idea":"string","rationale":"string"},
    {"day":"Fri","type":"string","idea":"string","rationale":"string"},
    {"day":"Sat","type":"string","idea":"string","rationale":"string"},
    {"day":"Sun","type":"string","idea":"string","rationale":"string"}
  ],
  "benchmarks": [
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string from benchmark data"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"}
  ],
  "chart": {"type":"bar","title":"string","labels":["string","string","string","string"],"periodA":"string","periodB":"string","dataA":[number,number,number,number],"dataB":[number,number,number,number],"unit":"string"}
}
Use this benchmark data to populate the benchmarks array: ${benchmarkData}
Period A: ${analyticsData}
Period B: ${analyticsDataB}
Return ONLY the JSON.`

    : `You are a music industry platform strategist. Analyse this ${platformName} analytics data. Return ONLY a JSON object with this exact structure:
{
  "audience": [{"label":"string","insight":"string"},{"label":"string","insight":"string"},{"label":"string","insight":"string"}],
  "content": [{"label":"string","insight":"string"},{"label":"string","insight":"string"},{"label":"string","insight":"string"}],
  "monetisation": [{"label":"string","insight":"string"},{"label":"string","insight":"string"},{"label":"string","insight":"string"}],
  "recommendations": ["string","string","string","string"],
  "calendar": [
    {"day":"Mon","type":"string e.g. Reel|Story|Video|Post","idea":"short content idea max 8 words","rationale":"one sentence why based on the data"},
    {"day":"Tue","type":"string","idea":"string","rationale":"string"},
    {"day":"Wed","type":"string","idea":"string","rationale":"string"},
    {"day":"Thu","type":"string","idea":"string","rationale":"string"},
    {"day":"Fri","type":"string","idea":"string","rationale":"string"},
    {"day":"Sat","type":"string","idea":"string","rationale":"string"},
    {"day":"Sun","type":"string","idea":"string","rationale":"string"},
    {"day":"Mon","type":"string","idea":"string","rationale":"string"},
    {"day":"Tue","type":"string","idea":"string","rationale":"string"},
    {"day":"Wed","type":"string","idea":"string","rationale":"string"},
    {"day":"Thu","type":"string","idea":"string","rationale":"string"},
    {"day":"Fri","type":"string","idea":"string","rationale":"string"},
    {"day":"Sat","type":"string","idea":"string","rationale":"string"},
    {"day":"Sun","type":"string","idea":"string","rationale":"string"}
  ],
  "benchmarks": [
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string from benchmark label"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"}
  ],
  "chart": {"type":"bar","title":"string","labels":["string","string","string","string","string"],"data":[number,number,number,number,number],"unit":"string"}
}
Use this benchmark data: ${benchmarkData}
Analytics data: ${analyticsData}
Return ONLY the JSON.`;

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
        max_tokens: 2500,
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
    console.error(e);
    return res.status(500).json({ error: 'Analysis failed. Please try again.' });
  }
}

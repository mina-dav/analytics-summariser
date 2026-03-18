const CREATOR_CONFIG = {
  music: {
    name: 'Music Creator',
    platforms: ['TikTok', 'Spotify for Artists', 'Instagram'],
    benchmarks: {
      'tiktok-live': { nano: { label: '<500 peak viewers', peakViewers: 180, newFollowers: 40, diamondRate: 0.8 }, micro: { label: '500–2K peak viewers', peakViewers: 900, newFollowers: 180, diamondRate: 2.4 }, mid: { label: '2K–10K peak viewers', peakViewers: 4200, newFollowers: 640, diamondRate: 8.2 }, macro: { label: '10K+ peak viewers', peakViewers: 18000, newFollowers: 2400, diamondRate: 28 } },
      tiktok: { nano: { label: '1K–10K followers', avgWatchTime: 6, completionRate: 28, engagementRate: 4.5, fypTraffic: 65 }, micro: { label: '10K–50K followers', avgWatchTime: 8, completionRate: 32, engagementRate: 3.8, fypTraffic: 70 }, mid: { label: '50K–200K followers', avgWatchTime: 9, completionRate: 35, engagementRate: 3.2, fypTraffic: 74 }, macro: { label: '200K+ followers', avgWatchTime: 10, completionRate: 38, engagementRate: 2.5, fypTraffic: 78 } },
      spotify: { nano: { label: '0–5K listeners', savesRate: 8, playlistAddRate: 3 }, micro: { label: '5K–20K listeners', savesRate: 11, playlistAddRate: 5 }, mid: { label: '20K–100K listeners', savesRate: 14, playlistAddRate: 7 }, macro: { label: '100K+ listeners', savesRate: 18, playlistAddRate: 10 } },
      instagram: { nano: { label: '1K–10K followers', engagementRate: 4.2, reachRate: 28 }, micro: { label: '10K–50K followers', engagementRate: 3.1, reachRate: 22 }, mid: { label: '50K–200K followers', engagementRate: 2.4, reachRate: 18 }, macro: { label: '200K+ followers', engagementRate: 1.8, reachRate: 14 } }
    }
  },
  influencer: {
    name: 'Influencer / Lifestyle Creator',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    benchmarks: {
      instagram: { nano: { label: '1K–10K followers', engagementRate: 5.1, reachRate: 30, storyViews: 8 }, micro: { label: '10K–50K followers', engagementRate: 3.6, reachRate: 24, storyViews: 6 }, mid: { label: '50K–200K followers', engagementRate: 2.8, reachRate: 19, storyViews: 4.5 }, macro: { label: '200K+ followers', engagementRate: 2.0, reachRate: 15, storyViews: 3 } },
      'tiktok-live': { nano: { label: '<500 peak viewers', peakViewers: 180, newFollowers: 40, diamondRate: 0.8 }, micro: { label: '500–2K peak viewers', peakViewers: 900, newFollowers: 180, diamondRate: 2.4 }, mid: { label: '2K–10K peak viewers', peakViewers: 4200, newFollowers: 640, diamondRate: 8.2 }, macro: { label: '10K+ peak viewers', peakViewers: 18000, newFollowers: 2400, diamondRate: 28 } },
      tiktok: { nano: { label: '1K–10K followers', engagementRate: 5.5, completionRate: 30, fypTraffic: 62 }, micro: { label: '10K–50K followers', engagementRate: 4.2, completionRate: 33, fypTraffic: 68 }, mid: { label: '50K–200K followers', engagementRate: 3.4, completionRate: 36, fypTraffic: 73 }, macro: { label: '200K+ followers', engagementRate: 2.6, completionRate: 39, fypTraffic: 77 } },
      youtube: { nano: { label: '1K–10K subs', ctr: 4.0, avgViewDuration: 35, engagementRate: 3.2 }, micro: { label: '10K–50K subs', ctr: 3.4, avgViewDuration: 38, engagementRate: 2.8 }, mid: { label: '50K–200K subs', ctr: 3.0, avgViewDuration: 40, engagementRate: 2.4 }, macro: { label: '200K+ subs', ctr: 2.6, avgViewDuration: 42, engagementRate: 1.9 } }
    }
  },
  podcaster: {
    name: 'Podcaster',
    platforms: ['Spotify', 'Apple Podcasts', 'YouTube'],
    benchmarks: {
      spotify: { nano: { label: '0–500 listeners/ep', completion: 55, followers: 200, shareRate: 1.2 }, micro: { label: '500–5K listeners/ep', completion: 60, followers: 1500, shareRate: 1.8 }, mid: { label: '5K–20K listeners/ep', completion: 64, followers: 8000, shareRate: 2.4 }, macro: { label: '20K+ listeners/ep', completion: 68, followers: 25000, shareRate: 3.1 } },
      apple: { nano: { label: '0–500 listeners/ep', completion: 52, rating: 4.2 }, micro: { label: '500–5K listeners/ep', completion: 57, rating: 4.4 }, mid: { label: '5K–20K listeners/ep', completion: 62, rating: 4.5 }, macro: { label: '20K+ listeners/ep', completion: 66, rating: 4.6 } },
      youtube: { nano: { label: '1K–10K subs', ctr: 3.5, avgViewDuration: 42, engagementRate: 2.8 }, micro: { label: '10K–50K subs', ctr: 3.0, avgViewDuration: 46, engagementRate: 2.4 }, mid: { label: '50K–200K subs', ctr: 2.7, avgViewDuration: 48, engagementRate: 2.0 }, macro: { label: '200K+ subs', ctr: 2.3, avgViewDuration: 51, engagementRate: 1.6 } }
    }
  },
  youtuber: {
    name: 'YouTuber',
    platforms: ['YouTube', 'Instagram', 'TikTok'],
    benchmarks: {
      youtube: { nano: { label: '1K–10K subs', ctr: 4.2, avgViewDuration: 33, engagementRate: 3.5, revenueRPM: 2.5 }, micro: { label: '10K–50K subs', ctr: 3.6, avgViewDuration: 37, engagementRate: 3.0, revenueRPM: 3.2 }, mid: { label: '50K–500K subs', ctr: 3.1, avgViewDuration: 40, engagementRate: 2.5, revenueRPM: 4.1 }, macro: { label: '500K+ subs', ctr: 2.7, avgViewDuration: 43, engagementRate: 2.0, revenueRPM: 5.8 } },
      instagram: { nano: { label: '1K–10K followers', engagementRate: 4.2, reachRate: 28 }, micro: { label: '10K–50K followers', engagementRate: 3.1, reachRate: 22 }, mid: { label: '50K–200K followers', engagementRate: 2.4, reachRate: 18 }, macro: { label: '200K+ followers', engagementRate: 1.8, reachRate: 14 } },
      'tiktok-live': { nano: { label: '<500 peak viewers', peakViewers: 180, newFollowers: 40, diamondRate: 0.8 }, micro: { label: '500–2K peak viewers', peakViewers: 900, newFollowers: 180, diamondRate: 2.4 }, mid: { label: '2K–10K peak viewers', peakViewers: 4200, newFollowers: 640, diamondRate: 8.2 }, macro: { label: '10K+ peak viewers', peakViewers: 18000, newFollowers: 2400, diamondRate: 28 } },
      tiktok: { nano: { label: '1K–10K followers', engagementRate: 5.5, completionRate: 30 }, micro: { label: '10K–50K followers', engagementRate: 4.2, completionRate: 33 }, mid: { label: '50K–200K followers', engagementRate: 3.4, completionRate: 36 }, macro: { label: '200K+ followers', engagementRate: 2.6, completionRate: 39 } }
    }
  },
  brand: {
    name: 'Brand / Business',
    platforms: ['Instagram', 'TikTok', 'LinkedIn'],
    benchmarks: {
      instagram: { small: { label: 'Small brand (<10K)', engagementRate: 1.8, reachRate: 14, storyViews: 5 }, medium: { label: 'Medium brand (10K–100K)', engagementRate: 1.2, reachRate: 10, storyViews: 3.5 }, large: { label: 'Large brand (100K+)', engagementRate: 0.9, reachRate: 7, storyViews: 2.5 } },
      tiktok: { small: { label: 'Small brand (<10K)', engagementRate: 3.8, completionRate: 28, fypTraffic: 60 }, medium: { label: 'Medium brand (10K–100K)', engagementRate: 2.9, completionRate: 32, fypTraffic: 66 }, large: { label: 'Large brand (100K+)', engagementRate: 2.1, completionRate: 36, fypTraffic: 71 } },
      linkedin: { small: { label: 'Small brand (<5K)', engagementRate: 2.4, impressionRate: 8 }, medium: { label: 'Medium brand (5K–50K)', engagementRate: 1.8, impressionRate: 6 }, large: { label: 'Large brand (50K+)', engagementRate: 1.3, impressionRate: 4.5 } }
    }
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { analyticsData, analyticsDataB, creatorType, platform, mode } = req.body;
  if (!analyticsData || !platform || !creatorType) return res.status(400).json({ error: 'Missing required fields' });

  const config = CREATOR_CONFIG[creatorType];
  const creatorName = config?.name || 'Creator';
  const benchmarkData = JSON.stringify(config?.benchmarks?.[platform.toLowerCase()] || {});
  const isComparison = mode === 'comparison' && analyticsDataB;

  const systemPrompt = `You are an expert digital strategy consultant specialising in creator economies and platform analytics. You advise ${creatorName}s on growing their audience, monetising their content, and optimising their platform strategy. Your insights are specific, data-driven, and actionable — never generic. Always ground recommendations in the actual numbers provided.`;

  const structurePrompt = `Return ONLY a JSON object with this exact structure (no markdown, no preamble):
{
  "audience": [{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}}],
  "content": [{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}}],
  "monetisation": [{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}},{"label":"string","insight":"string"${isComparison ? ',"change":"up|down|neutral","changeText":"string"' : ''}}],
  "recommendations": ["string","string","string","string"],
  "healthScore": number between 0-100 representing overall creator health,
  "healthBreakdown": [
    {"label": "Audience growth", "score": number 0-100},
    {"label": "Content performance", "score": number 0-100},
    {"label": "Engagement rate", "score": number 0-100},
    {"label": "Monetisation", "score": number 0-100}
  ],
  "trends": [
    {"label": "string (metric name)", "value": "string (e.g. +12% MoM)", "direction": "up|down|flat"},
    {"label": "string", "value": "string", "direction": "up|down|flat"},
    {"label": "string", "value": "string", "direction": "up|down|flat"}
  ],
  "calendar": [
    {"day":"Mon","type":"string","idea":"content idea max 8 words","rationale":"one sentence why, based on data"},
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
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"},
    {"metric":"string","yourValue":"string","benchmark":"string","status":"above|below|on-par","tier":"string"}
  ],
  "chart": {"type":"bar","title":"string","labels":["string","string","string","string","string"]${isComparison ? ',"periodA":"string","periodB":"string","dataA":[number,number,number,number],"dataB":[number,number,number,number]' : ',"data":[number,number,number,number,number]'},"unit":"string"}
}`;

  const userPrompt = isComparison
    ? `Analyse and compare these two periods of ${platform} analytics for a ${creatorName}.\n\nBenchmark reference data: ${benchmarkData}\n\n${structurePrompt}\n\nPeriod A (older):\n${analyticsData}\n\nPeriod B (newer):\n${analyticsDataB}`
    : `Analyse this ${platform} analytics data for a ${creatorName}.\n\nBenchmark reference data: ${benchmarkData}\n\n${structurePrompt}\n\nAnalytics data:\n${analyticsData}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 3200,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }]
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

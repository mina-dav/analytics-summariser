# Platform Analytics Summariser

An AI-powered tool that translates raw TikTok and Spotify for Artists analytics into actionable creator strategy insights — covering audience demographics, content performance, monetisation opportunities, and growth recommendations.

Built with the Claude API (claude-sonnet-4).

---

## Deploy in 10 minutes (Vercel)

### 1. Get an Anthropic API key
- Go to [console.anthropic.com](https://console.anthropic.com)
- Create an account and generate an API key
- Add a small amount of credit (a few dollars covers hundreds of uses)

### 2. Add your API key to the project
Open `index.html` and find this line near the bottom:

```js
const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';
```

Replace `YOUR_API_KEY_HERE` with your actual key.

> **Note:** For a public-facing deployment, move the API key to a serverless function (e.g. a Vercel Edge Function) so it isn't exposed in the browser. For a CV portfolio demo, keeping it in the frontend is fine — just set usage limits in the Anthropic console.

### 3. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create analytics-summariser --public --push
```

Or create the repo manually on github.com and push.

### 4. Deploy on Vercel
- Go to [vercel.com](https://vercel.com) and sign in with GitHub
- Click **Add New Project**
- Import your `analytics-summariser` repo
- Click **Deploy** — that's it, no build settings needed

Your live URL will be something like: `https://analytics-summariser.vercel.app`

---

## Usage

1. Select a platform (TikTok or Spotify for Artists)
2. Paste in your raw analytics — numbers, percentages, top content, demographics, whatever you have
3. Hit **Analyse**
4. Get structured insights across four categories

---

## CV description

> *"Built an AI-powered analytics tool using the Claude API that translates raw TikTok and Spotify creator data into structured strategy insights, covering audience demographics, content performance, monetisation opportunities, and growth recommendations."*

---

## Tech
- Vanilla HTML/CSS/JS — zero dependencies, zero build step
- Claude API (`claude-sonnet-4`) for analysis
- Deploys as a static site on Vercel

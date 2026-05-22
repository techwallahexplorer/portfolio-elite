# Jagjeet Singh Portfolio

A Next.js portfolio for presenting my software projects, resume, GitHub activity, and contact links.

The portfolio is focused on entry-level software engineering credibility: clear project summaries, source links, technical stack, and direct evidence instead of inflated claims.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- GitHub API

## Local Setup

```bash
git clone https://github.com/techwallahexplorer/portfolio-elite.git
cd portfolio-elite
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```env
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=techwallahexplorer
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

`GITHUB_TOKEN` is optional for local development unless private rate limits are hit.

## Featured Work

- Symptom2Care
- Visual Impaired Assistant
- Phoenix
- Campus Connect

## Notes

This repo should stay free of real secrets. Keep API keys and Supabase credentials in `.env.local`, not in committed files.

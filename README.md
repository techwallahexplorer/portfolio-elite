# Obsidian Precision — Elite Engineering Portfolio

A production-grade, recruiter-focused developer portfolio built for high-impact engineering storytelling.

## 🚀 Features

- **Obsidian Precision Design System**: A custom-built, deep-dark mode theme using Tailwind CSS v4 and Glassmorphism.
- **Real-time GitHub Dashboard**: Directly integrated with the GitHub GraphQL API to show organic contribution velocity and repository metrics.
- **Live Visitor Tracking**: A custom `/api/pixel` endpoint that logs profile views to Supabase, providing real-time social proof on your dashboard.
- **Project Showcase**: High-fidelity project cards with 3D mockups and technical deep-dives.
- **Premium UX**: Smooth entrance animations using Framer Motion and responsive layouts for all devices.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Database/Realtime**: Supabase
- **Animations**: Framer Motion
- **Icons**: Custom SVGs & Lucide React

## 📦 Installation

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Configure Environment Variables**: Create a `.env.local` file with the following:
   ```env
   GITHUB_TOKEN=your_personal_access_token
   GITHUB_USERNAME=techwallahexplorer
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. **Run development server**: `npm run dev`

## 📊 Integrating the Tracking Pixel

To track views from your GitHub profile README directly to your portfolio dashboard, embed the following snippet in your GitHub `README.md`:

```markdown
![Visitor Tracker](https://your-portfolio-url.vercel.app/api/pixel)
```

## 🤝 Contact

Created by **Jagjeet Singh**
Email: urjagjeetsingh@gmail.com
GitHub: [@techwallahexplorer](https://github.com/techwallahexplorer)

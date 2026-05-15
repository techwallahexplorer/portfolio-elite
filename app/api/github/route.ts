import { NextResponse } from "next/server";
import { getGithubProfile, getGithubRepos, getGithubContributions } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [profile, repos, contributions] = await Promise.all([
      getGithubProfile(),
      getGithubRepos(),
      getGithubContributions(),
    ]);

    return NextResponse.json({
      profile,
      repos,
      contributions,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}

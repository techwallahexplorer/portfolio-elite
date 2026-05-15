"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitBranch, Terminal, ArrowUpRight } from "lucide-react";

import { supabase } from "@/lib/supabase";

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GithubData {
  profile: GithubProfile;
  repos: GithubRepo[];
  contributions: ContributionCalendar;
}

export const GithubDashboard = () => {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [liveViews, setLiveViews] = useState(0);

  useEffect(() => {
    // Fetch initial data
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

    // Realtime listener for the pixel hits
    let channel: import("@supabase/supabase-js").RealtimeChannel | null = null;
    if (supabase) {
      channel = supabase
        .channel("realtime-stats")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "portfolio_stats" },
          () => {
            setLiveViews((prev) => prev + 1);
          }
        )
        .subscribe();
    }

    return () => {
      if (supabase && channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  if (loading || !data) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="h-96 glass-card bg-white/5 animate-pulse" />
        <div className="lg:col-span-2 h-96 glass-card bg-white/5 animate-pulse" />
        <div className="h-96 glass-card bg-white/5 animate-pulse" />
      </div>
    );
  }

  const { profile, repos, contributions } = data;

  return (
    <section id="dashboard" className="py-24">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Engineering Activity</h2>
        <p className="text-foreground/60">Live metrics from my open source contributions and projects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 flex flex-col items-center text-center justify-between group hover:border-primary/20 transition-all duration-500"
        >
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img src={profile.avatar_url} className="w-24 h-24 rounded-full border-2 border-white/5 p-1 group-hover:border-primary/20 transition-all duration-500" alt="Profile" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#030303] rounded-full flex items-center justify-center border border-white/10">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-1">{profile.name || "TechWallahExplorer"}</h3>
            <p className="text-xs text-foreground/40 mb-4 font-mono">@{profile.login}</p>
            <p className="text-sm text-foreground/60 mb-6 leading-relaxed px-2">{profile.bio || "Engineering high-performance systems and AI-native products."}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center group-hover:bg-primary/5 transition-all">
              <p className="text-[10px] text-foreground/40 uppercase font-mono mb-1">Followers</p>
              <p className="text-2xl font-bold text-white">{profile.followers}</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center group-hover:bg-secondary/5 transition-all">
              <p className="text-[10px] text-foreground/40 uppercase font-mono mb-1">Repos</p>
              <p className="text-2xl font-bold text-white">{profile.public_repos}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-4 bg-emerald-500/5 rounded-full border border-emerald-500/10 w-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">
              {liveViews > 0 ? `${liveViews} Total Session Views` : "System Online / Tracking Active"}
            </span>
          </div>
        </motion.div>

        {/* Contributions Graph Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-card p-8 flex flex-col hover:border-primary/20 transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-2 mb-1">
                <GitBranch size={14} className="text-primary" />
                Engineering Velocity
              </h4>
              <p className="text-[10px] text-foreground/20 font-mono">Last 90 days of commit activity</p>
            </div>
            <div className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded-lg border border-primary/20 whitespace-nowrap">
              {contributions?.totalContributions || 0} Contributions This Year
            </div>
          </div>

          <div className="flex-1 flex items-end gap-1.5 overflow-x-auto pb-4 custom-scrollbar min-h-[150px]">
            {contributions?.weeks?.slice(-16).map((week, i) => (
              <div key={i} className="flex flex-col gap-1.5 flex-1 min-w-[12px]">
                {week.contributionDays.map((day, j) => {
                  const opacity = day.contributionCount > 0 
                    ? Math.min(0.3 + (day.contributionCount * 0.15), 1)
                    : 0.05;
                  
                  return (
                    <div 
                      key={j} 
                      className="w-full min-h-[10px] aspect-square rounded-[2px] transition-all duration-300 hover:scale-150 hover:z-20 cursor-pointer"
                      style={{ 
                        backgroundColor: day.contributionCount > 0 
                          ? `rgba(177, 197, 255, ${opacity})`
                          : "rgba(255, 255, 255, 0.03)" 
                      }}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between mt-6 pt-6 border-t border-white/5 gap-4">
            <div className="flex items-center gap-4 text-[10px] font-mono text-foreground/20 uppercase tracking-[0.1em]">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.03, 0.3, 0.6, 1].map((op) => (
                  <div key={op} className="w-2.5 h-2.5 rounded-[1px]" style={{ background: op === 0.03 ? "rgba(255,255,255,0.03)" : `rgba(177, 197, 255, ${op})` }} />
                ))}
              </div>
              <span>More</span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-foreground/20 uppercase font-mono">Intensity</span>
                <span className="text-xs font-bold text-white">High Frequency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-foreground/20 uppercase font-mono">Period</span>
                <span className="text-xs font-bold text-white">Last 120 Days</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Project Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-card p-8 flex flex-col hover:border-secondary/20 transition-all duration-500"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-8 flex items-center gap-2">
            <Star size={14} className="text-secondary" />
            Recent Artifacts
          </h4>
          <div className="space-y-6">
            {repos.slice(0, 3).map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                className="group flex flex-col gap-1 p-0 transition-all"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold group-hover:text-primary transition-colors truncate">{repo.name}</span>
                  <ArrowUpRight size={12} className="text-foreground/20 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[10px] text-foreground/30">
                    <Star size={10} /> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-foreground/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {repo.language || "TypeScript"}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a 
            href={`https://github.com/${profile.login}?tab=repositories`} 
            target="_blank"
            className="mt-auto pt-10 text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] hover:text-white transition-all flex items-center gap-2"
          >
            Explore Full Registry
            <Terminal size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

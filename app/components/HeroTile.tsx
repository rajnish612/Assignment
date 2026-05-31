"use client";

import { motion } from "motion/react";
import { Flame, Trophy, Zap } from "lucide-react";

interface HeroTileProps {
  name: string;
  streakDays: number;
  weeklyGoal: string;
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};
export default function HeroTile({
  name,
  streakDays,
  weeklyGoal,
}: HeroTileProps) {
  return (
    <motion.article
      variants={item}
      className="tile-surface  tile-hover relative col-span-12 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 md:col-span-8"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-white/5"
        whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
      />
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Student Dashboard
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Welcome back, {name}.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-slate-300">
          Your neural sprint is on track. Keep building momentum with focused
          bursts and adaptive labs.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Daily streak</span>
            <span className="streak-pulse inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
              <Flame size={14} />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">
            {streakDays} days
          </p>
          <p className="mt-1 text-xs text-slate-400">Personal best 62 days</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Weekly goal</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-200">
              <Zap size={14} />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">{weeklyGoal}</p>
          <p className="mt-1 text-xs text-slate-400">3 hours remaining</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Rank</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-400/10 text-violet-200">
              <Trophy size={14} />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">Top 4%</p>
          <p className="mt-1 text-xs text-slate-400">Orion cohort</p>
        </div>
      </div>
    </motion.article>
  );
}

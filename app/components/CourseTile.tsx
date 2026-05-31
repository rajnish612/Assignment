"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Clock3 } from "lucide-react";

export interface CourseData {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  createdAt: Date;
}

const accentMap = {
  cyan: "from-cyan-400/20 via-transparent to-transparent text-cyan-200",
  violet: "from-violet-400/20 via-transparent to-transparent text-violet-200",
  emerald:
    "from-emerald-400/20 via-transparent to-transparent text-emerald-200",
};

export default function CourseTile({ title, progress }: CourseData) {
  return (
    <motion.article
      className="tile-surface tile-hover flex h-full flex-col justify-between rounded-3xl p-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div>
        <div
          className={`h-10 w-10 rounded-2xl bg-gradient-to-br  mb-4`}
        />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span className="text-white">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-white">
            Continue <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

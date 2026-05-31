"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};
const bar = {
  hidden: { width: 0 },
  show: (progress: number) => ({
    width: `${progress}%`,
    transition: { duration: 1 },
  }),
};
export type CourseData = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  createdAt: Date;
};
import { Brain, Rocket, Code2, Network } from "lucide-react";
const iconMap = {
  Brain,
  Rocket,
  Code2,
  Network,
};

export default function CourseTile({ title, progress, icon_name }: CourseData) {
  const Icon: React.FC = iconMap[icon_name as keyof typeof iconMap] ?? Code2;
  return (
    <motion.article
      variants={item}
      className="tile-surface tile-hover relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5"
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-400/15 via-violet-400/10 to-emerald-400/15 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-white/5"
        whileHover={{
          borderColor: "rgba(255,255,255,0.15)",
        }}
      />
      <Icon />
      <div>
        <div className="mb-4 h-10 w-10 rounded-2xl bg-linear-to-br" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span className="text-white">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <motion.div
            custom={progress}
            variants={bar}
            className="h-full rounded-full bg-linear-to-r from-cyan-400 via-violet-400 to-emerald-400"
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

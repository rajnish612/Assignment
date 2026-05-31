"use client";

import { motion } from "motion/react";
import { Activity, Calendar } from "lucide-react";

const activity = [
  6, 10, 7, 12, 9, 14, 11, 8, 6, 10, 12, 15, 9, 13, 8, 6, 10, 12, 14, 7,
];
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};
export default function ActivityTile() {
  return (
    <motion.article
      variants={item}
      className="tile-surface tile-hover relative col-span-12 flex h-full flex-col overflow-hidden rounded-3xl p-6 md:col-span-4"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-white/5"
        whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Activity
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Learning Pulse
          </h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <Calendar size={12} /> Last 20 days
        </div>
      </div>
      <div className="mt-6 flex flex-1 items-end gap-2">
        {activity.map((value, index) => (
          <motion.div
            key={`${value}-${index}`}
            className="flex-1 rounded-full bg-linear-to-b from-cyan-400/60 via-violet-400/40 to-transparent"
            style={{ height: `${value * 4}px`, transformOrigin: "bottom" }}
            initial={{ scaleY: 0.4, opacity: 0.6 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.02 }}
          />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Activity size={12} /> 132 focus minutes
        </span>
        <span className="text-white">+18% vs last month</span>
      </div>
    </motion.article>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Insights", icon: BarChart3 },
  { label: "Mentors", icon: GraduationCap },
  { label: "Labs", icon: Sparkles },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleLabel = useMemo(
    () => (expanded ? "Collapse menu" : "Expand menu"),
    [expanded]
  );

  return (
    <nav className="relative h-full w-16 shrink-0">
      <motion.div
        className="tile-surface absolute left-0 top-0 h-full w-60 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-900/80"
        animate={{ x: expanded ? 0 : -160, opacity: expanded ? 1 : 0.85 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex h-full flex-col gap-4 px-4 py-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>Orbit</span>
            <motion.button
              className="rounded-full border border-white/10 p-1 text-slate-300"
              onClick={() => setExpanded((value) => !value)}
              aria-label={toggleLabel}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </motion.button>
          </div>
          <div className="flex flex-col gap-2">
            {items.map(({ label, icon: Icon }) => (
              <motion.button
                key={label}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-300"
                type="button"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/70 text-slate-200 group-hover:text-white">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
            <p className="font-semibold text-white">Pro Studio</p>
            <p className="mt-1 text-slate-400">Launch immersive labs with AI tutors.</p>
            <motion.button
              className="mt-3 w-full rounded-full border border-white/20 py-2 text-xs font-semibold text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Upgrade
            </motion.button>
          </div>
        </div>
      </motion.div>
      <div className="flex h-full flex-col items-center gap-6 py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 text-white">
          <Sparkles size={20} />
        </div>
        {items.slice(0, 5).map(({ label, icon: Icon }) => (
          <motion.button
            key={label}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-slate-300"
            aria-label={label}
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <Icon size={18} />
          </motion.button>
        ))}
      </div>
    </nav>
  );
}

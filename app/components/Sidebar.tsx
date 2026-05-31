"use client";

import { useContext, useState } from "react";
import { motion } from "motion/react";

import {
  X,
  BarChart3,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";
import { SideBarStateContext } from "./BentoStagger";
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};
const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Insights", icon: BarChart3 },
  { label: "Mentors", icon: GraduationCap },
  { label: "Labs", icon: Sparkles },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const sideBarContenxt = useContext(SideBarStateContext);

  const [activeItem, setActiveItem] = useState(items[0].label);

  return (
    <motion.aside
      animate={{
        width: sideBarContenxt?.collapse ? 0 : "100%",
      }}
      transition={{
        duration: 1,
      }}
      className={`h-full  max-w-xs absolute z-10 w-0   overflow-hidden `}
    >
      <motion.div
        variants={item}
        className="tile-surface relative h-full w-full  flex flex-col  justify-start gap-y-6   p-4    py-20  border border-white/10 bg-linear-to-b from-slate-950/95 via-slate-950/80 to-slate-900/80"
      >
        <div
          onClick={() => sideBarContenxt?.setCollapse(true)}
          className="rounded-full tile-surface hover:scale-[1.2] transition-all  absolute  top-3 right-2 p-2"
        >
          <X size={20} />
        </div>
        {items.map(({ label, icon: Icon }) => {
          const isActive = activeItem === label;

          return (
            <motion.button
              key={label}
              className="group  relative flex w-full items-center gap-3  rounded-xl px-3 py-2 text-left text-sm text-slate-300"
              type="button"
              onClick={() => setActiveItem(label)}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {isActive ? (
                <motion.span
                  layoutId="sidebar-nav-highlight"
                  className="absolute inset-0 rounded-xl bg-white/8 ring-1 ring-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              ) : null}
              <span
                className={`relative flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300 ${
                  isActive
                    ? "bg-slate-900/90 text-white"
                    : "bg-slate-900/70 text-slate-200 group-hover:text-white"
                }`}
              >
                <Icon size={18} />
              </span>
              <span
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-300"
                }`}
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.aside>
  );
}

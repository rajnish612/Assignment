import { Activity, Calendar } from "lucide-react";

const activity = [
  6, 10, 7, 12, 9, 14, 11, 8, 6, 10, 12, 15, 9, 13, 8, 6, 10, 12, 14, 7,
];

export default function ActivityTile() {
  return (
    <article className="tile-surface tile-hover col-span-12 flex h-full flex-col rounded-3xl p-6 md:col-span-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Activity</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Learning Pulse</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <Calendar size={12} /> Last 20 days
        </div>
      </div>
      <div className="mt-6 flex flex-1 items-end gap-2">
        {activity.map((value, index) => (
          <div
            key={`${value}-${index}`}
            className="flex-1 rounded-full bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent"
            style={{ height: `${value * 4}px` }}
          />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Activity size={12} /> 132 focus minutes
        </span>
        <span className="text-white">+18% vs last month</span>
      </div>
    </article>
  );
}

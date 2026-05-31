import ActivityTile from "./components/ActivityTile";
import CourseTile, { type CourseTileData } from "./components/CourseTile";
import HeroTile from "./components/HeroTile";
import Sidebar from "./components/Sidebar";

const courses: CourseTileData[] = [
  {
    id: "course-orbit",
    title: "Quantum Interface Design",
    subtitle: "Adaptive pathways · 12 modules",
    progress: 62,
    nextSession: "Tonight · 19:30",
    accent: "cyan",
  },
  {
    id: "course-pulse",
    title: "Neural Systems Lab",
    subtitle: "Realtime diagnostics · 8 labs",
    progress: 41,
    nextSession: "Tomorrow · 08:00",
    accent: "violet",
  },
  {
    id: "course-aurora",
    title: "Holographic Storytelling",
    subtitle: "Immersive narratives · 10 lessons",
    progress: 78,
    nextSession: "Friday · 14:00",
    accent: "emerald",
  },
];

export default function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090b14] text-white">
      <div className="noise-layer absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute left-1/3 top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute right-0 top-32 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl gap-6 px-6 py-8">
        <aside className="hidden md:flex">
          <Sidebar />
        </aside>
        <main className="flex flex-1 flex-col gap-6">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Overview</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Student Dashboard</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition-transform duration-300 hover:scale-105">
                Sync
              </button>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-300">Live data</span>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-12 gap-6">
            <HeroTile name="Aria" streakDays={28} weeklyGoal="7.5 hrs" />
            <ActivityTile />
          </section>

          <section className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Active Courses</h3>
              <p className="text-xs text-slate-400">Personalized learning lineup</p>
            </div>
            <button className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition-transform duration-300 hover:scale-105">
              View all
            </button>
          </section>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseTile key={course.id} {...course} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

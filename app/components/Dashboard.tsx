import HeroTile from "./HeroTile";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import CourseErrorState from "./CourseErrorState";
import ActivityTile from "./ActivityTile";
import CourseTile from "./CourseTile";
import Sidebar from "./Sidebar";
import BentoStagger from "./BentoStagger";

const Dashboard = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load courses:", error);
    return (
      <CourseErrorState message="We could not connect to the database. Please try again in a moment." />
    );
  }
  return (
    <BentoStagger>
      <Sidebar />
      <div className="flex flex-1 px-5 md:px-10 lg:px-15 py-15 flex-col gap-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Student Dashboard
            </h2>
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

          <section className="grid col-span-12 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses?.map((course) => (
              <CourseTile key={course.id} {...course} />
            ))}
          </section>
        </section>
      </div>
    </BentoStagger>
  );
};

export default Dashboard;

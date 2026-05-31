import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import CourseTile from "./CourseTile";
import CoursesGrid from "./CourseGrid";

export default async function CoursesSection() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="col-span-full text-center text-slate-400 py-10">
        Failed to load courses. Please try again later.
      </div>
    );
  }
  return (
    <CoursesGrid>
      {courses?.map((course) => (
        <CourseTile key={course.id} {...course} />
      ))}
    </CoursesGrid>
  );
}

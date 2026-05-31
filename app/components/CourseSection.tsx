import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import CourseErrorState from "./CourseErrorState";
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
    console.error("Failed to load courses:", error);
    return (
      <CourseErrorState message="We could not connect to the database. Please try again in a moment." />
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

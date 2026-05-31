"use client";

import { useRouter } from "next/navigation";

export default function CourseErrorState({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        Connection issue
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">
        Could not load courses
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        The database is unavailable right now. The rest of the dashboard stays
        usable.
      </p>
      <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3 text-left text-xs text-slate-400 wrap-break-word">
        {message}
      </p>
      <button
        type="button"
        onClick={() => router.refresh()}
        className="mt-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
      >
        Try again
      </button>
    </div>
  );
}
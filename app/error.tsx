"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b14] text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Failed to load dashboard</h2>

        <p className="mt-2 text-slate-400">{error.message}</p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

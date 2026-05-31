export default function CourseSkeleton() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <article
          key={index}
          className="tile-surface flex h-full animate-pulse flex-col justify-between rounded-3xl p-5"
        >
          <div>
            <div className="mb-4 h-10 w-10 rounded-2xl bg-white/10" />

            <div className="h-6 w-3/4 rounded bg-white/10" />
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-3 w-16 rounded bg-white/10" />
              <div className="h-3 w-10 rounded bg-white/10" />
            </div>

            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-white/20" />
            </div>

            <div className="h-4 w-20 rounded bg-white/10" />
          </div>
        </article>
      ))}
    </section>
  );
}

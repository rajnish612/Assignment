export default function BentoSkeleton() {
  return (
    <section className="grid grid-cols-12 gap-6">
      <article className="tile-surface col-span-12 flex h-full animate-pulse flex-col justify-between gap-6 rounded-3xl p-6 md:col-span-8">
        <div>
          <div className="h-3 w-36 rounded-full bg-white/10" />
          <div className="mt-4 h-10 w-2/3 rounded-2xl bg-white/10" />
          <div className="mt-3 h-4 w-full rounded-full bg-white/10" />
          <div className="mt-2 h-4 w-5/6 rounded-full bg-white/10" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="h-3 w-20 rounded-full bg-white/10" />
              <div className="mt-3 h-8 w-16 rounded-full bg-white/10" />
              <div className="mt-2 h-3 w-24 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </article>

      <article className="tile-surface col-span-12 flex h-full animate-pulse flex-col rounded-3xl p-6 md:col-span-4">
        <div className="h-3 w-24 rounded-full bg-white/10" />
        <div className="mt-4 h-6 w-40 rounded-full bg-white/10" />
        <div className="mt-6 flex flex-1 items-end gap-2">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="flex-1 rounded-full bg-white/10"
              style={{ height: `${40 + (index % 5) * 8}px` }}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="h-3 w-28 rounded-full bg-white/10" />
          <div className="h-3 w-20 rounded-full bg-white/10" />
        </div>
      </article>

      <section className="col-span-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
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
    </section>
  );
}

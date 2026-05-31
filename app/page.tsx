import { Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import BentoSkeleton from "./components/BentoSkeleton";

export default async function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090b14] text-white">
      <div className="noise-layer absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute left-1/3 top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute right-0 top-32 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[160px]" />

      

      <main className="min-h-screen">
        <Suspense fallback={<BentoSkeleton />}>
          <Dashboard />
        </Suspense>
      </main>
    </div>
  );
}

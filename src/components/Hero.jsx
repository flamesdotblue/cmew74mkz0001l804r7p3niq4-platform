import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-12 md:grid-cols-2 md:pt-16 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Real‑time cardiac telemetry
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sci‑Fi Heart Diagnostics, Built for Precision
          </h1>
          <p className="mt-5 max-w-xl text-slate-300/90">
            A cinematic dark‑themed lab that blends advanced imaging, AI signal processing, and clinician‑grade analytics to decode your heart’s story.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#diagnostics" className="inline-flex justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">
              Explore Diagnostics
            </a>
            <a href="#reports" className="inline-flex justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold text-white/90">
              See Sample Report
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <Metric value="<2s" label="Report Latency" />
            <Metric value="99.97%" label="Uptime SLA" />
            <Metric value="HIPAA" label="Compliant" />
          </div>
        </div>

        <div className="relative h-[440px] w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="h-full w-full overflow-hidden rounded-lg bg-black/60">
            <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-between text-[10px] uppercase tracking-widest text-slate-400">
            <span>Interactive 3D Heart Model</span>
            <span>Live Telemetry Overlay</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070B] to-transparent" />
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

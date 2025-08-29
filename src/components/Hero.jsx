import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[100svh] overflow-hidden">
      {/* Full-cover Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability overlays (don’t block interactions) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#05070b]/30 via-transparent to-[#05070b]/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#05070b] to-transparent" />

      {/* Foreground content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-16 md:pt-24 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Real‑time cardiac telemetry
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Sci‑Fi Heart Diagnostics, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-400">Built for Precision</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
            PulseLab X blends advanced imaging, AI signal processing, and clinician‑grade analytics to decode your heart’s story—now with an immersive, full‑bleed 3D experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className="text-xs text-slate-300">{label}</div>
    </div>
  );
}

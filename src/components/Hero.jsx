import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const splineRef = useRef(null);

  useEffect(() => {
    // Inject Spline viewer script once
    const id = 'spline-viewer-script';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Create the viewer element after script is scheduled to load
    if (splineRef.current && !splineRef.current.querySelector('spline-viewer')) {
      const viewer = document.createElement('spline-viewer');
      viewer.setAttribute('loading', 'eager');
      viewer.setAttribute('events-target', 'canvas');
      viewer.style.width = '100%';
      viewer.style.height = '100%';
      viewer.url = 'https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode';
      splineRef.current.appendChild(viewer);
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-10 md:grid-cols-2 md:pt-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Next‑Gen Cardiac Diagnostics
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Decode the heart with clinical precision and cosmic clarity
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300">
            AstraCardio blends advanced imaging, AI telemetry, and quantum‑grade signal processing to assess cardiac health in real time. From micro‑arrhythmias to vascular anomalies, insights render as fast as light.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#diagnostics"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_28px_rgba(236,72,153,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-shadow"
            >
              Explore Diagnostics
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Clinical Overview
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <Metric value="<2s" label="Report Latency" />
            <Metric value="99.97%" label="Uptime SLA" />
            <Metric value="HIPAA" label="Compliant" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[440px] w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
        >
          <div
            ref={splineRef}
            className="h-full w-full overflow-hidden rounded-lg bg-black/60"
          />

          <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-between text-[10px] uppercase tracking-widest text-zinc-400">
            <span>Interactive 3D Heart Model</span>
            <span>Live Telemetry Overlay</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className="text-xs text-zinc-400">{label}</div>
    </div>
  );
}

import React from 'react';
import { ActivitySquare, Cpu, Shield, Radar } from 'lucide-react';

const features = [
  {
    title: 'AI EKG Decode',
    desc: 'Beat‑to‑beat classification and arrhythmia detection using transformer models trained on 1M+ tracings.',
    icon: ActivitySquare,
    accent: 'from-fuchsia-500/30 to-cyan-400/30',
  },
  {
    title: 'Echo Imaging',
    desc: 'High‑fidelity ultrasound capture with automated EF, GLS, and valve flow assessments.',
    icon: Radar,
    accent: 'from-cyan-500/30 to-emerald-400/30',
  },
  {
    title: 'Telemetry Cloud',
    desc: 'Continuous patch streaming with anomaly alerts and clinician portal.',
    icon: Cpu,
    accent: 'from-violet-500/30 to-fuchsia-400/30',
  },
  {
    title: 'Clinical‑grade Security',
    desc: 'HIPAA, SOC 2 Type II, and end‑to‑end encryption with real‑time audit trails.',
    icon: Shield,
    accent: 'from-amber-500/30 to-pink-400/30',
  },
];

export default function Diagnostics() {
  return (
    <section id="diagnostics" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Diagnostics Suite</h2>
          <p className="mt-2 text-slate-400">A unified platform that merges imaging, biosignals, and biomarkers—wrapped in a clinician‑friendly UI.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} accent={f.accent}>
              {f.desc}
            </FeatureCard>
          ))}
        </div>

        <div id="reports" className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">Clinician‑Grade Reports</h3>
            <p className="mt-3 text-slate-400">Every scan generates a structured PDF and FHIR resources, including annotated waveforms, echo clips, and lab trends. Role‑based access with shareable links.</p>
            <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
              <li>Automated EF, GLS, and valve gradients</li>
              <li>Arrhythmia burden and HRV indices</li>
              <li>Biomarker trend projections and thresholds</li>
            </ul>
          </div>
          <div className="space-y-2">
            <CodeLine label="EF" value="62%" color="text-emerald-300" />
            <CodeLine label="GLS" value="-19.8%" color="text-cyan-300" />
            <CodeLine label="HRV (RMSSD)" value="42 ms" color="text-violet-300" />
            <CodeLine label="Arrhythmia" value="No sustained events" color="text-fuchsia-300" />
            <CodeLine label="Troponin" value="6 ng/L" color="text-amber-300" />
            <CodeLine label="Risk Index" value="Low" color="text-emerald-300" />
          </div>
        </div>

        <div id="contact" className="mt-12">
          <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-cyan-500/10 to-violet-500/20 p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Book a Sci‑Fi Cardiac Scan</h3>
              <p className="mt-2 text-slate-300">Same‑week availability. Sessions include consult, scan, and digital report delivery.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Your name" />
                <input type="email" className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" />
                <button className="rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">Request Slot</button>
              </form>
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function FeatureCard({ icon: Icon, title, accent, children }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors">
      <div className={`pointer-events-none absolute -top-28 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-30 group-hover:opacity-40`} />
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-fuchsia-300" />
        </div>
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{children}</p>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ label, value, color }) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm font-mono bg-black/30 rounded-md px-3 py-2 border border-white/5">
      <span className="text-slate-400">{label}</span>
      <span className={color}>{value}</span>
    </div>
  );
}

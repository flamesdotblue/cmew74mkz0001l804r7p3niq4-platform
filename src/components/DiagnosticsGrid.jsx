import React from 'react';

const features = [
  {
    title: 'AI EKG Decode',
    desc: 'Beat‑to‑beat classification and arrhythmia detection using transformer models trained on 1M+ tracings.',
    color: 'text-cyan-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M3 12h4l2-5 4 10 2-5h6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    )
  },
  {
    title: 'Echo Imaging',
    desc: 'High‑fidelity ultrasound capture with automated EF, GLS, and valve flow assessments.',
    color: 'text-fuchsia-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"/></svg>
    )
  },
  {
    title: 'Telemetry Cloud',
    desc: 'Continuous Holter + patch streaming with anomaly alerts and clinician portal.',
    color: 'text-violet-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M6 15a4 4 0 110-8 5 5 0 019.6 1.5A4.5 4.5 0 1117.5 15H6z" fill="currentColor"/></svg>
    )
  },
  {
    title: 'Biomarker Panel',
    desc: 'Troponin I/T, NT‑proBNP, hs‑CRP with trend modeling and risk stratification.',
    color: 'text-amber-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M7 2h10l1 6-6 14-6-14 1-6z" fill="currentColor"/></svg>
    )
  },
  {
    title: 'Stress & Recovery',
    desc: 'VO₂ max estimation, HRV spectral analysis, and autonomic balance index.',
    color: 'text-emerald-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M4 4h16v5H4zM4 15h16v5H4z" fill="currentColor"/></svg>
    )
  },
  {
    title: 'Genetic Risk',
    desc: 'Polygenic risk scoring integrated with phenotype for precision prevention.',
    color: 'text-rose-300',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M7 4c6 0 6 16 10 16m0-16C11 4 11 20 7 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    )
  }
];

function ReportLine({ label, value, colorClass }) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm font-mono bg-black/30 rounded-md px-3 py-2 border border-white/5">
      <span className="text-slate-400">{label}</span>
      <span className={colorClass}>{value}</span>
    </div>
  );
}

export default function DiagnosticsGrid() {
  return (
    <section id="diagnostics" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Diagnostics Suite</h2>
        <p className="mt-2 text-slate-400 max-w-2xl">A unified platform that merges imaging, biosignals, and biomarkers—wrapped in a clinician‑friendly UI.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <div className={f.color}>{f.icon}</div>
                </div>
                <div>
                  <h3 className="text-white font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="reports" className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">Clinician‑Grade Reports</h3>
            <p className="mt-3 text-slate-400">Every scan generates a structured PDF and FHIR resources, including annotated waveforms, echo clips, and lab trends. Shareable links with role‑based access.</p>
            <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
              <li>Automated EF, GLS, and valve gradients</li>
              <li>Arrhythmia burden and HRV indices</li>
              <li>Biomarker trend projections and thresholds</li>
            </ul>
          </div>
          <div className="space-y-2">
            <ReportLine label="EF" value="62%" colorClass="text-emerald-300" />
            <ReportLine label="GLS" value="-19.8%" colorClass="text-cyan-300" />
            <ReportLine label="HRV (RMSSD)" value="42 ms" colorClass="text-violet-300" />
            <ReportLine label="Arrhythmia" value="No sustained events" colorClass="text-fuchsia-300" />
            <ReportLine label="Troponin" value="6 ng/L" colorClass="text-amber-300" />
            <ReportLine label="Risk Index" value="Low" colorClass="text-emerald-300" />
          </div>
        </div>

        <div id="contact" className="mt-14">
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

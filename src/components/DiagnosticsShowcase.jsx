import React from 'react';
import { Cpu, ActivitySquare, ShieldCheck, Radar } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, children, accent = 'from-fuchsia-500 to-cyan-500' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
  >
    <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-30`} />
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-white/5 blur-md" />
        <Icon className="relative h-6 w-6 text-fuchsia-300" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="mt-3 text-sm text-zinc-300">{children}</div>
    <div className="mt-5">
      <MiniTelemetry />
    </div>
  </motion.div>
);

const MiniTelemetry = () => {
  return (
    <div className="grid grid-cols-5 items-end gap-1 h-16">
      {[10, 35, 22, 48, 30].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t bg-gradient-to-t from-fuchsia-500/40 to-cyan-400/60"
            style={{ height: `${h + 8}%`, minHeight: 8 }}
          />
          <span className="text-[10px] text-zinc-500">t{i + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default function DiagnosticsShowcase() {
  return (
    <section id="diagnostics" className="relative mx-auto mt-20 max-w-7xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Clinical diagnostics reimagined
        </motion.h2>
        <p className="mt-3 text-zinc-300">
          Our lab-grade platform fuses multi-modal imaging with AI to generate explainable cardiac reports and risk stratification in seconds.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card icon={ActivitySquare} title="Arrhythmia Radar">
          Detects micro‑arrhythmic events with millisecond granularity. Adaptive thresholds reduce false positives by 42%.
        </Card>
        <Card icon={Cpu} title="AI Signal Cortex" accent="from-cyan-500 to-emerald-500">
          Transformer pipelines denoise, segment, and label signals for precise phenotyping across cohorts.
        </Card>
        <Card icon={Radar} title="Vascular Imaging" accent="from-violet-500 to-fuchsia-500">
          3D reconstruction reveals occlusions and flow irregularities. Instant cross‑sectional insights.
        </Card>
        <Card icon={ShieldCheck} title="Clinical‑grade Security" accent="from-amber-500 to-pink-500">
          HIPAA, SOC 2 Type II, and end‑to‑end encryption with real‑time audit trails.
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
      >
        <span className="text-sm text-zinc-300">AstraCardio integrates with leading EHR systems</span>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
          <LogoChip>Epic</LogoChip>
          <LogoChip>Cerner</LogoChip>
          <LogoChip>Allscripts</LogoChip>
          <LogoChip>FHIR</LogoChip>
          <LogoChip>HL7</LogoChip>
        </div>
      </motion.div>
    </section>
  );
}

const LogoChip = ({ children }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">{children}</span>
);

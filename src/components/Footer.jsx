import React from 'react';
import { HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <div className="flex items-center gap-2 text-slate-300">
          <HeartPulse className="h-5 w-5 text-fuchsia-400" />
          <span>PulseLab X — Sci‑Fi Heart Specialist Lab</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-200">Terms</a>
          <a href="#contact" className="hover:text-slate-200">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} PulseLab X</p>
      </div>
    </footer>
  );
}

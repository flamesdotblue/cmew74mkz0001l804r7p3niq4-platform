import React from 'react';
import { HeartPulse } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#05070bcc]/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400">
            <HeartPulse className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold tracking-tight text-white">PulseLab X</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white transition-colors" href="#diagnostics">Diagnostics</a>
          <a className="hover:text-white transition-colors" href="#reports">Reports</a>
          <a className="hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20">
          Book Scan
        </a>
      </div>
    </header>
  );
}

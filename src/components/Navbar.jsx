import React from 'react';
import { HeartPulse, FlaskConical, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ children }) => (
  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative">
            <span className="absolute -inset-2 bg-fuchsia-500/20 rounded-full blur" />
            <HeartPulse className="relative h-6 w-6 text-fuchsia-400" />
          </span>
          <span className="font-semibold tracking-tight">AstraCardio Labs</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-8">
          <NavItem>Platform</NavItem>
          <NavItem>Clinical</NavItem>
          <NavItem>Security</NavItem>
          <NavItem>Contact</NavItem>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
            <FlaskConical className="h-4 w-4 text-cyan-300" />
            Request Demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm text-white shadow-[0_0_24px_rgba(236,72,153,0.25)] hover:shadow-[0_0_36px_rgba(6,182,212,0.25)] transition-shadow">
            <Sparkles className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

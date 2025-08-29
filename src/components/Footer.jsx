import React from 'react';
import { HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-zinc-300">
            <HeartPulse className="h-5 w-5 text-fuchsia-400" />
            <span>AstraCardio Labs</span>
          </div>
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} AstraCardio Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

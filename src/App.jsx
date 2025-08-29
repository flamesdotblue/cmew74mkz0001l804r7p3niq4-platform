import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DiagnosticsGrid from './components/DiagnosticsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-slate-200 selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_0%,rgba(56,189,248,0.12),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_85%_10%,rgba(168,85,247,0.10),rgba(0,0,0,0))]" />
      </div>

      <NavBar />
      <main>
        <Hero />
        <DiagnosticsGrid />
      </main>
      <Footer />
    </div>
  );
}

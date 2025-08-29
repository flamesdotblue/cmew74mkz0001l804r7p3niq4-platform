import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagnosticsShowcase from './components/DiagnosticsShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter selection:bg-fuchsia-500 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/10 via-emerald-700/5 to-black" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <DiagnosticsShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;

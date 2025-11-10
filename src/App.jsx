import React from 'react';
import Hero from './components/Hero';
import InfoList from './components/InfoList';
import Description from './components/Description';
import Visual from './components/Visual';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-blue-100 font-inter text-slate-800">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-sky-100/30 to-blue-200/40 pointer-events-none" />

      <header className="relative z-10">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white font-bold shadow-md">FR</span>
            <span className="font-semibold">Fun Run GBK 2025</span>
          </div>
          <a href="#daftar" className="hidden md:inline-flex px-4 py-2 text-sm rounded-lg bg-white/70 backdrop-blur shadow-sm ring-1 ring-white/60 hover:bg-white">Informasi</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Visual />
        <InfoList />
        <Description />
        <div id="daftar">
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

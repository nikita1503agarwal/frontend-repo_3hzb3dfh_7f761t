import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-sky-300/40 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-white/60">
          Event Olahraga & Komunitas
        </span>
        <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-slate-800 md:text-6xl">
          Fun Run GBK — <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-700">20 November 2025</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-slate-700 max-w-3xl">
          Ayo ikuti lari santai paling seru di Jakarta! Musik, photo booth, goodie bag, dan suasana meriah untuk semua usia.
        </p>
      </div>
    </section>
  );
};

export default Hero;

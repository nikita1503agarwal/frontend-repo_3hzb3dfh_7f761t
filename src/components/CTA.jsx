import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-8 md:py-10">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <a
          href="https://wa.me/6289669087600"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-sky-300 transition"
        >
          Daftar & Chat via WhatsApp
        </a>
        <p className="mt-3 text-sm text-slate-600">
          Atau hubungi langsung: <a className="font-medium underline decoration-sky-400 decoration-2 underline-offset-2" href="tel:+6289669087600">0896-6908-7600</a>
        </p>
      </div>
    </section>
  );
};

export default CTA;

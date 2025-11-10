import React from 'react';

const Visual = () => {
  return (
    <section className="relative py-6 md:py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl shadow-xl border border-white/60 bg-white/60 backdrop-blur">
          {/* Gambar estetis dengan angle kamera bawah */}
          <img
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1600&q=80"
            alt="Sudut kamera bawah kaki pelari yang sedang berlari, menonjolkan energi dan gerak"
            className="w-full h-64 md:h-[26rem] object-cover"
            loading="lazy"
          />
          {/* Overlay lembut agar teks di atas tetap terbaca bila diperlukan */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Visual;

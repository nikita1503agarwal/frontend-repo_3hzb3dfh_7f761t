import React from 'react';

const items = [
  { icon: '📍', label: 'Lokasi', value: 'Stadion Gelora Bung Karno (GBK)' },
  { icon: '📅', label: 'Tanggal', value: '20 November 2025' },
  { icon: '👟', label: 'Format', value: 'Fun Run santai — semua level bisa ikut' },
];

const InfoList = () => {
  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-sm p-5 flex items-start gap-3"
            >
              <div className="text-2xl select-none" aria-hidden>
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-0.5 font-semibold text-slate-800">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoList;

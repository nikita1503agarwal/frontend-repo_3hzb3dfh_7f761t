import React, { useEffect, useMemo, useState } from 'react';

// Countdown to event: 20 November 2025, 06:00 WIB (Asia/Jakarta, UTC+7)
const EVENT_ISO = '2025-11-20T06:00:00+07:00';

function getTimeParts(diffMs) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const targetDate = useMemo(() => new Date(EVENT_ISO), []);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = targetDate.getTime() - now.getTime();
  const { days, hours, minutes, seconds } = getTimeParts(diff);
  const isPast = diff <= 0;

  return (
    <section aria-label="Hitung Mundur Acara" className="container mx-auto px-4 py-6 sm:py-8">
      <div className="relative mx-auto max-w-4xl rounded-2xl bg-white/80 backdrop-blur shadow-lg ring-1 ring-white/60">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-white/0 to-blue-100/60 rounded-2xl pointer-events-none" />
        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">Hitung Mundur ke Acara</h2>
              <p className="text-slate-600">Fun Run GBK — 20 November 2025</p>
            </div>
            {isPast ? (
              <div className="text-green-700 font-semibold bg-green-50 border border-green-200 px-4 py-2 rounded-lg">Acara telah dimulai!</div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <TimeBox label="Hari" value={days} />
                <TimeBox label="Jam" value={hours} />
                <TimeBox label="Menit" value={minutes} />
                <TimeBox label="Detik" value={seconds} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 min-w-[64px]">
      <div className="text-2xl sm:text-3xl font-bold tabular-nums text-slate-900">{String(value).padStart(2, '0')}</div>
      <div className="text-xs sm:text-sm text-slate-500">{label}</div>
    </div>
  );
}

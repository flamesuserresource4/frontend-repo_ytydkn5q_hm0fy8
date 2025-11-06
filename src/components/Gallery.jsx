import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531266752426-3f2320b47985?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200&auto=format&fit=crop',
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="galeri" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Galeri Kegiatan</h2>
            <p className="text-gray-600 mt-1">Dokumentasi momen terbaik siswa dan guru.</p>
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">Lihat Semua</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <img src={src} alt={`Galeri ${i + 1}`} className="h-40 sm:h-56 w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <img src={active} alt="Preview" className="max-h-[80vh] max-w-5xl rounded-lg shadow-2xl" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
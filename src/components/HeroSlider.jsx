import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Sekolah Unggul Berakhlak Mulia',
    subtitle: 'Mencetak generasi berprestasi melalui pendidikan berkualitas dan lingkungan belajar yang aman dan nyaman.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Fasilitas Lengkap & Modern',
    subtitle: 'Laboratorium, perpustakaan, ruang multimedia, serta fasilitas olahraga untuk mendukung potensi siswa.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Guru Profesional & Berpengalaman',
    subtitle: 'Pendampingan belajar yang humanis dengan kurikulum terkini dan kegiatan ekstrakurikuler yang variatif.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="beranda" className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={idx !== current}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h2 className="text-3xl sm:text-5xl font-bold leading-tight drop-shadow">{s.title}</h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 drop-shadow">
                  {s.subtitle}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#pengumuman-berita" className="inline-flex px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 transition text-sm font-medium">Lihat Info Terbaru</a>
                  <a href="#kontak" className="inline-flex px-5 py-2.5 rounded-md bg-white/10 ring-1 ring-white/30 hover:bg-white/20 transition text-sm font-medium">Hubungi Kami</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'bg-white/60 hover:bg-white'}`}
            aria-label={`Slide ${i + 1}`}
          />)
        )}
      </div>
    </section>
  );
};

export default HeroSlider;
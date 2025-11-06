import React from 'react';

const data = {
  pengumuman: [
    {
      title: 'Penerimaan Peserta Didik Baru (PPDB) 2025',
      date: '10 Nov 2025',
      body: 'Pendaftaran dibuka secara online. Silakan siapkan berkas persyaratan dan pantau jadwal seleksi di website ini.'
    },
    {
      title: 'Libur Akhir Semester Ganjil',
      date: '20 Des 2025',
      body: 'Kegiatan belajar mengajar akan diliburkan mulai 20 Desember 2025 hingga 3 Januari 2026.'
    },
  ],
  berita: [
    {
      title: 'Tim Sains Raih Juara 1 Olimpiade Kota',
      date: '02 Nov 2025',
      body: 'Selamat kepada tim sains yang berhasil meraih juara 1 tingkat kota. Terima kasih atas dukungan semua pihak.'
    },
    {
      title: 'Peresmian Laboratorium Komputer Baru',
      date: '28 Okt 2025',
      body: 'Laboratorium komputer baru dengan 40 unit siap digunakan untuk menunjang pembelajaran TIK.'
    },
  ]
};

const Card = ({ item }) => (
  <article className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
    <h3 className="font-semibold text-gray-900">{item.title}</h3>
    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
    <p className="text-sm text-gray-600 mt-3">{item.body}</p>
  </article>
);

const NewsAnnouncements = () => {
  return (
    <section id="pengumuman-berita" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Pengumuman & Berita</h2>
            <p className="text-gray-600 mt-1">Info terbaru seputar kegiatan dan kebijakan sekolah.</p>
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">Lihat Semua</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Pengumuman</h3>
            <div className="grid gap-4">
              {data.pengumuman.map((p, i) => <Card key={i} item={p} />)}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Berita</h3>
            <div className="grid gap-4">
              {data.berita.map((b, i) => <Card key={i} item={b} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
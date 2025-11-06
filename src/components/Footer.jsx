import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Sekolah Negeri Harapan</h3>
          <p className="text-sm text-gray-400 mt-3">Membangun masa depan cerah melalui pendidikan berkualitas, karakter kuat, dan keterampilan abad 21.</p>
        </div>
        <div>
          <h4 className="font-medium">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Jl. Pendidikan No. 123, Kota Bahagia</li>
            <li>Telp: (021) 123-4567</li>
            <li>Email: info@sekolahharapan.sch.id</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Jam Layanan</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Senin - Jumat: 07.00 - 15.00</li>
            <li>Sabtu: 08.00 - 12.00</li>
            <li>Minggu & Libur Nasional: Tutup</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sekolah Negeri Harapan. All rights reserved.</p>
          <p>Dibuat dengan ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Navbar = () => {
  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#pengumuman-berita', label: 'Pengumuman & Berita' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">S</div>
          <div>
            <p className="text-sm text-gray-500 leading-none">Sekolah</p>
            <h1 className="text-lg font-semibold leading-none">Negeri Harapan</h1>
          </div>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-blue-600 transition-colors">{item.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-blue-700 transition-colors"
        >
          PPDB 2025
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
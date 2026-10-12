'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60] will-change-transform transform-gpu"
        style={{ scaleX }}
      />

      {/* Floating or Static Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 px-4 lg:px-8'
            : 'py-6 px-6 lg:px-12 relative'
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-300 will-change-[backdrop-filter,background-color] ${
            scrolled
              ? 'bg-white/80 backdrop-blur-md md:backdrop-blur-lg px-6 py-2.5 rounded-full border border-gray-200/80 shadow-md'
              : ''
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 drop-shadow-md group-hover:drop-shadow-lg group-hover:scale-105 ${
              scrolled ? '' : 'brightness-[100] saturate-0'
            }`}>
              <Image src="/logo.png" alt="Alurin Logo" width={32} height={32} className="w-full h-full object-contain" priority />
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}>
              Alurin
            </span>
          </Link>

          {/* Right Action / Menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/coba-demo"
              className={`hidden md:inline-flex text-xs font-semibold px-4 h-9 items-center justify-center rounded-full transition-all ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Coba Demo
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-navy-900 text-white rounded-full px-4 h-9 text-xs font-semibold shadow hover:opacity-95 transition-opacity"
              aria-label="Buka Menu"
            >
              <div className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
                <span className="bg-white rounded-full"></span>
                <span className="bg-white rounded-full"></span>
                <span className="bg-white rounded-full"></span>
                <span className="bg-white rounded-full"></span>
              </div>
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex justify-end transition-opacity">
          <div className="w-full max-w-[360px] bg-white h-full p-6 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <span className="font-bold text-navy-900">Navigasi Alurin</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                  aria-label="Tutup Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1 py-4 text-sm font-medium text-navy-700">
                {[
                  { name: 'Fitur', path: '/fitur' },
                  { name: 'Solusi', path: '/solusi' },
                  { name: 'Harga', path: '/harga' },
                  { name: 'Integrasi', path: '/integrasi' },
                  { name: 'Enterprise', path: '/enterprise' },
                  { name: 'Private Platform', path: '/private-platform' },
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Kontak', path: '/kontak' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-100">
              <Link
                href="/harga"
                onClick={() => setIsOpen(false)}
                className="w-full h-11 border border-gray-200 rounded-field font-medium text-navy-900 flex items-center justify-center text-sm hover:bg-gray-50"
              >
                Lihat Harga
              </Link>
              <Link
                href="/coba-demo"
                onClick={() => setIsOpen(false)}
                className="w-full h-11 bg-blue-600 text-white rounded-field font-medium flex items-center justify-center text-sm shadow hover:bg-blue-700"
              >
                Coba Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

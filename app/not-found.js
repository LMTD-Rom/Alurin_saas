import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-navy-900 mb-4">404 - Halaman Tidak Ditemukan</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

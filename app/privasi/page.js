import PageShell from '@/components/PageShell';
import { FadeIn } from '@/components/Motion';

export default function PrivasiPage() {
  return (
    <PageShell heroTitle="Kebijakan Privasi" heroSubtitle={`Diperbarui terakhir: ${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}`}>
      <FadeIn className="max-w-[760px] mx-auto prose prose-sm text-gray-600 prose-headings:text-navy-900 prose-a:text-blue-600">
        <div className="glass-card rounded-card p-8">
          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">Pengumpulan Data</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Alurin mengumpulkan data hanya yang diperlukan untuk pengoperasian platform, meliputi nama, alamat email perusahaan, informasi login, dan aktivitas di dalam platform SaaS. Kami tidak menjual data pelanggan kepada pihak mana pun.
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">Penggunaan Data</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Data operasional dan file dokumen yang Anda unggah ke dalam sistem sepenuhnya menjadi milik perusahaan Anda. Kami memprosesnya hanya untuk menampilkannya kembali ke layar Anda (penyediaan layanan workflow dan reporting).
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">Keamanan Infrastruktur</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Data pelanggan disimpan pada infrastruktur cloud berstandar tinggi. Enkripsi AES-256 diterapkan pada data yang tersimpan di dalam database kami (data at rest), serta transmisi SSL/TLS saat berpindah melalui internet (data in transit).
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">Retensi Data</h2>
          <p className="text-[14px] leading-relaxed">
            Data akan disimpan selama Anda masih terdaftar sebagai pengguna aktif. Jika Anda berhenti berlangganan, seluruh data operasional akan dihapus dari server kami setelah melewati masa grace period (30 hari) pasca-terminasi.
          </p>
        </div>
      </FadeIn>
    </PageShell>
  );
}

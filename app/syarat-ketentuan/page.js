import PageShell from '@/components/PageShell';
import { FadeIn } from '@/components/Motion';

export default function SyaratKetentuanPage() {
  return (
    <PageShell heroTitle="Syarat & Ketentuan Layanan" heroSubtitle="Ketentuan penggunaan platform dan layanan subscription Alurin.">
      <FadeIn className="max-w-[760px] mx-auto text-gray-600">
        <div className="glass-card rounded-card p-8">
          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">1. Penerimaan Ketentuan</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Dengan mendaftar, mengakses, atau menggunakan Alurin, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tertulis di dalam halaman ini.
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">2. Akun & Keamanan</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Anda bertanggung jawab penuh atas kerahasiaan kredensial login akun Anda dan segala aktivitas yang terjadi di bawah akun tersebut. Beritahu kami segera bila mendeteksi pelanggaran keamanan atau penggunaan akun yang tidak sah.
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">3. Biaya Layanan & Pembayaran</h2>
          <p className="text-[14px] leading-relaxed mb-6">
            Biaya langganan ditagihkan di awal setiap periode penagihan (bulanan atau tahunan). Jika pembayaran tidak diterima pada tanggal jatuh tempo, akses akun Anda dapat ditangguhkan hingga pelunasan diselesaikan.
          </p>

          <h2 className="text-[20px] font-semibold text-navy-900 mb-4">4. Batasan Tanggung Jawab</h2>
          <p className="text-[14px] leading-relaxed">
            Alurin tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari ketidakmampuan Anda menggunakan platform atau gangguan pihak ketiga (misalnya kegagalan provider API WhatsApp).
          </p>
        </div>
      </FadeIn>
    </PageShell>
  );
}

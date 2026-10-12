import PageShell from '@/components/PageShell';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion';
import { FAQS } from '@/lib/content';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  // Combine existing FAQs with the additional requested ones
  const allFaqs = [
    ...FAQS,
    {
      q: 'Apakah bisa digunakan untuk multi-cabang?',
      a: 'Ya, mulai dari paket Scale, Anda bisa mengelola beberapa lokasi atau cabang dengan akses data yang tersentralisasi namun operasional dapat dipisahkan per cabang.',
    },
    {
      q: 'Bagaimana cara melakukan upgrade paket langganan?',
      a: 'Anda dapat melakukan upgrade kapan saja melalui dashboard admin. Biaya akan disesuaikan secara prorata pada siklus penagihan berikutnya.',
    },
    // Note: Export data FAQ is already in lib/content.js
  ];

  return (
    <PageShell
      badgeText="BANTUAN & FAQ"
      heroTitle="Pertanyaan yang Sering Diajukan"
      heroSubtitle="Temukan jawaban cepat seputar fitur, paket langganan, dan keamanan."
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10">
          <p className="text-[14px] text-gray-600">
            Berikut adalah ringkasan pertanyaan yang sering ditanyakan oleh pelanggan kami. Jika Anda tidak 
            menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim support kami.
          </p>
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {allFaqs.map((faq, i) => (
            <StaggerItem key={i}>
              <details className="group glass-card rounded-xl bg-white/50 backdrop-blur-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[14px] text-navy-900 group-open:text-blue-600 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 shrink-0 text-gray-400 group-open:text-blue-600" />
                </summary>
                <div className="p-5 pt-0 text-[13px] text-gray-600 border-t border-gray-100/50 mt-1 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageShell>
  );
}

import PageShell from '@/components/PageShell';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/Motion';
import { PRICING_PLANS } from '@/lib/content';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function HargaPage() {
  return (
    <PageShell
      badgeText="PAKET & HARGA"
      heroTitle="Pilih Sesuai Kebutuhan Tim Anda"
      heroSubtitle="Mulai gratis atau pilih paket untuk tim yang lebih besar."
    >
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 mb-16">
        {PRICING_PLANS.map((plan) => (
          <StaggerItem key={plan.name}>
            <div className={`rounded-card p-6 flex flex-col h-full relative ${plan.cardBlue ? 'bg-card-blue text-white shadow-strong overflow-hidden' : 'glass-card'}`}>
              {plan.cardBlue && (
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,.25) 50%, transparent 70%)' }} />
              )}
              <div className="relative">
                <h3 className={`text-[18px] font-semibold ${plan.cardBlue ? 'text-white' : 'text-navy-900'}`}>{plan.name}</h3>
                <p className={`text-[11px] mt-1 ${plan.cardBlue ? 'text-white/70' : 'text-gray-500'}`}>{plan.desc}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-[28px] font-bold tracking-tight ${plan.cardBlue ? 'text-white' : 'text-navy-900'}`}>{plan.price}</span>
                  <span className={`text-[12px] ${plan.cardBlue ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <div className={`h-px my-4 ${plan.cardBlue ? 'bg-white/20' : 'bg-gray-100'}`} />
                <ul className="flex flex-col gap-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.cardBlue ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className={plan.cardBlue ? 'text-white/90' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/coba-demo" className={`flex items-center justify-center w-full h-10 rounded-field text-[13px] font-semibold transition-colors ${plan.cardBlue ? 'bg-white text-blue-600 hover:bg-gray-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  {plan.cta}
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="glass-card rounded-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100 bg-white/40">
                <th className="py-4 px-6 font-semibold text-[14px] text-navy-900 w-1/3">Fitur</th>
                <th className="py-4 px-4 font-semibold text-[14px] text-navy-900 text-center">Starter</th>
                <th className="py-4 px-4 font-semibold text-[14px] text-navy-900 text-center">Business</th>
                <th className="py-4 px-4 font-semibold text-[14px] text-navy-900 text-center">Scale</th>
                <th className="py-4 px-4 font-semibold text-[14px] text-navy-900 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium">Anggota Tim</td>
                <td className="py-4 px-4 text-center">Hingga 3</td>
                <td className="py-4 px-4 text-center">Hingga 15</td>
                <td className="py-4 px-4 text-center">Hingga 50</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium">Workspace</td>
                <td className="py-4 px-4 text-center">1</td>
                <td className="py-4 px-4 text-center">1</td>
                <td className="py-4 px-4 text-center">Multi-cabang</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium">Approval Bertingkat</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center"><span className="inline-flex justify-center text-blue-600"><Check className="w-4 h-4" /></span></td>
                <td className="py-4 px-4 text-center"><span className="inline-flex justify-center text-blue-600"><Check className="w-4 h-4" /></span></td>
                <td className="py-4 px-4 text-center"><span className="inline-flex justify-center text-blue-600"><Check className="w-4 h-4" /></span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Akses API</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center text-gray-400">-</td>
                <td className="py-4 px-4 text-center"><span className="inline-flex justify-center text-blue-600"><Check className="w-4 h-4" /></span></td>
                <td className="py-4 px-4 text-center"><span className="inline-flex justify-center text-blue-600"><Check className="w-4 h-4" /></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>
    </PageShell>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from '@/components/Motion';
import { INTEGRATIONS, SOLUTIONS_TABS, HOW_IT_WORKS, PRICING_PLANS, FAQS } from '@/lib/content';
import * as icons from 'lucide-react';
import { 
  Check, ArrowRight, Play, Plus, Minus, 
  Database, Workflow, FileText, BarChart3, 
  Layers, Zap, Lock, AlertCircle, Clock
} from 'lucide-react';

// Lazy load komponen berat di bawah lipatan (below-the-fold) agar loading di HP ringan
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), { ssr: true });
const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'), { ssr: true });
const InteractiveCardDeck = dynamic(() => import('@/components/InteractiveCardDeck'), { ssr: true });
const InteractiveChart = dynamic(() => import('@/components/InteractiveChart'), { ssr: true });
const SolutionSlider = dynamic(() => import('@/components/SolutionSlider'), { ssr: true });

function Badge({ children, dark = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border shadow-sm ${dark ? 'bg-white/20 text-white border-white/30 backdrop-blur-md' : 'bg-white border-gray-200 text-navy-700'}`}>
      <span className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0"></span>
      {children}
    </span>
  );
}

function SectionHeading({ badge, title, blueWord, desc, align = 'center' }) {
  const titleParts = title.split(blueWord);
  return (
    <div className={`max-w-[720px] mx-auto mb-12 lg:mb-16 flex flex-col gap-4 ${align === 'center' ? 'text-center items-center' : 'text-left items-start mx-0'}`}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className="text-[32px] lg:text-[46px] font-semibold tracking-tight leading-[1.15] text-navy-900">
        {titleParts[0]}<span className="text-blue-600">{blueWord}</span>{titleParts[1]}
      </h2>
      {desc && <p className="text-[15px] lg:text-[18px] leading-[1.7] text-gray-600 max-w-[640px]">{desc}</p>}
    </div>
  );
}

function EmailPill({ placeholder = "Email bisnis Anda", buttonText = "Mulai Sekarang" }) {
  const [email, setEmail] = useState('');
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-[560px] mx-auto flex items-center p-1.5 bg-white/65 backdrop-blur-md border border-white rounded-full shadow-lg">
      <input 
        type="email" 
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent px-3 sm:px-5 py-2 text-[13px] sm:text-[14px] placeholder:text-gray-500 focus:outline-none text-navy-900 w-full min-w-0"
        required
      />
      <button type="submit" className="flex items-center gap-1.5 sm:gap-2 bg-navy-900 text-white rounded-full pl-2 pr-4 sm:pr-6 h-10 lg:h-11 text-[11px] sm:text-[13px] font-semibold shadow hover:bg-black transition-colors shrink-0 ring-1 ring-blue-400/30">
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white ml-0.5" />
        </span>
        <span className="whitespace-nowrap">{buttonText}</span>
      </button>
    </form>
  );
}

// --- Sections ---

function Hero() {
  return (
    <div className="p-4">
      <div className="bg-hero rounded-hero relative overflow-hidden min-h-[620px] flex flex-col">
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: 'radial-gradient(60% 45% at 0% 100%, rgba(255,255,255,.55), transparent 70%), radial-gradient(60% 45% at 100% 100%, rgba(255,255,255,.55), transparent 70%)' }}></div>
        
        <Navbar />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center max-w-[780px]"
          >
            <Badge dark>Platform operasional bisnis dalam satu tempat</Badge>
            
            <h1 className="text-white mt-6 mb-8 font-medium">
              Kelola Proses Bisnis Anda Lebih Cepat dan Rapi, dengan 
              <span className="inline-flex items-center gap-1.5 sm:gap-2 ml-2 align-middle">
                <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center drop-shadow-xl shrink-0 brightness-[100] saturate-0">
                  <Image src="/logo.png" alt="Alurin" width={40} height={40} className="w-full h-full object-contain" priority />
                </span>
                <span className="font-bold">Alurin</span>
              </span>
            </h1>

            <EmailPill />

            <a href="#demo" className="mt-4 text-white/90 text-[13px] font-medium inline-flex items-center gap-1.5 hover:text-white hover:underline">
              Butuh demo? Coba Demo <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        <HeroCarousel />

        {/* Blur silhouettes behind */}
        <div className="absolute bottom-0 left-10 w-[300px] h-[120px] bg-white/15 blur-2xl rounded-full pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-0 right-10 w-[300px] h-[120px] bg-white/15 blur-2xl rounded-full pointer-events-none hidden lg:block"></div>
      </div>
    </div>
  );
}

function Marquee() {
  return <LogoMarquee />;
}

function ProblemSection() {
  const problems = [
    { title: 'Data Tersebar', desc: 'Data tersimpan di chat, spreadsheet terpisah, dan kertas catatan.', icon: 'FileSpreadsheet' },
    { title: 'Persetujuan Terhambat', desc: 'Persetujuan menumpuk tanpa kejelasan siapa penanggung jawab berikutnya.', icon: 'Clock' },
    { title: 'Laporan Lambat Dibuat', desc: 'Menghabiskan waktu berjam-jam merekap data secara manual setiap akhir bulan.', icon: 'AlertCircle' },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-transparent to-blue-50/50">
      <FadeIn className="max-w-[1120px] mx-auto">
        <SectionHeading 
          badge="Masalah Bisnis Nyata"
          title="Tinggalkan Cara Lama yang Lambat dan "
          blueWord="Bikin Frustrasi"
          desc="Sebelum memakai Alurin, tim biasanya terjebak dalam alur kerja manual yang rentan kesalahan dan sulit dilacak."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((prob) => {
            const Icon = icons[prob.icon] || AlertCircle;
            return (
              <div key={prob.title} className="glass-card rounded-card p-6 flex flex-col gap-3 relative border-red-100/60 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-bg text-red flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] font-semibold text-navy-900">{prob.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{prob.desc}</p>
              </div>
            );
          })}
        </div>

        {/* The Solution Panel */}
        <div className="glass-card rounded-card p-8 lg:p-10 shadow-card border-blue-100 max-w-[840px] mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Solusi Alurin</span>
            <h3 className="text-[22px] font-semibold text-navy-900 mt-1 mb-3">Semua Operasional Bergerak Otomatis</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Mulai dari data pesanan masuk, alur verifikasi supervisor, hingga dokumen siap cetak. Semua proses terpantau langsung tanpa harus tanya satu per satu.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 text-[13px] font-medium text-navy-800">
                <Check className="w-4 h-4 text-green" /> 100% Bebas Chat Hilang
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-navy-800">
                <Check className="w-4 h-4 text-green" /> Realtime Status
              </div>
            </div>
          </div>
          <div className="w-full md:w-[280px] bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-blue-200/60">
              <span className="text-[12px] font-semibold text-navy-900">Performa Tim</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-bg text-green font-medium">Meningkat 3x</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-gray-500 mb-1">
                  <span>Waktu Approval</span>
                  <span className="font-semibold text-navy-900">15 Menit</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-gray-500 mb-1">
                  <span>Akurasi Laporan</span>
                  <span className="font-semibold text-navy-900">99.8%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-green rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function FeatureSection() {
  const featureChips = ['Manajemen Data', 'Workflow', 'Approval', 'Form', 'Dashboard', 'Dokumen', 'Automation', 'Integrasi'];

  return (
    <section className="py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <FadeIn className="max-w-[1120px] mx-auto flex flex-col items-center">
        <SectionHeading 
          badge="Fitur Inti"
          title="Satu Platform untuk Data, Workflow, dan "
          blueWord="Approval"
          desc="Atur proses dari pengajuan sampai selesai tanpa chat berantai dan spreadsheet terpisah."
        />

        <div className="[perspective:1000px] w-full flex justify-center will-change-transform transform-gpu">
          <InteractiveCardDeck />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-[560px]">
          {featureChips.map((chip) => (
            <span key={chip} className="glass-chip will-change-transform">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px]">✓</span>
              {chip}
            </span>
          ))}
        </div>

        <a href="#fitur" className="mt-6 text-blue-600 text-[13px] font-medium inline-flex items-center gap-1 hover:underline">
          Lihat semua fitur <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </FadeIn>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-white">
      <div className="max-w-[1120px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn>
          <Badge>Dashboard & Laporan</Badge>
          <h2 className="mt-4 mb-4 font-medium tracking-tight">
            Pantau Hasil dan Buat Laporan dalam <span className="text-blue-600">Hitungan Menit</span>
          </h2>
          <p className="text-[14px] leading-[1.6] text-ink-soft mb-6">
            Lihat KPI, status, dan grafik secara langsung. Buat dokumen dari template lalu ekspor kapan saja.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Data terpusat', 'Form publik & internal', 'Dokumen otomatis', 'Automation opsional'].map((c) => (
              <span key={c} className="glass-chip">{c}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <InteractiveChart />
        </FadeIn>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="py-[72px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        <FadeIn>
          <SectionHeading 
            badge="Solusi per Industri"
            title="Platform yang Menyesuaikan "
            blueWord="Cara Kerja"
            desc="Geser untuk menjelajahi solusi per industri — tanpa klik tab."
          />
        </FadeIn>
      </div>
      <FadeIn>
        <SolutionSlider />
      </FadeIn>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-[72px] lg:py-[120px] px-6 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <FadeIn>
          <SectionHeading 
            badge="Cara Kerja"
            title="Dari Atur Data sampai Pantau Hasil dalam "
            blueWord="5 Langkah"
          />
        </FadeIn>

        <StaggerContainer className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3 mt-8">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent pointer-events-none"></div>
          {/* Vertical line mobile */}
          <div className="lg:hidden absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent pointer-events-none"></div>

          {HOW_IT_WORKS.map((item) => (
            <StaggerItem key={item.step}>
              <div className={`relative glass-card rounded-card p-5 flex flex-col gap-3 h-full ${item.optional ? 'border-dashed border-2' : ''}`}>
                {item.optional && <span className="absolute -top-2 right-4 text-[10px] px-2 py-0.5 rounded-full bg-amber-bg text-amber font-medium border border-amber/20">Opsional</span>}
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[12px] font-bold shadow">{item.step}</span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {item.step === 1 && <Database className="w-4 h-4" />}
                  {item.step === 2 && <Workflow className="w-4 h-4" />}
                  {item.step === 3 && <Layers className="w-4 h-4" />}
                  {item.step === 4 && <BarChart3 className="w-4 h-4" />}
                  {item.step === 5 && <Zap className="w-4 h-4" />}
                </div>
                <h3 className="text-[14px] font-semibold text-navy-900">{item.title}</h3>
                <p className="text-[12px] leading-[1.5] text-ink-soft">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="harga" className="py-[72px] lg:py-[120px] px-6 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <FadeIn>
          <SectionHeading 
            badge="Paket & Harga"
            title="Harga Jelas untuk Setiap "
            blueWord="Tahap Bisnis"
            desc="Mulai dari tim kecil sampai operasional multi-cabang."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {PRICING_PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className={`rounded-card p-6 flex flex-col h-full relative ${plan.cardBlue ? 'bg-card-blue text-white shadow-strong overflow-hidden' : 'bg-white border border-gray-200 shadow-card'}`}>
                {plan.cardBlue && <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,.25) 50%, transparent 70%)' }}></div>}
                <div className="relative">
                  <h3 className={`text-[18px] font-semibold ${plan.cardBlue ? 'text-white' : 'text-navy-900'}`}>{plan.name}</h3>
                  <p className={`text-[11px] mt-1 ${plan.cardBlue ? 'text-white/70' : 'text-gray-500'}`}>{plan.desc}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`text-[28px] font-bold tracking-tight ${plan.cardBlue ? 'text-white' : 'text-navy-900'}`}>{plan.price}</span>
                    <span className={`text-[12px] ${plan.cardBlue ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>
                  </div>
                  <div className={`h-px my-4 ${plan.cardBlue ? 'bg-white/20' : 'bg-gray-100'}`}></div>
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
                  <button className={`w-full h-10 rounded-field text-[13px] font-semibold transition-colors ${plan.cardBlue ? 'bg-white text-blue-600 hover:bg-gray-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-2">
            {['WhatsApp', 'Telegram', 'API', 'Extra capacity', 'Storage tambahan', 'Custom integration'].map((a) => (
              <span key={a} className="text-[11px] px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium">{a}</span>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 text-center max-w-[600px]">Biaya provider eksternal (misalnya WhatsApp) dapat terpisah dan tidak termasuk dalam harga paket.</p>
          <a href="#harga" className="text-blue-600 text-[13px] font-medium inline-flex items-center gap-1 hover:underline">
            Bandingkan semua paket <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="py-[72px] lg:py-[120px] px-6 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <FadeIn>
          <SectionHeading 
            badge="Kebutuhan Khusus"
            title="Butuh Kontrol Lebih atau Platform dengan "
            blueWord="Nama Sendiri"
          />
        </FadeIn>

        <StaggerContainer className="grid lg:grid-cols-2 gap-6">
          <StaggerItem>
            <div className="glass-card rounded-card p-6 lg:p-8 flex flex-col h-full">
              <h3 className="text-[18px] font-semibold text-navy-900">Enterprise</h3>
              <p className="text-[13px] text-ink-soft mt-2">Untuk perusahaan dengan banyak user, department, dan cabang.</p>
              <ul className="flex flex-col gap-2.5 mt-6 mb-8">
                {['Advanced permission', 'Multi-department', 'Audit & security', 'Migration & onboarding'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-navy-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Check className="w-3 h-3" /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full lg:w-auto self-start px-6 h-10 rounded-field bg-navy-900 text-white text-[13px] font-semibold hover:bg-black transition-colors">
                Hubungi Sales
              </button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-card-blue rounded-card p-6 lg:p-8 flex flex-col h-full text-white relative overflow-hidden shadow-strong">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,.25) 50%, transparent 70%)' }}></div>
              <div className="relative">
                <h3 className="text-[18px] font-semibold">Private Platform</h3>
                <p className="text-[13px] text-white/80 mt-2">Butuh platform dengan nama dan domain perusahaan sendiri?</p>
                
                {/* Browser mock */}
                <div className="mt-6 bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                  </div>
                  <span className="flex-1 bg-white/20 rounded-full px-3 py-1 text-[11px] text-white/90 font-mono">app.perusahaananda.com</span>
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600 text-[10px]">🔒</span>
                </div>

                <ul className="flex flex-col gap-2.5 mt-6 mb-8">
                  {['Custom domain & branding', 'Custom workflow & module'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-white/90">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white"><Check className="w-3 h-3" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full lg:w-auto px-6 h-10 rounded-field bg-white text-blue-600 text-[13px] font-semibold hover:bg-gray-50 transition-colors">
                  Konsultasikan Platform
                </button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-white">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <SectionHeading 
            badge="FAQ"
            title="Pertanyaan yang Sering "
            blueWord="Ditanyakan"
          />
        </FadeIn>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => (
            <FadeIn key={faq.q} delay={idx * 0.05}>
              <div className={`glass-card rounded-card overflow-hidden transition-all ${openIndex === idx ? 'border-l-[3px] border-l-blue-600' : ''}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  aria-expanded={openIndex === idx}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-[14px] font-semibold text-navy-900">{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                    {openIndex === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[13px] leading-[1.6] text-ink-soft">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <div className="p-4">
      <div className="bg-hero rounded-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: 'radial-gradient(60% 45% at 0% 100%, rgba(255,255,255,.55), transparent 70%), radial-gradient(60% 45% at 100% 100%, rgba(255,255,255,.55), transparent 70%)' }}></div>
        
        <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-20 flex flex-col items-center text-center">
          <FadeIn className="max-w-[640px] flex flex-col items-center">
            <h2 className="text-white font-medium">
              Siap Merapikan Proses Bisnis Anda dengan{' '}
              <span className="inline-flex items-center gap-1.5 sm:gap-2 ml-1 align-middle">
                <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center drop-shadow-xl shrink-0 brightness-[100] saturate-0">
                  <Image src="/logo.png" alt="Alurin" width={40} height={40} className="w-full h-full object-contain" />
                </span>
                <span className="font-bold">Alurin</span>
              </span>
              ?
            </h2>

            <div className="w-full mt-8">
              <EmailPill />
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Link href="/harga" className="text-white/90 text-[13px] font-medium hover:text-white hover:underline">Lihat Harga</Link>
              <span className="w-px h-4 bg-white/30"></span>
              <Link href="/coba-demo" className="text-white/90 text-[13px] font-medium hover:text-white hover:underline">Coba Demo →</Link>
            </div>
          </FadeIn>
        </div>

        <div className="relative z-10 border-t border-white/20 mx-6 lg:mx-12"></div>

        <footer className="relative z-10 px-6 lg:px-12 py-10">
          <div className="max-w-[1120px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center drop-shadow-md brightness-[100] saturate-0">
                  <Image src="/logo.png" alt="Alurin" width={28} height={28} className="w-full h-full object-contain" />
                </div>
                <span className="text-white font-bold text-sm">Alurin</span>
              </div>
              <p className="text-[12px] leading-[1.6] text-white/70 mt-3 max-w-[240px]">
                Platform operasional bisnis yang fleksibel untuk mengelola data, workflow, dan laporan.
              </p>
            </div>

            <div>
              <h4 className="text-white text-[12px] font-semibold tracking-wide uppercase mb-3">Produk</h4>
              <ul className="flex flex-col gap-2 text-[13px] text-white/70">
                <li><Link href="/fitur" className="hover:text-white">Fitur</Link></li>
                <li><Link href="/solusi" className="hover:text-white">Solusi</Link></li>
                <li><Link href="/harga" className="hover:text-white">Harga</Link></li>
                <li><Link href="/integrasi" className="hover:text-white">Integrasi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[12px] font-semibold tracking-wide uppercase mb-3">Perusahaan</h4>
              <ul className="flex flex-col gap-2 text-[13px] text-white/70">
                <li><Link href="/enterprise" className="hover:text-white">Enterprise</Link></li>
                <li><Link href="/private-platform" className="hover:text-white">Private Platform</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[12px] font-semibold tracking-wide uppercase mb-3">Legal</h4>
              <ul className="flex flex-col gap-2 text-[13px] text-white/70">
                <li><Link href="/privasi" className="hover:text-white">Kebijakan Privasi</Link></li>
                <li><Link href="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1120px] mx-auto mt-10 pt-6 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-white/60">© 2026 Alurin. All rights reserved.</p>
            <p className="text-[11px] text-white/50">Manage. Automate. Scale.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-page">
      <Hero />
      <Marquee />
      <ProblemSection />
      <FeatureSection />
      <DashboardSection />
      <SolutionsSection />
      <HowItWorksSection />
      <PricingSection />
      <EnterpriseSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}

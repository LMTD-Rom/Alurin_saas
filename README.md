<div align="center">

  <img src="./public/logo.png" alt="Alurin Logo" width="110" height="110" style="margin-bottom: 12px;" />

  # Alurin — Business Operations Platform

  <p align="center">
    <strong>Kelola Proses Bisnis Lebih Cepat, Rapi, dan Terotomatisasi dalam Satu Platform Terpadu.</strong>
  </p>

  <p align="center">
    <a href="https://alurin.netlify.app/">
      <img src="https://img.shields.io/badge/🌐%20Live%20Demo-alurin.netlify.app-2563EB?style=for-the-badge&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://alurin.netlify.app/coba-demo">
      <img src="https://img.shields.io/badge/✨%20Interactive-SaaS%20Sandbox-0F172A?style=for-the-badge&logoColor=white" alt="Interactive Sandbox" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-12-black?style=flat-square&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
  </p>

  ---

  <p align="center">
    <a href="#-ikhtisar">Ikhtisar</a> •
    <a href="#-fitur-utama">Fitur Utama</a> •
    <a href="#-modul-saas">Modul SaaS</a> •
    <a href="#-arsitektur--teknologi">Teknologi</a> •
    <a href="#-memulai-lokal">Instalasi</a>
  </p>

</div>

<br />

## ⚡ Ikhtisar

**Alurin** adalah platform SaaS operasional modern all-in-one yang dirancang untuk memangkas birokrasi manual, chat berantai, dan spreadsheet terpisah. Dilengkapi landing page konversi tinggi berestetika premium serta dashboard interaktif siap pakai untuk simulasi alur kerja end-to-end.

> 🚀 **Kunjungi aplikasi langsung**: [https://alurin.netlify.app/](https://alurin.netlify.app/)

---

## 💎 Fitur Utama

- **🎨 Modern Glassmorphism & Micro-animations**: Tampilan landing page premium dengan motion spring Framer Motion, glow background dinamis, dan responsif lintas perangkat.
- **🔍 Smart Search & Realtime Filtering**: Pencarian data global lintas entitas, formulir, task, dokumen, hingga approval.
- **📊 Interactive Workflow Analytics**: Visualisasi grafik progres kerja (7 hari & bulanan) dengan transisi animasi halus.
- **⚡ Zero-Config State Persistence**: Simulasi SaaS interaktif berbasis penyimpanan lokal persisten tanpa butuh setup database rumit di awal.
- **📱 PWA & Mobile-First Nav**: Floating responsive navbar, drawer navigasi, dan tata letak modular siap skala.

---

## 📦 Modul SaaS

| Modul | Deskripsi |
| :--- | :--- |
| **Dashboard** | Monitoring KPI, ringkasan pesanan, log aktivitas realtime, dan grafik beban kerja tim. |
| **Data & Entity** | Manajemen katalog data transaksi, pelanggan, entitas kustom, dan rekaman operasional. |
| **Workflows** | Konfigurasi pipeline status berbasis trigger otomatisasi antar divisi. |
| **Tasks** | Penugasan kerja tim dengan prioritas, tenggat waktu, dan status checklist dinamis. |
| **Approvals** | Otorisasi berjenjang satu klik (Setujui / Tolak) untuk purchase request & permohonan. |
| **Documents** | Generator dan repository invoice, quotation, serta berkas legal otomatis. |
| **Reports** | Analitik performa operasional, estimasi bottleneck, dan export laporan data. |

---

## 🛠️ Arsitektur & Teknologi

```text
Alurin_saas/
├── app/                  # App Router (Next.js 15)
│   ├── saas/             # Modul Aplikasi SaaS (Dashboard, Data, Workflows, dll.)
│   ├── layout.js         # Shell global & Typography Plus Jakarta Sans
│   └── page.js           # Modern Marketing Landing Page
├── components/           # Reusable UI, Framer Motion wrapper, Charts & Carousels
├── lib/                  # Seed dataset, konten statis, & storage mock engine
└── public/               # Asset statis & Brand Logo resmi
```

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Engine**: [React 19](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: Netlify (Static Export SPA)

---

## 🚀 Memulai Lokal

Jalankan proyek di lingkungan development lokal Anda:

```bash
# 1. Clone repositori
git clone https://github.com/LMTD-Rom/Alurin_saas.git
cd Alurin_saas

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

Untuk build siap rilis:
```bash
npm run build
```

---

<div align="center">
  <sub>Dibangun dengan dedikasi untuk efisiensi bisnis. © 2026 Alurin. Hak cipta dilindungi.</sub>
</div>

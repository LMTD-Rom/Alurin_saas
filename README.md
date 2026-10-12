<div align="center">

  <img src="./public/logo.png" alt="Alurin Logo" width="110" height="110" style="margin-bottom: 12px;" />

  # Alurin

  <p align="center">
    <strong>Platform operasional bisnis — kelola proses kerja lebih cepat dan rapi dalam satu tempat.</strong>
  </p>

  <p align="center">
    <a href="https://alurin.netlify.app/">
      <img src="https://img.shields.io/badge/live-alurin.netlify.app-2563EB?style=for-the-badge" alt="Live Demo" />
    </a>
    <a href="https://alurin.netlify.app/coba-demo">
      <img src="https://img.shields.io/badge/demo-SaaS%20Sandbox-0F172A?style=for-the-badge" alt="SaaS Sandbox" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-12-black?style=flat-square&logo=framer" alt="Framer Motion" />
  </p>

  ---

  <p align="center">
    <a href="#ikhtisar">Ikhtisar</a> •
    <a href="#fitur-utama">Fitur</a> •
    <a href="#modul-saas">Modul</a> •
    <a href="#teknologi">Teknologi</a> •
    <a href="#memulai-lokal">Instalasi</a>
  </p>

</div>

<br />

## Ikhtisar

Alurin adalah platform SaaS operasional all-in-one yang memangkas kerja manual, chat berantai, dan spreadsheet terpisah. Termasuk landing page dan dashboard SaaS interaktif untuk simulasi alur kerja end-to-end.

Live: [https://alurin.netlify.app/](https://alurin.netlify.app/)

## Fitur Utama

- **Glassmorphism & micro-animation** — landing page premium dengan motion Framer Motion, responsif lintas perangkat.
- **Smart search** — pencarian global lintas data, form, task, dokumen, dan approval.
- **Workflow analytics** — grafik progres kerja (7 hari & bulanan) dengan animasi transisi.
- **State persistence** — data simulasi tersimpan di localStorage, tanpa setup database.
- **Responsive nav** — floating navbar, drawer navigasi mobile, layout modular.

## Modul SaaS

| Modul | Deskripsi |
| :--- | :--- |
| **Dashboard** | Monitoring KPI, ringkasan pesanan, log aktivitas, grafik beban kerja. |
| **Data & Entity** | Manajemen data transaksi, pelanggan, dan entitas kustom. |
| **Workflows** | Pipeline status berbasis trigger otomatisasi antar divisi. |
| **Tasks** | Penugasan tim dengan prioritas, tenggat, dan checklist. |
| **Approvals** | Otorisasi satu klik (Setujui / Tolak) untuk request & permohonan. |
| **Documents** | Generator invoice, quotation, dan berkas legal. |
| **Reports** | Analitik performa, deteksi bottleneck, export laporan. |

## Teknologi

```text
Alurin_saas/
├── app/            # App Router Next.js 15 + halaman SaaS
├── components/     # UI, animasi, chart, carousel
├── lib/            # Seed data, konten statis, storage mock
└── public/         # Aset statis & logo
```

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) + [Lucide Icons](https://lucide.dev/)
- Deploy: Netlify

## Memulai Lokal

```bash
git clone https://github.com/LMTD-Rom/Alurin_saas.git
cd Alurin_saas
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Build produksi: `npm run build`.

---

<div align="center">
  <sub>© 2026 Alurin. All rights reserved.</sub>
</div>

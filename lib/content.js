export const INTEGRATIONS = [
  { name: 'WhatsApp', status: 'Add-on', icon: 'MessageCircle' },
  { name: 'Telegram', status: 'Available', icon: 'Send' },
  { name: 'Gmail', status: 'Available', icon: 'Mail' },
  { name: 'Google Sheets', status: 'Available', icon: 'Table' },
  { name: 'Slack', status: 'Available', icon: 'Hash' },
  { name: 'Notion', status: 'Coming Soon', icon: 'FileText' },
];

const ICON_MAP = {
  MessageCircle: 'MessageCircle',
  Send: 'Send',
  Mail: 'Mail',
  Table: 'Table',
  Hash: 'Hash',
  FileText: 'FileText',
  Store: 'Store',
  ShoppingBag: 'ShoppingBag',
  Briefcase: 'Briefcase',
  Shirt: 'Shirt',
  Package: 'Package',
  Building2: 'Building2',
};

export const SOLUTIONS_TABS = [
  {
    id: 'umkm',
    label: 'UMKM',
    icon: 'Store',
    desc: 'Catat pelanggan, pesanan, dan pembayaran dalam satu alur sederhana.',
    steps: ['Customer', 'Order', 'Payment', 'Processing', 'Completed'],
    stats: '5 tahap proses',
  },
  {
    id: 'retail',
    label: 'Retail / Toko',
    icon: 'ShoppingBag',
    desc: 'Kelola produk sampai barang terkirim ke tangan pembeli.',
    steps: ['Product', 'Order', 'Processing', 'Delivery'],
    stats: '4 tahap proses',
  },
  {
    id: 'jasa',
    label: 'Jasa / Agency',
    icon: 'Briefcase',
    desc: 'Dari lead sampai invoice tanpa proses terpisah dan tanpa ribet.',
    steps: ['Lead', 'Proposal', 'Approval', 'Project', 'Invoice', 'Completed'],
    stats: '6 tahap proses',
  },
  {
    id: 'laundry',
    label: 'Laundry',
    icon: 'Shirt',
    desc: 'Pantau setiap tahap cucian, termasuk manajemen multi-cabang.',
    steps: ['Customer', 'Order', 'Processing', 'Quality Check', 'Ready', 'Completed'],
    stats: '6 tahap proses',
  },
  {
    id: 'distributor',
    label: 'Distributor',
    icon: 'Package',
    desc: 'Permintaan, persetujuan, pembelian, hingga proses pengiriman gudang.',
    steps: ['Request', 'Approval', 'Purchase', 'Warehouse', 'Delivery'],
    stats: '5 tahap proses',
  },
  {
    id: 'perusahaan',
    label: 'Perusahaan',
    icon: 'Building2',
    desc: 'Persetujuan bertingkat lintas departemen dengan audit lengkap.',
    steps: ['Request', 'Department', 'Manager Approval', 'Finance', 'Execution', 'Reporting'],
    stats: '6 tahap proses',
  },
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'Atur Data', desc: 'Siapkan pelanggan, produk, dan data custom.' },
  { step: 2, title: 'Buat Proses', desc: 'Tentukan status dan urutan tahap kerja.' },
  { step: 3, title: 'Kelola Tim', desc: 'Bagikan tugas dan atur siapa menyetujui apa.' },
  { step: 4, title: 'Pantau Hasil', desc: 'Lihat progres dan laporan dari satu dashboard.' },
  { step: 5, title: 'Tambah Automation', desc: 'Aktifkan trigger dan aksi saat dibutuhkan.', optional: true },
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 'Rp149K',
    period: '/ bulan',
    desc: 'Bisnis kecil dan tim kecil',
    features: ['Hingga 3 Anggota Tim', '1 Workspace Utama', 'Form Digital Standar', 'Pelacakan Status', 'Laporan Dasar'],
    cta: 'Mulai Sekarang',
    cardBlue: false,
  },
  {
    name: 'Business',
    price: 'Rp499K',
    period: '/ bulan',
    desc: 'Bisnis yang prosesnya mulai kompleks',
    features: ['Hingga 15 Anggota Tim', 'Multi-role & Permissions', 'Alur Persetujuan Bertingkat', 'Template Dokumen PDF', 'Integrasi Email Otomatis'],
    cta: 'Mulai Sekarang',
    cardBlue: true, // Special styling from design.md
  },
  {
    name: 'Scale',
    price: 'Rp1,49JT',
    period: '/ bulan',
    desc: 'Multi-team, multi-cabang, operasional kompleks',
    features: ['Hingga 50 Anggota Tim', 'Multi-cabang / Multi-lokasi', 'Audit Log Lengkap', 'Akses API Kuota Tinggi', 'Dedicated Support'],
    cta: 'Coba Demo',
    cardBlue: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Perusahaan dengan kebutuhan khusus',
    features: ['Kapasitas Tanpa Batas', 'Single Sign-On (SSO)', 'Custom Integration & Module', 'Migrasi Data Diberikan', 'Perjanjian SLA Khusus'],
    cta: 'Hubungi Sales',
    cardBlue: false,
  },
];

export const FAQS = [
  {
    q: 'Apakah cocok untuk UMKM?',
    a: 'Sangat cocok. Alurin dirancang dengan paket Starter yang mudah dan terjangkau, membantu UMKM merapikan pembukuan, order, dan data tanpa sistem yang rumit.',
  },
  {
    q: 'Apakah harus menggunakan automation?',
    a: 'Tidak wajib. Alurin dapat digunakan penuh untuk data, form, dan alur kerja manual yang terstruktur. Automation bisa diaktifkan kapan saja bila diperlukan.',
  },
  {
    q: 'Apakah WhatsApp dan Telegram wajib?',
    a: 'Tidak. Notifikasi bawaan di platform sudah sangat lengkap. Integrasi WhatsApp dan Telegram disediakan sebagai add-on jika Anda ingin notifikasi eksternal.',
  },
  {
    q: 'Apa bedanya Business dan Scale?',
    a: 'Paket Business cocok untuk tim hingga 15 orang dalam satu divisi/lokasi. Paket Scale mendukung kapasitas lebih besar, multi-cabang, dan approval bertingkat yang kompleks.',
  },
  {
    q: 'Apa bedanya Enterprise dan Private Platform?',
    a: 'Enterprise adalah implementasi cloud dedicated dengan kontrol organisasi ketat. Private Platform adalah opsi white-label penuh menggunakan domain dan identitas brand Anda sendiri.',
  },
  {
    q: 'Apakah data bisa diekspor?',
    a: 'Tentu. Anda memiliki hak kepemilikan data penuh dan dapat mengekspor seluruh basis data, transaksi, serta dokumen kapan saja dalam format spreadsheet atau PDF.',
  },
];

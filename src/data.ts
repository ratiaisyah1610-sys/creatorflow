import { FeatureItem, MarketFactor, StatsMarket, CompetitorComparison, PricingPlan } from './types';

export const featuresList: FeatureItem[] = [
  {
    id: 'planner',
    title: 'Perencana Konten (Content Planner)',
    description: 'Tulis ide, rancang topik, buat storyboard visual, dan koordinasikan ide-ide kreatif Anda dalam papan kanban terintegrasi dengan mulus.',
    iconName: 'Sparkles',
  },
  {
    id: 'scheduler',
    title: 'Penjadwal Konten (Content Scheduler)',
    description: 'Publikasikan otomatis ke platform favorit Anda seperti Instagram, TikTok, YouTube, dan Twitter tepat waktu sesuai puncak jam aktif audiens.',
    iconName: 'CalendarDays',
  },
  {
    id: 'analytics',
    title: 'Analisis Performa (Performance Analytics)',
    description: 'Lacak matrik pertumbuhan pengikut, tingkat interaksi (engagement), dan temukan konten berkinerja terbaik Anda melalui chart interaktif.',
    iconName: 'TrendingUp',
  },
  {
    id: 'dashboard',
    title: 'Dasbor Multi Platform',
    description: 'Kelola semua akun jejaring sosial media Anda di dalam satu halaman terpusat. Keamanan akun terlindungi tanpa saling tabrakan.',
    iconName: 'LayoutDashboard',
  },
  {
    id: 'collaboration',
    title: 'Kolaborasi Tim (Team Collaboration)',
    description: 'Undang editor video, copywriter, partner bisnis, atau manajer marketing Anda untuk merevisi ide serta menyetujui draf konten bersama.',
    iconName: 'Users',
  },
  {
    id: 'cloud',
    title: 'Akses Berbasis Cloud Aman',
    description: 'Akses workspace konten Anda dari gawai apa pun, kapan saja. Otomatis tersinkronisasi dengan proteksi enkripsi tingkat tinggi.',
    iconName: 'Cloud',
  }
];

export const marketFactors: MarketFactor[] = [
  {
    category: 'Demografis',
    details: 'Berusia antara 18 hingga 35 tahun.',
    subDetails: 'Kreator pemula, influencer mikro-makro, digital marketer muda, desainer, dan penulis kreatif yang mencari keteraturan kerja.'
  },
  {
    category: 'Geografis',
    details: 'Pengguna internet global.',
    subDetails: 'Dapat diakses di mana saja di seluruh belahan dunia dengan optimasi server cloud instan, menjangkau audiens secara global.'
  },
  {
    category: 'Psikografis',
    details: 'Sangat aktif di berbagai jejaring media sosial.',
    subDetails: 'Memiliki ambisi tinggi membangun audiens loyal, menghargai efisiensi waktu, perfeksionis, dan antusias dengan teknologi digital.'
  },
  {
    category: 'Perilaku',
    details: 'Mengunggah konten secara rutin dan berkala.',
    subDetails: 'Memiliki kebutuhan mendesak untuk menjaga konsistensi publikasi, namun seringkali kewalahan mengelola jadwal posting manual.'
  }
];

export const statsMarketList: StatsMarket[] = [
  {
    tier: 'TAM',
    label: 'Total Addressable Market',
    value: '60 Juta+',
    description: 'Estimasi total populasi konten kreator, pekerja paruh waktu kreatif, dan pakar digital marketing secara global.',
    scope: 'Skala Global'
  },
  {
    tier: 'SAM',
    label: 'Serviceable Addressable Market',
    value: '2 Juta+',
    description: 'Jumlah estimasi kreator lokal dan pelaku pemasaran digital aktif yang mempublikasikan konten reguler di wilayah Indonesia.',
    scope: 'Skala Indonesia'
  },
  {
    tier: 'SOM',
    label: 'Serviceable Obtainable Market',
    value: '20K - 60K',
    description: 'Target awal penetrasi pengguna berlangganan aktif CreatorFlow dalam target jangka menengah (1-2 tahun pertama).',
    scope: 'Target Jangka Menengah'
  }
];

export const competitorComparisonData: CompetitorComparison[] = [
  {
    featureName: 'Penjadwalan Auto-Publish Tanpa API Tambahan',
    creatorFlow: 'Ya, Full Otomatis',
    hootsuite: 'Hanya Akun Bisnis',
    buffer: 'Terbatas',
    later: 'Ya, Terbatas',
  },
  {
    featureName: 'Kolaborasi Tim & Peninjauan Asisten',
    creatorFlow: 'Ada (Semua Paket)',
    hootsuite: 'Mulai Paket Premium',
    buffer: 'Paket Berbayar Saja',
    later: 'Sangat Terbatas',
  },
  {
    featureName: 'Biaya Berlangganan (Dukungan Rupiah)',
    creatorFlow: 'Sangat Murah (Mulai Rp49K)',
    hootsuite: 'Sangat Mahal (Mata Uang USD)',
    buffer: 'Sedang (Mata Uang USD)',
    later: 'Sedang (Mata Uang USD)',
  },
  {
    featureName: 'Dukungan Pelanggan (CS) Bahasa Indonesia 24/7',
    creatorFlow: 'Tersedia Live Chat 24/7',
    hootsuite: 'Bahasa Inggris Lambat',
    buffer: 'Hanya Email',
    later: 'Email / Berbayar',
  },
  {
    featureName: 'Kalender Konten Interaktif Kreatif',
    creatorFlow: 'Interaktif (Drag & Drop)',
    hootsuite: 'Tampilan Standar',
    buffer: 'Tampilan Grid Sederhana',
    later: 'Sangat Bagus Visual',
  },
  {
    featureName: 'Rekomendasi Konten AI Terbimbing',
    creatorFlow: 'Asisten AI Indonesia',
    hootsuite: 'Bahasa Inggris Saja',
    buffer: 'Terbatas',
    later: 'Tidak Ada',
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'dasar',
    name: 'Paket Dasar',
    price: 49000,
    period: 'bulan',
    description: 'Pilihan paling hemat untuk kreator tunggal pemula yang ingin mulai merapikan cara kerja konten harian.',
    features: [
      'Hingga 3 Akun Media Sosial',
      'Kalender Konten Interaktif',
      'Penjadwalan 30 Posting / Akun',
      'Analisis Performa Standar',
      'Akses Workspace Cloud (1 User)',
      'Dukungan Layanan via Email'
    ],
    isPopular: false,
    colorTheme: 'cream'
  },
  {
    id: 'pro',
    name: 'Paket Pro',
    price: 99000,
    period: 'bulan',
    description: 'Pilihan paling direkomendasikan bagi kreator profesional, podcaster, dan pengusaha digital mandiri.',
    features: [
      'Hingga 8 Akun Media Sosial',
      'Penjadwalan Auto-Publish Tanpa Batas',
      'Kalender Konten Drag & Drop',
      'Analisis Insight Mendalam & Grafik',
      'Uji Coba Fitur Rekomendasi AI',
      'Kolaborasi Workspace (Hingga 3 User)',
      'Dukungan Prioritas Live Chat'
    ],
    isPopular: true,
    colorTheme: 'brown'
  },
  {
    id: 'tim',
    name: 'Paket Tim / Agensi',
    price: 199000,
    period: 'bulan',
    description: 'Solusi lengkap untuk agensi konten, brand independen, dan multi-kreator yang bekerja dengan tim skala menengah.',
    features: [
      'Akun Media Sosial Tak Terbatas',
      'Semua Fitur Paket Pro',
      'Workspace Kolaborasi Penuh (Hingga 10 User)',
      'Hak Akses Bertingkat (Editor vs Pengulas)',
      'Laporan Grafik Bulanan PDF Kustom',
      'Penyimpanan Aset Cloud 50 GB',
      'Account Manager Khusus + CS Fast-Track'
    ],
    isPopular: false,
    colorTheme: 'dark'
  }
];

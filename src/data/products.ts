export type ProductCategory =
  | "Education"
  | "Enterprise"
  | "Business"
  | "Government"
  | "Commerce"
  | "Mobile";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  bestFor: string[];
  modules: string[];
  deployment: string[];
  stack: string[];
  notes: string[];
  faqs: Array<{ q: string; a: string }>;
  relatedProjects: string[];
  disclaimer?: string;
};

export const products: Product[] = [
  {
    slug: "lms",
    name: "LMS",
    category: "Education",
    tagline: "Platform belajar, kuis, dan sertifikat untuk sekolah, kampus, dan perusahaan.",
    description:
      "Learning Management System untuk mengelola materi, tugas, kuis, progres peserta, dan sertifikat dalam satu tempat. Bisa dimulai dari satu program atau satu divisi, lalu diperluas.",
    bestFor: [
      "Sekolah, kampus, dan lembaga kursus",
      "Corporate training dan onboarding",
      "Program sertifikasi internal",
    ],
    modules: [
      "Manajemen course dan materi",
      "Tugas, kuis, dan bank soal",
      "Progres dan completion tracking",
      "Sertifikat digital",
      "Diskusi dan notifikasi",
      "Multi-role: admin, pengajar, peserta",
      "Laporan dan analytics",
      "Integrasi video/meeting",
    ],
    deployment: ["Cloud", "On-premise", "Hybrid"],
    stack: ["Laravel", "React", "PostgreSQL", "S3", "REST API"],
    notes: [
      "Bisa mulai dari satu program studi atau divisi.",
      "SSO dan integrasi video conference bisa ditambahkan.",
      "Materi lama bisa dimigrasikan ke struktur baru.",
    ],
    faqs: [
      {
        q: "Bisa menerbitkan sertifikat otomatis?",
        a: "Bisa. Sertifikat dapat dibuat setelah peserta menyelesaikan syarat course, dengan template dan nomor unik.",
      },
      {
        q: "Bisa dipakai beberapa sekolah atau divisi sekaligus?",
        a: "Bisa dengan desain multi-tenant. Setiap unit punya data, pengguna, dan branding sendiri.",
      },
      {
        q: "Bisa integrasi Zoom atau Google Meet?",
        a: "Bisa melalui API atau tautan meeting yang disematkan di sesi pembelajaran.",
      },
    ],
    relatedProjects: ["e-library", "simpatik", "sma-angkasa-2"],
  },
  {
    slug: "sap-erp-integration",
    name: "SAP & ERP Integration",
    category: "Enterprise",
    tagline: "Hubungkan aplikasi internal dengan SAP/ERP tanpa input ganda.",
    description:
      "Layanan integrasi untuk menghubungkan aplikasi internal, portal, atau sistem baru dengan SAP/ERP. Fokus pada sinkronisasi master data, transaksi, inventory, dan laporan — bukan penjualan lisensi SAP.",
    bestFor: [
      "Perusahaan yang sudah memakai SAP/ERP",
      "Manufaktur, distribusi, dan BUMN",
      "Tim yang butuh integrasi dua arah",
    ],
    modules: [
      "Sinkronisasi master data",
      "Invoice dan purchase order",
      "Inventory dan mutasi stok",
      "Data karyawan",
      "Webhook, queue, dan retry",
      "Rekonsiliasi data",
      "Monitoring dan alert",
      "Audit log integrasi",
    ],
    deployment: ["On-premise", "Hybrid", "Cloud"],
    stack: ["SAP OData/RFC", "Middleware", "REST API", "Laravel", "Go", "PostgreSQL"],
    notes: [
      "Fokus pada integrasi, bukan penjualan lisensi SAP.",
      "Butuh akses dokumentasi/API dan lingkungan staging.",
      "Uji rekonsiliasi sebelum production.",
    ],
    faqs: [
      {
        q: "Apakah Anda menjual lisensi SAP?",
        a: "Tidak. Layanan ini fokus pada integrasi dan pengembangan di sekitar SAP/ERP yang sudah dimiliki klien.",
      },
      {
        q: "Bisa integrasi dengan SAP versi lama?",
        a: "Bisa, tergantung antarmuka yang tersedia (RFC, IDoc, OData, atau file exchange). Perlu discovery teknis dulu.",
      },
      {
        q: "Bisa integrasi dua arah?",
        a: "Bisa, dengan aturan ownership data yang jelas agar tidak terjadi konflik atau duplikasi.",
      },
    ],
    relatedProjects: ["ewas-golang", "sipt", "anxious"],
    disclaimer:
      "SAP adalah merek dagang SAP SE. Layanan ini tidak menjual lisensi SAP dan tidak berafiliasi resmi dengan SAP SE.",
  },
  {
    slug: "sistem-informasi",
    name: "Sistem Informasi",
    category: "Enterprise",
    tagline: "Sistem operasional yang mengikuti proses bisnis Anda.",
    description:
      "Sistem informasi kustom untuk mengelola data, alur kerja, hak akses, laporan, dan audit trail. Cocok untuk proses back-office yang masih manual atau tersebar di banyak file.",
    bestFor: [
      "Instansi pemerintah dan BUMD",
      "Perusahaan dengan proses multi-unit",
      "Organisasi yang butuh audit trail",
    ],
    modules: [
      "Master data dan referensi",
      "Alur kerja dan approval",
      "Role, permission, dan audit trail",
      "Dashboard operasional",
      "Laporan dan export",
      "Integrasi API",
      "Notifikasi",
      "Pengaturan dan konfigurasi",
    ],
    deployment: ["Cloud", "On-premise", "Hybrid"],
    stack: ["Laravel", ".NET", "PostgreSQL", "React", "REST API"],
    notes: [
      "Discovery memetakan SOP yang berjalan sekarang.",
      "Bisa mengambil alih dan merapikan sistem lama.",
      "Dokumentasi dan handover termasuk dalam scope.",
    ],
    faqs: [
      {
        q: "Bisa menyesuaikan SOP instansi?",
        a: "Bisa. Sistem dirancang dari proses yang berjalan, lalu disederhanakan bersama stakeholder.",
      },
      {
        q: "Bisa dipasang di server sendiri?",
        a: "Bisa. Deployment on-premise di Linux, Nginx, dan database yang dikelola internal.",
      },
      {
        q: "Bisa integrasi dengan sistem lain?",
        a: "Bisa melalui REST API, file exchange, atau message queue sesuai kemampuan sistem sumber.",
      },
    ],
    relatedProjects: ["sipt", "sigd", "dikplhd"],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    category: "Mobile",
    tagline: "Aplikasi Android/iOS untuk pelanggan, field team, dan layanan publik.",
    description:
      "Aplikasi mobile yang terhubung ke API yang sama dengan sistem web. Bisa untuk pelanggan, petugas lapangan, atau layanan publik dengan kebutuhan offline dan notifikasi.",
    bestFor: [
      "Layanan publik dan pelanggan",
      "Tim lapangan dan operasional",
      "Produk consumer yang butuh mobile channel",
    ],
    modules: [
      "Autentikasi dan profil",
      "Mode offline dan sinkronisasi",
      "Push notification",
      "Kamera, upload, dan dokumen",
      "Maps dan lokasi",
      "Pembayaran",
      "Integrasi API",
      "Release Play Store/App Store",
    ],
    deployment: ["Play Store", "App Store", "Enterprise distribution"],
    stack: ["React Native", "Expo", "Flutter", "REST API", "PostgreSQL"],
    notes: [
      "Bisa mulai dari satu platform lebih dulu.",
      "Membutuhkan API yang siap atau dibangun bersamaan.",
      "Release termasuk testing dan store submission.",
    ],
    faqs: [
      {
        q: "Bisa Android dan iOS sekaligus?",
        a: "Bisa dengan React Native atau Flutter. Satu codebase untuk dua platform, dengan penyesuaian native bila diperlukan.",
      },
      {
        q: "Bisa berjalan offline?",
        a: "Bisa untuk data tertentu, dengan sinkronisasi dan penanganan konflik saat koneksi kembali.",
      },
      {
        q: "Apakah harus punya backend dulu?",
        a: "Tidak harus. Backend/API bisa dibangun sebagai bagian dari scope yang sama.",
      },
    ],
    relatedProjects: ["ppid-mobile", "bpom-mobile", "echowheel"],
  },
  {
    slug: "hris",
    name: "HRIS",
    category: "Business",
    tagline: "Data karyawan, cuti, approval, dan dokumen HR dalam satu sistem.",
    description:
      "HR Information System untuk merapikan data karyawan, struktur organisasi, cuti, approval, dokumen, dan laporan HR. Bisa terhubung dengan sistem absensi dan payroll yang sudah ada.",
    bestFor: [
      "Perusahaan 50–500 karyawan",
      "Grup usaha dengan beberapa entitas",
      "Instansi dengan data pegawai terpusat",
    ],
    modules: [
      "Database karyawan",
      "Struktur organisasi",
      "Cuti dan izin",
      "Approval berjenjang",
      "Dokumen HR",
      "Integrasi absensi",
      "Export payroll",
      "Laporan HR",
    ],
    deployment: ["Cloud", "On-premise"],
    stack: ["Laravel", "React", "PostgreSQL", "REST API"],
    notes: [
      "Payroll bisa diintegrasikan atau diexport ke sistem existing.",
      "Data karyawan lama bisa dimigrasikan.",
      "Hak akses per level dan unit.",
    ],
    faqs: [
      {
        q: "Apakah termasuk payroll penuh?",
        a: "Bisa, tetapi payroll biasanya scope terpisah karena aturan pajak, BPJS, dan komponen gaji perlu validasi tersendiri.",
      },
      {
        q: "Bisa terhubung dengan mesin absensi?",
        a: "Bisa melalui API, file export, atau database staging, tergantung perangkat yang dipakai.",
      },
      {
        q: "Bisa multi-entitas?",
        a: "Bisa, dengan pemisahan data dan hak akses per entitas.",
      },
    ],
    relatedProjects: ["sipt", "sigd"],
  },
  {
    slug: "absensi",
    name: "Absensi",
    category: "Business",
    tagline: "Absensi QR/GPS/selfie, shift, izin, dan rekap otomatis.",
    description:
      "Sistem absensi untuk karyawan, petugas lapangan, atau siswa. Mendukung QR, GPS geofence, selfie, shift, izin, dan rekap yang bisa diekspor ke payroll.",
    bestFor: [
      "Tim lapangan dan cabang",
      "Pabrik, retail, dan jasa",
      "Sekolah dan lembaga",
    ],
    modules: [
      "Absensi QR/barcode",
      "GPS geofence",
      "Selfie dan timestamp",
      "Shift dan jadwal",
      "Izin dan cuti",
      "Rekap otomatis",
      "Export payroll",
      "Dashboard kehadiran",
    ],
    deployment: ["Cloud", "On-premise"],
    stack: ["React Native", "Laravel", "PostgreSQL", "Maps", "REST API"],
    notes: [
      "Bisa tanpa hardware khusus.",
      "Bisa integrasi ke payroll atau HRIS.",
      "Perlu kebijakan privasi untuk data lokasi dan foto.",
    ],
    faqs: [
      {
        q: "Apakah bisa mencegah fake GPS?",
        a: "Bisa dikurangi dengan validasi lokasi, perangkat, dan audit, tetapi tidak ada jaminan 100% di semua perangkat.",
      },
      {
        q: "Bisa dipakai tanpa internet?",
        a: "Bisa untuk skenario tertentu dengan penyimpanan lokal dan sinkronisasi saat online.",
      },
      {
        q: "Bisa untuk beberapa shift?",
        a: "Bisa. Shift, toleransi keterlambatan, dan aturan lembur dapat dikonfigurasi.",
      },
    ],
    relatedProjects: ["simpatik", "ppid-mobile"],
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    category: "Commerce",
    tagline: "Toko online dengan katalog, checkout, payment, dan shipping.",
    description:
      "Platform e-commerce untuk brand lokal: katalog, varian, keranjang, checkout, voucher, pembayaran, pengiriman, dan admin order. Bisa dimulai dari storefront sederhana lalu berkembang.",
    bestFor: [
      "Brand lokal dan UMKM",
      "Distributor dengan katalog besar",
      "Bisnis yang ingin lepas dari marketplace",
    ],
    modules: [
      "Katalog dan varian produk",
      "Keranjang dan checkout",
      "Voucher dan promo",
      "Payment gateway",
      "Integrasi pengiriman",
      "Manajemen order",
      "Laporan penjualan",
      "Admin CMS",
    ],
    deployment: ["Cloud", "VPS", "Vercel"],
    stack: ["Next.js", "React", "PostgreSQL", "Prisma", "Duitku", "Biteship"],
    notes: [
      "Payment dan shipping butuh akun merchant.",
      "Migrasi produk dari platform lama bisa disertakan.",
      "Bisa multi-bahasa dan multi-currency bila diperlukan.",
    ],
    faqs: [
      {
        q: "Bisa integrasi payment gateway lokal?",
        a: "Bisa. Duitku, Midtrans, dan gateway lain dapat diintegrasikan sesuai kebutuhan dan persetujuan merchant.",
      },
      {
        q: "Bisa migrasi dari Shopify/WooCommerce?",
        a: "Bisa untuk produk, varian, pelanggan, dan order tertentu, tergantung struktur data sumber.",
      },
      {
        q: "Bisa multi-warehouse?",
        a: "Bisa, tetapi stok multi-gudang dan alokasi order masuk ke scope custom.",
      },
    ],
    relatedProjects: ["anxious"],
  },
  {
    slug: "e-office",
    name: "E-Office",
    category: "Government",
    tagline: "Surat menyurat, disposisi, arsip, dan tracking dalam satu alur.",
    description:
      "E-Office untuk mengelola surat masuk dan keluar, disposisi berjenjang, template dokumen, arsip, dan tracking. Cocok untuk instansi yang masih memproses surat secara manual.",
    bestFor: [
      "Instansi pemerintah dan BUMD",
      "Perusahaan dengan alur disposisi",
      "Organisasi dengan arsip besar",
    ],
    modules: [
      "Surat masuk dan keluar",
      "Disposisi berjenjang",
      "Template dokumen",
      "Arsip dan pencarian",
      "Integrasi tanda tangan digital",
      "Tracking status",
      "Role dan unit kerja",
      "Laporan",
    ],
    deployment: ["On-premise", "Cloud", "Hybrid"],
    stack: ["Laravel", "PostgreSQL", "React", "REST API"],
    notes: [
      "Tanda tangan digital mengikuti penyedia yang disetujui instansi.",
      "Bisa integrasi SSO dan struktur organisasi.",
      "Audit trail untuk setiap perubahan status.",
    ],
    faqs: [
      {
        q: "Bisa integrasi tanda tangan digital?",
        a: "Bisa, dengan penyedia yang disetujui instansi. Sertifikasi dan kepatuhan mengikuti penyedia tersebut.",
      },
      {
        q: "Bisa dipasang on-premise?",
        a: "Bisa. Deployment di server instansi dengan Nginx dan database yang dikelola internal.",
      },
      {
        q: "Bisa disposisi berjenjang?",
        a: "Bisa. Alur, penerima, dan batas waktu disposisi dapat dikonfigurasi.",
      },
    ],
    relatedProjects: ["sipt", "sigd", "dikplhd"],
  },
  {
    slug: "ppid",
    name: "PPID Portal",
    category: "Government",
    tagline: "Keterbukaan informasi publik: permohonan, keberatan, publikasi, dan tracking.",
    description:
      "Portal PPID untuk menerima permohonan informasi, pengajuan keberatan, publikasi dokumen, dan tracking status. Bisa tersedia dalam versi web dan mobile.",
    bestFor: [
      "Instansi publik dan BUMD",
      "Kementerian, pemerintah daerah",
      "Organisasi dengan kewajiban keterbukaan informasi",
    ],
    modules: [
      "Permohonan informasi",
      "Pengajuan keberatan",
      "Perpustakaan dokumen",
      "Publikasi dan berita",
      "Tracking status",
      "Notifikasi",
      "Dashboard permohonan",
      "Role dan unit PPID",
    ],
    deployment: ["Cloud", "On-premise"],
    stack: ["Laravel", "React", "PostgreSQL", "REST API"],
    notes: [
      "Alur mengikuti kebijakan PPID instansi.",
      "Bisa multi-channel: web dan mobile.",
      "Laporan permohonan dan SLA tersedia.",
    ],
    faqs: [
      {
        q: "Bisa sekaligus aplikasi mobile?",
        a: "Bisa. Web dan mobile memakai API yang sama, seperti pada PPID Mobile.",
      },
      {
        q: "Bisa mengatur SLA permohonan?",
        a: "Bisa. Batas waktu, reminder, dan eskalasi dapat dikonfigurasi.",
      },
      {
        q: "Dokumen publik bisa diunggah?",
        a: "Bisa, dengan kategori, metadata, dan kontrol akses sesuai kebijakan instansi.",
      },
    ],
    relatedProjects: ["ppid-mobile", "dikplhd"],
  },
  {
    slug: "sim-sekolah",
    name: "SIM Sekolah",
    category: "Education",
    tagline: "Akademik, PPDB, keuangan, dan komunikasi sekolah dalam satu sistem.",
    description:
      "Sistem informasi manajemen sekolah untuk data siswa/guru, kelas, jadwal, nilai, absensi, PPDB, keuangan, dan portal orang tua. Bisa dimulai dari modul akademik lalu diperluas.",
    bestFor: [
      "SMA, SMK, dan sekolah swasta",
      "Yayasan dengan beberapa sekolah",
      "Pesantren dan lembaga pendidikan",
    ],
    modules: [
      "Data siswa dan guru",
      "Kelas dan jadwal",
      "Nilai dan raport",
      "Absensi",
      "PPDB/SPMB",
      "Keuangan sekolah",
      "Portal orang tua",
      "Laporan akademik",
    ],
    deployment: ["Cloud", "On-premise"],
    stack: ["Laravel", "MySQL", "Tailwind CSS", "REST API"],
    notes: [
      "Bisa mulai dari modul akademik saja.",
      "Import data siswa dan nilai lama.",
      "Role guru, siswa, orang tua, dan admin.",
    ],
    faqs: [
      {
        q: "Bisa sekaligus PPDB online?",
        a: "Bisa. Pendaftaran, verifikasi, pengumuman, dan export data dapat masuk ke scope.",
      },
      {
        q: "Bisa cetak raport?",
        a: "Bisa. Template raport, nilai, dan catatan wali kelas dapat disesuaikan.",
      },
      {
        q: "Bisa untuk beberapa sekolah?",
        a: "Bisa dengan desain multi-sekolah dan pemisahan data per unit.",
      },
    ],
    relatedProjects: ["simpatik", "sma-angkasa-2", "e-library"],
  },
];

export const productCategories: ProductCategory[] = [
  "Enterprise",
  "Government",
  "Education",
  "Business",
  "Commerce",
  "Mobile",
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
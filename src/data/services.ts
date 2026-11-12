export type Service = {
  slug: string;
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problems: string[];
  deliverables: string[];
  audience: string[];
  stack: string[];
  faqs: Array<{ q: string; a: string }>;
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "jasa-pembuatan-aplikasi-web",
    name: "Aplikasi web & website perusahaan",
    keyword: "jasa pembuatan aplikasi web",
    metaTitle: "Jasa Pembuatan Aplikasi Web — Ilham Wara",
    metaDescription:
      "Jasa pembuatan aplikasi web dan website perusahaan: dashboard, portal, sistem internal, role akses, API, dan reporting. Laravel, React, PostgreSQL.",
    h1: "Jasa pembuatan aplikasi web untuk perusahaan",
    intro:
      "Saya membangun aplikasi web untuk perusahaan yang butuh dashboard operasional, portal pelanggan, atau sistem internal dengan data dan hak akses yang kompleks. Bukan sekadar website company profile — tapi aplikasi yang dipakai setiap hari.",
    problems: [
      "Data operasional masih tersebar di spreadsheet dan file terpisah.",
      "Proses bisnis manual, sulit dilacak, dan rawan salah input.",
      "Sistem lama sulit dikembangkan atau tidak punya dokumentasi.",
    ],
    deliverables: [
      "Discovery, user flow, dan prioritas fitur",
      "Arsitektur backend, API, dan database",
      "Frontend React/Next.js atau Laravel Blade",
      "Autentikasi, role, dan hak akses",
      "Dashboard, laporan, dan export",
      "Deployment, dokumentasi, dan handover",
    ],
    audience: [
      "Perusahaan dengan proses operasional kompleks",
      "Instansi yang butuh sistem internal",
      "Startup yang perlu membangun produk web",
    ],
    stack: ["Laravel", "React", "Next.js", "PostgreSQL", "REST API", "Docker"],
    faqs: [
      {
        q: "Berapa lama pembuatan aplikasi web?",
        a: "Untuk scope menengah biasanya 6–12 minggu. Timeline final ditentukan setelah discovery dan jumlah modul yang disepakati.",
      },
      {
        q: "Bisa integrasi dengan sistem yang sudah ada?",
        a: "Bisa. Saya biasa mengintegrasikan aplikasi dengan API internal, payment gateway, ERP, atau sistem instansi yang sudah berjalan.",
      },
      {
        q: "Apakah bisa menambahkan fitur setelah launch?",
        a: "Bisa. Perubahan di luar scope awal dihitung sebagai change request dan disetujui tertulis sebelum dikerjakan.",
      },
    ],
    relatedProjects: ["sipt", "smartpom", "dikplhd"],
  },
  {
    slug: "jasa-pembuatan-website-sekolah",
    name: "Website sekolah",
    keyword: "jasa pembuatan website sekolah",
    metaTitle: "Jasa Pembuatan Website Sekolah — Ilham Wara",
    metaDescription:
      "Jasa pembuatan website sekolah: profil, berita, prestasi, galeri, PPDB/SPMB online, dan admin CMS. Cocok untuk SMA, SMK, yayasan, dan pesantren.",
    h1: "Jasa pembuatan website sekolah",
    intro:
      "Website sekolah yang rapi, cepat, dan mudah dikelola — lengkap dengan profil sekolah, berita, prestasi, galeri, informasi PPDB, dan admin CMS. Saya sudah membangun website dan sistem akademik untuk SMA Angkasa 2.",
    problems: [
      "Informasi sekolah tersebar di media sosial dan grup WhatsApp.",
      "Pendaftaran siswa baru masih manual dan sulit dipantau.",
      "Website lama sulit diperbarui oleh staf sekolah.",
    ],
    deliverables: [
      "Profil sekolah, visi-misi, fasilitas, dan guru",
      "Berita, prestasi, kegiatan, dan galeri",
      "Informasi SPMB/PPDB dan alur pendaftaran",
      "Admin CMS untuk staf sekolah",
      "SEO dasar dan Google Search Console",
      "Hosting, domain, dan pelatihan admin",
    ],
    audience: [
      "SMA, SMK, dan sekolah swasta",
      "Yayasan pendidikan",
      "Pesantren dan lembaga kursus",
    ],
    stack: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Alpine.js"],
    faqs: [
      {
        q: "Bisa sekaligus dengan sistem PPDB online?",
        a: "Bisa. Pendaftaran, verifikasi berkas, pengumuman kelulusan, dan export data bisa masuk ke scope yang sama.",
      },
      {
        q: "Apakah staf sekolah bisa update konten sendiri?",
        a: "Bisa. Saya menyiapkan admin CMS dan sesi pelatihan singkat untuk tim sekolah.",
      },
      {
        q: "Apakah termasuk maintenance?",
        a: "Bisa dilanjutkan dengan paket managed care bulanan atau tahunan setelah masa garansi selesai.",
      },
    ],
    relatedProjects: ["sma-angkasa-2", "simpatik", "e-library"],
  },
  {
    slug: "jasa-pembuatan-sistem-informasi",
    name: "Sistem informasi",
    keyword: "jasa pembuatan sistem informasi",
    metaTitle: "Jasa Pembuatan Sistem Informasi — Ilham Wara",
    metaDescription:
      "Jasa pembuatan sistem informasi untuk instansi dan perusahaan: alur kerja, role akses, dashboard, laporan, audit trail, dan integrasi API.",
    h1: "Jasa pembuatan sistem informasi",
    intro:
      "Sistem informasi yang mengikuti cara kerja instansi Anda — bukan template yang memaksa proses berubah. Saya merancang data model, alur kerja, hak akses, laporan, dan audit trail untuk sistem yang dipakai sehari-hari.",
    problems: [
      "Alur kerja antar bagian tidak terdokumentasi dan sulit dilacak.",
      "Laporan bulanan memakan waktu karena data harus direkap manual.",
      "Data antar unit tidak konsisten dan sulit diaudit.",
    ],
    deliverables: [
      "Pemetaan proses dan kebutuhan pengguna",
      "Perancangan database dan aturan validasi",
      "Role, permission, dan audit trail",
      "Dashboard operasional dan laporan",
      "API untuk integrasi sistem lain",
      "Deployment, dokumentasi, dan pelatihan",
    ],
    audience: [
      "Instansi pemerintah dan BUMD",
      "Perusahaan dengan proses back-office",
      "Organisasi yang butuh sistem multi-role",
    ],
    stack: ["Laravel", ".NET", "PostgreSQL", "React", "REST API", "Linux"],
    faqs: [
      {
        q: "Bisa menyesuaikan SOP instansi?",
        a: "Bisa. Discovery dimulai dari proses yang berjalan sekarang, lalu dipetakan ke alur sistem yang lebih terkontrol.",
      },
      {
        q: "Bisa on-premise atau di server instansi?",
        a: "Bisa. Saya menyiapkan deployment di server Linux, Nginx, dan database yang dikelola instansi sendiri.",
      },
      {
        q: "Apakah termasuk laporan dan export?",
        a: "Bisa. Laporan PDF, Excel, dan dashboard bisa masuk ke scope sesuai kebutuhan.",
      },
    ],
    relatedProjects: ["sipt", "sigd", "dikplhd", "simpatik"],
  },
  {
    slug: "jasa-maintenance-website",
    name: "Maintenance website",
    keyword: "jasa maintenance website",
    metaTitle: "Jasa Maintenance Website — Ilham Wara",
    metaDescription:
      "Jasa maintenance website dan aplikasi: monitoring, backup, update keamanan, bug fix, dan perubahan kecil. Support bulanan dengan SLA yang jelas.",
    h1: "Jasa maintenance website",
    intro:
      "Website yang sudah live tetap butuh orang yang bertanggung jawab. Saya menangani monitoring, backup, update keamanan, bug fix, dan perubahan kecil agar sistem tetap stabil dan tidak menumpuk masalah.",
    problems: [
      "Website down dan tidak ada yang langsung menangani.",
      "Bug lama menumpuk karena tidak ada developer tetap.",
      "Update keamanan dan dependency terlewat.",
    ],
    deliverables: [
      "Monitoring uptime dan error",
      "Backup berkala dan prosedur restore",
      "Update keamanan dan dependency",
      "Bug fix dan perubahan kecil",
      "Jam support bulanan yang jelas",
      "Laporan aktivitas bulanan",
    ],
    audience: [
      "Pemilik website/aplikasi production",
      "Instansi yang tidak punya tim IT internal",
      "Bisnis yang butuh support rutin",
    ],
    stack: ["Linux", "Nginx", "Laravel", "PostgreSQL", "Docker", "CI/CD"],
    faqs: [
      {
        q: "Bisa maintenance website yang bukan buatan Anda?",
        a: "Bisa, setelah audit awal untuk memahami kondisi kode, server, dan risiko yang ada.",
      },
      {
        q: "Apakah ada SLA?",
        a: "Ada. Tingkat respons dan jam support ditentukan di paket. Lihat halaman rate card untuk detail.",
      },
      {
        q: "Apakah termasuk perubahan fitur?",
        a: "Perubahan kecil masuk paket; fitur baru atau perubahan besar dihitung terpisah.",
      },
    ],
    relatedProjects: ["sipt", "smartpom", "dikplhd"],
  },
  {
    slug: "jasa-audit-sistem-informasi",
    name: "Audit sistem informasi",
    keyword: "jasa audit sistem informasi",
    metaTitle: "Jasa Audit Sistem Informasi — Ilham Wara",
    metaDescription:
      "Jasa audit sistem informasi: review arsitektur, kualitas kode, keamanan, performa, dan roadmap perbaikan yang diprioritaskan.",
    h1: "Jasa audit sistem informasi",
    intro:
      "Audit untuk sistem yang sudah berjalan tetapi sulit dirawat, lambat, atau akan diambil alih. Saya menilai arsitektur, kode, database, keamanan, dan performa — lalu memberi rekomendasi yang bisa dieksekusi.",
    problems: [
      "Aplikasi semakin lambat dan tidak jelas penyebabnya.",
      "Kode sulit dirawat setelah developer sebelumnya pergi.",
      "Ada risiko keamanan yang belum pernah diuji.",
    ],
    deliverables: [
      "Review arsitektur dan struktur kode",
      "Pemeriksaan keamanan dan akses data",
      "Analisis query dan performa",
      "Daftar temuan dengan tingkat risiko",
      "Roadmap perbaikan yang diprioritaskan",
      "Walkthrough dengan tim internal",
    ],
    audience: [
      "Perusahaan yang mengambil alih sistem",
      "Instansi yang akan melakukan pengadaan lanjutan",
      "Tim yang butuh second opinion",
    ],
    stack: ["Laravel", ".NET", "PostgreSQL", "Docker", "Linux", "Nginx"],
    faqs: [
      {
        q: "Bisa audit tanpa akses source code?",
        a: "Bisa dilakukan secara black-box dari sisi aplikasi dan server, tetapi hasilnya lebih terbatas dibanding review source code.",
      },
      {
        q: "Apakah audit termasuk perbaikan?",
        a: "Tidak otomatis. Perbaikan bisa dikerjakan terpisah setelah prioritas dan effort disepakati.",
      },
      {
        q: "Output-nya seperti apa?",
        a: "Laporan temuan, tingkat risiko, bukti, rekomendasi, dan roadmap prioritas. Bisa dilanjutkan sesi walkthrough.",
      },
    ],
    relatedProjects: ["kehati", "sigd", "sipt"],
  },
  {
    slug: "jasa-laravel",
    name: "Laravel development",
    keyword: "jasa laravel",
    metaTitle: "Jasa Laravel — Ilham Wara",
    metaDescription:
      "Jasa Laravel untuk API, dashboard, integrasi, upgrade versi, dan optimasi performa. Dikerjakan oleh engineer dengan 9+ tahun pengalaman production.",
    h1: "Jasa Laravel untuk aplikasi bisnis",
    intro:
      "Laravel adalah salah satu stack utama saya sejak 2018. Saya mengerjakan API, dashboard, integrasi, upgrade versi, dan optimasi query untuk aplikasi yang sudah berjalan di production — termasuk sistem pemerintah dan enterprise.",
    problems: [
      "Aplikasi Laravel lambat karena query dan struktur yang tidak efisien.",
      "Butuh developer senior untuk mengambil alih kode yang ada.",
      "Integrasi API atau upgrade versi tertunda karena risiko.",
    ],
    deliverables: [
      "Pengembangan modul dan REST API",
      "Autentikasi, role, dan permission",
      "Queue, job, dan integrasi pihak ketiga",
      "Optimasi query dan struktur database",
      "Upgrade versi Laravel dan dependency",
      "Testing, deployment, dan dokumentasi",
    ],
    audience: [
      "Perusahaan dengan aplikasi Laravel",
      "Agency yang butuh tambahan kapasitas senior",
      "Startup yang membangun produk di Laravel",
    ],
    stack: ["Laravel", "PHP", "PostgreSQL", "MySQL", "Redis", "Docker"],
    faqs: [
      {
        q: "Bisa mengambil alih project Laravel yang sudah ada?",
        a: "Bisa. Biasanya dimulai dengan audit singkat untuk memahami struktur, dependency, dan risiko sebelum perubahan.",
      },
      {
        q: "Bisa upgrade Laravel versi lama?",
        a: "Bisa, dengan rencana bertahap dan testing. Upgrade besar sebaiknya tidak dilakukan langsung di production tanpa staging.",
      },
      {
        q: "Bisa kerja remote?",
        a: "Bisa. Saya terbiasa bekerja remote dengan tim internal, agency, maupun langsung dengan stakeholder.",
      },
    ],
    relatedProjects: ["sidia-jakarta", "sipt", "dikplhd"],
  },
  {
    slug: "jasa-integrasi-api",
    name: "Integrasi API",
    keyword: "jasa integrasi api",
    metaTitle: "Jasa Integrasi API — Ilham Wara",
    metaDescription:
      "Jasa integrasi API: payment gateway, ERP, sistem instansi, webhook, sinkronisasi data, dan migrasi database dengan alur yang aman.",
    h1: "Jasa integrasi API dan sinkronisasi data",
    intro:
      "Sistem yang terpisah membuat pekerjaan jadi dua kali. Saya menghubungkan aplikasi Anda dengan payment gateway, ERP, API instansi, atau sistem internal — lengkap dengan penanganan error, retry, dan dokumentasi.",
    problems: [
      "Data harus diinput dua kali di sistem yang berbeda.",
      "Sinkronisasi data tidak konsisten dan sulit dilacak.",
      "Integrasi lama tidak punya dokumentasi dan rawan gagal.",
    ],
    deliverables: [
      "Desain kontrak API dan pemetaan data",
      "Integrasi REST/SOAP dan webhook",
      "Retry, idempotency, dan logging",
      "Sinkronisasi data dan migrasi",
      "Monitoring dan alert kegagalan",
      "Dokumentasi teknis dan handover",
    ],
    audience: [
      "Perusahaan dengan beberapa sistem terpisah",
      "Instansi yang perlu terhubung ke layanan pusat",
      "Produk yang butuh payment/shipping integration",
    ],
    stack: ["REST API", "Laravel", "Go", "PostgreSQL", "Webhook", "Queue"],
    faqs: [
      {
        q: "Bisa integrasi dengan API pihak ketiga?",
        a: "Bisa, selama API memiliki dokumentasi dan akses yang sah. Saya juga bisa melakukan penyesuaian jika dokumentasi tidak lengkap.",
      },
      {
        q: "Bagaimana jika API sering gagal?",
        a: "Integrasi dirancang dengan retry, timeout, logging, dan mekanisme idempotency agar kegagalan bisa ditangani tanpa duplikasi data.",
      },
      {
        q: "Bisa sekaligus migrasi data lama?",
        a: "Bisa. Migrasi data dibahas terpisah karena biasanya butuh pemetaan, validasi, dan uji coba di staging.",
      },
    ],
    relatedProjects: ["ewas-golang", "anxious", "sipt"],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const serviceKeywords = services.map((service) => service.keyword);
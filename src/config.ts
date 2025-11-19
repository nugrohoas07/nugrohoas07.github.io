export const siteConfig = {
  name: "Nugroho Alif Suhendra",
  title: "Software Developer",
  description: "Portfolio website of Nugroho ALif Suhendra",
  accentColor: "#1d4ed8",
  social: {
    email: "nugroho.alif77@gmail.com",
    linkedin: "https://www.linkedin.com/in/nugrohoas/",
    github: "https://github.com/nugrohoas07",
    twitter: "",
  },
  aboutMe:
    "Halo! Saya seorang Software Developer yang memiliki ketertarikan untuk membangun produk digital yang bermanfaat. Saya menikmati tantangan dalam memecahkan masalah melalui pemrograman dan menjaga aplikasi tetap stabil seiring berkembangnya kebutuhan.",
  skills: ["PHP", "Node.js", "Golang", "Flutter"],
  projects: [
    {
      name: "SIBM Guru",
      description:
        "Dikembangkan untuk memfasilitasi proses administrasi kehadiran, pengajuan izin, dan pengecekan slip gaji guru secara efisien. Aplikasi ini membantu meningkatkan produktivitas guru ",
      link: "https://play.google.com/store/apps/details?id=com.sibm.guru_bm&pcampaignid=web_share",
      skills: ["Dart", "Flutter", "Getx"],
    },
    {
      name: "Grenviro Mobile",
      description:
        "Ditujukan untuk driver PT. Grenviro Indonesia, digunakan untuk melihat dan memantau customer yang memerlukan pengiriman",
      link: "https://play.google.com/store/apps/details?id=com.grenviro.grenviro_mobile&pcampaignid=web_share",
      skills: ["Dart", "Flutter", "Getx"],
    },
    {
      name: "SIBM Wali Santri",
      description:
        "Aplikasi yang dirancang untuk memudahkan wali santri mendukung dan memantau santri mereka. Memiliki fitur seperti pembayaran uang sekolah, top up tabungan santri dan masih banyak lainnya",
      link: "https://play.google.com/store/apps/details?id=com.sibm.santri_bm&pcampaignid=web_share",
      skills: ["Dart", "Flutter", "Getx"],
    },
    {
      name: "Sistem Informasi HMJ",
      description:
        "Aplikasi internal HMJ, digunakan untuk menunjang keperluan dan kegiatan himpunan serta agar semua proses dapat terdokumentasi dengan mudah",
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["PHP", "Codeigniter 3", "Bootstrap","MySQL"],
    },
  ],
  experience: [
    {
      company: "Yayasan Bahrul Maghfiroh Cinta Indonesia",
      title: "Mobile Developer",
      dateRange: "Jan 2025 - Sekarang",
      bullets: [
        "Mengembangkan serta melakukan pemeliharaan aplikasi mobile yang digunakan oleh ratusan pengguna",
        "Merefactor kode agar lebih mudah dipelihara",
        "Mendesain UI & UX aplikasi",
      ],
    },
    {
      company: "Jurusan Teknik Elektro UM",
      title: "Web Developer",
      dateRange: "Apr 2020 - Jul 2020",
      bullets: [
        "Memimpin tim dalam pengembangan website internal untuk HMJ Teknik Elektro dari tahap perancangan hingga selesai, dengan memastikan koordinasi yang efektif dan penyelesaian tugas tepat waktu",
        "Menangani 60%-70% dari proses pengembangan website",
      ],
    },
  ],
  education: [
    {
      school: "Enigma Camp Online Bootcamp",
      degree: "Backend Golang",
      dateRange: "2024",
      achievements: [
        "Mengembangkan RESTful API menggunakan Golang secara individu maupun tim, dengan penerapan best practices",
        "Menerapkan clean architecture untuk memastikan struktur kode yang terorganisir dan scalable, serta melakukan unit testing untuk menjamin kualitas dan keandalan aplikasi",
        "Mengembangkan API untuk aplikasi pinjaman online dari tahap perancangan hingga deployment, sebagai bagian dari final project",
      ],
    },
    
    {
      school: "DBS Foundation x Dicoding Online Bootcamp",
      degree: "Backend Node.js",
      dateRange: "2023",
      achievements: [
        "Mengembangkan RESTful API menggunakan Node.js, Hapi.js, PostgreSQL, Redis, RabbitMQ",
        "Mendapatkan bintang 3 (penuh) di setiap submission project",
      ],
    },
    {
      school: "Universitas Negeri Malang",
      degree: "S1 Pendidikan Teknik Informatika",
      dateRange: "2017 - 2024",
      achievements: [
        "Lulus dengan IPK 3.46",
      ],
    },
  ],
};

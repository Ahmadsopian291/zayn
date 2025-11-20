// import netflixIcon from "/images/netflix.png";

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   icon: string;
//   features: string[];
//   pricing: {
//     weekly: { price: string; features: string[] };
//     monthly: { price: string; features: string[] };
//     yearly: { price: string; features: string[] };
//   };
// }

// export const products: Product[] = [
//   {
//     id: "netflix",
//     name: "Netflix Premium",
//     description: "Streaming film dan series tanpa batas dengan kualitas 4K Ultra HD",
//     icon: netflixIcon,
//     features: [
//       "Akses ke semua konten Netflix",
//       "Streaming 4K Ultra HD",
//       "Download unlimited",
//       "Multi-device support",
//       "Profil khusus",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 15.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 45.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 400.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 40%"],
//       },
//     },
//   },
//   {
//     id: "spotify",
//     name: "Spotify Premium",
//     description: "Dengarkan musik favorit tanpa iklan dengan kualitas audio terbaik",
//     icon: "🎵",
//     features: [
//       "Tanpa iklan",
//       "Download lagu offline",
//       "Audio berkualitas tinggi",
//       "Skip unlimited",
//       "Akses semua playlist",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 10.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 30.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 300.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
//       },
//     },
//   },
//   {
//     id: "canva",
//     name: "Canva Pro",
//     description: "Desain grafis profesional dengan template premium dan fitur lengkap",
//     icon: "🎨",
//     features: [
//       "Akses semua template premium",
//       "Remove background 1-click",
//       "Brand kit unlimited",
//       "Storage 100GB+",
//       "Resize & animasi",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 12.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 35.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
//       },
//       yearly: {
//         price: "Rp 350.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
//       },
//     },
//   },
//   {
//     id: "chatgpt",
//     name: "ChatGPT Plus",
//     description: "AI assistant terpintar dengan GPT-4 untuk produktivitas maksimal",
//     icon: "🤖",
//     features: [
//       "Akses GPT-4 unlimited",
//       "Respons lebih cepat",
//       "Priority access",
//       "Plugin & browsing",
//       "Advanced features",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 20.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 60.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 600.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
//       },
//     },
//   },
//   {
//     id: "gemini",
//     name: "Google Gemini Advanced",
//     description: "AI Google terbaru dengan kemampuan analisis dan kreativitas tinggi",
//     icon: "✨",
//     features: [
//       "Gemini Advanced model",
//       "Integrasi Google Workspace",
//       "Priority support",
//       "Advanced reasoning",
//       "Multi-modal AI",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 18.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 55.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 550.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
//       },
//     },
//   },
//   {
//     id: "disney",
//     name: "Disney+ Hotstar",
//     description: "Streaming Disney, Marvel, Star Wars, dan konten eksklusif Indonesia",
//     icon: "🏰",
//     features: [
//       "Konten Disney & Marvel",
//       "Live sports premium",
//       "Download offline",
//       "4K streaming",
//       "Multiple profiles",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 12.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 35.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
//       },
//       yearly: {
//         price: "Rp 350.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
//       },
//     },
//   },
//   {
//     id: "prime",
//     name: "Amazon Prime Video",
//     description: "Streaming film dan series original Amazon dengan subtitle Indonesia",
//     icon: "📺",
//     features: [
//       "Amazon Originals",
//       "4K HDR streaming",
//       "Download offline",
//       "X-Ray features",
//       "Watch party",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 10.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 30.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 300.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
//       },
//     },
//   },
//   {
//     id: "microsoft365",
//     name: "Microsoft 365",
//     description: "Office suite lengkap dengan Word, Excel, PowerPoint, dan OneDrive 1TB",
//     icon: "💼",
//     features: [
//       "Word, Excel, PowerPoint",
//       "OneDrive 1TB cloud",
//       "Teams & Outlook",
//       "Multi-device sync",
//       "Premium templates",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 15.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 45.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
//       },
//       yearly: {
//         price: "Rp 450.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
//       },
//     },
//   },
//   {
//     id: "grammarly",
//     name: "Grammarly Premium",
//     description: "AI writing assistant untuk grammar, spelling, dan style writing sempurna",
//     icon: "✍️",
//     features: [
//       "Advanced grammar check",
//       "Plagiarism detector",
//       "Tone suggestions",
//       "Vocabulary enhancement",
//       "All integrations",
//     ],
//     pricing: {
//       weekly: {
//         price: "Rp 12.000",
//         features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
//       },
//       monthly: {
//         price: "Rp 35.000",
//         features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
//       },
//       yearly: {
//         price: "Rp 350.000",
//         features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
//       },
//     },
//   },
// ];

export interface ServiceOption {
  type: string;            // contoh: "Private", "Sharing", "Family Plan"
  durations?: DurationOption[]; // daftar durasi untuk pilihan ini
}

export interface DurationOption {
  label: string;  // contoh: "1 Month", "3 Months", "1 Year"
  price: number;  // harga untuk durasi tersebut
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  services: ServiceOption[]; // pilihan layanan
}

export const products: Product[] = [
  // ==============================
  // NETFLIX
  // ==============================
  {
    id: "netflix",
    name: "Netflix Premium",
    slug: "netflix-premium",
    description: "Netflix adalah layanan streaming yang menawarkan berbagai acara TV, film, anime, dokumenter pemenang penghargaan, dan lainnya di ribuan perangkat yang terhubung internet.",
    image: "/images/netflix.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 26000 },
          { label: "3 Month", price: 64000 } 
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 43000 },
          { label: "3 Month", price: 108000 } 
        ],
      },
    ],
  },

  // ==============================
  // Disney+ Hotstar
  // ==============================
  {
    id: "Disney+ Hoststar",
    name: "Disney+ Hoststar",
    slug: "Disney+-Hoststar",
    description: "Disney+ adalah rumah streaming untuk Disney, Pixar, Marvel, Star Wars, National Geographic, dan lainnya dengan konten orisinal eksklusif serta klasik yang tak lekang oleh waktu.",
    image: "/images/disney.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 33000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 83000 },
        ],
      },
    ],
  },

  // ==============================
  // VIDIO  PREMIUM
  // ==============================
  {
    id: "Vidio Platinum",
    name: "Vidio Platinum",
    slug: "vidio-premium",
    description: "Streaming TV, film, serial, & olahraga favoritmu. Tayangan eksklusif lokal & internasional. Temukan pengalaman menonton yang #LebihDariHiburan di Vidio.",
    image: "/images/vidio.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 23000 },
         
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 34000 },
          
        ],
      },
    ],
  },

  // ==============================
  // VIU
  // ==============================
  {
    id: "Viu",
    name: "Viu No Limit",
    slug: "viu-premium",
    description: "Nonton streaming drama, film, Viu Originals dan variety show Korea, Thailand, Indonesia, dan Asia terbaru lainnya dengan subtitle Indonesia dan kualitas HD.",
    image: "/images/viu.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Month", price: 16000 },
          { label: "3 Month", price: 18000 },
          { label: "6 Month", price: 23000 },
          { label: "1 Year", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // IQIYI VIP
  // ==============================
  {
    id: "Iqiyi Vip",
    name: "Iqiyi Vip",
    slug: "iqiyi-vip",
    description: "Tonton drama China, drama Korea, drama Thailand, variety show, film, dan anime terbaru secara gratis dengan berbagai pilihan subtitle dan dubbing langsung di iQIYI",
    image: "/images/iqiyi.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 15000 },
          { label: "3 Month", price: 23000 },
          { label: "1 Year", price: 28000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 33000 },
        ],
      },
    ],
  },

  // ==============================
  // WE TV VIP
  // ==============================
  {
    id: "We TV Vip",
    name: "We TV Vip",
    slug: "we-tv-vip",
    description: "WeTV merupakan aplikasi layanan streaming video yang menghadirkan beragam dari konten drama, film, anime, dan variety show terbaik dari berbagai negara di Asia",
    image: "/images/wetv.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
          { label: "3 Bulan", price: 28000 },
          { label: "1 Tahun Via Google ", price: 43000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 38000 },
        ],
      },
    ],
  },

  // ==============================
  // HBO MAX ULTIMATE
  // ==============================
  {
    id: "HBO Max Ultimate",
    name: "HBO Max Ultimate",
    slug: "hbo-max-ultimate",
    description: "Stream serial yang paling dibicarakan dan film blockbuster yang menampilkan dunia HBO, DC Universe, Harry Potter, Discovery dan banyak lagi di HBO Max.",
    image: "/images/hbo.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 31000 },
        ],
      },
    ],
  },

  // ==============================
  // YOU TUBE PREMIUM
  // ==============================
  {
    id: "You Tube Premium",
    name: "YouTube + Music Premium",
    slug: "you-tube-premium",
    description: "Dengan YouTube Premium, nikmati akses tanpa iklan, unduhan, dan pemutaran latar di YouTube dan YouTube Music.",
    image: "/images/ytb.png",
    services: [
      {
        type: "Family Plan",
        durations: [
          { label: "1 Bulan", price: 13000 },
          { label: "2 Bulan", price: 16000 },
        ],
      },
      {
        type: "Individu Plan",
        durations: [
          { label: "1 Bulan", price: 20000 },
          { label: "3 Bulan", price: 38000 },
          { label: "6 Bulan", price: 53000 },
        ],
      },
    ],
  },

  // ==============================
  // AMOZON PRIME VIDEO
  // ==============================
  {
    id: "Amazone Prime Video",
    name: "Amazone Prime Video",
    slug: "amazone-prime-video",
    description: "Nikmati akses tak terbatas ke ribuan film, serial TV, dan tayangan eksklusif Amazon Originals dalam kualitas HD dan 4K. Streaming kapan saja dan di mana saja dengan akun premium Amazon Prime Video.",
    image: "/images/amazone.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // Vision+
  // ==============================
  {
    id: "Vision+ Sports",
    name: "Vision+ Sports",
    slug: "vision-plus-sports",
    description: "Tonton pertandingan olahraga dunia seperti MotoGP, Bundesliga, Formula E, dan lainnya secara langsung di Vision+ Sports. Nikmati streaming gratis dengan kualitas HD dan berbagai pilihan channel olahraga terbaik, langsung dari genggamanmu!",
    image: "/images/vision.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 23000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 32000 },
        ],
      },
    ],
  },

  // ==============================
  // RCTI+
  // ==============================
  {
    id: "RCTI+ Premium",
    name: "RCTI+ Premium",
    slug: "rcti-plus-premium",
    description: "Streaming acara TV favorit, sinetron, film, berita, hingga pertandingan olahraga langsung dari RCTI, MNCTV, GTV, dan iNews. Nikmati konten eksklusif, original series, dan siaran ulang kapan saja, di mana saja, gratis di RCTI+",
    image: "/images/rcti.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 31000 },
        ],
      },
    ],
  },

  // ==============================
  // LOKLOK
  // ==============================
  {
    id: "Loklok Premium",
    name: "Loklok Premium",
    slug: "loklok-premium",
    description: "Tonton film, drama Korea, China, anime, dan variety show terbaru secara gratis di Loklok. Nikmati tampilan antarmuka yang mudah digunakan, update episode cepat, serta pilihan subtitle dan dubbing dalam berbagai bahasa",
    image: "/images/loklok.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan Basic (No Tv)", price: 26000 },
          { label: "1 Bulan Standard (Tv + Reelshot)", price: 33000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan Basic (No Tv)", price: 51000 },
        ],
      },
    ],
  },

  // ==============================
  // Youku VIP
  // ==============================
  {
    id: "Youku Vip",
    name: "Youku Vip",
    slug: "youku-vip",
    description: "Tonton drama China, variety show, film, dan anime populer langsung di Youku. Nikmati tayangan eksklusif dan original dengan kualitas tinggi, update cepat, serta pilihan subtitle berbagai bahasa. Semua hiburan favoritmu tersedia gratis dan mudah diakses!",
    image: "/images/youku.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 17000 },
          { label: "3 Bulan", price: 28000 },
          { label: "1 Tahun", price: 38000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 48000 },
        ],
      },
    ],
  },

  // ==============================
  // Bstasion VIP
  // ==============================
  {
    id: "Bstasion Vip",
    name: "Bstasion Vip",
    slug: "bstasion-vip",
    description: "Nikmati tayangan anime populer, drama Korea, China, variety show, dan film terbaru secara legal di Bstation. Dapatkan pengalaman menonton berkualitas tinggi dengan subtitle berbagai bahasa, update episode cepat, dan komunitas penggemar yang aktif. Semua hiburan favoritmu tersedia gratis dan mudah diakses!",
    image: "/images/bstation.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 17000 },
          { label: "3 Bulan", price: 23000 },
          { label: "1 Tahun", price: 38000 },
        ],
      },
    ],
  },

  // ==============================
  // Spotify Premium
  // ==============================
  {
    id: "Spotify Premium",
    name: "Spotify Premium",
    slug: "spotify-premium",
    description: "Streaming jutaan lagu, album, dan podcast dari seluruh dunia secara gratis di Spotify. Temukan musik sesuai suasana hati, buat playlist sendiri, dan nikmati audio berkualitas tinggi kapan saja, di mana saja.",
    image: "/images/spotify.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 18000 },
        ],
      },
    ],
  },

  // ==============================
  // Apple Music Premium
  // ==============================
  {
    id: "Apple Music Premium",
    name: "Apple Music Premium",
    slug: "apple-music-premium",
    description: "Streaming lebih dari 100 juta lagu, album, dan playlist eksklusif dari artis dunia hanya di Apple Music. Nikmati audio berkualitas tinggi, bebas iklan, dan fitur lirik real-time. Dengarkan secara online atau offline, kapan saja dan di mana saja.",
    image: "/images/applemusic.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 15000 },
          { label: "2 Bulan", price: 22000 },
          { label: "3 Bulan", price: 29000 },
        ],
      },
    ],
  },

  // ==============================
  // Remini Pro
  // ==============================
  {
    id: "Remini Pro",
    name: "Remini Pro",
    slug: "remini-pro",
    description: "Remini adalah aplikasi pengedit foto berbasis AI yang mampu mengubah gambar lama, buram, atau rusak menjadi foto HD yang tajam dan jelas. Dengan satu sentuhan, kamu bisa memperbaiki detail wajah, warna, dan latar belakang, serta menghasilkan foto profesional dari selfie biasa. Cocok untuk menghidupkan kembali kenangan lama dan membuat konten visual berkualitas tinggi",
    image: "/images/remini.png",
    services: [
      {
        type: "Android",
        durations: [
          { label: "1 Bulan Sharing", price: 20000 },
        ],
      },
      {
        type: "Ios",
        durations: [
          { label: "1 Bulan Sharing", price: 20000 },
        ],
      },
    ],
  },

  // ==============================
  // Canva Pro
  // ==============================
  {
    id: "Canva Pro",
    name: "Canva Pro",
    slug: "canva-pro",
    description: "Canva Pro menawarkan fitur lengkap untuk membuat desain grafis, presentasi, poster, konten media sosial, dan lainnya secara cepat dan praktis. Nikmati akses ke jutaan template premium, elemen desain eksklusif, penghapusan latar belakang otomatis, serta penyimpanan cloud dan kolaborasi tim. Cocok untuk kreator, pelajar, bisnis, dan siapa pun yang ingin hasil desain maksimal tanpa ribet.",
    image: "/images/canva.png",
    services: [
      {
        type: "Canva Pro",
        durations: [
          { label: "1 Bulan", price: 14000 },
          { label: "3 Bulan", price: 17000 },
          { label: "6 Bulan", price: 23000 },
          { label: "1 Tahun", price: 26000 },
        ],
      },
    ],
  },

  // ==============================
  // Canva Education
  // ==============================
  {
    id: "Canva Education",
    name: "Canva Education",
    slug: "canva-education",
    description: "Canva Pro menawarkan fitur lengkap untuk membuat desain grafis, presentasi, poster, konten media sosial, dan lainnya secara cepat dan praktis. Nikmati akses ke jutaan template premium, elemen desain eksklusif, penghapusan latar belakang otomatis, serta penyimpanan cloud dan kolaborasi tim. Cocok untuk kreator, pelajar, bisnis, dan siapa pun yang ingin hasil desain maksimal tanpa ribet.",
    image: "/images/canva.png",
    services: [
      {
        type: "Canva Pro",
        durations: [
          { label: "1 Bulan", price: 22000 },
        ],
      },
    ],
  },

  // ==============================
  // Lightroom Premium
  // ==============================
  {
    id: "Lightroom Premium",
    name: "Lightroom Premium",
    slug: "lightroom-premium",
    description: "Adobe Lightroom adalah aplikasi editing foto berbasis AI yang memungkinkan kamu menyempurnakan gambar dengan cepat dan presisi. Atur pencahayaan, warna, dan detail hanya dalam beberapa sentuhan. Cocok untuk fotografer, kreator konten, atau siapa pun yang ingin hasil foto berkualitas tinggi langsung dari smartphone atau desktop",
    image: "/images/ligrom.png",
    services: [
      {
        type: "Preset",
        durations: [
          { label: "500+ Preset", price: 15000 },
          { label: "1000+ Preset", price: 18000 },
        ],
      },
      {
        type: "Premium",
        durations: [
          { label: "Sharing 1 Tahun", price: 23000 },
          
        ],
      },
    ],
  },

  // ==============================
  // alight motion Premium
  // ==============================
  {
    id: "Alight Motion",
    name: "Alight Motion",
    slug: "alight-motion-premium",
    description: "Alight Motion adalah aplikasi editing video dan animasi yang powerful untuk smartphone. Buat efek visual, motion graphics, transisi, dan animasi berkualitas tinggi dengan fitur layer, keyframe, dan preset yang lengkap. Cocok untuk kreator konten, editor, dan siapa pun yang ingin hasil video sinematik langsung dari HP.",
    image: "/images/alig.png",
    services: [
      {
        type: "Tahunan",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
    ],
  },

  // ==============================
  // VSCO X
  // ==============================
  {
    id: "VSCO X",
    name: "VSCO X",
    slug: "vsco-x",
    description: "VSCO adalah aplikasi kamera dan editing foto yang populer di kalangan kreator visual. Tersedia berbagai filter estetik, alat editing profesional, dan fitur komunitas untuk berbagi karya. Cocok untuk kamu yang ingin hasil foto bergaya artistik dan konsisten, langsung dari smartphone.",
    image: "/images/vsco.png",
    services: [
      {
        type: "Tahunan",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
    ],
  },

  // ==============================
  // Picart Gold
  // ==============================
  {
    id: "Picart Gold",
    name: "Picart Gold",
    slug: "picart-gold",
    description: "Picsart Gold adalah versi premium dari aplikasi editing populer Picsart, yang menawarkan akses ke ribuan stiker, font, efek, dan template eksklusif. Nikmati fitur penghapus background otomatis, alat AI canggih, dan tanpa iklan. Cocok untuk kreator konten yang ingin hasil visual lebih profesional dan estetik langsung dari smartphone.",
    image: "/images/picart.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 15000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
    ],
  },

  // ==============================
  // unfold 
  // ==============================
  {
    id: "Unfold",
    name: "Unfold Premium",
    slug: "unfold-premium",
    description: "Unfold adalah aplikasi desain visual yang memudahkan kamu membuat story Instagram, TikTok, dan media sosial lainnya dengan template elegan dan minimalis. Tersedia ratusan layout, font premium, dan alat editing kreatif untuk hasil konten yang stylish dan konsisten. Cocok untuk kreator, brand, dan siapa pun yang ingin tampil menonjol di media sosial.",
    image: "/images/unfold.png",
    services: [
      {
        type: "Android",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
      {
        type: "Ios",
        durations: [
          { label: "1 Tahun", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // Wattpad Premium 
  // ==============================
  {
    id: "Wattpad",
    name: "Wattpad Premium",
    slug: "wattpad-premium",
    description: "Wattpad adalah platform sosial untuk membaca dan menulis cerita orisinal dari berbagai genre seperti romansa, fantasi, horor, hingga fan fiction. Bergabunglah dengan jutaan pembaca dan penulis di seluruh dunia, temukan kisah-kisah menarik, dan bagikan ceritamu sendiri. Semua bisa diakses gratis, langsung dari smartphone atau web",
    image: "/images/wattpad.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
          { label: "6 Bulan", price: 26000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Get Contact 
  // ==============================
  {
    id: "Get Contact",
    name: "Get Contact Premium",
    slug: "get-contact-premium",
    description: "Wattpad adalah platform sosial untuk membaca dan menulis cerita orisinal dari berbagai genre seperti romansa, fantasi, horor, hingga fan fiction. Bergabunglah dengan jutaan pembaca dan penulis di seluruh dunia, temukan kisah-kisah menarik, dan bagikan ceritamu sendiri. Semua bisa diakses gratis, langsung dari smartphone atau web",
    image: "/images/get.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Grammarly Premium
  // ==============================
  {
    id: "Grammarly",
    name: "Grammarly Premium",
    slug: "grammarly-premium",
    description: "Grammarly adalah asisten menulis berbasis AI yang membantu kamu memperbaiki tata bahasa, ejaan, tanda baca, dan gaya penulisan secara real-time. Cocok untuk email profesional, tugas kuliah, konten media sosial, atau dokumen penting lainnya. Nikmati fitur premium seperti pengecekan nada, saran kosakata, dan deteksi plagiarisme untuk hasil tulisan yang lebih jelas, efektif, dan meyakinkan.",
    image: "/images/grammarly.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Zoom Pro
  // ==============================
  {
    id: "Zoom Pro",
    name: "Zoom Pro",
    slug: "zoom-pro",
    description: "Grammarly adalah asisten menulis berbasis AI yang membantu kamu memperbaiki tata bahasa, ejaan, tanda baca, dan gaya penulisan secara real-time. Cocok untuk email profesional, tugas kuliah, konten media sosial, atau dokumen penting lainnya. Nikmati fitur premium seperti pengecekan nada, saran kosakata, dan deteksi plagiarisme untuk hasil tulisan yang lebih jelas, efektif, dan meyakinkan.",
    image: "/images/zoom.png",
    services: [
      {
        type: "Harian",
        durations: [
          { label: "1 Hari", price: 16000 },
          { label: "7 Hari", price: 28000 },
          { label: "14 Hari", price: 33000 },
        ],
      },
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan", price: 50000 },
        ],
      },
    ],
  },
];
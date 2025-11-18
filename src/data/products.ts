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


];
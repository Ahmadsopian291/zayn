export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    weekly: { price: string; features: string[] };
    monthly: { price: string; features: string[] };
    yearly: { price: string; features: string[] };
  };
}

export const products: Product[] = [
  {
    id: "netflix",
    name: "Netflix Premium",
    description: "Streaming film dan series tanpa batas dengan kualitas 4K Ultra HD",
    icon: "🎬",
    features: [
      "Akses ke semua konten Netflix",
      "Streaming 4K Ultra HD",
      "Download unlimited",
      "Multi-device support",
      "Profil khusus",
    ],
    pricing: {
      weekly: {
        price: "Rp 15.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 45.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 400.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 40%"],
      },
    },
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    description: "Dengarkan musik favorit tanpa iklan dengan kualitas audio terbaik",
    icon: "🎵",
    features: [
      "Tanpa iklan",
      "Download lagu offline",
      "Audio berkualitas tinggi",
      "Skip unlimited",
      "Akses semua playlist",
    ],
    pricing: {
      weekly: {
        price: "Rp 10.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 30.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 300.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
      },
    },
  },
  {
    id: "canva",
    name: "Canva Pro",
    description: "Desain grafis profesional dengan template premium dan fitur lengkap",
    icon: "🎨",
    features: [
      "Akses semua template premium",
      "Remove background 1-click",
      "Brand kit unlimited",
      "Storage 100GB+",
      "Resize & animasi",
    ],
    pricing: {
      weekly: {
        price: "Rp 12.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 35.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
      },
      yearly: {
        price: "Rp 350.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
      },
    },
  },
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    description: "AI assistant terpintar dengan GPT-4 untuk produktivitas maksimal",
    icon: "🤖",
    features: [
      "Akses GPT-4 unlimited",
      "Respons lebih cepat",
      "Priority access",
      "Plugin & browsing",
      "Advanced features",
    ],
    pricing: {
      weekly: {
        price: "Rp 20.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 60.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 600.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
      },
    },
  },
  {
    id: "gemini",
    name: "Google Gemini Advanced",
    description: "AI Google terbaru dengan kemampuan analisis dan kreativitas tinggi",
    icon: "✨",
    features: [
      "Gemini Advanced model",
      "Integrasi Google Workspace",
      "Priority support",
      "Advanced reasoning",
      "Multi-modal AI",
    ],
    pricing: {
      weekly: {
        price: "Rp 18.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 55.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 550.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
      },
    },
  },
  {
    id: "disney",
    name: "Disney+ Hotstar",
    description: "Streaming Disney, Marvel, Star Wars, dan konten eksklusif Indonesia",
    icon: "🏰",
    features: [
      "Konten Disney & Marvel",
      "Live sports premium",
      "Download offline",
      "4K streaming",
      "Multiple profiles",
    ],
    pricing: {
      weekly: {
        price: "Rp 12.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 35.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
      },
      yearly: {
        price: "Rp 350.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
      },
    },
  },
  {
    id: "prime",
    name: "Amazon Prime Video",
    description: "Streaming film dan series original Amazon dengan subtitle Indonesia",
    icon: "📺",
    features: [
      "Amazon Originals",
      "4K HDR streaming",
      "Download offline",
      "X-Ray features",
      "Watch party",
    ],
    pricing: {
      weekly: {
        price: "Rp 10.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 30.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 300.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
      },
    },
  },
  {
    id: "microsoft365",
    name: "Microsoft 365",
    description: "Office suite lengkap dengan Word, Excel, PowerPoint, dan OneDrive 1TB",
    icon: "💼",
    features: [
      "Word, Excel, PowerPoint",
      "OneDrive 1TB cloud",
      "Teams & Outlook",
      "Multi-device sync",
      "Premium templates",
    ],
    pricing: {
      weekly: {
        price: "Rp 15.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 45.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 25%"],
      },
      yearly: {
        price: "Rp 450.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 35%"],
      },
    },
  },
  {
    id: "grammarly",
    name: "Grammarly Premium",
    description: "AI writing assistant untuk grammar, spelling, dan style writing sempurna",
    icon: "✍️",
    features: [
      "Advanced grammar check",
      "Plagiarism detector",
      "Tone suggestions",
      "Vocabulary enhancement",
      "All integrations",
    ],
    pricing: {
      weekly: {
        price: "Rp 12.000",
        features: ["7 hari akses penuh", "Garansi aktif", "Support 24/7"],
      },
      monthly: {
        price: "Rp 35.000",
        features: ["30 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 20%"],
      },
      yearly: {
        price: "Rp 350.000",
        features: ["365 hari akses penuh", "Garansi aktif", "Support 24/7", "Hemat 30%"],
      },
    },
  },
];

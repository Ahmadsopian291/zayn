import { Zap, Shield, DollarSign, RefreshCw, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pengiriman Instan",
    description: "Akun dikirim langsung setelah pembayaran dikonfirmasi, maksimal 5 menit",
  },
  {
    icon: Shield,
    title: "Aman & Terjamin",
    description: "Semua akun dijamin aman, legal, dan terpercaya dari sumber resmi",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Dapatkan akun premium dengan harga jauh lebih murah dari official",
  },
  {
    icon: RefreshCw,
    title: "Garansi & Replacement",
    description: "Garansi replacement jika terjadi masalah pada akun Anda",
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    description: "Tim support kami siap membantu Anda kapan saja via WhatsApp",
  },
  {
    icon: Globe,
    title: "Akses Global",
    description: "Akses penuh ke semua fitur premium tanpa batasan regional",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mengapa Memilih <span className="text-primary">Kami?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami memberikan pelayanan terbaik dengan jaminan kualitas dan keamanan untuk kepuasan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-cinematic group hover:scale-105 transition-all duration-300 animate-fade-in hover:color-blue-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

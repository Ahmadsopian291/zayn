import { Search, CreditCard, MessageSquare, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Pilih Produk",
    description: "Browse dan pilih produk digital premium yang Anda inginkan dari katalog kami",
  },
  {
    icon: CreditCard,
    title: "Pilih Durasi",
    description: "Tentukan durasi langganan: mingguan, bulanan, atau tahunan sesuai kebutuhan",
  },
  {
    icon: MessageSquare,
    title: "Klik Order Sekarang",
    description: "Klik tombol order dan sistem akan redirect Anda ke WhatsApp kami",
  },
  {
    icon: Zap,
    title: "Konfirmasi Admin",
    description: "Admin kami akan merespons dan memandu proses pembayaran dengan cepat",
  },
  {
    icon: CheckCircle,
    title: "Akun Dikirim Instan",
    description: "Setelah pembayaran dikonfirmasi, akun premium langsung dikirim maksimal 5 menit",
  },
];

const HowToOrder = () => {
  return (
    <section id="cara-order" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cara <span className="text-primary">Order</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses order yang mudah dan cepat, hanya 5 langkah menuju akun premium Anda
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/6285795140765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center btn-netflix text-lg px-12 py-5"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Order via WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;

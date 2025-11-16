import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#produk");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6285795140765", "_blank");
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent animate-spotlight" />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Akun Premium Terpercaya #1 di Indonesia</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Akses Akun</span>
            <br />
            <span className="text-primary text-glow">Premium Instan</span>
            <br />
            <span className="text-foreground">& Terpercaya</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dapatkan akun Netflix, Spotify, Canva, GPT AI, dan layanan digital lainnya 
            dengan harga terjangkau — <span className="text-primary font-semibold">cepat, aman, dan bergaransi</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={scrollToProducts}
              className="btn-netflix group w-full sm:w-auto"
            >
              Lihat Produk
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="btn-netflix-outline w-full sm:w-auto"
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { number: "10K+", label: "Pelanggan Puas" },
              { number: "99.9%", label: "Tingkat Kepuasan" },
              { number: "24/7", label: "Support Online" },
              { number: "100%", label: "Garansi Aktif" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

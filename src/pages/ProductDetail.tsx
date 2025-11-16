import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, MessageSquare } from "lucide-react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Produk Tidak Ditemukan</h1>
          <Button onClick={() => navigate("/")} className="btn-netflix">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    );
  }

  const handleOrder = (duration: string, price: string) => {
    const message = `Halo, saya ingin order ${product.name} - ${duration} (${price})`;
    const whatsappUrl = `https://wa.me/6285795140765?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Kembali
        </Button>

        {/* Product Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="text-8xl mb-4">{product.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold">{product.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {product.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Pilih <span className="text-primary">Paket</span> Anda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Weekly */}
            <div className="card-cinematic p-8 space-y-6 hover:scale-105 transition-all animate-fade-in">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Mingguan</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {product.pricing.weekly.price}
                  </span>
                  <span className="text-muted-foreground">/7 hari</span>
                </div>
              </div>
              <ul className="space-y-3">
                {product.pricing.weekly.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleOrder("Mingguan", product.pricing.weekly.price)}
                className="btn-netflix w-full"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Order Sekarang
              </Button>
            </div>

            {/* Monthly - Popular */}
            <div className="card-cinematic p-8 space-y-6 hover:scale-105 transition-all animate-fade-in border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                PALING POPULER
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Bulanan</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {product.pricing.monthly.price}
                  </span>
                  <span className="text-muted-foreground">/30 hari</span>
                </div>
              </div>
              <ul className="space-y-3">
                {product.pricing.monthly.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleOrder("Bulanan", product.pricing.monthly.price)}
                className="btn-netflix w-full animate-glow-pulse"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Order Sekarang
              </Button>
            </div>

            {/* Yearly - Best Value */}
            <div className="card-cinematic p-8 space-y-6 hover:scale-105 transition-all animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Tahunan</h3>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                    BEST VALUE
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {product.pricing.yearly.price}
                  </span>
                  <span className="text-muted-foreground">/365 hari</span>
                </div>
              </div>
              <ul className="space-y-3">
                {product.pricing.yearly.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleOrder("Tahunan", product.pricing.yearly.price)}
                className="btn-netflix w-full"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Order Sekarang
              </Button>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Apa yang <span className="text-primary">Anda Dapatkan</span>
          </h2>
          <div className="card-cinematic p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-border/50 space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">✅ Akses premium penuh tanpa batasan</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">🔄 Garansi replacement jika bermasalah</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">⚡ Pengiriman instan maksimal 5 menit</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">🛡️ Support 24/7 via WhatsApp</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">🔒 100% aman dan terpercaya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-muted-foreground">
            Masih ragu atau ada pertanyaan?
          </p>
          <a
            href="https://wa.me/6285795140765"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-netflix text-lg px-12 py-6">
              <MessageSquare className="mr-2 w-5 h-5" />
              Tanya Admin via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

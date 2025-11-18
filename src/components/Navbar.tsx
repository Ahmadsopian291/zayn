import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Produk", href: "#produk" },
    { label: "Cara Order", href: "#cara-order" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigateHome = () => {
    if (location.pathname !== "/") {
      navigate("/"); // pindah ke halaman utama
    } else {
      scrollToSection("#beranda"); // scroll kalau masih di halaman utama
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo → kembali ke beranda */}
          <button
            onClick={handleNavigateHome}
            className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            Zayn Store
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/"); // pindah ke beranda dulu
                    setTimeout(() => scrollToSection(item.href), 50);
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => {
                if (location.pathname !== "/") navigate("/");
                setTimeout(() => scrollToSection("#kontak"), 50);
              }}
              className="btn-netflix"
            >
              Order Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

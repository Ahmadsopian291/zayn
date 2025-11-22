const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-primary mb-1">Zayn Store</p>
            <p className="text-sm text-muted-foreground">
              Akun Premium Terpercaya #1 di Indonesia
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zayn Store. All rights reserved.
            </p>
            
            <p className="text-xs text-muted-foreground mt-1">
              Layanan customer support 24/7 via WhatsApp
            </p>
            <p>© {currentYear} Web Made in MadDWeb.</p>
          <p>Order Pembuatan Website Dibawah Sini</p>
          <li>
                <a
                  href="https://wa.me/6285795140765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +62 857-9514-0765
                </a>
              </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

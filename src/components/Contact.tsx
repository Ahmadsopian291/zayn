import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontak" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-cinematic p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Siap <span className="text-primary">Order</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hubungi kami sekarang untuk mendapatkan akun premium impian Anda. 
                Tim kami siap melayani 24/7 dengan respons cepat dan profesional.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+62 857-9514-0765</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground break-all">ahmadsop291@gmail.com</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Jam Operasional</h3>
                <p className="text-sm text-muted-foreground">24/7 Online</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/6285795140765"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-netflix text-lg px-12 py-6 animate-glow-pulse">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">10.000+ pelanggan puas</span> telah 
                mempercayai kami untuk kebutuhan akun premium mereka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

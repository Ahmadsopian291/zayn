import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah ini aman dan legal?",
    answer:
      "Ya, 100% aman dan terpercaya. Semua akun yang kami jual berasal dari metode yang sah dan legal. Kami telah melayani ribuan pelanggan dengan tingkat kepuasan 99.9% dan mendapat review positif dari seluruh Indonesia.",
  },
  {
    question: "Bagaimana sistem garansinya?",
    answer:
      "Kami memberikan garansi replacement penuh selama masa aktif langganan Anda. Jika terjadi masalah seperti akun tidak bisa login, suspend, atau bermasalah, kami akan segera mengganti dengan akun baru tanpa biaya tambahan. Garansi berlaku selama durasi pembelian Anda.",
  },
  {
    question: "Seberapa cepat akun dikirim setelah order?",
    answer:
      "Akun premium akan dikirim secara instan maksimal 5 menit setelah pembayaran dikonfirmasi oleh admin kami. Kami beroperasi 24/7 sehingga Anda bisa order kapan saja dan mendapatkan akun dengan cepat.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima berbagai metode pembayaran untuk kemudahan Anda: Transfer Bank (BCA, Mandiri, BRI, BNI), E-Wallet (GoPay, OVO, Dana, ShopeePay), dan QRIS. Semua metode pembayaran aman dan proses konfirmasi sangat cepat.",
  },
  {
    question: "Bagaimana jika akun bermasalah di tengah jalan?",
    answer:
      "Tenang! Jika akun bermasalah selama masa aktif langganan, langsung hubungi kami via WhatsApp dan kami akan segera mengganti dengan akun baru tanpa biaya tambahan. Tim support 24/7 kami siap membantu menyelesaikan masalah Anda dengan cepat dan profesional.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-cinematic border-none animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

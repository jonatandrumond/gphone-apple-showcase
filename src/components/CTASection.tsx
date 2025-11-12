import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da GPhone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
          Ainda em dúvida?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
          Fale com a GPhone agora mesmo
        </p>
        <div className="flex justify-center mb-4 sm:mb-6 animate-scale-in px-4" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 lg:py-8 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(142,198,103,0.6)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              Atendimento no WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground animate-fade-in px-2" style={{ animationDelay: "0.3s" }}>
          Atendimento rápido e direto com nossa equipe
        </p>
      </div>
    </section>
  );
};

export default CTASection;

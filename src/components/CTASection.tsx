import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da GPhone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up px-2">
          Ainda em dúvida?
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto animate-fade-in px-2 leading-relaxed" style={{ animationDelay: "0.1s" }}>
          Fale com a GPhone agora mesmo
        </p>
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 animate-scale-in px-3 sm:px-4" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(142,198,103,0.6)] transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              Atendimento no WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground animate-fade-in px-2" style={{ animationDelay: "0.3s" }}>
          Atendimento rápido e direto com nossa equipe
        </p>
      </div>
    </section>
  );
};

export default CTASection;

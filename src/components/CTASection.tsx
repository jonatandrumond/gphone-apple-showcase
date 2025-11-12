import { Button } from "@/components/ui/button";

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
              <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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

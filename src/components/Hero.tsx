import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-iphone.jpg";

const Hero = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos Apple da GPhone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-36 md:pt-40">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance animate-fade-in-up drop-shadow-lg leading-tight">
          Problemas com seu iPhone?
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-balance max-w-2xl mx-auto opacity-95 animate-fade-in-up drop-shadow-md px-1" style={{ animationDelay: "0.1s" }}>
          Deixa que a gente resolve!
        </p>
        <div className="flex justify-center animate-scale-in px-3 sm:px-4" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-xs sm:text-sm md:text-base lg:text-lg px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(142,198,103,0.5)] transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <svg className="mr-2 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

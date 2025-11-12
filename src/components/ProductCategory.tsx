import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ChevronDown } from "lucide-react";

interface ProductCategoryProps {
  title: string;
  description: string;
  image: string;
  details: string[];
}

const ProductCategory = ({ title, description, image, details }: ProductCategoryProps) => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = `Olá! Gostaria de saber mais sobre ${title}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="w-full bg-background">
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Barra Lateral de Diferenciais */}
        <div className="hidden sm:flex absolute right-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 lg:w-96 bg-black/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 lg:p-8 flex-col justify-center border-l-2 border-white/20">
          <h4 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Diferenciais</h4>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-3 sm:mb-4 md:mb-6">Qualidade em 1ª lugar</p>
          
          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-white">
            <li className="flex items-start gap-1 sm:gap-2 md:gap-3">
              <span className="text-whatsapp font-bold mt-1 flex-shrink-0 text-xs sm:text-sm">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Atendimento direto com técnico</span>
            </li>
            <li className="flex items-start gap-1 sm:gap-2 md:gap-3">
              <span className="text-whatsapp font-bold mt-1 flex-shrink-0 text-xs sm:text-sm">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Avaliação na hora, agende seu horário!</span>
            </li>
            <li className="flex items-start gap-1 sm:gap-2 md:gap-3">
              <span className="text-whatsapp font-bold mt-1 flex-shrink-0 text-xs sm:text-sm">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Trabalhamos com Peças originais.</span>
            </li>
          </ul>
        </div>
        
        {/* Diferenciais Mobile - Mostrar abaixo da imagem */}
        <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-sm p-4 border-t-2 border-white/20">
          <h4 className="text-base font-bold text-white mb-1">Diferenciais</h4>
          <p className="text-xs text-gray-300 mb-2">Qualidade em 1ª lugar</p>
          <ul className="space-y-1.5 text-white text-xs">
            <li className="flex items-start gap-2">
              <span className="text-whatsapp font-bold mt-0.5 flex-shrink-0">•</span>
              <span>Atendimento direto com técnico</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-whatsapp font-bold mt-0.5 flex-shrink-0">•</span>
              <span>Avaliação na hora, agende seu horário!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-whatsapp font-bold mt-0.5 flex-shrink-0">•</span>
              <span>Trabalhamos com Peças originais.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 animate-fade-in px-2">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 animate-fade-in max-w-2xl mx-auto px-2" style={{ animationDelay: "0.1s" }}>{description}</p>
        
        <div className="flex justify-center mb-6 sm:mb-8 animate-scale-in px-4" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(142,198,103,0.5)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar em contato
            </a>
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="details" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline justify-center">
              <span className="flex items-center gap-2 font-semibold">
                Ver detalhes do aparelho
                <ChevronDown className="h-4 w-4" />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2 text-left">
                {details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-whatsapp mr-2 font-bold">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ProductCategory;

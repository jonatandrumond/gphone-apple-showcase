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
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">{title}</h3>
        <p className="text-muted-foreground text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>{description}</p>
        
        <div className="flex justify-center mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-8 py-6 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(142,198,103,0.5)] transition-all duration-500 hover:scale-105"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar em contato
            </a>
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="flex items-center gap-2 font-semibold">
                Ver detalhes do aparelho
                <ChevronDown className="h-4 w-4" />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
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

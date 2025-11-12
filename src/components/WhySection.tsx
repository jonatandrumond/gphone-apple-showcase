import { Star, Shield, Zap, CreditCard } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Atendimento personalizado",
  },
  {
    icon: Shield,
    title: "Garantia e procedência",
  },
  {
    icon: Zap,
    title: "Entrega rápida e segura",
  },
  {
    icon: CreditCard,
    title: "Facilidade de pagamento",
  },
];

const WhySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up px-2">
          Por que a GPhone?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-background rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:from-whatsapp/20 group-hover:to-whatsapp/10 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-whatsapp group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base md:text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

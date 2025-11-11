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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up">
          Por que a GPhone?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-background rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

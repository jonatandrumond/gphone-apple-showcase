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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que a GPhone?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
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

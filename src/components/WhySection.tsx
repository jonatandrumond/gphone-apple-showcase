import { Award, UserCog, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade em 1ª lugar",
  },
  {
    icon: UserCog,
    title: "Atendimento direto com técnico",
  },
  {
    icon: Clock,
    title: "Avaliação na hora, agende seu horário!",
  },
  {
    icon: BadgeCheck,
    title: "Trabalhamos com Peças originais",
  },
];

const WhySection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fade-in-up px-2">
          Diferenciais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 lg:p-8 bg-background rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 group-hover:from-whatsapp/20 group-hover:to-whatsapp/10 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-whatsapp group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight px-1">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

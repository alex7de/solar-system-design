import { Sun, Cpu, Battery, Home } from "lucide-react";

const steps = [
  {
    icon: Sun,
    step: 1,
    title: "Солнечные панели",
    description: "Панели улавливают солнечный свет и преобразуют его в постоянный ток (DC)",
  },
  {
    icon: Cpu,
    step: 2,
    title: "Инвертор",
    description: "Инвертор преобразует постоянный ток в переменный (AC) для домашней сети",
  },
  {
    icon: Battery,
    step: 3,
    title: "Аккумулятор",
    description: "Избыток энергии сохраняется в аккумуляторе для использования ночью",
  },
  {
    icon: Home,
    step: 4,
    title: "Потребление",
    description: "Чистая энергия питает все электроприборы вашего дома или офиса",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Как работает система
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Простой и понятный процесс преобразования солнечного света 
            в электричество для вашего дома
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step indicator */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="step-indicator mb-4 relative z-10">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-medium">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                  {item.description}
                </p>

                {/* Mobile connection arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Energy flow animation */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-hero border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                1000+
              </div>
              <p className="text-muted-foreground">кВт·ч в год с 10 панелей</p>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="font-display text-4xl lg:text-5xl font-bold text-accent mb-2">
                25+
              </div>
              <p className="text-muted-foreground">лет срок службы панелей</p>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                3-5
              </div>
              <p className="text-muted-foreground">лет окупаемость системы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

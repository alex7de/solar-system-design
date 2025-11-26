import { Link } from "react-router-dom";
import { Home, Building2, Mountain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const scenarios = [
  {
    id: "home",
    icon: Home,
    title: "Для дома",
    description: "Автономное энергоснабжение загородного дома или дачи. Экономия до 80% на электричестве.",
    features: ["Полная автономность", "Резервное питание", "Умный дом"],
    href: "/configurator?type=home",
    iconBg: "bg-primary",
  },
  {
    id: "business",
    icon: Building2,
    title: "Для бизнеса",
    description: "Снижение операционных расходов и углеродного следа вашего предприятия.",
    features: ["Масштабируемость", "Быстрая окупаемость", "Green сертификация"],
    href: "/configurator?type=business",
    iconBg: "bg-accent",
  },
  {
    id: "autonomous",
    icon: Mountain,
    title: "Автономные объекты",
    description: "Надёжное энергоснабжение в удалённых локациях без подключения к сети.",
    features: ["Независимость от сети", "Надёжность 24/7", "Минимум обслуживания"],
    href: "/configurator?type=autonomous",
    iconBg: "bg-primary",
  },
];

export function ScenarioSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Выберите ваш сценарий
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Мы предлагаем решения для любых задач — от частного дома 
            до промышленного объекта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <Link
              key={scenario.id}
              to={scenario.href}
              className={cn(
                "group relative bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8",
                "border border-border hover:border-primary/40",
                "shadow-soft hover:shadow-medium",
                "transition-all duration-300 ease-out",
                "animate-fade-in",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                "transition-transform duration-300 group-hover:scale-105",
                scenario.iconBg
              )}>
                <scenario.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {scenario.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {scenario.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {scenario.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Подобрать систему</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

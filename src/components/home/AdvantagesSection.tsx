import { Wallet, Leaf, Wrench, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";

const advantages = [
  {
    icon: Wallet,
    title: "Экономия до 80%",
    description: "Снижение расходов на электроэнергию с первого месяца работы системы",
  },
  {
    icon: Leaf,
    title: "Экологичность",
    description: "Чистая возобновляемая энергия без вредных выбросов в атмосферу",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 25 лет",
    description: "Долгосрочная гарантия на панели и 10 лет на инверторы",
  },
  {
    icon: Wrench,
    title: "Профессиональная установка",
    description: "Собственные бригады с сертификацией и опытом от 5 лет",
  },
  {
    icon: Clock,
    title: "Быстрый монтаж",
    description: "Установка системы под ключ за 1-3 дня в зависимости от объёма",
  },
  {
    icon: HeadphonesIcon,
    title: "Сервис и поддержка",
    description: "Круглосуточная техническая поддержка и удалённый мониторинг",
  },
];

export function AdvantagesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Мы предоставляем полный цикл услуг: от консультации до сервисного 
            обслуживания вашей солнечной системы
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 ease-out animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

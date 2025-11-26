import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  PenTool, 
  Settings, 
  Search, 
  ArrowRight,
  Check,
  Phone
} from "lucide-react";

const services = [
  {
    id: "design",
    icon: PenTool,
    title: "Проектирование",
    description: "Разработка индивидуального проекта солнечной электростанции с учётом особенностей вашего объекта",
    features: [
      "Выезд инженера на объект",
      "3D-моделирование системы",
      "Расчёт выработки и окупаемости",
      "Подбор оптимального оборудования",
      "Проектная документация",
    ],
    price: "от 15 000 ₽",
    note: "Бесплатно при заказе установки",
  },
  {
    id: "installation",
    icon: Wrench,
    title: "Монтаж и установка",
    description: "Профессиональный монтаж солнечных систем любой сложности под ключ",
    features: [
      "Установка панелей и инверторов",
      "Монтаж системы крепления",
      "Подключение и настройка",
      "Пуско-наладочные работы",
      "Гарантия на монтаж 5 лет",
    ],
    price: "от 25 000 ₽",
    note: "Стоимость зависит от объёма работ",
  },
  {
    id: "service",
    icon: Settings,
    title: "Сервисное обслуживание",
    description: "Регулярное техническое обслуживание для максимальной эффективности вашей системы",
    features: [
      "Чистка солнечных панелей",
      "Проверка креплений",
      "Диагностика инвертора",
      "Мониторинг производительности",
      "Ежегодный отчёт",
    ],
    price: "от 8 000 ₽/год",
    note: "Годовой контракт со скидкой 20%",
  },
  {
    id: "diagnostics",
    icon: Search,
    title: "Диагностика",
    description: "Полная диагностика существующей солнечной системы с выявлением проблем",
    features: [
      "Тестирование панелей",
      "Проверка инвертора",
      "Анализ производительности",
      "Тепловизионное обследование",
      "Рекомендации по оптимизации",
    ],
    price: "от 5 000 ₽",
    note: "Выезд специалиста в день обращения",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-gradient-hero py-16 lg:py-24">
          <div className="container-wide text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Услуги и сервис
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Полный цикл услуг: от проектирования до сервисного обслуживания. 
              Работаем по всей России с собственными бригадами монтажников.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/configurator">
                <Button variant="hero" size="xl">
                  Рассчитать стоимость
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+78001234567">
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5" />
                  Позвонить
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="container-wide py-16 lg:py-24">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-card rounded-3xl border border-border overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Info */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="lg:col-span-2 bg-secondary/30 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Стоимость</p>
                      <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                        {service.price}
                      </p>
                      <p className="text-sm text-primary font-medium mt-2">
                        {service.note}
                      </p>
                    </div>
                    <Button variant="hero" size="lg" className="w-full">
                      Оставить заявку
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-dark py-16 lg:py-20">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Нужна консультация?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Наши специалисты ответят на все вопросы и помогут подобрать 
              оптимальное решение для вашего объекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78001234567">
                <Button variant="eco" size="xl">
                  <Phone className="w-5 h-5" />
                  8 800 123-45-67
                </Button>
              </a>
              <Link to="/configurator">
                <Button variant="glass" size="xl" className="text-primary-foreground border-primary-foreground/20">
                  Рассчитать систему
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

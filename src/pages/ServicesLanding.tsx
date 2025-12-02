import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Wrench, 
  Shield, 
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
  Clock,
  Award,
  Users,
  ChevronDown,
  Star,
  Calculator,
  FileText,
  Settings,
  Headphones
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: FileText,
    title: "Проектирование",
    description: "Индивидуальный проект системы с учётом особенностей вашего объекта",
    features: ["Выезд инженера", "3D-моделирование", "Расчёт окупаемости"],
    price: "от 15 000 ₽",
    highlight: "Бесплатно при заказе монтажа"
  },
  {
    icon: Wrench,
    title: "Монтаж под ключ",
    description: "Профессиональная установка солнечных систем любой сложности",
    features: ["Установка оборудования", "Пуско-наладка", "Гарантия 5 лет"],
    price: "от 25 000 ₽",
    highlight: "Срок работ от 1 дня"
  },
  {
    icon: Settings,
    title: "Техобслуживание",
    description: "Регулярное обслуживание для максимальной эффективности",
    features: ["Чистка панелей", "Диагностика", "Мониторинг"],
    price: "от 8 000 ₽/год",
    highlight: "Скидка 20% на годовой контракт"
  },
  {
    icon: Headphones,
    title: "Сервис и ремонт",
    description: "Оперативное устранение неисправностей и модернизация",
    features: ["Выезд в день обращения", "Запчасти в наличии", "Гарантия на работы"],
    price: "от 5 000 ₽",
    highlight: "Круглосуточная поддержка"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Заявка",
    description: "Оставьте заявку на сайте или позвоните нам"
  },
  {
    step: "02",
    title: "Консультация",
    description: "Бесплатная консультация и выезд инженера"
  },
  {
    step: "03",
    title: "Проект",
    description: "Разработка проекта и расчёт стоимости"
  },
  {
    step: "04",
    title: "Монтаж",
    description: "Установка и настройка оборудования"
  },
  {
    step: "05",
    title: "Запуск",
    description: "Пуско-наладка и сдача объекта"
  }
];

const stats = [
  { value: "500+", label: "Установленных систем" },
  { value: "12", label: "Лет на рынке" },
  { value: "50+", label: "Сертифицированных специалистов" },
  { value: "98%", label: "Довольных клиентов" }
];

const reviews = [
  {
    name: "Алексей Петров",
    location: "Московская область",
    text: "Установили систему на 10 кВт для загородного дома. Работают профессионально, всё объяснили, помогли с документами. Окупаемость уже видна!",
    rating: 5,
    system: "10 кВт, частный дом"
  },
  {
    name: "Елена Сидорова",
    location: "Краснодарский край",
    text: "Заказывали проектирование и монтаж для фермы. Ребята работают быстро и качественно. Рекомендую!",
    rating: 5,
    system: "25 кВт, фермерское хозяйство"
  },
  {
    name: "Игорь Волков",
    location: "Крым",
    text: "Уже второй год на обслуживании. Всегда оперативно реагируют, система работает как часы. Спасибо команде!",
    rating: 5,
    system: "15 кВт, гостевой дом"
  }
];

const faqs = [
  {
    question: "Сколько времени занимает установка?",
    answer: "Монтаж типовой системы для частного дома занимает 1-3 дня. Для коммерческих объектов — от 3 до 14 дней в зависимости от мощности."
  },
  {
    question: "Какая гарантия на работы?",
    answer: "Мы предоставляем гарантию 5 лет на монтажные работы и 2 года на сервисное обслуживание. Гарантия производителя на оборудование — до 25 лет."
  },
  {
    question: "Работаете ли вы в моём регионе?",
    answer: "Мы работаем по всей России. Собственные бригады есть в 15 регионах, в остальные — выезжаем или работаем с аккредитованными партнёрами."
  },
  {
    question: "Нужно ли разрешение на установку?",
    answer: "Для систем до 15 кВт разрешение не требуется. Мы помогаем с оформлением документов и подключением к сети для любых мощностей."
  },
  {
    question: "Как рассчитать необходимую мощность?",
    answer: "Оставьте заявку — наш инженер бесплатно рассчитает оптимальную мощность на основе вашего потребления и особенностей объекта."
  }
];

export default function ServicesLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container-wide flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-eco flex items-center justify-center">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              ЭкоЭнерго
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Как работаем
            </a>
            <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+78001234567" className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              8 800 123-45-67
            </a>
            <a href="#contact">
              <Button variant="hero" size="sm">
                Оставить заявку
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-3xl" />
          
          <div className="container-wide relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Профессиональный монтаж солнечных систем</span>
                </div>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Установка солнечных панелей{" "}
                  <span className="text-primary">под ключ</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
                  От проектирования до запуска за 3 дня. 
                  Гарантия 5 лет на все работы. 
                  Работаем по всей России.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href="#contact">
                    <Button variant="hero" size="xl" className="w-full sm:w-auto">
                      Рассчитать стоимость
                      <Calculator className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="tel:+78001234567">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto">
                      <Phone className="w-5 h-5" />
                      Позвонить
                    </Button>
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Гарантия 5 лет</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Монтаж от 1 дня</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">500+ объектов</span>
                  </div>
                </div>
              </div>

              {/* Hero Image Placeholder */}
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Sun className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                      <p className="text-muted-foreground">Фото монтажа солнечных панелей</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-eco/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-eco" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">30%</p>
                      <p className="text-sm text-muted-foreground">Экономия на счетах</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-dark">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Наши услуги
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный цикл работ: от консультации до сервисного обслуживания. 
                Собственные бригады сертифицированных специалистов.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-end justify-between pt-4 border-t border-border">
                        <div>
                          <p className="font-display text-2xl font-bold text-foreground">
                            {service.price}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            {service.highlight}
                          </p>
                        </div>
                        <a href="#contact">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                            Заказать
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 lg:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Как мы работаем
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Простой и понятный процесс от заявки до запуска вашей солнечной станции
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card border border-border flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Отзывы клиентов
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 500 довольных клиентов по всей России
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 lg:p-8"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-sm text-primary mt-1">{review.system}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 lg:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Частые вопросы
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ответы на популярные вопросы об установке и обслуживании
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                    >
                      <span className="font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                          openFaq === index && "rotate-180"
                        )}
                      />
                    </button>
                    
                    <div
                      className={cn(
                        "grid transition-all duration-200",
                        openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Оставьте заявку
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Перезвоним в течение 15 минут и ответим на все вопросы. 
                  Бесплатная консультация и расчёт стоимости.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <a href="tel:+78001234567" className="font-semibold text-foreground hover:text-primary transition-colors">
                        8 800 123-45-67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@ecoenergo.ru" className="font-semibold text-foreground hover:text-primary transition-colors">
                        info@ecoenergo.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-semibold text-foreground">
                        Москва, ул. Солнечная, 1
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-secondary/50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">Работаем по всей России</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Собственные бригады в 15 регионах. Выезжаем в любую точку страны.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-3xl border border-border p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите о вашем проекте..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <Button variant="hero" size="xl" className="w-full">
                    Отправить заявку
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-slate-dark">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Готовы начать экономить на электричестве?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Получите бесплатную консультацию и расчёт окупаемости для вашего объекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button variant="eco" size="xl">
                  Получить расчёт
                  <Calculator className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+78001234567">
                <Button variant="glass" size="xl" className="text-primary-foreground border-primary-foreground/20">
                  <Phone className="w-5 h-5" />
                  8 800 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-eco flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">ЭкоЭнерго</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 ЭкоЭнерго. Все права защищены.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
  Headphones,
  Sparkles,
  TrendingUp,
  BadgeCheck,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: FileText,
    title: "Проектирование",
    description: "Индивидуальный проект системы с учётом особенностей вашего объекта",
    features: ["Выезд инженера", "3D-моделирование", "Расчёт окупаемости"],
    price: "от 15 000 ₽",
    highlight: "Бесплатно при заказе монтажа",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Wrench,
    title: "Монтаж под ключ",
    description: "Профессиональная установка солнечных систем любой сложности",
    features: ["Установка оборудования", "Пуско-наладка", "Гарантия 5 лет"],
    price: "от 25 000 ₽",
    highlight: "Срок работ от 1 дня",
    gradient: "from-primary/20 to-emerald-500/20"
  },
  {
    icon: Settings,
    title: "Техобслуживание",
    description: "Регулярное обслуживание для максимальной эффективности",
    features: ["Чистка панелей", "Диагностика", "Мониторинг"],
    price: "от 8 000 ₽/год",
    highlight: "Скидка 20% на годовой контракт",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Headphones,
    title: "Сервис и ремонт",
    description: "Оперативное устранение неисправностей и модернизация",
    features: ["Выезд в день обращения", "Запчасти в наличии", "Гарантия на работы"],
    price: "от 5 000 ₽",
    highlight: "Круглосуточная поддержка",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Заявка",
    description: "Оставьте заявку на сайте или позвоните нам",
    icon: FileText
  },
  {
    step: "02",
    title: "Консультация",
    description: "Бесплатная консультация и выезд инженера",
    icon: Users
  },
  {
    step: "03",
    title: "Проект",
    description: "Разработка проекта и расчёт стоимости",
    icon: Calculator
  },
  {
    step: "04",
    title: "Монтаж",
    description: "Установка и настройка оборудования",
    icon: Wrench
  },
  {
    step: "05",
    title: "Запуск",
    description: "Пуско-наладка и сдача объекта",
    icon: Zap
  }
];

const stats = [
  { value: "500+", label: "Установленных систем", icon: Sun },
  { value: "12", label: "Лет на рынке", icon: Award },
  { value: "50+", label: "Сертифицированных специалистов", icon: Users },
  { value: "98%", label: "Довольных клиентов", icon: TrendingUp }
];

const reviews = [
  {
    name: "Алексей Петров",
    location: "Московская область",
    text: "Установили систему на 10 кВт для загородного дома. Работают профессионально, всё объяснили, помогли с документами. Окупаемость уже видна!",
    rating: 5,
    system: "10 кВт, частный дом",
    avatar: "А"
  },
  {
    name: "Елена Сидорова",
    location: "Краснодарский край",
    text: "Заказывали проектирование и монтаж для фермы. Ребята работают быстро и качественно. Рекомендую!",
    rating: 5,
    system: "25 кВт, фермерское хозяйство",
    avatar: "Е"
  },
  {
    name: "Игорь Волков",
    location: "Крым",
    text: "Уже второй год на обслуживании. Всегда оперативно реагируют, система работает как часы. Спасибо команде!",
    rating: 5,
    system: "15 кВт, гостевой дом",
    avatar: "И"
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-modern">
        <div className="container-wide flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-eco blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-eco flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              ЭкоЭнерго
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#process", label: "Как работаем" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#faq", label: "FAQ" }
            ].map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-eco group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+78001234567" className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="hidden lg:block">8 800 123-45-67</span>
            </a>
            <a href="#contact">
              <Button variant="hero" size="sm" className="shadow-colored">
                Оставить заявку
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Modern with mesh gradient */}
        <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
          {/* Mesh gradient background */}
          <div className="absolute inset-0 bg-mesh opacity-80" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial-glow opacity-60" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
          
          {/* Animated orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-eco/10 blur-3xl float-slow" />
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-eco/10 to-cyan-500/10 blur-3xl float-slow" style={{ animationDelay: '-2s' }} />
          
          <div className="container-wide relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 pill-badge mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Профессиональный монтаж солнечных систем</span>
                </div>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                  Установка солнечных панелей{" "}
                  <span className="text-gradient-animated">под ключ</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                  От проектирования до запуска за 3 дня. 
                  Гарантия 5 лет на все работы. 
                  Работаем по всей России.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#contact">
                    <Button variant="hero" size="xl" className="w-full sm:w-auto shadow-colored group">
                      Рассчитать стоимость
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="tel:+78001234567">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto group">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Смотреть видео
                    </Button>
                  </a>
                </div>

                {/* Trust badges with modern style */}
                <div className="flex flex-wrap items-center gap-6">
                  {[
                    { icon: Shield, text: "Гарантия 5 лет" },
                    { icon: Clock, text: "Монтаж от 1 дня" },
                    { icon: BadgeCheck, text: "500+ объектов" }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <badge.icon className="w-4 h-4 text-primary" />
                      </div>
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero visual - Bento grid style */}
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="grid grid-cols-2 gap-4">
                  {/* Main image */}
                  <div className="col-span-2 glass-card aspect-[16/9] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-eco/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Sun className="w-16 h-16 text-primary/40 mx-auto mb-3 group-hover:rotate-45 transition-transform duration-700" />
                        <p className="text-muted-foreground text-sm">Фото монтажа</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats cards */}
                  <div className="glass-card p-5 group">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-eco flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">30%</p>
                        <p className="text-xs text-muted-foreground">Экономия</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-5 group">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">5 лет</p>
                        <p className="text-xs text-muted-foreground">Окупаемость</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 glass-modern rounded-2xl p-4 shadow-lg border border-border/50 float-slow">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {['А', 'Е', 'И'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-eco flex items-center justify-center text-xs font-bold text-primary-foreground ring-2 ring-background">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">500+ клиентов</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Modern glassmorphism */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark via-slate-medium to-slate-dark" />
          <div className="absolute inset-0 bg-mesh opacity-20" />
          
          <div className="container-wide relative">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="relative group"
                >
                  <div className="glass-modern rounded-2xl p-6 text-center border border-white/10 group-hover:border-white/20 transition-colors">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-eco flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="font-display text-3xl lg:text-4xl font-bold stat-number mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Bento Grid */}
        <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="container-wide relative">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 pill-badge mb-6">
                <Wrench className="w-4 h-4" />
                <span>Полный цикл услуг</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Наши услуги
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Собственные бригады сертифицированных специалистов
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bento-card group relative"
                >
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    service.gradient
                  )} />
                  
                  <div className="relative">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-eco blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-eco flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between pt-6 border-t border-border/50">
                      <div>
                        <p className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                          {service.price}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {service.highlight}
                        </p>
                      </div>
                      <a href="#contact">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary group/btn">
                          Заказать
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Modern timeline */}
        <section id="process" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="absolute inset-0 bg-mesh opacity-50" />
          
          <div className="container-wide relative">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 pill-badge mb-6">
                <Settings className="w-4 h-4" />
                <span>Простой процесс</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Как мы работаем
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                5 простых шагов до вашей солнечной станции
              </p>
            </div>

            {/* Process steps */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
              
              <div className="grid md:grid-cols-5 gap-8 lg:gap-4">
                {processSteps.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="glass-card text-center py-8 px-4 group-hover:shadow-lg transition-all duration-300">
                      {/* Step number */}
                      <div className="relative inline-flex mb-4">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-eco blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-eco flex items-center justify-center">
                          <span className="font-display text-xl font-bold text-primary-foreground">
                            {item.step}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Arrow connector */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-primary/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Modern cards */}
        <section id="reviews" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-eco/5 rounded-full blur-[100px]" />
          
          <div className="container-wide relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 pill-badge mb-6">
                <Star className="w-4 h-4" />
                <span>Отзывы клиентов</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Нам доверяют
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 500 довольных клиентов по всей России
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bento-card group"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center text-primary-foreground font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                      <p className="text-sm text-primary mt-0.5">{review.system}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
          
          <div className="container-wide relative">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 pill-badge mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Вопросы и ответы</span>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Частые вопросы
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="glass-card overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left group"
                    >
                      <span className="font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <div className={cn(
                        "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300",
                        openFaq === index && "bg-primary"
                      )}>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-all duration-300",
                            openFaq === index ? "rotate-180 text-primary-foreground" : "text-primary"
                          )}
                        />
                      </div>
                    </button>
                    
                    <div
                      className={cn(
                        "grid transition-all duration-300",
                        openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
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

        {/* Contact Section - Modern split layout */}
        <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="container-wide relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="inline-flex items-center gap-2 pill-badge mb-6">
                  <Mail className="w-4 h-4" />
                  <span>Свяжитесь с нами</span>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Оставьте заявку
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                  Перезвоним в течение 15 минут и ответим на все вопросы
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Телефон", value: "8 800 123-45-67", href: "tel:+78001234567" },
                    { icon: Mail, label: "Email", value: "info@ecoenergo.ru", href: "mailto:info@ecoenergo.ru" },
                    { icon: MapPin, label: "Адрес", value: "Москва, ул. Солнечная, 1", href: null }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-eco flex items-center justify-center group-hover:shadow-glow transition-shadow">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a href={contact.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 glass-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">Работаем по всей России</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Собственные бригады в 15 регионах. Выезжаем в любую точку страны.
                  </p>
                </div>
              </div>

              {/* Contact Form - Modern glass style */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-eco rounded-[2rem] opacity-10 blur-2xl" />
                <div className="relative glass-card">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { label: "Ваше имя", type: "text", placeholder: "Иван Иванов", key: "name" },
                      { label: "Телефон", type: "tel", placeholder: "+7 (999) 123-45-67", key: "phone" },
                      { label: "Email", type: "email", placeholder: "email@example.com", key: "email" }
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required={field.key !== 'email'}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Сообщение
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Расскажите о вашем проекте..."
                        className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    
                    <Button variant="hero" size="xl" className="w-full shadow-colored group">
                      Отправить заявку
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Modern gradient */}
        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark via-slate-medium to-slate-dark" />
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="absolute inset-0 bg-radial-glow opacity-40" />
          
          <div className="container-wide relative text-center">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Готовы начать{" "}
              <span className="text-gradient-eco">экономить?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Получите бесплатную консультацию и расчёт окупаемости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button variant="eco" size="xl" className="shadow-glow-lg">
                  Получить расчёт
                  <Calculator className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+78001234567">
                <Button variant="outline" size="xl" className="text-white border-white/20 hover:bg-white/10 hover:border-white/30">
                  <Phone className="w-5 h-5" />
                  8 800 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-10 border-t border-border/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-eco flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">ЭкоЭнерго</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 ЭкоЭнерго. Все права защищены.
            </p>
            
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
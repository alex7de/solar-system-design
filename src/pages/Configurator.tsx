import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Building2, 
  Mountain, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Zap,
  Calculator,
  Sun,
  Battery,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

const objectTypes = [
  { id: "house", icon: Home, label: "Частный дом", description: "Загородный дом или дача" },
  { id: "business", icon: Building2, label: "Бизнес", description: "Офис, магазин, производство" },
  { id: "autonomous", icon: Mountain, label: "Автономный объект", description: "Без подключения к сети" },
];

const consumptionOptions = [
  { id: "small", label: "до 300 кВт·ч/мес", power: "3 кВт", description: "1-2 человека, дача" },
  { id: "medium", label: "300-500 кВт·ч/мес", power: "5 кВт", description: "3-4 человека, семья" },
  { id: "large", label: "500-800 кВт·ч/мес", power: "8 кВт", description: "Большая семья" },
  { id: "xlarge", label: "800+ кВт·ч/мес", power: "10+ кВт", description: "Бизнес или большой дом" },
];

const autonomyLevels = [
  { id: "backup", label: "Резервное питание", description: "Работа при отключении сети", icon: "⚡" },
  { id: "partial", label: "Частичная автономия", description: "50% потребления от солнца", icon: "🌤️" },
  { id: "full", label: "Полная автономия", description: "100% независимость от сети", icon: "☀️" },
];

const regions = [
  "Москва и МО", "Санкт-Петербург", "Краснодарский край", 
  "Ростовская область", "Крым", "Другой регион"
];

const resultData = {
  systemPower: "5 кВт",
  panelsCount: 12,
  annualProduction: "6 000 кВт·ч",
  savings: "72 000 ₽/год",
  payback: "4 года",
  co2Reduction: "3.5 тонн/год",
  recommendedKit: {
    name: "Комплект «Семья 5 кВт»",
    price: "289 000 ₽",
    oldPrice: "319 000 ₽",
  },
};

export default function ConfiguratorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    objectType: "",
    consumption: "",
    region: "",
    autonomy: "",
    name: "",
    phone: "",
    email: "",
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const canProceed = () => {
    switch (step) {
      case 1: return !!formData.objectType;
      case 2: return !!formData.consumption;
      case 3: return !!formData.region;
      case 4: return !!formData.autonomy;
      case 5: return true;
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Header */}
        <div className="bg-gradient-hero py-12 lg:py-16">
          <div className="container-wide text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              <span>Бесплатный расчёт</span>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Подбор солнечной системы
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ответьте на несколько вопросов и получите персональную рекомендацию 
              с расчётом стоимости и окупаемости
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="border-b border-border">
          <div className="container-wide py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Шаг {step} из {totalSteps}</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-eco transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="container-wide py-12 lg:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Object Type */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                  Какой тип объекта?
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Выберите тип объекта для установки солнечной системы
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {objectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, objectType: type.id })}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all",
                        formData.objectType === type.id
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <type.icon className={cn(
                        "w-10 h-10 mb-4",
                        formData.objectType === type.id ? "text-primary" : "text-muted-foreground"
                      )} />
                      <h3 className="font-semibold text-foreground mb-1">{type.label}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      {formData.objectType === type.id && (
                        <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium">
                          <Check className="w-4 h-4" />
                          Выбрано
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Consumption */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                  Ваше потребление электроэнергии
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Посмотрите в квитанции или выберите примерное значение
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {consumptionOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({ ...formData, consumption: option.id })}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all",
                        formData.consumption === option.id
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {option.power}
                        </div>
                        {formData.consumption === option.id && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{option.label}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Region */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                  Ваш регион
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Уровень инсоляции влияет на выработку энергии
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setFormData({ ...formData, region })}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all",
                        formData.region === region
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{region}</span>
                        {formData.region === region && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Autonomy Level */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                  Желаемый уровень автономности
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Определяет размер системы и необходимость аккумуляторов
                </p>

                <div className="grid gap-4">
                  {autonomyLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setFormData({ ...formData, autonomy: level.id })}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4",
                        formData.autonomy === level.id
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <span className="text-4xl">{level.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{level.label}</h3>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                      {formData.autonomy === level.id && (
                        <Check className="w-6 h-6 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Ваш персональный расчёт готов!
                  </h2>
                  <p className="text-muted-foreground">
                    На основе ваших данных мы подобрали оптимальную систему
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Sun className="w-4 h-4" />
                      <span className="text-sm">Мощность системы</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {resultData.systemPower}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {resultData.panelsCount} панелей
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">Выработка в год</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {resultData.annualProduction}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Wallet className="w-4 h-4" />
                      <span className="text-sm">Экономия в год</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary">
                      {resultData.savings}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calculator className="w-4 h-4" />
                      <span className="text-sm">Окупаемость</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {resultData.payback}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border sm:col-span-2">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Battery className="w-4 h-4" />
                      <span className="text-sm">Сокращение выбросов CO₂</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {resultData.co2Reduction}
                    </p>
                  </div>
                </div>

                {/* Recommended Kit */}
                <div className="p-6 rounded-2xl bg-gradient-hero border border-primary/20 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Рекомендуемый комплект</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-bold text-foreground">
                        {resultData.recommendedKit.name}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-display text-2xl font-bold text-primary">
                          {resultData.recommendedKit.price}
                        </span>
                        <span className="text-muted-foreground line-through">
                          {resultData.recommendedKit.oldPrice}
                        </span>
                      </div>
                    </div>
                    <Button variant="hero">
                      Смотреть комплект
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Получить точный расчёт и консультацию
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Input 
                    placeholder="Email (необязательно)" 
                    type="email"
                    className="mb-4"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Button variant="hero" size="lg" className="w-full">
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="flex items-center justify-between mt-12">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Назад
                </Button>

                <Button
                  variant="hero"
                  onClick={nextStep}
                  disabled={!canProceed()}
                >
                  {step === 4 ? "Получить расчёт" : "Продолжить"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-glow rounded-full blur-3xl opacity-50" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="w-4 h-4" />
              <span>Экологичная энергия для вашего дома</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              Солнечная энергия{" "}
              <span className="text-gradient-eco">нового поколения</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Комплексные решения для дома и бизнеса: от проектирования 
              до установки и сервисного обслуживания. Снизьте счета за 
              электричество до 80%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Link to="/configurator">
                <Button variant="hero" size="xl">
                  Рассчитать систему
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/catalog">
                <Button variant="hero-outline" size="xl">
                  Смотреть каталог
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in animation-delay-400">
              {[
                { icon: Zap, value: "500+", label: "Установок" },
                { icon: Shield, value: "25 лет", label: "Гарантия" },
                { icon: Leaf, value: "80%", label: "Экономии" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start text-primary mb-1">
                    <stat.icon className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-eco rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Main visual */}
              <div className="relative z-10 w-full h-full rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden shadow-heavy">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Solar panel illustration */}
                    <div className="grid grid-cols-4 gap-1 p-8">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-lg bg-gradient-to-br from-slate-dark to-slate-medium border border-primary/20 shadow-soft"
                          style={{ animationDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    {/* Animated glow lines */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-medium border border-border animate-float">
                  <p className="text-xs text-muted-foreground">Мощность</p>
                  <p className="font-display font-bold text-foreground">12.5 кВт</p>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-glow animate-float animation-delay-200">
                  <p className="text-xs opacity-80">Выработка/день</p>
                  <p className="font-display font-bold">58 кВт·ч</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

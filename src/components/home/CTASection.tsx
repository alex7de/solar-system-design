import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calculator } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Готовы к переходу на{" "}
              <span className="text-gradient-eco">чистую энергию</span>?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-100">
              Рассчитайте стоимость системы для вашего объекта за 2 минуты 
              или получите консультацию специалиста
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
              <Link to="/configurator">
                <Button variant="eco" size="xl">
                  <Calculator className="w-5 h-5" />
                  Рассчитать систему
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+78001234567">
                <Button 
                  variant="glass" 
                  size="xl"
                  className="text-primary-foreground border-primary-foreground/20"
                >
                  <Phone className="w-5 h-5" />
                  Заказать звонок
                </Button>
              </a>
            </div>

            {/* Quick info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm animate-fade-in animation-delay-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Выезд замерщика в подарок</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span>Гарантия лучшей цены</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

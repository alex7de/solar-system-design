import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  catalog: [
    { name: "Солнечные панели", href: "/catalog?category=panels" },
    { name: "Инверторы", href: "/catalog?category=inverters" },
    { name: "Аккумуляторы", href: "/catalog?category=batteries" },
    { name: "Комплекты", href: "/catalog?category=kits" },
    { name: "Аксессуары", href: "/catalog?category=accessories" },
  ],
  services: [
    { name: "Проектирование", href: "/services#design" },
    { name: "Установка", href: "/services#installation" },
    { name: "Сервис", href: "/services#service" },
    { name: "Диагностика", href: "/services#diagnostics" },
  ],
  company: [
    { name: "О нас", href: "/about" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "/contacts" },
    { name: "Вакансии", href: "/careers" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Доставка", href: "/delivery" },
    { name: "Гарантия", href: "/warranty" },
    { name: "Возврат", href: "/returns" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-dark text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Подпишитесь на новости
              </h3>
              <p className="text-primary-foreground/70">
                Получайте информацию о скидках и новинках
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 max-w-xs"
              />
              <Button variant="eco" size="default">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Подписаться</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-eco flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Solar<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Ваш надёжный партнёр в мире солнечной энергетики. 
              Качественное оборудование, профессиональная установка, 
              гарантия на все работы.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>8 800 123-45-67</span>
              </a>
              <a href="mailto:info@solartech.ru" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@solartech.ru</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Солнечная, 1</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2">
              {footerLinks.catalog.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© 2025 SolarTech. Все права защищены.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

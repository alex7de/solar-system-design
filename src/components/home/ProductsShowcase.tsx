import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Комплект «Дача»",
    description: "Идеален для небольшого дома или дачи",
    power: "3 кВт",
    price: "189 000 ₽",
    oldPrice: "219 000 ₽",
    rating: 4.9,
    reviews: 128,
    badge: "Хит продаж",
    badgeType: "sale",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Комплект «Семья»",
    description: "Оптимальное решение для семьи из 4 человек",
    power: "5 кВт",
    price: "289 000 ₽",
    oldPrice: null,
    rating: 4.8,
    reviews: 94,
    badge: "Популярный",
    badgeType: "eco",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Комплект «Автономия»",
    description: "Полная независимость от сети",
    power: "10 кВт",
    price: "549 000 ₽",
    oldPrice: "599 000 ₽",
    rating: 5.0,
    reviews: 67,
    badge: "Топ выбор",
    badgeType: "eco",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Комплект «Бизнес»",
    description: "Для малого и среднего бизнеса",
    power: "20 кВт",
    price: "989 000 ₽",
    oldPrice: null,
    rating: 4.9,
    reviews: 43,
    badge: null,
    badgeType: null,
    image: "/placeholder.svg",
  },
];

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Готовые комплекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-100">
              Оптимальные наборы оборудования для разных задач — 
              от дачи до предприятия
            </p>
          </div>
          <Link to="/catalog?category=kits">
            <Button variant="outline" className="animate-fade-in animation-delay-200">
              Все комплекты
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-xl bg-gradient-eco opacity-20 group-hover:opacity-30 transition-opacity" />
                  <Zap className="absolute w-12 h-12 text-primary/50" />
                </div>
                
                {/* Badge */}
                {product.badge && (
                  <div className={cn(
                    "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium",
                    product.badgeType === "sale" ? "badge-sale" : "badge-eco"
                  )}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Power */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {product.power}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-foreground">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  SlidersHorizontal, 
  Grid3X3, 
  List, 
  Star, 
  Zap,
  X,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Все товары", count: 156 },
  { id: "panels", name: "Солнечные панели", count: 48 },
  { id: "inverters", name: "Инверторы", count: 32 },
  { id: "batteries", name: "Аккумуляторы", count: 28 },
  { id: "kits", name: "Готовые комплекты", count: 24 },
  { id: "accessories", name: "Аксессуары", count: 24 },
];

const filters = {
  power: ["до 3 кВт", "3-5 кВт", "5-10 кВт", "10-20 кВт", "20+ кВт"],
  brand: ["JA Solar", "Longi", "Huawei", "Growatt", "BYD", "Trina Solar"],
  price: ["до 50 000 ₽", "50 000 - 150 000 ₽", "150 000 - 300 000 ₽", "300 000+ ₽"],
};

const products = [
  {
    id: 1,
    name: "JA Solar JAM54S30-410/MR",
    description: "Монокристаллическая панель высокой эффективности",
    power: "410 Вт",
    efficiency: "21.3%",
    warranty: "25 лет",
    price: "18 500 ₽",
    oldPrice: null,
    rating: 4.9,
    reviews: 87,
    badge: null,
    category: "panels",
  },
  {
    id: 2,
    name: "Huawei SUN2000-10KTL-M1",
    description: "Сетевой инвертор для домашних систем",
    power: "10 кВт",
    efficiency: "98.6%",
    warranty: "10 лет",
    price: "145 000 ₽",
    oldPrice: "159 000 ₽",
    rating: 5.0,
    reviews: 64,
    badge: "Хит",
    category: "inverters",
  },
  {
    id: 3,
    name: "BYD Battery-Box Premium HVS",
    description: "Литий-железо-фосфатный аккумулятор",
    power: "5.1 кВт·ч",
    efficiency: "95.3%",
    warranty: "10 лет",
    price: "289 000 ₽",
    oldPrice: null,
    rating: 4.8,
    reviews: 42,
    badge: "Премиум",
    category: "batteries",
  },
  {
    id: 4,
    name: "Комплект «Дача 3 кВт»",
    description: "Полный набор для небольшого дома",
    power: "3 кВт",
    efficiency: null,
    warranty: "25 лет",
    price: "189 000 ₽",
    oldPrice: "219 000 ₽",
    rating: 4.9,
    reviews: 128,
    badge: "Выгодно",
    category: "kits",
  },
  {
    id: 5,
    name: "Longi Hi-MO 5 LR5-54HPH-415M",
    description: "Высокоэффективная PERC технология",
    power: "415 Вт",
    efficiency: "21.1%",
    warranty: "25 лет",
    price: "19 200 ₽",
    oldPrice: null,
    rating: 4.7,
    reviews: 56,
    badge: null,
    category: "panels",
  },
  {
    id: 6,
    name: "Growatt SPF 5000ES",
    description: "Гибридный инвертор с зарядным устройством",
    power: "5 кВт",
    efficiency: "93%",
    warranty: "5 лет",
    price: "89 000 ₽",
    oldPrice: null,
    rating: 4.6,
    reviews: 38,
    badge: null,
    category: "inverters",
  },
  {
    id: 7,
    name: "Комплект «Семья 5 кВт»",
    description: "Оптимальное решение для семьи",
    power: "5 кВт",
    efficiency: null,
    warranty: "25 лет",
    price: "289 000 ₽",
    oldPrice: null,
    rating: 4.8,
    reviews: 94,
    badge: "Популярный",
    category: "kits",
  },
  {
    id: 8,
    name: "Крепление для панелей К-20",
    description: "Алюминиевая система крепления на крышу",
    power: null,
    efficiency: null,
    warranty: "15 лет",
    price: "4 500 ₽",
    oldPrice: null,
    rating: 4.9,
    reviews: 112,
    badge: null,
    category: "accessories",
  },
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-secondary/30 py-8 lg:py-12">
          <div className="container-wide">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Каталог оборудования
            </h1>
            <p className="text-muted-foreground">
              Солнечные панели, инверторы, аккумуляторы и готовые комплекты
            </p>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Категории</h3>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        )}
                      >
                        <span>{cat.name}</span>
                        <span className={cn(
                          "text-xs",
                          selectedCategory === cat.id ? "text-primary-foreground/80" : "text-muted-foreground"
                        )}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Power Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Мощность</h3>
                  <div className="space-y-2">
                    {filters.power.map((power) => (
                      <label key={power} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(power)}
                          onChange={() => toggleFilter(power)}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-foreground">{power}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Бренд</h3>
                  <div className="space-y-2">
                    {filters.brand.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(brand)}
                          onChange={() => toggleFilter(brand)}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Цена</h3>
                  <div className="space-y-2">
                    {filters.price.map((price) => (
                      <label key={price} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(price)}
                          onChange={() => toggleFilter(price)}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-foreground">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {activeFilters.length > 0 && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setActiveFilters([])}
                  >
                    Сбросить фильтры
                  </Button>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Search */}
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Поиск товаров..." 
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Mobile Filter Button */}
                  <Button 
                    variant="outline" 
                    className="lg:hidden"
                    onClick={() => setShowFilters(true)}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Фильтры
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:inline">Сортировка:</span>
                    <Button variant="outline" size="sm">
                      По популярности
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* View Mode */}
                  <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      className="filter-chip active group"
                    >
                      {filter}
                      <X className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              )}

              {/* Products Grid */}
              <div className={cn(
                "grid gap-6",
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              )}>
                {filteredProducts.map((product, index) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className={cn(
                      "group bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden",
                      "shadow-soft hover:shadow-medium transition-all duration-300 ease-out animate-fade-in",
                      viewMode === "list" && "flex"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image */}
                    <div className={cn(
                      "relative bg-secondary overflow-hidden",
                      viewMode === "grid" ? "aspect-[4/3]" : "w-48 h-48 flex-shrink-0"
                    )}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-xl bg-gradient-eco opacity-20 group-hover:opacity-30 transition-opacity" />
                        <Zap className="absolute w-10 h-10 text-primary/50" />
                      </div>
                      
                      {product.badge && (
                        <div className="absolute top-3 left-3 badge-eco">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.power && (
                          <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                            {product.power}
                          </div>
                        )}
                        {product.efficiency && (
                          <div className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                            КПД {product.efficiency}
                          </div>
                        )}
                        <div className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                          Гарантия {product.warranty}
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

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Назад
                  </Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <span className="px-2 text-muted-foreground">...</span>
                  <Button variant="outline" size="sm">12</Button>
                  <Button variant="outline" size="sm">
                    Вперёд
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-semibold">Фильтры</h3>
              <Button variant="ghost" size="icon-sm" onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile filters content - same as sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Категории</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFilters(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs opacity-70">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Мощность</h3>
                <div className="space-y-2">
                  {filters.power.map((power) => (
                    <label key={power} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(power)}
                        onChange={() => toggleFilter(power)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-foreground">{power}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => setShowFilters(false)}
              >
                Применить фильтры
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

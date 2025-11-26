import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Zap, 
  ShoppingCart, 
  Calculator,
  ChevronRight,
  Check,
  Minus,
  Plus,
  Share2,
  Heart,
  FileText,
  Shield,
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";

const product = {
  id: 1,
  name: "Комплект «Семья 5 кВт»",
  description: "Оптимальное решение для семьи из 4 человек. Включает высокоэффективные монокристаллические панели, гибридный инвертор и систему крепления.",
  power: "5 кВт",
  price: "289 000 ₽",
  oldPrice: "319 000 ₽",
  rating: 4.8,
  reviews: 94,
  inStock: true,
  sku: "KIT-FAM-5KW",
  brand: "SolarTech",
  warranty: "25 лет",
  category: "Готовые комплекты",
};

const specifications = [
  { label: "Мощность системы", value: "5 кВт" },
  { label: "Кол-во панелей", value: "12 шт." },
  { label: "Мощность панели", value: "415 Вт" },
  { label: "Тип панелей", value: "Монокристалл" },
  { label: "Инвертор", value: "Growatt SPF 5000ES" },
  { label: "Ёмкость АКБ", value: "10.2 кВт·ч" },
  { label: "Выработка/год", value: "~6000 кВт·ч" },
  { label: "Площадь крыши", value: "от 25 м²" },
  { label: "Гарантия панели", value: "25 лет" },
  { label: "Гарантия инвертор", value: "5 лет" },
];

const included = [
  "12× Солнечная панель JA Solar 415W",
  "1× Гибридный инвертор Growatt SPF 5000ES",
  "2× Аккумулятор Pylontech US3000C 3.5 кВт·ч",
  "Система крепления на крышу",
  "Кабели и коннекторы MC4",
  "Защитные автоматы и устройства",
  "Инструкция по монтажу",
];

const documents = [
  { name: "Технический паспорт", size: "2.4 MB", type: "PDF" },
  { name: "Сертификат соответствия", size: "1.1 MB", type: "PDF" },
  { name: "Инструкция по монтажу", size: "5.8 MB", type: "PDF" },
  { name: "Гарантийный талон", size: "0.3 MB", type: "PDF" },
];

const relatedProducts = [
  {
    id: 2,
    name: "Комплект «Дача 3 кВт»",
    price: "189 000 ₽",
    power: "3 кВт",
  },
  {
    id: 3,
    name: "Комплект «Автономия 10 кВт»",
    price: "549 000 ₽",
    power: "10 кВт",
  },
  {
    id: 4,
    name: "Дополнительный АКБ 5 кВт·ч",
    price: "145 000 ₽",
    power: "5 кВт·ч",
  },
];

const tabs = [
  { id: "description", name: "Описание" },
  { id: "specs", name: "Характеристики" },
  { id: "documents", name: "Документы" },
  { id: "reviews", name: "Отзывы" },
];

export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="bg-secondary/30 py-4">
          <div className="container-wide">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/catalog" className="hover:text-foreground transition-colors">Каталог</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/catalog?category=kits" className="hover:text-foreground transition-colors">Комплекты</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container-wide py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl bg-gradient-eco opacity-20" />
                  <Zap className="absolute w-24 h-24 text-primary/50" />
                </div>
                
                {/* Sale badge */}
                <div className="absolute top-4 left-4 badge-sale">
                  -10%
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "aspect-square rounded-xl bg-secondary overflow-hidden border-2 transition-colors",
                      selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
                    )}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-eco">{product.category}</span>
                  <span className="text-sm text-muted-foreground">Артикул: {product.sku}</span>
                </div>
                
                <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                    <span className="ml-2 font-medium">{product.rating}</span>
                  </div>
                  <a href="#reviews" className="text-sm text-primary hover:underline">
                    {product.reviews} отзывов
                  </a>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Или от 9 600 ₽/мес. в рассрочку
                </p>
              </div>

              {/* Quick features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Мощность: {product.power}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Гарантия: {product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Доставка 1-3 дня</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" />
                  <span>В наличии</span>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  {/* Quantity */}
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to cart */}
                  <Button variant="hero" size="lg" className="flex-1">
                    <ShoppingCart className="w-5 h-5" />
                    Добавить в корзину
                  </Button>
                </div>

                {/* Secondary actions */}
                <div className="flex gap-3">
                  <Link to="/configurator" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      <Calculator className="w-5 h-5" />
                      Рассчитать с установкой
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon-lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon-lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Description short */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12 lg:mt-16">
            {/* Tab buttons */}
            <div className="border-b border-border">
              <div className="flex gap-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "pb-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 -mb-px",
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="py-8">
              {activeTab === "description" && (
                <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4">О комплекте</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Комплект «Семья 5 кВт» — это оптимальное решение для обеспечения 
                      электроэнергией семьи из 3-4 человек. Система способна полностью 
                      покрыть потребление среднего домохозяйства и обеспечить независимость 
                      от перебоев в электросети.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Благодаря гибридному инвертору система может работать как с сетью, 
                      так и полностью автономно. Аккумуляторные батареи обеспечивают 
                      резервное питание на ночное время и в пасмурные дни.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4">Состав комплекта</h3>
                    <ul className="space-y-3">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {specifications.map((spec, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between py-3 border-b border-border"
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "documents" && (
                <div className="animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {documents.map((doc, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="animate-fade-in" id="reviews">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Здесь будут отображаться отзывы покупателей
                    </p>
                    <Button variant="outline">
                      Оставить отзыв
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12 lg:mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Рекомендуемые товары
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group bg-card rounded-2xl border border-border hover:border-primary/30 p-5 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="aspect-video rounded-xl bg-secondary mb-4 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold">{item.price}</span>
                    <span className="text-sm text-muted-foreground">{item.power}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

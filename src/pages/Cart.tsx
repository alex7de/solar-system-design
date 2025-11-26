import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart as CartIcon, 
  Trash2, 
  Minus, 
  Plus, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard
} from "lucide-react";

const initialCartItems = [
  {
    id: 1,
    name: "Комплект «Семья 5 кВт»",
    description: "Полный набор для семьи из 4 человек",
    price: 289000,
    quantity: 1,
    power: "5 кВт",
  },
  {
    id: 2,
    name: "Дополнительный АКБ Pylontech 3.5 кВт·ч",
    description: "Литий-железо-фосфатный аккумулятор",
    price: 145000,
    quantity: 1,
    power: "3.5 кВт·ч",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 0;
  const total = subtotal + delivery;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="bg-secondary/30 py-8">
          <div className="container-wide">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Корзина
            </h1>
          </div>
        </div>

        <div className="container-wide py-8 lg:py-12">
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-2xl border border-border p-4 lg:p-6"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <Zap className="w-10 h-10 text-primary/50" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link 
                              to={`/product/${item.id}`}
                              className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                            <div className="mt-2 inline-flex px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                              {item.power}
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-display text-xl font-bold text-foreground">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky-summary">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Итого
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                      <span className="text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className="text-primary font-medium">Бесплатно</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">К оплате</span>
                        <span className="font-display text-2xl font-bold text-foreground">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full mb-4">
                    Оформить заказ
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mb-6">
                    Нажимая кнопку, вы соглашаетесь с условиями оферты
                  </p>

                  {/* Trust badges */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span>Гарантия возврата 14 дней</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Бесплатная доставка от 50 000 ₽</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span>Оплата картой или в рассрочку</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <CartIcon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Корзина пуста
              </h2>
              <p className="text-muted-foreground mb-6">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <Link to="/catalog">
                <Button variant="hero" size="lg">
                  Перейти в каталог
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

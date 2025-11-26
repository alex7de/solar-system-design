import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Package, 
  Settings, 
  FileText, 
  LogOut,
  ChevronRight,
  Truck,
  Check,
  Clock,
  Download,
  Eye,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "orders", icon: Package, label: "Мои заказы" },
  { id: "projects", icon: Zap, label: "Мои проекты" },
  { id: "documents", icon: FileText, label: "Документы" },
  { id: "settings", icon: Settings, label: "Настройки" },
];

const orders = [
  {
    id: "ORD-2024-001",
    date: "15.01.2025",
    status: "delivered",
    statusLabel: "Доставлен",
    items: [
      { name: "Комплект «Семья 5 кВт»", quantity: 1, price: "289 000 ₽" },
    ],
    total: "289 000 ₽",
  },
  {
    id: "ORD-2024-002",
    date: "22.01.2025",
    status: "in_progress",
    statusLabel: "В работе",
    items: [
      { name: "Услуга монтажа", quantity: 1, price: "45 000 ₽" },
    ],
    total: "45 000 ₽",
  },
];

const projects = [
  {
    id: "PRJ-001",
    name: "Солнечная станция — дача",
    status: "completed",
    statusLabel: "Завершён",
    power: "5 кВт",
    installDate: "28.01.2025",
    production: "156 кВт·ч",
  },
];

const documents = [
  { name: "Договор поставки №123", date: "15.01.2025", type: "PDF" },
  { name: "Акт выполненных работ", date: "28.01.2025", type: "PDF" },
  { name: "Гарантийный талон", date: "28.01.2025", type: "PDF" },
  { name: "Инструкция по эксплуатации", date: "28.01.2025", type: "PDF" },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const statusColors: Record<string, string> = {
    delivered: "bg-primary/10 text-primary",
    in_progress: "bg-accent/20 text-accent-foreground",
    completed: "bg-primary/10 text-primary",
    pending: "bg-muted text-muted-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="bg-secondary/30 py-8 lg:py-12">
          <div className="container-wide">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                  Личный кабинет
                </h1>
                <p className="text-muted-foreground">user@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors",
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-destructive hover:bg-destructive/10 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Выйти</span>
                </button>
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1">
              {/* Orders */}
              {activeTab === "orders" && (
                <div className="animate-fade-in">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    История заказов
                  </h2>
                  
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="bg-card rounded-2xl border border-border p-6"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div>
                              <p className="font-semibold text-foreground">
                                Заказ {order.id}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                от {order.date}
                              </p>
                            </div>
                            <div className={cn(
                              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
                              statusColors[order.status]
                            )}>
                              {order.status === "delivered" && <Check className="w-4 h-4" />}
                              {order.status === "in_progress" && <Clock className="w-4 h-4" />}
                              {order.statusLabel}
                            </div>
                          </div>

                          <div className="border-t border-border pt-4">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-foreground">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Кол-во: {item.quantity}
                                    </p>
                                  </div>
                                </div>
                                <p className="font-medium text-foreground">{item.price}</p>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-border pt-4 mt-4 flex items-center justify-between">
                            <span className="text-muted-foreground">Итого</span>
                            <span className="font-display text-xl font-bold text-foreground">
                              {order.total}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-card rounded-2xl border border-border">
                      <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">У вас пока нет заказов</p>
                      <Link to="/catalog">
                        <Button variant="default">Перейти в каталог</Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Projects */}
              {activeTab === "projects" && (
                <div className="animate-fade-in">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Мои проекты
                  </h2>
                  
                  {projects.length > 0 ? (
                    <div className="space-y-4">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="bg-card rounded-2xl border border-border p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-foreground text-lg">
                                {project.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Установка: {project.installDate}
                              </p>
                            </div>
                            <div className={cn(
                              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
                              statusColors[project.status]
                            )}>
                              <Check className="w-4 h-4" />
                              {project.statusLabel}
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-secondary/50">
                              <p className="text-sm text-muted-foreground mb-1">Мощность</p>
                              <p className="font-display text-xl font-bold text-foreground">
                                {project.power}
                              </p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/50">
                              <p className="text-sm text-muted-foreground mb-1">
                                Выработка за месяц
                              </p>
                              <p className="font-display text-xl font-bold text-primary">
                                {project.production}
                              </p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/50 flex items-center justify-center">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4" />
                                Мониторинг
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-card rounded-2xl border border-border">
                      <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">У вас пока нет проектов</p>
                      <Link to="/configurator">
                        <Button variant="default">Рассчитать систему</Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Documents */}
              {activeTab === "documents" && (
                <div className="animate-fade-in">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Мои документы
                  </h2>
                  
                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.date} • {doc.type}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon-sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings */}
              {activeTab === "settings" && (
                <div className="animate-fade-in">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Настройки профиля
                  </h2>
                  
                  <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Имя
                        </label>
                        <Input defaultValue="Иван" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Фамилия
                        </label>
                        <Input defaultValue="Петров" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input defaultValue="user@example.com" type="email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input defaultValue="+7 (999) 123-45-67" type="tel" />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="default">Сохранить изменения</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

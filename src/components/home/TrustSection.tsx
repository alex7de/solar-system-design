import { Star, Quote, Shield, Award, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Алексей Петров",
    role: "Владелец загородного дома",
    rating: 5,
    text: "Установили систему на 10 кВт. За 2 года сэкономили более 200 000 рублей на электричестве. Очень доволен качеством и сервисом.",
    avatar: null,
  },
  {
    id: 2,
    name: "Марина Козлова",
    role: "Директор кафе «Солнце»",
    rating: 5,
    text: "Для нашего кафе это было идеальное решение. Окупаемость — 4 года, а панели прослужат 25+. Рекомендую всем предпринимателям.",
    avatar: null,
  },
  {
    id: 3,
    name: "Дмитрий Волков",
    role: "Фермер",
    rating: 5,
    text: "На ферме нет централизованного электричества. Благодаря SolarTech теперь у нас полная автономность. Работает безотказно.",
    avatar: null,
  },
];

const partners = [
  "JA Solar", "Huawei", "Growatt", "BYD", "Longi", "Trina Solar"
];

const certifications = [
  { icon: Shield, label: "ISO 9001" },
  { icon: Award, label: "TÜV Certified" },
  { icon: CheckCircle, label: "IEC 61215" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Reviews */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-100">
              Более 500 довольных клиентов по всей России
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  {review.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Partners */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Наши партнёры
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="px-6 py-3 rounded-xl bg-card border border-border text-muted-foreground font-medium hover:border-primary/30 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Сертификаты и гарантии
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary"
                >
                  <cert.icon className="w-5 h-5" />
                  <span className="font-medium">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Northamptonshire Escorts Agency",
  description: "Discover the range of escort services available across Northamptonshire. Dinner dates, social events, travel companions and private encounters.",
};

const services = [
  {
    title: "Dinner Dates",
    icon: "🍷",
    description: "Enjoy the company of a sophisticated escort at Northamptonshire's finest restaurants. Our companions are engaging conversationalists who will make your dining experience truly memorable.",
    features: [
      "Restaurant recommendations",
      "Intelligent conversation",
      "Elegant presentation",
      "Flexible timing",
    ],
  },
  {
    title: "Social Events",
    icon: "✨",
    description: "Make an impression at corporate functions, parties, weddings, or any social occasion with a stunning companion by your side. Our escorts are experienced in high-society environments.",
    features: [
      "Business functions",
      "Private parties",
      "Weddings & celebrations",
      "Networking events",
    ],
  },
  {
    title: "Private Companionship",
    icon: "💎",
    description: "Discreet, intimate encounters tailored to your preferences. Our escorts travel to your home, hotel, or private venue – we are outcall only for your convenience and privacy.",
    features: [
      "Outcall only – we come to you",
      "Completely discreet",
      "Your comfortable environment",
      "Flexible durations",
    ],
  },
  {
    title: "Travel Companion",
    icon: "✈️",
    description: "Planning a trip? Our escorts are available for domestic and international travel. Enjoy sophisticated company whether for business or leisure.",
    features: [
      "UK & international",
      "Business trips",
      "Holiday companionship",
      "Full travel support",
    ],
  },
  {
    title: "Overnight Stays",
    icon: "🌙",
    description: "For those seeking extended companionship, our escorts are available for overnight bookings. Perfect for special occasions or when you want to take your time.",
    features: [
      "Full night bookings",
      "Relaxed atmosphere",
      "Morning company",
      "Weekend availability",
    ],
  },
  {
    title: "Girlfriend Experience",
    icon: "💕",
    description: "The most popular service — a natural, affectionate encounter that feels genuine and connected. Our GFE escorts specialize in creating authentic moments.",
    features: [
      "Natural connection",
      "Affectionate company",
      "Genuine experience",
      "Emotional intelligence",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Our</span>
            <span className="text-white"> Services</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Premium escort services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-elegant">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="text-amber-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Notice */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="card-elegant">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Rates & <span className="text-amber-400">Booking</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Our rates vary depending on the escort, duration, and services required. 
              Contact us for a personalized quote. All rates are discussed in advance 
              with complete transparency — no hidden fees or surprises.
            </p>
            <Link href="/contact" className="btn-gold">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Ready to <span className="text-amber-400">Book?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Browse our escorts or contact us directly for recommendations based on your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/escorts" className="btn-gold">
              View Escorts
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

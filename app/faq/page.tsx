import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Northamptonshire Escorts Agency",
  description: "Frequently asked questions about our Northamptonshire escort services. Learn about booking, discretion, rates and more.",
};

const faqs = [
  {
    question: "How do I book an escort?",
    answer: "Booking is simple. Browse our escorts, choose your preferred companion, and message us on WhatsApp. Provide your preferred date, time, duration, and location. We'll confirm availability and provide all necessary details."
  },
  {
    question: "Are your escorts genuine?",
    answer: "Yes. All our escorts are verified in person by our team. Photos are recent and authentic — we don't use edited or misleading images. What you see is what you get."
  },
  {
    question: "Is my privacy protected?",
    answer: "Absolutely. Discretion is our highest priority. We never share client information, all communications are confidential, and our escorts are professionals who understand the importance of privacy."
  },
  {
    question: "What areas do you cover?",
    answer: "We cover all of Northamptonshire including Northampton, Kettering, Corby, Amersham, Chesham, Beaconsfield, Marlow, and many more towns. We are an outcall-only agency – our escorts travel to you."
  },
  {
    question: "What are your rates?",
    answer: "Rates vary depending on the escort, duration, and services required. Contact us for accurate pricing. We're completely transparent — all costs are discussed upfront with no hidden fees."
  },
  {
    question: "Is this an outcall service?",
    answer: "Yes, we are exclusively an outcall agency. Our escorts travel directly to your home, hotel, or other suitable private venue. We do not offer incall services – we come to you for maximum convenience and discretion."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least a few hours in advance, though same-day bookings are often possible. For specific escorts or peak times (weekends, evenings), earlier booking is advisable."
  },
  {
    question: "Are your escorts independent?",
    answer: "Yes. All escorts work independently and set their own boundaries and services. We act as an introduction agency, facilitating connections between clients and escorts."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Payment details are discussed during the booking process. Payment is typically made directly to the escort at the start of the appointment."
  },
  {
    question: "Can I request specific services?",
    answer: "When contacting us, feel free to mention your preferences. We'll match you with an escort who can accommodate your requirements. All arrangements are made in advance."
  },
  {
    question: "What if I need to cancel?",
    answer: "We understand plans change. Please give us as much notice as possible. Cancellation policies vary by escort and are discussed at the time of booking."
  },
  {
    question: "Are all escorts over 18?",
    answer: "Yes, absolutely. All our escorts are verified to be 18 years of age or older. This is non-negotiable."
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Frequently</span>
            <span className="text-white"> Asked Questions</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Everything you need to know about our services
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant">
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">
            Still Have <span className="text-amber-400">Questions?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Our friendly team is here to help with any enquiries you may have.
          </p>
          <a 
            href="https://wa.me/447440218688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}

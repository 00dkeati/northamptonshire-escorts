import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Northamptonshire Escorts Agency",
  description: "Learn about Northamptonshire Escorts Agency, the premier escort service provider across Northampton, Kettering, Corby, Wellingborough and all of Northamptonshire.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">About</span>
            <span className="text-white"> Us</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Northamptonshire&apos;s premier escort agency
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant mb-12">
            <h2 className="text-3xl font-playfair font-bold text-white mb-6">
              Our <span className="text-amber-400">Story</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Northamptonshire Escorts Agency was established to provide discerning clients across 
                Northamptonshire with access to the finest companionship services. We understand that 
                our clients lead busy, demanding lives and deserve moments of genuine connection and relaxation.
              </p>
              <p>
                Our carefully curated selection of escorts represents the very best that Northamptonshire 
                has to offer. Each companion is chosen not only for their beauty but for their intelligence, 
                charm, and ability to put clients at ease in any situation.
              </p>
              <p>
                From the bustling streets of Northampton to the historic market towns of the county, 
                we serve clients throughout Northamptonshire with the same commitment to excellence and discretion.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Absolute discretion in all dealings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Quality over quantity in our escort selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Professional, respectful service at all times</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Client satisfaction is our priority</span>
                </li>
              </ul>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Verified, genuine escort profiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>24/7 availability for bookings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400">✓</span>
                  <span>Countywide coverage across Northamptonshire</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How We Work */}
          <div className="card-elegant">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
              How We <span className="text-amber-400">Work</span>
            </h3>
            <p className="text-gray-300 mb-6">
              We act as an introduction agency, connecting discerning clients with independent escorts 
              who have chosen to work with us. All escorts are over 18, work independently, and set 
              their own boundaries and services.
            </p>
            <p className="text-gray-300">
              Our role is to facilitate introductions, handle bookings, and ensure that both clients 
              and escorts have a positive, professional experience. We maintain high standards and 
              expect mutual respect from all parties.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Ready to <span className="text-amber-400">Meet Someone Special?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Browse our selection of stunning escorts or contact us for a personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/escorts" className="btn-gold">
              View Our Escorts
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

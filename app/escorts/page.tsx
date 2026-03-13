import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { escorts } from "@/data/escorts";

export const metadata: Metadata = {
  title: "Our Escorts | Northamptonshire Escorts Agency",
  description: "Browse our stunning selection of elite escorts available across Northamptonshire. Professional companions in Northampton, Kettering, Corby and beyond. Outcall only.",
};

export default function EscortsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Our</span>
            <span className="text-white"> Escorts</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Meet our carefully selected companions – outcall only, we come to you
          </p>
        </div>
      </section>

      {/* Escorts Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {escorts.map((escort) => (
              <div key={escort.slug} className="card-elegant group">
                {/* Photo */}
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden mb-4 bg-zinc-800">
                  <Image
                    src={escort.image}
                    alt={escort.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {escort.name}
                </h3>
                <p className="text-amber-400 text-sm mt-1">
                  {escort.age} • {escort.nationality} • {escort.height}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-gray-400">
                  <div>Bust: <span className="text-gray-300">{escort.bustSize}</span></div>
                  <div>Dress: <span className="text-gray-300">{escort.dressSize}</span></div>
                  <div>Hair: <span className="text-gray-300">{escort.hairColour}</span></div>
                  <div>Eyes: <span className="text-gray-300">{escort.eyeColour}</span></div>
                </div>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed line-clamp-3">
                  {escort.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {escort.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Services */}
                <div className="flex gap-3 mt-4 text-xs">
                  {escort.gfe && (
                    <span className="text-green-400">✓ GFE</span>
                  )}
                  {escort.domination && (
                    <span className="text-purple-400">✓ Domination</span>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 block text-center btn-outline text-sm py-2"
                >
                  Enquire About {escort.name}
                </Link>
              </div>
            ))}
          </div>

          {/* More Escorts Notice */}
          <div className="mt-16 text-center card-elegant">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Looking for Someone <span className="text-amber-400">Specific?</span>
            </h3>
            <p className="text-gray-400 mb-6">
              We have more escorts available who are not listed on our website for privacy reasons.
              Contact us with your preferences and we&apos;ll match you with the perfect companion.
              All bookings are outcall only – our escorts travel to you.
            </p>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                Verification
              </h3>
              <p className="text-gray-400 text-sm">
                All our escorts are verified in person. Photos are recent and authentic.
                What you see is what you get — no surprises, no disappointments.
              </p>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                Outcall Only
              </h3>
              <p className="text-gray-400 text-sm">
                We are an outcall-only agency. Our escorts travel directly to your home, 
                hotel, or suitable private venue anywhere in Northamptonshire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

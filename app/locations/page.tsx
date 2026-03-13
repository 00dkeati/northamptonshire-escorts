import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | Northamptonshire Escorts Agency",
  description: "Find escorts across all of Northamptonshire. Northampton, Kettering, Corby, Wellingborough, Daventry and 10+ more towns covered.",
};

const towns = [
  { slug: "northampton", name: "Northampton", description: "Northamptonshire's historic county town with premium escorts" },
  { slug: "kettering", name: "Kettering", description: "Thriving market town with quality companions" },
  { slug: "corby", name: "Corby", description: "Modern town with excellent escorts" },
  { slug: "wellingborough", name: "Wellingborough", description: "Charming market town companionship" },
  { slug: "daventry", name: "Daventry", description: "Discreet services in West Northamptonshire" },
  { slug: "rushden", name: "Rushden", description: "Quality escorts near Rushden Lakes" },
  { slug: "brackley", name: "Brackley", description: "Sophisticated escorts near Silverstone" },
  { slug: "towcester", name: "Towcester", description: "Historic town with premium service" },
  { slug: "oundle", name: "Oundle", description: "Elegant escorts in a beautiful setting" },
  { slug: "thrapston", name: "Thrapston", description: "Boutique escort services" },
  { slug: "rothwell", name: "Rothwell", description: "Quality companions near Kettering" },
  { slug: "desborough", name: "Desborough", description: "Intimate escort experiences" },
  { slug: "raunds", name: "Raunds", description: "Discreet companionship services" },
  { slug: "higham-ferrers", name: "Higham Ferrers", description: "Historic town with elite escorts" },
  { slug: "irthlingborough", name: "Irthlingborough", description: "Premium escort services" },
  { slug: "burton-latimer", name: "Burton Latimer", description: "Exclusive escorts for discerning clients" },
];

export default function LocationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Our</span>
            <span className="text-white"> Locations</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Elite escorts available across all of Northamptonshire
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.slug}`}
                className="card-elegant group"
              >
                <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {town.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{town.description}</p>
                <div className="mt-4 text-amber-400 text-sm flex items-center">
                  View Escorts
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              <span className="text-amber-400">Outcall Only</span> – We Come To You
            </h2>
            <p className="text-gray-400 mb-6">
              We are an exclusive outcall-only agency. Our escorts travel directly to your 
              home, hotel, or private venue anywhere in Northamptonshire. If your area isn&apos;t 
              listed, contact us — we likely have escorts available who can travel to you.
            </p>
            <div className="mt-8">
              <div className="card-elegant bg-zinc-800/50">
                <h3 className="text-amber-400 font-semibold mb-2">Outcall Service</h3>
                <p className="text-gray-400 text-sm">
                  Our escorts visit you at your home, hotel, or other suitable private venue
                  anywhere in Northamptonshire. Maximum convenience, complete discretion. 
                  Travel fees may apply for remote areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Can&apos;t Find Your <span className="text-amber-400">Area?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us with your location and requirements. We&apos;ll find the perfect 
            escort for you, wherever you are in Northamptonshire.
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

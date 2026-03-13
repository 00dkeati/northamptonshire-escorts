import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { towns, escortTypes, serviceTypes, getTown } from "@/data/seo-config";

type PageProps = {
  params: Promise<{ town: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { town: townSlug } = await params;
  const town = getTown(townSlug);

  if (!town) {
    return { title: "Page Not Found" };
  }

  return {
    title: `Escorts in ${town.name} | All Types & Services | Northamptonshire Escorts`,
    description: `Browse all escort types and services available in ${town.name}, ${town.region}. Blonde, brunette, mature, elite escorts and more. Incall & outcall available.`,
    keywords: `${town.name} escorts, escort agency ${town.name}, all escorts ${town.name}, ${town.region} escorts, Northamptonshire escorts`,
  };
}

export async function generateStaticParams() {
  return towns.map((town) => ({ town: town.slug }));
}

export default async function TownPage({ params }: PageProps) {
  const { town: townSlug } = await params;
  const town = getTown(townSlug);

  if (!town) {
    notFound();
  }

  const nearbyTowns = towns.filter(t => t.slug !== townSlug && t.region === town.region);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-amber-400 text-sm uppercase tracking-wider mb-4">
            {town.region}
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">All Escorts</span>
            <span className="text-white"> in {town.name}</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Browse our complete selection of escort types and services available in {town.name}
          </p>
        </div>
      </section>

      {/* Escort Types */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8">
            Escort <span className="text-amber-400">Types</span> in {town.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {escortTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/${townSlug}/${type.slug}`}
                className="card-elegant group text-center"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {type.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">Escorts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 section-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8">
            <span className="text-amber-400">Services</span> in {town.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceTypes.map((service) => (
              <Link
                key={service.slug}
                href={`/${townSlug}/${service.slug}`}
                className="card-elegant group"
              >
                <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.shortDesc}</p>
                <div className="mt-4 text-amber-400 text-sm flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About This Location */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant">
            <h2 className="text-2xl font-playfair font-semibold text-white mb-4">
              About Our {town.name} Escort Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {town.name} is a key location in {town.region}, and we&apos;re proud to offer 
              a comprehensive range of escort services throughout the area. Whether you&apos;re 
              looking for blonde escorts, mature companions, or our popular girlfriend experience (GFE), 
              our {town.name} escorts are ready to provide unforgettable encounters.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are an outcall-only agency – our escorts travel directly to your home, hotel, 
              or other suitable private venue in {town.name} and the surrounding {town.region} area. 
              Contact us today to book your perfect companion.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Towns */}
      {nearbyTowns.length > 0 && (
        <section className="py-16 section-gradient">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center text-white mb-8">
              Escorts in Nearby <span className="text-amber-400">{town.region}</span> Towns
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/${t.slug}`}
                  className="card-elegant text-center group py-4"
                >
                  <span className="text-white group-hover:text-amber-400 transition-colors font-medium">
                    {t.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Book an Escort in <span className="text-amber-400">{town.name}</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us now to arrange your encounter with one of our stunning {town.name} escorts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <Link href="/escorts" className="btn-outline">
              View All Escorts
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Northamptonshire Escorts - ${town.name}`,
            "description": `Premium escort services in ${town.name}, ${town.region}`,
            "url": `https://bedfordshireescorts.agency/${townSlug}`,
            "areaServed": {
              "@type": "City",
              "name": town.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Northamptonshire"
              }
            }
          })
        }}
      />
    </div>
  );
}

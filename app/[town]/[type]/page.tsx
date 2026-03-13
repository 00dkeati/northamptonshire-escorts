import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { towns, escortTypes, serviceTypes, getTown, getEscortType, getServiceType } from "@/data/seo-config";

type PageProps = {
  params: Promise<{ town: string; type: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { town: townSlug, type: typeSlug } = await params;
  const town = getTown(townSlug);
  const escortType = getEscortType(typeSlug);
  const serviceType = getServiceType(typeSlug);
  const type = escortType || serviceType;

  if (!town || !type) {
    return { title: "Page Not Found" };
  }

  const title = `${type.title} in ${town.name} | Northamptonshire Escorts Agency`;
  const description = `Looking for ${type.name.toLowerCase()} escorts in ${town.name}? ${type.shortDesc} Outcall service throughout ${town.region}. Book your ${town.name} ${type.name.toLowerCase()} escort today.`;

  return {
    title,
    description,
    keywords: `${type.name.toLowerCase()} escorts ${town.name}, ${town.name} ${type.name.toLowerCase()} escorts, ${type.slug} escort ${town.name}, ${type.name.toLowerCase()} escort agency ${town.name}, best ${type.name.toLowerCase()} escorts ${town.region}, Northamptonshire ${type.name.toLowerCase()} escorts, ${type.name.toLowerCase()} companions ${town.name}`,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const params: { town: string; type: string }[] = [];
  
  for (const town of towns) {
    for (const escortType of escortTypes) {
      params.push({ town: town.slug, type: escortType.slug });
    }
    for (const serviceType of serviceTypes) {
      params.push({ town: town.slug, type: serviceType.slug });
    }
  }
  
  return params;
}

export default async function TownTypePage({ params }: PageProps) {
  const { town: townSlug, type: typeSlug } = await params;
  const town = getTown(townSlug);
  const escortType = getEscortType(typeSlug);
  const serviceType = getServiceType(typeSlug);

  if (!town) {
    notFound();
  }

  const type = escortType || serviceType;
  if (!type) {
    notFound();
  }

  const isService = !!serviceType;
  
  // Get related types for internal linking
  const relatedTypes = isService 
    ? serviceTypes.filter(s => s.slug !== typeSlug)
    : escortTypes.filter(e => e.slug !== typeSlug).slice(0, 6);

  // Get nearby towns for internal linking (same region first)
  const nearbyTowns = [
    ...towns.filter(t => t.slug !== townSlug && t.region === town.region),
    ...towns.filter(t => t.slug !== townSlug && t.region !== town.region).slice(0, 3)
  ].slice(0, 6);

  // All towns for this type
  const allTownsForType = towns.filter(t => t.slug !== townSlug);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-amber-400 text-sm uppercase tracking-wider mb-4">
            {town.region} • Northamptonshire
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">{type.name}</span>
            <span className="text-white"> Escorts in</span>
            <br />
            <span className="text-white">{town.name}</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {type.shortDesc} Discover our selection of {type.name.toLowerCase()} escorts available 
            for bookings throughout {town.name} and the surrounding {town.region} area.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book Your {type.name} Escort
            </Link>
            <Link href="/escorts" className="btn-outline">
              View All Escorts
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content - Left 2 Columns */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <article className="card-elegant">
                <h2 className="text-2xl font-playfair font-semibold text-white mb-6">
                  {type.title} in {town.name}, Northamptonshire
                </h2>
                <div className="prose prose-lg text-gray-300 leading-relaxed space-y-4">
                  <p>{type.intro}</p>
                  {'paragraph1' in type && <p>{type.paragraph1}</p>}
                  {'paragraph2' in type && <p>{type.paragraph2}</p>}
                  {'paragraph3' in type && <p>{type.paragraph3}</p>}
                </div>
              </article>

              {/* Features Section */}
              <article className="card-elegant">
                <h2 className="text-2xl font-playfair font-semibold text-amber-400 mb-6">
                  What to Expect from {type.name} Escorts in {town.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {'benefits' in type && (
                  <>
                    <h3 className="text-xl font-playfair font-semibold text-white mt-8 mb-4">
                      Benefits of Choosing {type.name} Escorts
                    </h3>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="text-amber-400">•</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </article>

              {/* Service Process (for service types) */}
              {isService && serviceType && 'process' in serviceType && (
                <article className="card-elegant">
                  <h2 className="text-2xl font-playfair font-semibold text-white mb-6">
                    How to Book {type.name} Service in {town.name}
                  </h2>
                  <div className="space-y-6">
                    {(serviceType as typeof serviceTypes[0]).process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-gray-200 text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {'considerations' in serviceType && (
                    <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                      <h4 className="text-amber-400 font-semibold mb-2">Important Information</h4>
                      <p className="text-gray-400 text-sm">{serviceType.considerations}</p>
                    </div>
                  )}
                </article>
              )}

              {/* Local Information */}
              <article className="card-elegant">
                <h2 className="text-2xl font-playfair font-semibold text-white mb-6">
                  About {type.name} Escort Services in {town.name}
                </h2>
                <div className="prose text-gray-300 leading-relaxed space-y-4">
                  <p>
                    {town.name} is located in the heart of {town.region}, making it an ideal location for 
                    {type.name.toLowerCase()} escort services in Northamptonshire. {town.description}
                  </p>
                  <p>
                    We are an outcall-only agency – our {type.name.toLowerCase()} escorts travel directly to you 
                    in {town.name}. Whether you&apos;re a local resident, visiting for business, or 
                    staying at one of the area&apos;s hotels such as {town.hotels}, our {type.name.toLowerCase()} companions 
                    will come to your location for an exceptional experience.
                  </p>
                  <p>
                    {town.name} offers plenty of opportunities for dining and entertainment, including {town.attractions}. 
                    Our {type.name.toLowerCase()} escorts make wonderful companions for dinner dates at local restaurants, 
                    private encounters at your accommodation, or any other arrangement that suits your preferences.
                  </p>
                  <p>
                    With a population of {town.population}, {town.name} is {town.region === 'North Northamptonshire' 
                      ? 'one of the key towns in North Northamptonshire' 
                      : town.region === 'South Northamptonshire'
                      ? 'situated in the affluent South Northamptonshire area'
                      : 'nestled in the beautiful Chiltern District'}, offering easy access to surrounding areas. 
                    Our {type.name.toLowerCase()} escorts travel throughout the region to meet you at your 
                    home, hotel, or private venue – we are outcall only.
                  </p>
                </div>
              </article>

              {/* Why Choose Us */}
              <article className="card-elegant">
                <h2 className="text-2xl font-playfair font-semibold text-amber-400 mb-6">
                  Why Choose Our {type.name} Escorts in {town.name}?
                </h2>
                <div className="prose text-gray-300 leading-relaxed space-y-4">
                  <p>
                    At Northamptonshire Escorts Agency, we pride ourselves on providing the highest quality 
                    {type.name.toLowerCase()} escort services in {town.name} and throughout {town.region}. 
                    Our selection process ensures that every {type.name.toLowerCase()} escort meets our 
                    exacting standards for appearance, personality, and professionalism.
                  </p>
                  <p>
                    When you book a {type.name.toLowerCase()} escort through us, you can expect complete 
                    discretion, verified companions, and a service tailored to your specific requirements. 
                    Whether you&apos;re seeking companionship for a special event, a dinner date in {town.name}, 
                    or a private encounter, our {type.name.toLowerCase()} escorts deliver exceptional experiences.
                  </p>
                  <p>
                    We understand that finding the right escort is important. That&apos;s why we offer a diverse 
                    selection of {type.name.toLowerCase()} companions in {town.name}, each with her own unique 
                    qualities and specialities. Contact us to discuss your preferences, and we&apos;ll recommend 
                    the perfect {type.name.toLowerCase()} escort for your needs.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar - Right Column */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Quick Booking Card */}
              <div className="card-elegant sticky top-24">
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">
                  Book a {type.name} Escort
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Ready to meet a stunning {type.name.toLowerCase()} escort in {town.name}? 
                  Contact us now to arrange your booking.
                </p>
                <Link href="/contact" className="btn-gold w-full text-center block mb-4">
                  Contact Us Now
                </Link>
                <p className="text-gray-500 text-xs text-center">
                  Available 24/7 • Complete Discretion
                </p>
              </div>

              {/* Other Types in This Town */}
              <div className="card-elegant">
                <h3 className="text-lg font-playfair font-semibold text-amber-400 mb-4">
                  Other Escorts in {town.name}
                </h3>
                <ul className="space-y-2">
                  {relatedTypes.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/${townSlug}/${related.slug}`}
                        className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center group"
                      >
                        <span className="mr-2 text-amber-400/50 group-hover:text-amber-400">→</span>
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This Type in Nearby Towns */}
              <div className="card-elegant">
                <h3 className="text-lg font-playfair font-semibold text-amber-400 mb-4">
                  {type.name} Escorts Nearby
                </h3>
                <ul className="space-y-2">
                  {nearbyTowns.map((nearbyTown) => (
                    <li key={nearbyTown.slug}>
                      <Link
                        href={`/${nearbyTown.slug}/${typeSlug}`}
                        className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center group"
                      >
                        <span className="mr-2 text-amber-400/50 group-hover:text-amber-400">→</span>
                        {nearbyTown.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Quick Links */}
              {!isService && (
                <div className="card-elegant">
                  <h3 className="text-lg font-playfair font-semibold text-amber-400 mb-4">
                    Services in {town.name}
                  </h3>
                  <ul className="space-y-2">
                    {serviceTypes.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/${townSlug}/${service.slug}`}
                          className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center group"
                        >
                          <span className="mr-2 text-amber-400/50 group-hover:text-amber-400">→</span>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Browse All Towns for This Type */}
      <section className="py-16 section-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-white mb-4">
            {type.title} Across <span className="text-amber-400">Northamptonshire</span>
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Our {type.name.toLowerCase()} escorts are available throughout Northamptonshire. 
            Select another location to find {type.name.toLowerCase()} companions in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {allTownsForType.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}/${typeSlug}`}
                className="card-elegant text-center group py-3 px-2"
              >
                <span className="text-white group-hover:text-amber-400 transition-colors text-sm font-medium">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Book Your <span className="text-amber-400">{type.name}</span> Escort in {town.name} Today
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Don&apos;t wait – contact Northamptonshire Escorts Agency now to arrange an unforgettable 
            encounter with one of our stunning {type.name.toLowerCase()} escorts in {town.name}. 
            Discretion guaranteed, satisfaction assured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-lg px-10 py-4">
              Book Now
            </Link>
            <Link href={`/${townSlug}`} className="btn-outline text-lg px-10 py-4">
              All {town.name} Escorts
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
            "@type": "Service",
            "name": `${type.title} in ${town.name}`,
            "description": `${type.shortDesc} Available in ${town.name}, ${town.region}, Northamptonshire.`,
            "provider": {
              "@type": "Organization",
              "name": "Northamptonshire Escorts Agency",
              "url": "https://bedfordshireescorts.agency"
            },
            "areaServed": {
              "@type": "City",
              "name": town.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Northamptonshire",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "United Kingdom"
                }
              }
            },
            "serviceType": `${type.name} Escort Service`
          })
        }}
      />
    </div>
  );
}

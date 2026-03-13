import Link from "next/link";
import Image from "next/image";
import { escorts } from "@/data/escorts";

const towns = [
  { name: "Northampton", description: "Our main service area in the historic county town" },
  { name: "Kettering", description: "Premium companions in this thriving market town" },
  { name: "Corby", description: "Elite escorts in the former steel town" },
  { name: "Wellingborough", description: "Charming market town companionship" },
  { name: "Daventry", description: "Discreet services in West Northamptonshire" },
  { name: "Rushden", description: "Quality escorts in the Nene Valley" },
  { name: "Brackley", description: "Sophisticated companionship near Silverstone" },
  { name: "Towcester", description: "Historic town with premium service" },
  { name: "Oundle", description: "Elegant escorts in this beautiful market town" },
  { name: "Thrapston", description: "Boutique escort services" },
  { name: "Rothwell", description: "Discreet companionship services" },
  { name: "Desborough", description: "Quality companions available" },
  { name: "Raunds", description: "Intimate escort experiences" },
  { name: "Higham Ferrers", description: "Historic town with elite escorts" },
  { name: "Irthlingborough", description: "Premium escort services" },
  { name: "Burton Latimer", description: "Exclusive escorts for discerning clients" },
];

const services = [
  {
    title: "Dinner Dates",
    description: "Enjoy the company of a sophisticated escort for dining experiences at Northamptonshire's finest restaurants.",
    icon: "🍷",
  },
  {
    title: "Social Events",
    description: "Arrive with an elegant companion for business functions, parties, and special occasions.",
    icon: "✨",
  },
  {
    title: "GFE",
    description: "The girlfriend experience – natural, affectionate companionship that feels genuine and connected.",
    icon: "💕",
  },
  {
    title: "Overnight Stays",
    description: "Extended companionship for those special occasions when you want to take your time.",
    icon: "🌙",
  },
];

// Featured escorts for homepage
const featuredEscorts = escorts.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Outcall Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-amber-400 text-sm font-medium">Outcall Only – We Come To You</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Elite</span> Escorts in
            <br />
            <span className="text-white">Northamptonshire</span>
          </h1>
          
          <div className="divider-gold my-8"></div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium outcall escort services across Northamptonshire. 
            Our stunning companions travel directly to your home, hotel, 
            or private venue. Discretion guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/escorts" className="btn-gold text-lg px-10 py-4">
              View Our Escorts
            </Link>
            <a 
              href="https://wa.me/447440218688" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-4 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-playfair text-amber-400">6+</div>
              <div className="text-gray-400 text-sm mt-1">Beautiful Escorts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair text-amber-400">16</div>
              <div className="text-gray-400 text-sm mt-1">Towns Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair text-amber-400">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair text-amber-400">100%</div>
              <div className="text-gray-400 text-sm mt-1">Discretion</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Escorts Section */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Featured <span className="text-amber-400">Escorts</span>
            </h2>
            <div className="divider-gold"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Meet some of our most popular companions, available for outcall 
              bookings throughout Northamptonshire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEscorts.map((escort) => (
              <Link 
                key={escort.slug} 
                href="/escorts"
                className="card-elegant group overflow-hidden"
              >
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={escort.image}
                    alt={escort.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-playfair font-semibold text-white">
                      {escort.name}
                    </h3>
                    <p className="text-amber-400 text-sm">
                      {escort.age} • {escort.nationality}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {escort.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/escorts" className="btn-gold">
              View All Escorts
            </Link>
          </div>
        </div>
      </section>

      {/* Outcall Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-black mb-2">
            Outcall Only Service
          </h3>
          <p className="text-black/80">
            Our escorts travel directly to your home, hotel, or private venue anywhere in Northamptonshire. 
            Maximum convenience, complete discretion.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <div className="divider-gold"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Premium escort services designed to meet your needs 
              with professionalism and complete discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-elegant text-center group hover:border-amber-500/50">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-white mb-6">
                Why Choose <span className="text-amber-400">Us?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Complete Discretion</h3>
                    <p className="text-gray-400 text-sm mt-1">Your privacy is our absolute priority. All interactions are completely confidential.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Verified Escorts</h3>
                    <p className="text-gray-400 text-sm mt-1">All photos are genuine and recent. What you see is exactly what you get.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">24/7 Availability</h3>
                    <p className="text-gray-400 text-sm mt-1">Our booking team is available around the clock to assist you with arrangements.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Outcall Across Northamptonshire</h3>
                    <p className="text-gray-400 text-sm mt-1">We come to you – home, hotel, or private venue. 16 towns covered.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {featuredEscorts.slice(0, 4).map((escort, idx) => (
                  <div 
                    key={escort.slug}
                    className={`aspect-[3/4] relative rounded-lg overflow-hidden ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                  >
                    <Image
                      src={escort.image}
                      alt={escort.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white font-playfair font-semibold">{escort.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Areas We <span className="text-amber-400">Serve</span>
            </h2>
            <div className="divider-gold"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Our escorts travel throughout Northamptonshire. 
              Select your location to find companions available in your area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {towns.map((town) => (
              <Link
                key={town.name}
                href={`/${town.name.toLowerCase().replace(/ /g, "-")}`}
                className="card-elegant group py-4 text-center"
              >
                <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {town.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/locations" className="text-amber-400 hover:text-amber-300 text-sm">
              View all locations with details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-black to-amber-900/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Book?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to arrange an unforgettable encounter with one of our 
            stunning escorts. We travel to you anywhere in Northamptonshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447440218688" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-4 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
            <Link href="/escorts" className="btn-outline text-lg px-10 py-4">
              Browse Escorts
            </Link>
          </div>
          <p className="mt-6 text-amber-400 font-medium">
            +44 7440 218688
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Available 24/7 • Outcall Only • Complete Discretion
          </p>
        </div>
      </section>
    </>
  );
}

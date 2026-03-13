import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const towns: Record<string, { name: string; description: string; content: string }> = {
  "bedford": {
    name: "Bedford",
    description: "Premier outcall escort services in Bedford, Northamptonshire's historic county town",
    content: `Bedford is the historic county town of Northamptonshire and home to many of our most sought-after escorts. 
    With its beautiful River Great Ouse embankment, excellent hotels, and vibrant hospitality scene, Bedford is the perfect setting for an unforgettable encounter.
    As an outcall-only agency, our Bedford escorts travel directly to your home, hotel, or private venue throughout the town, 
    including the town centre, Kempston, Goldington, and surrounding areas.`
  },
  "luton": {
    name: "Luton",
    description: "Elite escorts in Luton, Northamptonshire's largest and most vibrant town",
    content: `Luton, the largest town in Northamptonshire, offers a multicultural and vibrant setting for quality companionship.
    Our Luton escorts are sophisticated companions ideal for dinner dates at the town's diverse restaurants or private encounters.
    We cover all areas including the town centre, London Luton Airport hotels, Harpenden borders, and surrounding neighbourhoods.`
  },
  "dunstable": {
    name: "Dunstable",
    description: "Premium escort services in Dunstable, at the foot of the beautiful Chiltern Hills",
    content: `Dunstable, an ancient market town with Roman origins, combines rich history with modern amenities. 
    Our Dunstable escorts offer refined companionship for clients seeking discretion and quality near the stunning Dunstable Downs.
    Services are available throughout Dunstable, including Houghton Regis and surrounding villages.`
  },
  "leighton-buzzard": {
    name: "Leighton Buzzard",
    description: "Sophisticated escorts in Leighton Buzzard, a charming market town with excellent connections",
    content: `Leighton Buzzard, with its beautiful high street and traditional market, attracts clients seeking quality companionship.
    Our Leighton Buzzard escorts reflect the town's charming character, offering elegant company for any occasion.
    We serve the town centre, the canal-side areas, and nearby Linslade.`
  },
  "biggleswade": {
    name: "Biggleswade",
    description: "Discreet escort services in Biggleswade, a traditional market town on the River Ivel",
    content: `Nestled on the River Ivel, Biggleswade offers a peaceful setting for those seeking quality companionship.
    Our Biggleswade escorts provide discreet, professional services in this charming market town.
    Coverage includes Biggleswade town centre and the surrounding Central Northamptonshire countryside.`
  },
  "sandy": {
    name: "Sandy",
    description: "Quality escorts in Sandy, home to the RSPB headquarters",
    content: `Sandy is a quiet market town with excellent wildlife credentials and a peaceful atmosphere.
    Our Sandy escorts provide refined companionship in this tranquil setting, perfect for those seeking discretion.
    Services extend to the RSPB Lodge area and surrounding villages.`
  },
  "ampthill": {
    name: "Ampthill",
    description: "Premium escorts in Ampthill, one of the UK's best places to live",
    content: `The picturesque Georgian market town of Ampthill, consistently ranked among Britain's finest, is perfect for sophisticated encounters.
    Our Ampthill escorts match the town's elegant character with style and refinement.
    We cover Ampthill, Ampthill Great Park, and surrounding areas including Flitwick.`
  },
  "flitwick": {
    name: "Flitwick",
    description: "Well-connected escorts in Flitwick, with excellent rail links to London",
    content: `Flitwick offers excellent transport connections while maintaining a pleasant suburban character.
    Our Flitwick escorts provide quality companionship for both local residents and business travellers.
    Services available throughout Flitwick and to nearby Ampthill.`
  },
  "kempston": {
    name: "Kempston",
    description: "Convenient escort services in Kempston, adjacent to Bedford",
    content: `Kempston, directly adjoining Bedford, offers suburban convenience with easy access to the county town's amenities.
    Our Kempston escorts provide discreet, professional services in this residential area.
    Coverage extends throughout Kempston and into central Bedford.`
  },
  "shefford": {
    name: "Shefford",
    description: "Boutique escort services in the charming town of Shefford",
    content: `The charming market town of Shefford, with its strong community spirit and traditional character, is perfect for discreet encounters.
    Our Shefford escorts offer intimate, professional companionship in this Central Northamptonshire gem.
    Services available throughout Shefford and surrounding villages.`
  },
  "houghton-regis": {
    name: "Houghton Regis",
    description: "Quality escorts in Houghton Regis, adjacent to Dunstable",
    content: `Houghton Regis, adjoining Dunstable, provides easy access to the Chilterns and South Northamptonshire.
    Our Houghton Regis escorts serve clients seeking discretion with convenient access to Dunstable Downs.
    Coverage includes Houghton Regis and neighbouring Dunstable areas.`
  },
  "potton": {
    name: "Potton",
    description: "Intimate escort experiences in the historic town of Potton",
    content: `The historic market town of Potton, with roots dating to the Domesday Book, provides a charming backdrop.
    Our Potton escorts offer intimate, quality companionship in this traditional Northamptonshire setting.
    Services available in Potton and the surrounding countryside.`
  },
  "stotfold": {
    name: "Stotfold",
    description: "Discreet escort services in the growing community of Stotfold",
    content: `Stotfold, a growing village with excellent transport links, offers convenient access to quality companionship.
    Our Stotfold escorts provide discreet, professional services in this friendly community.
    We serve Stotfold and connections to nearby Biggleswade and Hitchin.`
  },
  "arlesey": {
    name: "Arlesey",
    description: "Historic village escorts in Arlesey, one of Northamptonshire's oldest settlements",
    content: `Arlesey, one of Northamptonshire's oldest villages with its own railway station, offers convenient access to quality companionship.
    Our Arlesey escorts provide refined services in this historic setting with excellent rail connections.
    Coverage includes Arlesey, the Blue Lagoon area, and surrounding villages.`
  },
  "cranfield": {
    name: "Cranfield",
    description: "Sophisticated escorts in Cranfield, home to the prestigious university",
    content: `Cranfield, home to the renowned university, attracts an international clientele seeking sophisticated companionship.
    Our Cranfield escorts match the academic and professional character of this unique village.
    Services available throughout Cranfield and surrounding areas.`
  },
  "woburn": {
    name: "Woburn",
    description: "Exclusive escorts in Woburn, famous for the Abbey and Safari Park",
    content: `The elegant Georgian village of Woburn, famous for Woburn Abbey and Safari Park, attracts discerning visitors.
    Our Woburn escorts offer exclusive companionship matching the village's upmarket character.
    We serve Woburn, the Abbey estate area, and surrounding Northamptonshire villages.`
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const town = towns[slug];
  
  if (!town) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${town.name} Escorts | Northamptonshire Escorts Agency`,
    description: town.description,
    keywords: `${town.name} escorts, escort agency ${town.name}, companionship ${town.name}, Northamptonshire escorts`,
  };
}

export async function generateStaticParams() {
  return Object.keys(towns).map((slug) => ({ slug }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const town = towns[slug];

  if (!town) {
    notFound();
  }

  const otherTowns = Object.entries(towns)
    .filter(([key]) => key !== slug)
    .slice(0, 6);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">{town.name}</span>
            <span className="text-white"> Escorts</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            {town.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant">
            <h2 className="text-2xl font-playfair font-semibold text-amber-400 mb-4">
              About Our {town.name} Escort Services
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {town.content}
            </p>
          </div>

          {/* Services */}
          <div className="mt-12">
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-white mb-3">Outcall Only Service</h3>
              <p className="text-gray-400">
                We are an outcall-only agency – our {town.name} escorts travel directly to you at your home, 
                hotel, or other suitable private venue. We come to you throughout {town.name} and the surrounding area, 
                providing maximum convenience and discretion.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Book a {town.name} Escort Today
            </h3>
            <p className="text-gray-400 mb-6">
              Contact us now to arrange your encounter with one of our stunning {town.name} companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/447440218688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link href="/escorts" className="btn-outline">
                View All Escorts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 section-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-white mb-8">
            Other <span className="text-amber-400">Locations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherTowns.map(([key, t]) => (
              <Link
                key={key}
                href={`/locations/${key}`}
                className="card-elegant text-center group"
              >
                <span className="text-white group-hover:text-amber-400 transition-colors font-semibold">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-amber-400 hover:text-amber-300">
              View all locations →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const towns: Record<string, { name: string; description: string; content: string }> = {
  "northampton": {
    name: "Northampton",
    description: "Premier outcall escort services in Northampton, Northamptonshire's historic county town",
    content: `Northampton is the historic county town and largest city in Northamptonshire, home to many of our most sought-after escorts. 
    With its beautiful Market Square, excellent hotels like the Hilton and Marriott, and vibrant hospitality scene, Northampton is the perfect setting for an unforgettable encounter.
    As an outcall-only agency, our Northampton escorts travel directly to your home, hotel, or private venue throughout the city, 
    including the town centre, Far Cotton, Abington, Weston Favell, and surrounding areas.`
  },
  "kettering": {
    name: "Kettering",
    description: "Elite escorts in Kettering, a thriving market town with excellent amenities",
    content: `Kettering is a thriving market town in North Northamptonshire, offering quality companionship in a welcoming setting.
    Our Kettering escorts are sophisticated companions ideal for dinner dates at the town's excellent restaurants or private encounters.
    We cover all areas including the town centre, Kettering Park Hotel & Spa, Rothwell Road, and surrounding neighbourhoods.`
  },
  "corby": {
    name: "Corby",
    description: "Premium escort services in Corby, a modern and vibrant town",
    content: `Corby, once known as 'Little Scotland', has transformed into a modern, growing town with excellent transport links. 
    Our Corby escorts offer refined companionship for clients seeking quality and discretion in this dynamic setting.
    Services are available throughout Corby, including the town centre, Oakley Hay, and surrounding villages.`
  },
  "wellingborough": {
    name: "Wellingborough",
    description: "Sophisticated escorts in Wellingborough, a charming market town with great connections",
    content: `Wellingborough, with its historic market square and excellent rail links to London, attracts clients seeking quality companionship.
    Our Wellingborough escorts reflect the town's charming character, offering elegant company for any occasion.
    We serve the town centre, Castle Quay, Finedon Road, and nearby villages.`
  },
  "daventry": {
    name: "Daventry",
    description: "Discreet escort services in Daventry, surrounded by beautiful countryside",
    content: `Set amid rolling countryside in West Northamptonshire, Daventry offers a peaceful setting for quality companionship.
    Our Daventry escorts provide discreet, professional services in this charming market town.
    Coverage includes Daventry town centre, the business parks, and the surrounding villages.`
  },
  "rushden": {
    name: "Rushden",
    description: "Quality escorts in Rushden, home to the popular Rushden Lakes",
    content: `Rushden has been transformed by the popular Rushden Lakes shopping and leisure complex.
    Our Rushden escorts provide refined companionship in this exciting area with excellent hotel options.
    Services extend to Rushden Lakes, the town centre, and neighbouring Higham Ferrers.`
  },
  "brackley": {
    name: "Brackley",
    description: "Premium escorts in Brackley, near the famous Silverstone Circuit",
    content: `The elegant market town of Brackley, near the world-famous Silverstone Circuit, attracts motorsport enthusiasts and business visitors.
    Our Brackley escorts match the town's sophisticated character with style and refinement.
    We cover Brackley, Silverstone, and surrounding South Northamptonshire villages.`
  },
  "towcester": {
    name: "Towcester",
    description: "Well-connected escorts in Towcester, one of England's oldest towns",
    content: `Towcester, one of England's oldest towns on the historic Watling Street, offers a charming backdrop for quality companionship.
    Our Towcester escorts provide sophisticated services in this historic setting.
    Services available throughout Towcester and to the nearby racecourse area.`
  },
  "oundle": {
    name: "Oundle",
    description: "Elegant escort services in Oundle, a beautiful limestone market town",
    content: `The beautiful limestone town of Oundle, home to the prestigious school, provides an elegant setting for refined encounters.
    Our Oundle escorts offer discreet, professional services in this sophisticated Northamptonshire gem.
    Coverage extends throughout Oundle and the surrounding Nene Valley villages.`
  },
  "thrapston": {
    name: "Thrapston",
    description: "Boutique escort services in the charming town of Thrapston",
    content: `The charming market town of Thrapston, with its famous nine-arch bridge, is perfect for discreet encounters.
    Our Thrapston escorts offer intimate, professional companionship on the banks of the River Nene.
    Services available throughout Thrapston and surrounding villages.`
  },
  "rothwell": {
    name: "Rothwell",
    description: "Quality escorts in Rothwell, a historic market town near Kettering",
    content: `Rothwell, with its famous Holy Trinity Church, provides a historic backdrop for quality companionship.
    Our Rothwell escorts serve clients seeking discretion in this traditional market town.
    Coverage includes Rothwell and connections to nearby Kettering.`
  },
  "desborough": {
    name: "Desborough",
    description: "Intimate escort experiences in the town of Desborough",
    content: `Desborough offers a quiet setting for those seeking quality companionship away from larger towns.
    Our Desborough escorts offer intimate, quality companionship in this friendly Northamptonshire setting.
    Services available in Desborough and the surrounding area.`
  },
  "raunds": {
    name: "Raunds",
    description: "Discreet escort services in the growing town of Raunds",
    content: `Raunds, a growing town with excellent A45 connections, offers convenient access to quality companionship.
    Our Raunds escorts provide discreet, professional services in this friendly community.
    We serve Raunds and connections to nearby Rushden and Wellingborough.`
  },
  "higham-ferrers": {
    name: "Higham Ferrers",
    description: "Historic escorts in Higham Ferrers, a picturesque medieval market town",
    content: `Higham Ferrers, with its stunning Chichele College and medieval market square, provides a charming backdrop.
    Our Higham Ferrers escorts provide refined services in this historic setting.
    Coverage includes Higham Ferrers and neighbouring Rushden.`
  },
  "irthlingborough": {
    name: "Irthlingborough",
    description: "Convenient escorts in Irthlingborough, on the banks of the River Nene",
    content: `Irthlingborough offers convenient access to quality companionship on the banks of the River Nene.
    Our Irthlingborough escorts provide quality services in this historic town.
    Services available throughout Irthlingborough and surrounding villages.`
  },
  "burton-latimer": {
    name: "Burton Latimer",
    description: "Exclusive escorts in Burton Latimer, close to Kettering",
    content: `Burton Latimer offers a quieter alternative to Kettering while remaining well-connected.
    Our Burton Latimer escorts offer exclusive companionship matching the town's friendly character.
    We serve Burton Latimer and surrounding Northamptonshire villages.`
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

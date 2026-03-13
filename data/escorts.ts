// Escort profiles from FoxyKittens

export interface Escort {
  slug: string;
  name: string;
  age: number;
  nationality: string;
  height: string;
  dressSize: string;
  bustSize: string;
  eyeColour: string;
  hairColour: string;
  orientation: string;
  gfe: boolean;
  domination: boolean;
  smoker: string;
  image: string;
  description: string;
  tags: string[];
  available: string[];
}

export const escorts: Escort[] = [
  {
    slug: "caprice",
    name: "Caprice",
    age: 32,
    nationality: "English",
    height: "5'2\" (157cm)",
    dressSize: "8",
    bustSize: "34D",
    eyeColour: "Blue",
    hairColour: "Brunette",
    orientation: "Straight",
    gfe: true,
    domination: false,
    smoker: "No",
    image: "/escorts/caprice-1.png",
    description: "Caprice is an enchanting English beauty, a tempting blend of elegance and allure. Standing at a petite 5'2\", she carries herself with a confidence that belies her stature. With striking green eyes that sparkle with mischief and luscious dark hair, Caprice embodies the vivacious spirit of someone who knows how to enjoy life to the fullest. She's perfect for GFE bookings and dinner dates.",
    tags: ["Brunette", "Petite", "GFE", "Dinner Dates", "English"],
    available: ["Bedford", "Luton", "Dunstable", "Leighton Buzzard"],
  },
  {
    slug: "joanna",
    name: "Joanna",
    age: 29,
    nationality: "Moldavian",
    height: "5'7\" (170cm)",
    dressSize: "10",
    bustSize: "32B",
    eyeColour: "Green",
    hairColour: "Black",
    orientation: "Bisexual",
    gfe: true,
    domination: true,
    smoker: "Yes",
    image: "/escorts/joanna-1.png",
    description: "Meet Joanna, a stunning 29-year-old Moldavian beauty who knows exactly how to turn heads. Standing at 5'7\" with a graceful size 10 figure, she's the perfect mix of elegance and playfulness. Her striking green eyes and long black hair will draw you in the moment you meet her. Fun, flirty, and full of energy, Joanna is open to meeting singles and couples alike.",
    tags: ["Eastern European", "Tall", "GFE", "Domination", "Couples"],
    available: ["Bedford", "Luton", "Ampthill", "Flitwick"],
  },
  {
    slug: "danni",
    name: "Danni",
    age: 28,
    nationality: "English",
    height: "5'0\" (152cm)",
    dressSize: "10",
    bustSize: "34D",
    eyeColour: "Blue",
    hairColour: "Blonde",
    orientation: "Bisexual",
    gfe: true,
    domination: true,
    smoker: "Social",
    image: "/escorts/danni-1.png",
    description: "Meet Danni – the naughty blonde bombshell you've been dreaming of. At 5'0\" with curves in all the right places, Danni is a cheeky English delight who knows how to keep your pulse racing. With piercing blue eyes, luscious blonde hair, and a tempting 34D bust, she's the kind of woman who walks in and instantly owns the room.",
    tags: ["Blonde", "Petite", "Busty", "GFE", "Domination", "Bisexual"],
    available: ["Bedford", "Kempston", "Biggleswade", "Sandy"],
  },
  {
    slug: "paige",
    name: "Paige",
    age: 38,
    nationality: "British",
    height: "5'5\" (165cm)",
    dressSize: "6",
    bustSize: "32B",
    eyeColour: "Hazel",
    hairColour: "Black",
    orientation: "Bisexual",
    gfe: true,
    domination: true,
    smoker: "No",
    image: "/escorts/paige-1.png",
    description: "Meet Paige – your irresistible British bombshell with hazel eyes that tease and a mischievous smile you won't forget. At 5'5\" with a petite size 6 frame, she knows just how to turn heads without even trying. Paige oozes sensuality and sophistication. She's your perfect GFE companion – affectionate, playful, and always up for a cheeky laugh.",
    tags: ["Mature", "Slim", "British", "GFE", "Party", "Couples"],
    available: ["Luton", "Dunstable", "Houghton Regis", "Woburn"],
  },
  {
    slug: "mary",
    name: "Mary",
    age: 37,
    nationality: "British",
    height: "5'7\" (170cm)",
    dressSize: "10",
    bustSize: "34D",
    eyeColour: "Green",
    hairColour: "Golden Brown",
    orientation: "Straight",
    gfe: true,
    domination: true,
    smoker: "No",
    image: "/escorts/mary-1.png",
    description: "Meet Mary – a dazzling 37-year-old enchantress with hypnotic green eyes and a figure that turns heads without even trying. Standing at 5'7\" with curves in all the right places, she brings just the right mix of class, sass, and irresistible charm. Whether she's teasing you softly with her sensual GFE side or taking control with a touch of domination, Mary knows exactly how to keep things exciting.",
    tags: ["Mature", "Busty", "GFE", "Domination", "Dinner Dates", "British"],
    available: ["Leighton Buzzard", "Ampthill", "Flitwick", "Shefford"],
  },
  {
    slug: "billy-jo",
    name: "Billy-Jo",
    age: 37,
    nationality: "English",
    height: "5'7\" (170cm)",
    dressSize: "12-14",
    bustSize: "38DD",
    eyeColour: "Hazel",
    hairColour: "Black",
    orientation: "Bisexual",
    gfe: true,
    domination: true,
    smoker: "Social",
    image: "/escorts/billy-jo-1.png",
    description: "Billy-Jo is a mesmerizing 37-year-old English enchantress standing at 5'7\", her presence irresistibly commanding as she glides into any room. Her captivating 38DD bust and hypnotic hazel eyes draw you in instantly. As a self-proclaimed party goddess, Billy-Jo flourishes in vibrant atmospheres. Open to both GFE experiences and exhilarating domination, she knows how to ignite the spark in any intimate encounter.",
    tags: ["Busty", "Curvy", "Party", "GFE", "Domination", "Couples", "English"],
    available: ["Bedford", "Kempston", "Cranfield", "Woburn"],
  },
];

export function getEscort(slug: string) {
  return escorts.find(e => e.slug === slug);
}

export function getEscortsByTag(tag: string) {
  return escorts.filter(e => e.tags.includes(tag));
}

export function getEscortsByLocation(location: string) {
  return escorts.filter(e => e.available.includes(location));
}

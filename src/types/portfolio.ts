export type CountryStat = {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: "capital" | "area" | "distance" | "climate";
};

export type CountryDetail = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type CountryOverviewData = {
  eyebrow: string;
  title: string;
  description: string;
  location: CountryDetail;
  stats: CountryStat[];
  flag: CountryDetail;
};

export type CultureItemId =
  | "typical-food"
  | "traditional-music"
  | "traditional-instrument"
  | "traditional-dance"
  | "traditional-clothes";

export type CultureItem = {
  id: CultureItemId;
  eyebrow: string;
  title: string;
  summary: string;
  paragraphs: string[];
  facts?: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type CultureSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  items: CultureItem[];
};

export type HistoryTimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  image: string;
};

export type HistoricalFigure = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  reference?: ContentReference;
};

export type HistorySectionData = {
  eyebrow: string;
  title: string;
  description: string;
  featured: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    reference?: ContentReference;
  };
  timeline: HistoryTimelineItem[];
  independence: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  achievements: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  figures: HistoricalFigure[];
};

export type ContentReference = {
  id: string;
  label?: string;
  title: string;
  details: string[];
  url?: string;
  linkLabel?: string;
};

export type ReferencedContent = {
  reference?: ContentReference;
};

export type FootballStat = {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: "shirt" | "goal" | "trophy" | "stadium";
};

export type WorldCupAppearance = {
  year: string;
  result: string;
  description: string;
  highlighted?: boolean;
};

export type FootballSectionData = {
  eyebrow: string;
  title: string;
  description: string;

  featuredPlayer: {
    eyebrow: string;
    name: string;
    position: string;
    summary: string;
    paragraphs: string[];
    facts: string[];
    image: string;
    imageAlt: string;
    reference?: ContentReference;
  };

  stats: FootballStat[];

  worldCup: {
    eyebrow: string;
    title: string;
    description: string;
    appearances: WorldCupAppearance[];
  };

  brazilMatch: {
    eyebrow: string;
    title: string;
    score: string;
    date: string;
    description: string;
    scorers: string[];
    image: string;
    imageAlt: string;
    reference?: ContentReference;
  };

  rivalries: {
    eyebrow: string;
    title: string;
    description: string;
    countries: string[];
  };

  supporters: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    traditions: string[];
    image: string;
    imageAlt: string;
    reference?: ContentReference;
  };

  womenTeam: {
    eyebrow: string;
    title: string;
    description: string;
    achievements: string[];
  };
};
export type NorwegianExpression = {
  id: string;
  english: string;
  norwegian: string;
  pronunciation: string;
  meaning: string;
};

export type SocietyStat = {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: "currency" | "economy" | "quality" | "technology";
};

export type SocietyTopic = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  icon: "challenges" | "transport";
};

export type LanguageSocietySectionData = {
  eyebrow: string;
  title: string;
  description: string;

  language: {
    eyebrow: string;
    title: string;
    description: string;
    officialLanguages: string[];
    countryName: {
      norwegian: string;
      pronunciation: string;
      description: string;
    };
    expressions: NorwegianExpression[];
  };

  economy: {
    eyebrow: string;
    title: string;
    description: string;
    stats: SocietyStat[];
    industries: string[];
    companies: string[];
  };

  topics: SocietyTopic[];
};

export type TourismCategory = "city" | "nature" | "attraction";

export type TourismDestination = {
  id: string;
  name: string;
  location: string;
  category: TourismCategory;
  description: string;
  image: string;
  imageAlt: string;
  websiteUrl?: string;
  reference?: ContentReference;
  featured?: boolean;
};

export type TourismSectionData = {
  eyebrow: string;
  title: string;
  description: string;

  featured: TourismDestination;

  destinations: TourismDestination[];

  landscapes: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  cities: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      name: string;
      subtitle: string;
      description: string;
    }[];
  };
};

export type CuriosityFact = {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: "sun" | "tunnel" | "island";
};

export type CuriositySectionData = {
  eyebrow: string;
  title: string;
  description: string;

  featured: {
    eyebrow: string;
    title: string;
    description: string;
    highlight: string;
    image: string;
    imageAlt: string;
  };

  facts: CuriosityFact[];
};

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

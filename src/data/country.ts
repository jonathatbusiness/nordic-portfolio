import type { CountryOverviewData } from "@/types/portfolio";

export const countryOverview: CountryOverviewData = {
  eyebrow: "Country Overview",

  title: "Discover Norway",

  description:
    "Norway is a Nordic country in Northern Europe, known for its long coastline, dramatic mountains, deep fjords and Arctic landscapes.",

  location: {
    id: "location",
    title: "Map and Continental Location",
    paragraphs: [
      "Norway is located in Northern Europe, in the western part of the Scandinavian Peninsula.",
      "The country shares land borders with Sweden, Finland and Russia.",
      "It is bordered by the North Sea, the Norwegian Sea and the Barents Sea.",
      "Norway has a very long coastline, famous for its islands, mountains and deep fjords.",
    ],
  },

  stats: [
    {
      id: "capital",
      label: "Capital",
      value: "Oslo",
      description:
        "Oslo is Norway’s capital and its largest centre for government, culture and business.",
      icon: "capital",
    },
    {
      id: "area",
      label: "Territorial Area",
      value: "Approximately 385,000 km²",
      description:
        "This total includes Norway’s mainland and its Arctic territories. The mainland covers approximately 324,000 km².",
      icon: "area",
    },
    {
      id: "distance",
      label: "Distance from Brazil",
      value: "Approximately 9,900 km",
      description:
        "This is the approximate straight-line distance between Brasília and Oslo. Travel normally requires at least one connection.",
      icon: "distance",
    },
    {
      id: "climate",
      label: "Predominant Climate",
      value: "Cold Temperate",
      description:
        "Coastal regions are relatively mild and rainy, while inland and northern areas have colder winters and frequent snow.",
      icon: "climate",
    },
  ],

  flag: {
    id: "flag",
    title: "The Norwegian Flag",
    paragraphs: [
      "The Norwegian flag has a red background with a dark blue Scandinavian cross outlined in white.",
      "The cross represents Norway’s historical connection with Christianity and follows the traditional Nordic flag design.",
      "Its colours also demonstrate the country’s historical and cultural connections with Denmark and Sweden.",
      "The current flag was officially adopted in the nineteenth century.",
    ],
  },
};

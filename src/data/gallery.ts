import type { GalleryCategory, GalleryItem } from "@/types/gallery";

export const galleryCategories: {
  id: GalleryCategory;
  label: string;
}[] = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "places",
    label: "Places",
  },
  {
    id: "culture",
    label: "Culture",
  },
  {
    id: "history",
    label: "History",
  },
  {
    id: "football",
    label: "Football",
  },
  {
    id: "nature",
    label: "Nature",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "geirangerfjord",
    title: "Geirangerfjord",
    description:
      "One of Norway’s most famous fjords, surrounded by steep mountains and waterfalls.",
    category: "nature",
    image: "/images/tourism/geirangerfjord.webp",
    imageAlt: "Geirangerfjord surrounded by mountains and waterfalls",
  },
  {
    id: "oslo",
    title: "Oslo",
    description:
      "Norway’s capital and an important centre for culture, government and modern architecture.",
    category: "places",
    image: "/images/tourism/oslo.webp",
    imageAlt: "Modern waterfront architecture in Oslo",
  },
  {
    id: "bergen",
    title: "Bergen",
    description:
      "A historic coastal city known as the gateway to the Norwegian fjords.",
    category: "places",
    image: "/images/tourism/bergen.webp",
    imageAlt: "Colourful wooden buildings in Bergen",
  },
  {
    id: "tromso",
    title: "Tromsø",
    description:
      "An Arctic city associated with winter tourism, polar culture and the northern lights.",
    category: "places",
    image: "/images/tourism/tromso.webp",
    imageAlt: "Tromsø city surrounded by Arctic scenery",
  },
  {
    id: "lofoten",
    title: "Lofoten Islands",
    description:
      "A dramatic archipelago known for mountains, fishing villages and coastal scenery.",
    category: "nature",
    image: "/images/tourism/lofoten.webp",
    imageAlt: "Fishing village and mountains in the Lofoten Islands",
  },
  {
    id: "preikestolen",
    title: "Preikestolen",
    description: "A famous cliff rising high above Lysefjord.",
    category: "nature",
    image: "/images/tourism/preikestolen.webp",
    imageAlt: "Preikestolen cliff overlooking Lysefjord",
  },
  {
    id: "midnight-sun",
    title: "Midnight Sun",
    description:
      "A natural phenomenon in northern Norway where the sun remains visible at night.",
    category: "nature",
    image: "/images/curiosity/midnight-sun.webp",
    imageAlt: "Midnight sun over a Norwegian Arctic landscape",
  },
  {
    id: "farikal",
    title: "Fårikål",
    description:
      "Norway’s national dish, traditionally prepared with lamb or mutton and cabbage.",
    category: "culture",
    image: "/images/culture/typical-food.webp",
    imageAlt: "Traditional Norwegian fårikål dish",
  },
  {
    id: "folk-music",
    title: "Norwegian Folk Music",
    description:
      "Traditional music connected to rural communities, celebrations and storytelling.",
    category: "culture",
    image: "/images/culture/traditional-music.webp",
    imageAlt: "Norwegian musicians performing traditional folk music",
  },
  {
    id: "hardanger-fiddle",
    title: "Hardanger Fiddle",
    description:
      "A traditional Norwegian instrument known for its decorated body and resonant sound.",
    category: "culture",
    image: "/images/culture/traditional-instrument.webp",
    imageAlt: "Traditional Norwegian Hardanger fiddle",
  },
  {
    id: "hallingdans",
    title: "Hallingdans",
    description:
      "An energetic Norwegian folk dance requiring strength, balance and flexibility.",
    category: "culture",
    image: "/images/culture/traditional-dance.webp",
    imageAlt: "Traditional Norwegian hallingdans performance",
  },
  {
    id: "bunad",
    title: "Bunad",
    description:
      "Traditional Norwegian clothing with regional embroidery, colours and jewellery.",
    category: "culture",
    image: "/images/culture/traditional-clothes.webp",
    imageAlt: "Norwegian people wearing traditional bunad clothing",
  },
  {
    id: "viking-age",
    title: "The Viking Age",
    description:
      "A period of exploration, trade, settlement and navigation that shaped Norwegian history.",
    category: "history",
    image: "/images/history/viking-age.webp",
    imageAlt: "Viking longship travelling through a Norwegian fjord",
  },
  {
    id: "harald-fairhair",
    title: "Harald Fairhair",
    description:
      "Traditionally described as the first king to unite much of Norway.",
    category: "history",
    image: "/images/history/harald-fairhair.webp",
    imageAlt: "Historical representation of Harald Fairhair",
  },
  {
    id: "haakon-vii",
    title: "King Haakon VII",
    description:
      "An important symbol of Norwegian independence and resistance.",
    category: "history",
    image: "/images/history/haakon-vii.webp",
    imageAlt: "Portrait of King Haakon VII",
  },
  {
    id: "haaland",
    title: "Erling Haaland",
    description: "One of Norway’s most prominent modern football players.",
    category: "football",
    image: "/images/football/erling-haaland.webp",
    imageAlt: "Erling Haaland representing Norway",
  },
  {
    id: "norway-brazil",
    title: "Norway vs Brazil",
    description:
      "Norway’s historic 2–1 victory over Brazil at the 1998 World Cup.",
    category: "football",
    image: "/images/football/norway-brazil-1998.webp",
    imageAlt: "Norwegian football celebration after the match against Brazil",
  },
  {
    id: "supporters",
    title: "Norwegian Supporters",
    description:
      "Fans wearing red, waving flags and celebrating the national team.",
    category: "football",
    image: "/images/football/norway-supporters.webp",
    imageAlt: "Norwegian football supporters waving national flags",
  },
];

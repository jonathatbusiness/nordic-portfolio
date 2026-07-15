import type { FootballSectionData } from "@/types/portfolio";

export const footballSection: FootballSectionData = {
  eyebrow: "Football",

  title: "The Passion of Norwegian Football",

  description:
    "Norwegian football combines historic World Cup moments, modern international stars and a strong national identity among supporters.",

  featuredPlayer: {
    eyebrow: "Main Player",
    name: "Erling Haaland",
    position: "Striker — Norway National Team",
    summary:
      "One of the most prominent Norwegian footballers of the modern era.",
    paragraphs: [
      "Erling Haaland is widely regarded as one of the greatest Norwegian footballers of the modern era.",
      "He is famous for his speed, physical strength, positioning and exceptional ability to score goals.",
      "He became an international star while playing for clubs such as Borussia Dortmund and Manchester City.",
      "Other important Norwegian players include Ole Gunnar Solskjær, Martin Ødegaard and Ada Hegerberg.",
    ],
    facts: [
      "Powerful striker",
      "Exceptional finishing",
      "International star",
      "Norway number 9",
    ],
    image: "/images/football/erling-haaland.webp",
    imageAlt:
      "Erling Haaland representing the Norwegian national football team",
    reference: {
      id: "erling-haaland-image-reference",
      label: "Image Reference",
      title: "Erling Haaland",
      details: ["Image credit: GETTY IMAGES."],
    },
  },

  stats: [
    {
      id: "world-cup-appearances",
      label: "World Cup Appearances",
      value: "4",
      description:
        "Norway has participated in the men’s World Cup in 1938, 1994, 1998 and 2026.",
      icon: "trophy",
    },
    {
      id: "historic-victory",
      label: "Historic Victory",
      value: "2–1",
      description:
        "Norway defeated Brazil during the group stage of the 1998 World Cup.",
      icon: "goal",
    },
    {
      id: "national-colours",
      label: "National Colours",
      value: "Red, White & Blue",
      description:
        "The national team and its supporters use the colours of the Norwegian flag.",
      icon: "shirt",
    },
    {
      id: "home-ground",
      label: "Home Ground",
      value: "Ullevaal Stadion",
      description:
        "The national stadium is located in Oslo and hosts major international matches.",
      icon: "stadium",
    },
  ],

  worldCup: {
    eyebrow: "World Cup History",
    title: "Norway on the World Stage",
    description:
      "The men’s national team has appeared in four editions of the FIFA World Cup.",
    appearances: [
      {
        year: "1938",
        result: "First Appearance",
        description:
          "Norway made its World Cup debut in France and faced Italy in the opening round.",
      },
      {
        year: "1994",
        result: "Group Stage",
        description:
          "The team returned to the competition after an absence of more than five decades.",
      },
      {
        year: "1998",
        result: "Round of 16",
        description:
          "Norway reached the knockout stage after a memorable victory against Brazil.",
        highlighted: true,
      },
      {
        year: "2026",
        result: "Return to the Tournament",
        description:
          "Norway returned to the World Cup after a 28-year absence.",
        highlighted: true,
      },
    ],
  },

  brazilMatch: {
    eyebrow: "Historic Match",
    title: "Norway vs Brazil",
    score: "2–1",
    date: "23 June 1998",
    description:
      "Norway came from behind to defeat defending champions Brazil during the group stage of the 1998 World Cup. The victory qualified Norway for the Round of 16.",
    scorers: ["Tore André Flo", "Kjetil Rekdal"],
    image: "/images/football/norway-brazil-1998.webp",
    imageAlt:
      "Norwegian football supporters celebrating the historic match against Brazil",
    reference: {
      id: "norway-brazil-1998-image-reference",
      label: "Image Reference",
      title: "Norway vs Brazil, 1998",
      details: ["Image credit: GETTY IMAGES."],
    },
  },

  rivalries: {
    eyebrow: "Famous Rivalries",
    title: "Nordic Derbies",
    description:
      "Norway’s traditional football rivalries are mainly with its Scandinavian neighbours. Matches against Sweden and Denmark combine geographic proximity, sporting competition and shared Nordic history.",
    countries: ["Sweden", "Denmark", "Brazil"],
  },

  supporters: {
    eyebrow: "Supporters & Traditions",
    title: "Heia Norge!",
    paragraphs: [
      "Norwegian supporters commonly wear red shirts, wave national flags and sing “Heia Norge!”, meaning “Come on, Norway!”",
      "During major competitions, fans gather in public squares, stadiums and fan zones to watch matches together.",
      "Viking-inspired clothing and symbols are sometimes used by supporters, although authentic Viking helmets did not have horns.",
    ],
    traditions: [
      "Red national shirts",
      "Norwegian flags",
      "Heia Norge!",
      "Coordinated clapping",
      "Drums and fan zones",
    ],
    image: "/images/football/norway-supporters.webp",
    imageAlt:
      "Norwegian football supporters wearing red and waving national flags",
    reference: {
      id: "norway-supporters-image-reference",
      label: "Image Reference",
      title: "Norwegian Supporters",
      details: ["Image credit: Justin Setterfield/Getty Images."],
    },
  },

  womenTeam: {
    eyebrow: "Women’s National Team",
    title: "A World-Champion Tradition",
    description:
      "Norway’s women’s national team has one of the strongest international histories in Norwegian football.",
    achievements: [
      "FIFA Women’s World Cup champions — 1995",
      "Olympic gold medal — 2000",
      "UEFA Women’s European champions — 1987 and 1993",
    ],
  },
};

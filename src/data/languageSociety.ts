import type { LanguageSocietySectionData } from "@/types/portfolio";

export const languageSocietySection: LanguageSocietySectionData = {
  eyebrow: "Language & Society",

  title: "Language, Economy and Daily Life",

  description:
    "Norway combines a strong cultural identity, a highly developed economy and public services designed to support daily life.",

  language: {
    eyebrow: "Norwegian Language",

    title: "A Few Words in Norwegian",

    description:
      "Norwegian belongs to the North Germanic language family and has two official written forms: Bokmål and Nynorsk.",

    officialLanguages: ["Norwegian", "Sámi languages in designated regions"],

    countryName: {
      norwegian: "Norge",
      pronunciation: "NOR-geh",
      description:
        "The name Norway is written as “Norge” in Bokmål, the most widely used written form of Norwegian.",
    },

    expressions: [
      {
        id: "hello",
        english: "Hello",
        norwegian: "Hei",
        pronunciation: "Hi",
        meaning: "A common and informal greeting used in everyday situations.",
      },
      {
        id: "thank-you",
        english: "Thank you",
        norwegian: "Takk",
        pronunciation: "Tahk",
        meaning: "The most common way to express gratitude in Norwegian.",
      },
      {
        id: "good-morning",
        english: "Good morning",
        norwegian: "God morgen",
        pronunciation: "Goo mor-gen",
        meaning: "A greeting commonly used during the morning.",
      },
      {
        id: "goodbye",
        english: "Goodbye",
        norwegian: "Ha det",
        pronunciation: "Hah deh",
        meaning: "A common informal expression used when leaving.",
      },
    ],
  },

  economy: {
    eyebrow: "Economy & Society",

    title: "A Modern Nordic Economy",

    description:
      "Norway has a high-income economy supported by natural resources, maritime industries, technology and strong public institutions.",

    stats: [
      {
        id: "currency",
        label: "Currency",
        value: "Norwegian Krone",
        description:
          "Norway uses the Norwegian krone, commonly represented by the code NOK.",
        icon: "currency",
      },
      {
        id: "economy",
        label: "Major Industries",
        value: "Energy & Maritime",
        description:
          "Oil, natural gas, fishing, aquaculture, shipping and maritime services are important parts of the economy.",
        icon: "economy",
      },
      {
        id: "quality",
        label: "Quality of Life",
        value: "High Living Standards",
        description:
          "Norway is known for public services, education, healthcare and strong social protections.",
        icon: "quality",
      },
      {
        id: "technology",
        label: "Innovation",
        value: "Digital & Sustainable",
        description:
          "Norwegian organisations invest in renewable energy, maritime technology, digital services and environmental solutions.",
        icon: "technology",
      },
    ],

    industries: [
      "Oil and natural gas",
      "Fishing and aquaculture",
      "Shipping and maritime services",
      "Hydroelectric power",
      "Technology and telecommunications",
      "Tourism",
    ],

    companies: [
      "Equinor",
      "Telenor",
      "Kongsberg Gruppen",
      "DNB",
      "Yara International",
    ],
  },

  topics: [
    {
      id: "social-challenges",
      eyebrow: "Social Challenges",
      title: "Challenges in a Prosperous Society",
      description:
        "Even with high living standards, Norway continues to face social and regional challenges.",
      items: [
        "High living costs in major cities",
        "Housing affordability",
        "Integration of immigrants and refugees",
        "Access to services in remote communities",
        "Protection of Sámi culture and traditional lands",
        "Environmental impact of resource industries",
      ],
      icon: "challenges",
    },
    {
      id: "transport-accessibility",
      eyebrow: "Transport & Accessibility",
      title: "Connecting Cities, Fjords and Remote Regions",
      description:
        "Norway uses several forms of transport to connect its mountainous territory and long coastline.",
      items: [
        "Urban buses, trams and metro systems",
        "Intercity and regional trains",
        "Ferries connecting coastal communities",
        "Domestic flights serving remote regions",
        "Pedestrian-friendly urban areas",
        "Accessibility measures in modern public transport",
      ],
      icon: "transport",
    },
  ],
};

import type { HistorySectionData } from "@/types/portfolio";

export const historySection: HistorySectionData = {
  eyebrow: "History",

  title: "From the Viking Age to Modern Norway",

  description:
    "Norway’s history includes exploration, political unions, independence, resistance and major economic transformation.",

  featured: {
    eyebrow: "Important Historical Event",
    title: "The Viking Age",
    paragraphs: [
      "The Viking Age, approximately from the late eighth century to the eleventh century, was one of the most important periods in Norwegian history.",
      "Norwegian Vikings travelled across Europe and the North Atlantic as explorers, traders, settlers and warriors.",
      "They established settlements in places such as Iceland, Greenland, Ireland and parts of Britain.",
      "Their ships, navigation skills and trade routes had a major influence on European history.",
    ],
    image: "/images/history/viking-age.webp",
    imageAlt:
      "Norwegian Viking ship sailing through a dramatic Nordic landscape",
  },

  timeline: [
    {
      id: "viking-age",
      period: "Late 8th–11th century",
      title: "The Viking Age",
      description:
        "Norwegian explorers, traders and settlers travelled across Europe and the North Atlantic.",
      image: "/images/history/viking-age.webp",
    },
    {
      id: "union-sweden",
      period: "1814",
      title: "Union with Sweden",
      description:
        "Norway entered a political union with Sweden while keeping its own Constitution and Parliament.",
      image: "/images/history/union-sweden.webp",
    },
    {
      id: "independence",
      period: "1905",
      title: "Norwegian Independence",
      description:
        "The union with Sweden was dissolved, and Norway became fully independent.",
      image: "/images/history/independence.webp",
    },
    {
      id: "world-war-two",
      period: "1940–1945",
      title: "Second World War",
      description:
        "Norway was occupied by Nazi Germany, while the government and royal family resisted from exile.",
      image: "/images/history/world-war.webp",
    },
    {
      id: "oil-era",
      period: "Late 20th century",
      title: "The Oil Era",
      description:
        "Oil and gas discoveries in the North Sea transformed Norway’s economy and public wealth.",
      image: "/images/history/oil-era.webp",
    },
  ],

  independence: {
    eyebrow: "Independence",
    title: "The End of the Union with Sweden",
    paragraphs: [
      "Norway entered a political union with Sweden in 1814, although it maintained its own Constitution and Parliament.",
      "On 7 June 1905, the Norwegian Parliament declared the union dissolved.",
      "After negotiations and a national referendum, Sweden officially recognised Norwegian independence on 26 October 1905.",
      "Prince Carl of Denmark became Norway’s new king and adopted the name Haakon VII.",
    ],
  },

  achievements: {
    eyebrow: "Conflicts & Achievements",
    title: "Resistance, Prosperity and Diplomacy",
    paragraphs: [
      "During the Viking Age, Norwegians explored and settled territories across the North Atlantic.",
      "In the Middle Ages, Norway developed into a unified kingdom.",
      "During the Second World War, Nazi Germany invaded Norway in 1940.",
      "The Norwegian government and royal family continued resisting from exile until the country was liberated in 1945.",
      "In the modern period, the discovery of oil and gas in the North Sea transformed Norway into one of the world’s most prosperous countries.",
      "Norway also became known for diplomacy, humanitarian aid and participation in international peace negotiations.",
    ],
  },

  figures: [
    {
      id: "harald-fairhair",
      name: "Harald Fairhair",
      role: "Early King of Norway",
      description:
        "Traditionally described as the first king to unite much of Norway during the Viking Age, although some details remain debated by historians.",
      image: "/images/history/harald-fairhair.webp",
      imageAlt: "Historical representation of Harald Fairhair",
      reference: {
        id: "harald-fairhair-image-reference",
        label: "Image Reference",
        title: "Harald Fairhair",
        details: [
          "Original image provided by Pixabay.",
          "Uploaded by Arienne King and published on 26 March 2021.",
          "The copyright holder released this image into the public domain.",
          "The image may be used, copied and modified without copyright restrictions.",
        ],
      },
    },
    {
      id: "haakon-vii",
      name: "King Haakon VII",
      role: "King of Norway",
      description:
        "He became king after independence in 1905 and was an important symbol of Norwegian resistance during the Second World War.",
      image: "/images/history/haakon-vii.webp",
      imageAlt: "Portrait of King Haakon VII of Norway",
      reference: {
        id: "haakon-vii-image-reference",
        label: "Image Reference",
        title: "Portrait of King Haakon VII",
        details: [
          "Original title: Portrett av Kong Haakon VII / King Haakon VII (1872–1957).",
          "Photographed in 1946 by Ernest Rude (1871–1948).",
          "Owner institution: Nasjonalbiblioteket — National Library of Norway.",
          "Image number: blds_04773.",
        ],
        url: "https://www.nb.no",
        linkLabel: "Visit the National Library",
      },
    },
    {
      id: "fridtjof-nansen",
      name: "Fridtjof Nansen",
      role: "Explorer and Humanitarian",
      description:
        "Explorer, scientist, diplomat and humanitarian who received the Nobel Peace Prize for his work with refugees.",
      image: "/images/history/fridtjof-nansen.webp",
      imageAlt: "Portrait of Fridtjof Nansen",
      reference: {
        id: "fridtjof-nansen-image-reference",
        label: "Image Reference",
        title: "Norwegian Scientist and Diplomat Fridtjof Nansen",
        details: [
          "Photograph by Henry Van der Weyde.",
          "Original file: Fridtjof Nansen LOC 03377u.",
          "Created on 29 April 1915.",
          "The image is in the public domain.",
        ],
      },
    },
    {
      id: "roald-amundsen",
      name: "Roald Amundsen",
      role: "Polar Explorer",
      description:
        "He led the first expedition to reach the South Pole in 1911.",
      image: "/images/history/roald-amundsen.webp",
      imageAlt: "Portrait of Roald Amundsen",
      reference: {
        id: "roald-amundsen-image-reference",
        label: "Image Reference",
        title: "Roald Amundsen",
        details: [
          "Photograph attributed to L. Szacinski.",
          "Published in The North West Passage: Being a Record of a Voyage of Exploration of the Ship Gjøa, 1903–1907.",
          "The book was published in New York by Dutton in 1908.",
          "Source collection: National Library of Canada.",
          "The file has been identified as free of known copyright restrictions, including related rights.",
        ],
      },
    },
    {
      id: "edvard-munch",
      name: "Edvard Munch",
      role: "Painter",
      description:
        "Internationally famous Norwegian painter and creator of The Scream.",
      image: "/images/history/edvard-munch.webp",
      imageAlt: "Portrait of Edvard Munch",
      reference: {
        id: "edvard-munch-image-reference",
        label: "Image Reference",
        title: "Norwegian Artist Edvard Munch, c. 1889",
        details: [
          "Historical portrait of Norwegian artist Edvard Munch, dated approximately 1889.",
          "Owner institution: Nasjonalbiblioteket — National Library of Norway.",
          "Image number: blds_02423.",
        ],
        url: "https://www.nb.no",
        linkLabel: "Visit the National Library",
      },
    },
    {
      id: "henrik-ibsen",
      name: "Henrik Ibsen",
      role: "Playwright",
      description:
        "Influential playwright whose works include A Doll’s House and Hedda Gabler.",
      image: "/images/history/henrik-ibsen.webp",
      imageAlt: "Portrait of Henrik Ibsen",
      reference: {
        id: "henrik-ibsen-image-reference",
        label: "Image Reference",
        title: "Henrik Ibsen",
        details: [
          "Photograph by Gustav Borgen.",
          "From the collection of Norsk Folkemuseum — the Norwegian Museum of Cultural History.",
        ],
      },
    },
  ],
};

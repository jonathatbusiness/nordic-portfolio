import type { CultureSectionData } from "@/types/portfolio";

export const cultureSection: CultureSectionData = {
  eyebrow: "Culture",

  title: "Norwegian Culture",

  description:
    "Norwegian traditions have been shaped by rural communities, regional identity, nature and centuries of history.",

  items: [
    {
      id: "typical-food",
      eyebrow: "Typical Food",
      title: "Fårikål",
      summary:
        "A simple and traditional stew considered Norway’s national dish.",
      paragraphs: [
        "Fårikål is considered Norway’s national dish.",
        "It is a simple stew made mainly with mutton or lamb, cabbage, salt and black pepper.",
        "Other traditional foods include salmon, cod, dried fish, brown cheese called brunost, meatballs called kjøttkaker, and lefse, a soft traditional flatbread.",
        "Seafood is especially important because fishing has played a major role in Norwegian history and economy.",
      ],
      facts: ["National dish", "Lamb or mutton", "Cabbage", "Black pepper"],
      image: "/images/culture/typical-food.webp",
      imageAlt: "Traditional Norwegian fårikål dish",
      featured: true,
    },
    {
      id: "traditional-music",
      eyebrow: "Traditional Music",
      title: "Norwegian Folk Music",
      summary:
        "Music connected to rural communities, local celebrations and storytelling.",
      paragraphs: [
        "Norwegian folk music is strongly connected to rural communities, local celebrations and storytelling.",
        "The folk music of the Setesdal region has been recognised by UNESCO as Intangible Cultural Heritage.",
      ],
      image: "/images/culture/traditional-music.webp",
      imageAlt: "Norwegian traditional folk musicians",
    },
    {
      id: "traditional-instrument",
      eyebrow: "Traditional Instrument",
      title: "Hardanger Fiddle",
      summary:
        "A traditional Norwegian instrument with a rich and resonant sound.",
      paragraphs: [
        "One of Norway’s most famous traditional instruments is the Hardanger fiddle, known as hardingfele in Norwegian.",
        "It resembles a violin but has additional strings that produce a rich and resonant sound.",
        "The jaw harp, called munnharpe, is another traditional Norwegian instrument.",
      ],
      facts: ["Hardingfele", "Additional strings", "Resonant sound"],
      image: "/images/culture/traditional-instrument.webp",
      imageAlt: "Traditional Norwegian Hardanger fiddle",
    },
    {
      id: "traditional-dance",
      eyebrow: "Traditional Dance",
      title: "Hallingdans",
      summary:
        "An energetic solo dance requiring strength, flexibility and balance.",
      paragraphs: [
        "The halling, or hallingdans, is one of Norway’s best-known traditional dances.",
        "It is usually performed by one person and requires strength, flexibility and balance.",
        "One famous movement involves the dancer jumping and attempting to kick a hat held above the ground.",
        "Another important category is bygdedans, a group of regional folk dances traditionally accompanied by the Hardanger fiddle.",
      ],
      image: "/images/culture/traditional-dance.webp",
      imageAlt: "Traditional Norwegian hallingdans performance",
    },
    {
      id: "traditional-clothes",
      eyebrow: "Traditional Clothes",
      title: "Bunad",
      summary:
        "Norway’s traditional costume, with regional colours, patterns and embroidery.",
      paragraphs: [
        "Norway’s traditional costume is called the bunad.",
        "There are many different bunads, and their colours, embroidery, jewellery and patterns represent specific regions.",
        "Bunads are worn at weddings, formal celebrations and especially on 17 May, Norway’s Constitution Day.",
        "Women’s bunads commonly include embroidered dresses, aprons and silver jewellery.",
        "Men’s versions may include trousers, waistcoats, jackets and traditional hats.",
      ],
      facts: ["Regional identity", "Embroidery", "17 May", "Silver jewellery"],
      image: "/images/culture/traditional-clothes.webp",
      imageAlt: "People wearing traditional Norwegian bunad clothing",
    },
  ],
};

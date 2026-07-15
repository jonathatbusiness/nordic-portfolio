import type { TourismSectionData } from "@/types/portfolio";

export const tourismSection: TourismSectionData = {
  eyebrow: "Tourism",

  title: "Explore Norway",

  description:
    "Norway attracts visitors with dramatic fjords, Arctic landscapes, historic cities, mountain routes and unique natural phenomena.",

  featured: {
    id: "geirangerfjord",
    name: "Geirangerfjord",
    location: "Western Norway",
    category: "nature",
    description:
      "Geirangerfjord is one of Norway’s most famous fjords, known for steep mountains, deep blue water, waterfalls and scenic viewpoints.",
    image: "/images/tourism/geirangerfjord.webp",
    imageAlt: "Geirangerfjord surrounded by steep mountains and waterfalls",
    reference: {
      id: "geirangerfjord-image-reference",
      label: "Image Reference",
      title: "Geirangerfjord",
      details: [
        "Source page: Norway's Best - Fjord Cruise Geirangerfjord.",
        "No individual image credit was listed on the source page.",
      ],
      url: "https://www.norwaysbest.com/en/geiranger/things-to-do/fjord-cruise-geirangerfjord",
      linkLabel: "Visit Norway's Best",
    },
    featured: true,
  },

  destinations: [
    {
      id: "oslo",
      name: "Oslo",
      location: "Capital Region",
      category: "city",
      description:
        "Norway’s capital combines modern architecture, museums, waterfront areas, parks and important cultural institutions.",
      image: "/images/tourism/oslo.webp",
      imageAlt: "Waterfront and modern architecture in Oslo, Norway",
      reference: {
        id: "oslo-image-reference",
        label: "Image Reference",
        title: "Oslo",
        details: ["Image credit: iStock Images."],
      },
    },
    {
      id: "bergen",
      name: "Bergen",
      location: "Western Norway",
      category: "city",
      description:
        "Bergen is known as the gateway to the fjords and is famous for its colourful historic Bryggen district.",
      image: "/images/tourism/bergen.webp",
      imageAlt: "Colourful wooden buildings in the Bryggen district of Bergen",
      reference: {
        id: "bergen-image-reference",
        label: "Image Reference",
        title: "Bergen",
        details: ["Photo by Tore Sætre."],
      },
    },
    {
      id: "tromso",
      name: "Tromsø",
      location: "Northern Norway",
      category: "city",
      description:
        "Tromsø is an important Arctic city and a popular destination for northern lights, winter activities and polar culture.",
      image: "/images/tourism/tromso.webp",
      reference: {
        id: "tromso-image-reference",
        label: "Image Reference",
        title: "Tromsø",
        details: [
          "Photo uploaded by Tripadvisor user tit012.",
          "Source page: Tripadvisor media page for Marit Bockelie mosaics, Tromsø.",
        ],
        url: "https://www.tripadvisor.co.nz/Attraction_Review-g190475-d12154474-Reviews-Marit_Bockelie_mosaics-Tromso_Troms_Northern_Norway.html#/media-atf/12154474/789674058:p/?albumid=-160&type=0&category=-160",
        linkLabel: "View on Tripadvisor",
      },
      imageAlt: "Tromsø city and Arctic landscape under the northern lights",
    },
    {
      id: "lofoten",
      name: "Lofoten Islands",
      location: "Nordland",
      category: "nature",
      description:
        "The Lofoten Islands are known for sharp mountains, fishing villages, beaches and dramatic coastal scenery.",
      image: "/images/tourism/lofoten.webp",
      reference: {
        id: "lofoten-image-reference",
        label: "Image Reference",
        title: "Lofoten Islands",
        details: ["Image credit: Reine Rorbuer."],
      },
      imageAlt:
        "Traditional fishing village surrounded by mountains in the Lofoten Islands",
    },
    {
      id: "preikestolen",
      name: "Preikestolen",
      location: "Rogaland",
      category: "attraction",
      description:
        "Preikestolen, also called Pulpit Rock, is a famous cliff rising high above Lysefjord.",
      image: "/images/tourism/preikestolen.webp",
      imageAlt: "Preikestolen cliff overlooking Lysefjord in Norway",
      reference: {
        id: "preikestolen-image-reference",
        label: "Image Reference",
        title: "Preikestolen",
        details: ["Photo by Clementp.fr."],
      },
    },
    {
      id: "north-cape",
      name: "North Cape",
      location: "Finnmark",
      category: "attraction",
      description:
        "North Cape is a dramatic coastal viewpoint in northern Norway, famous for Arctic landscapes and the midnight sun.",
      image: "/images/tourism/north-cape.webp",
      imageAlt: "North Cape monument overlooking the Arctic Ocean",
      reference: {
        id: "north-cape-image-reference",
        label: "Image Reference",
        title: "North Cape",
        details: ["Image credit: Shutterstock - SergeyDolya."],
      },
    },
  ],

  landscapes: {
    eyebrow: "Natural Landscapes",
    title: "Nature on a Grand Scale",
    description:
      "Norway’s geography creates a wide variety of natural landscapes, from fjords and waterfalls to Arctic islands and mountain plateaus.",
    items: [
      "Deep fjords",
      "Snow-covered mountains",
      "Northern lights",
      "Midnight sun",
      "Waterfalls",
      "Arctic coastlines",
      "Glaciers",
      "Forests and lakes",
    ],
  },

  cities: {
    eyebrow: "Famous Cities",
    title: "Three Different Norwegian Experiences",
    description:
      "Norway’s major cities offer different perspectives on culture, history, architecture and the natural environment.",
    items: [
      {
        name: "Oslo",
        subtitle: "Capital and Cultural Centre",
        description:
          "A modern capital with museums, parks, waterfront districts and national institutions.",
      },
      {
        name: "Bergen",
        subtitle: "Gateway to the Fjords",
        description:
          "A historic coastal city surrounded by mountains and connected to Norway’s famous fjord region.",
      },
      {
        name: "Tromsø",
        subtitle: "Arctic Destination",
        description:
          "A northern city associated with polar exploration, winter tourism and the northern lights.",
      },
    ],
  },
};

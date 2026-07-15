import type { CuriositySectionData } from "@/types/portfolio";

export const curiositySection: CuriositySectionData = {
  eyebrow: "Did You Know?",

  title: "Surprising Facts About Norway",

  description:
    "Norway’s geography, climate and engineering have created some unusual facts that many people do not expect.",

  featured: {
    eyebrow: "Mind-Blowing Curiosity",

    title: "The Sun Does Not Set for Weeks",

    description:
      "In areas of northern Norway located above the Arctic Circle, the sun can remain visible for several weeks during summer. This natural phenomenon is called the midnight sun.",

    highlight:
      "In places such as Svalbard, the sun stays above the horizon for several months.",

    image: "/images/curiosity/midnight-sun.webp",

    imageAlt: "Midnight sun illuminating a Norwegian Arctic landscape",
  },

  facts: [
    {
      id: "polar-night",
      label: "Polar Night",
      value: "Weeks Without Sunrise",
      description:
        "During winter, some northern regions experience periods when the sun does not rise above the horizon.",
      icon: "sun",
    },
    {
      id: "longest-road-tunnel",
      label: "Engineering",
      value: "24.5 km Road Tunnel",
      description:
        "The Lærdal Tunnel is one of the longest road tunnels in the world and connects communities through mountainous terrain.",
      icon: "tunnel",
    },
    {
      id: "islands",
      label: "Geography",
      value: "Thousands of Islands",
      description:
        "Norway’s long coastline includes an enormous number of islands, islets and rocky coastal formations.",
      icon: "island",
    },
  ],
};

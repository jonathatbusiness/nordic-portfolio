export type SeoQuestion = {
  question: string;
  answer: string;
};

export type SeoPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  questions: SeoQuestion[];
};

export const siteUrl = "https://norwayproject-26.vercel.app";

export const seoPages: SeoPage[] = [
  {
    slug: "norway-history",
    title: "Norway History Timeline: Vikings, Independence and Modern Norway",
    shortTitle: "Norway History",
    description:
      "A student-friendly guide to Norway's history, from the Viking Age and the union with Sweden to independence, World War II and the oil era.",
    keywords: [
      "Norway history timeline",
      "Viking Age Norway",
      "Norwegian independence",
      "history of Norway for students",
    ],
    image: "/images/history/viking-age.webp",
    imageAlt: "Norwegian Viking ship sailing through a dramatic Nordic landscape",
    sections: [
      {
        heading: "From the Viking Age to modern Norway",
        paragraphs: [
          "Norway's history includes exploration, political unions, independence, resistance and major economic transformation.",
          "During the Viking Age, Norwegian explorers, traders and settlers travelled across Europe and the North Atlantic, reaching places such as Iceland, Greenland, Ireland and parts of Britain.",
        ],
      },
      {
        heading: "Independence and national identity",
        paragraphs: [
          "Norway entered a political union with Sweden in 1814 while keeping its own Constitution and Parliament.",
          "On 7 June 1905, the Norwegian Parliament declared the union dissolved. Sweden officially recognised Norwegian independence on 26 October 1905.",
        ],
      },
      {
        heading: "War, oil and prosperity",
        paragraphs: [
          "During the Second World War, Nazi Germany invaded Norway in 1940, while the government and royal family continued resisting from exile until liberation in 1945.",
          "In the late twentieth century, oil and gas discoveries in the North Sea transformed Norway into one of the world's most prosperous countries.",
        ],
      },
    ],
    questions: [
      {
        question: "What is the Viking Age in Norway?",
        answer:
          "The Viking Age was a period from the late eighth century to the eleventh century when Norwegian Vikings explored, traded and settled across Europe and the North Atlantic.",
      },
      {
        question: "When did Norway become independent?",
        answer:
          "Norway became fully independent in 1905 after the union with Sweden was dissolved.",
      },
    ],
  },
  {
    slug: "norway-culture",
    title: "Norwegian Culture and Traditions: Food, Music, Dance and Bunad",
    shortTitle: "Norwegian Culture",
    description:
      "Learn about Norwegian culture, including farikal, folk music, the Hardanger fiddle, hallingdans and the traditional bunad costume.",
    keywords: [
      "Norwegian culture",
      "Norwegian traditions",
      "Norwegian food",
      "bunad Norway",
      "Hardanger fiddle",
    ],
    image: "/images/culture/traditional-clothes.webp",
    imageAlt: "People wearing traditional Norwegian bunad clothing",
    sections: [
      {
        heading: "Traditions shaped by region and nature",
        paragraphs: [
          "Norwegian traditions have been shaped by rural communities, regional identity, nature and centuries of history.",
          "Many cultural practices are connected to local celebrations, storytelling, music and the strong relationship between people and the landscape.",
        ],
      },
      {
        heading: "Food, music and dance",
        paragraphs: [
          "Farikal, a stew made with lamb or mutton and cabbage, is considered Norway's national dish.",
          "Norwegian folk music is strongly connected to rural communities. The Hardanger fiddle is one of the country's most famous traditional instruments.",
          "Hallingdans is an energetic traditional dance that requires strength, flexibility and balance.",
        ],
      },
      {
        heading: "Bunad and national celebrations",
        paragraphs: [
          "The bunad is Norway's traditional costume. Its colours, embroidery, jewellery and patterns often represent specific regions.",
          "Bunads are commonly worn at weddings, formal celebrations and especially on 17 May, Norway's Constitution Day.",
        ],
      },
    ],
    questions: [
      {
        question: "What is Norway's national dish?",
        answer:
          "Farikal is widely considered Norway's national dish. It is traditionally made with lamb or mutton, cabbage, salt and black pepper.",
      },
      {
        question: "What is a bunad?",
        answer:
          "A bunad is a traditional Norwegian costume with regional colours, embroidery, patterns and jewellery.",
      },
    ],
  },
  {
    slug: "norway-tourism",
    title: "Norway Tourism Guide: Fjords, Oslo, Bergen, Tromso and Lofoten",
    shortTitle: "Norway Tourism",
    description:
      "Explore famous places to visit in Norway, including Geirangerfjord, Oslo, Bergen, Tromso, the Lofoten Islands, Preikestolen and North Cape.",
    keywords: [
      "Norway tourism",
      "places to visit in Norway",
      "Norway fjords",
      "Oslo Bergen Tromso",
      "Lofoten Islands",
    ],
    image: "/images/tourism/geirangerfjord.webp",
    imageAlt: "Geirangerfjord surrounded by steep mountains and waterfalls",
    sections: [
      {
        heading: "Why people visit Norway",
        paragraphs: [
          "Norway attracts visitors with dramatic fjords, Arctic landscapes, historic cities, mountain routes and unique natural phenomena.",
          "Its geography creates a wide variety of landscapes, from waterfalls and glaciers to islands, forests, lakes and Arctic coastlines.",
        ],
      },
      {
        heading: "Famous destinations",
        paragraphs: [
          "Geirangerfjord is one of Norway's most famous fjords, known for steep mountains, deep blue water, waterfalls and scenic viewpoints.",
          "Oslo combines modern architecture, museums, waterfront areas, parks and national cultural institutions.",
          "Bergen is known as the gateway to the fjords, while Tromso is associated with northern lights, winter activities and polar culture.",
        ],
      },
      {
        heading: "Natural landmarks",
        paragraphs: [
          "The Lofoten Islands are known for sharp mountains, fishing villages and dramatic coastal scenery.",
          "Preikestolen, also called Pulpit Rock, is a famous cliff above Lysefjord. North Cape is a dramatic Arctic viewpoint associated with the midnight sun.",
        ],
      },
    ],
    questions: [
      {
        question: "What is Norway famous for in tourism?",
        answer:
          "Norway is famous for fjords, mountains, northern lights, the midnight sun, Arctic landscapes and historic cities such as Oslo and Bergen.",
      },
      {
        question: "What are popular places to visit in Norway?",
        answer:
          "Popular places include Geirangerfjord, Oslo, Bergen, Tromso, the Lofoten Islands, Preikestolen and North Cape.",
      },
    ],
  },
  {
    slug: "northern-lights-norway",
    title: "Northern Lights in Norway: Arctic Cities, Winter Skies and Tromso",
    shortTitle: "Northern Lights",
    description:
      "A simple guide to the northern lights in Norway, including Tromso, Arctic landscapes, winter darkness and why northern Norway is famous for aurora borealis.",
    keywords: [
      "northern lights Norway",
      "aurora borealis Norway",
      "Tromso northern lights",
      "Arctic Norway",
    ],
    image: "/images/tourism/tromso.webp",
    imageAlt: "Tromso city and Arctic landscape under the northern lights",
    sections: [
      {
        heading: "Northern Norway and the aurora",
        paragraphs: [
          "Northern Norway is one of the best-known regions for seeing the northern lights, also called aurora borealis.",
          "Tromso is an important Arctic city and a popular destination for northern lights, winter activities and polar culture.",
        ],
      },
      {
        heading: "Why the sky is special",
        paragraphs: [
          "The northern lights appear when charged particles from the sun interact with the Earth's atmosphere.",
          "In northern areas, long winter nights create dark skies that make aurora viewing possible when the weather is clear.",
        ],
      },
      {
        heading: "Related Arctic phenomena",
        paragraphs: [
          "Norway is also known for the midnight sun, a summer phenomenon in which the sun remains visible at night above the Arctic Circle.",
          "During winter, some northern regions experience polar night, when the sun does not rise above the horizon for a period of time.",
        ],
      },
    ],
    questions: [
      {
        question: "Where can you see the northern lights in Norway?",
        answer:
          "Northern Norway is the main region for aurora viewing. Tromso is one of the most famous cities associated with the northern lights.",
      },
      {
        question: "What are the northern lights?",
        answer:
          "The northern lights are natural light displays caused by charged particles from the sun interacting with the Earth's atmosphere.",
      },
    ],
  },
  {
    slug: "norway-football",
    title: "Norway Football: Erling Haaland, World Cup History and Supporters",
    shortTitle: "Norway Football",
    description:
      "Learn about Norway football, Erling Haaland, the national team, World Cup appearances, supporters and the historic Norway vs Brazil match in 1998.",
    keywords: [
      "Norway football",
      "Norway World Cup history",
      "Erling Haaland Norway",
      "Norway national team",
      "Norway vs Brazil 1998",
    ],
    image: "/images/football/erling-haaland.webp",
    imageAlt: "Erling Haaland representing the Norwegian national football team",
    sections: [
      {
        heading: "The passion of Norwegian football",
        paragraphs: [
          "Norwegian football combines historic World Cup moments, modern international stars and a strong national identity among supporters.",
          "Erling Haaland is widely regarded as one of the greatest Norwegian footballers of the modern era, known for speed, strength, positioning and finishing.",
        ],
      },
      {
        heading: "World Cup history",
        paragraphs: [
          "Norway has participated in the men's World Cup in 1938, 1994, 1998 and 2026.",
          "The 1998 tournament is especially memorable because Norway defeated Brazil 2-1 during the group stage.",
        ],
      },
      {
        heading: "Supporters and traditions",
        paragraphs: [
          "Norwegian supporters commonly wear red shirts, wave national flags and sing Heia Norge, meaning Come on, Norway.",
          "The women's national team also has a strong international history, including a FIFA Women's World Cup title in 1995.",
        ],
      },
    ],
    questions: [
      {
        question: "Who is Norway's most famous modern football player?",
        answer:
          "Erling Haaland is one of Norway's most famous modern football players and a major star for the national team.",
      },
      {
        question: "Did Norway beat Brazil in the World Cup?",
        answer:
          "Yes. Norway defeated Brazil 2-1 during the group stage of the 1998 FIFA World Cup.",
      },
    ],
  },
  {
    slug: "norway-facts-for-students",
    title: "Norway Facts for Students: Geography, Culture, History and Society",
    shortTitle: "Norway Facts",
    description:
      "Student-friendly facts about Norway, covering geography, capital city, climate, culture, language, economy, tourism and surprising natural phenomena.",
    keywords: [
      "Norway facts for students",
      "Norway school project",
      "facts about Norway",
      "Norway geography for students",
    ],
    image: "/images/country/norway-map.webp",
    imageAlt: "Map of Norway in Northern Europe",
    sections: [
      {
        heading: "Where Norway is located",
        paragraphs: [
          "Norway is a Nordic country in Northern Europe, located on the western part of the Scandinavian Peninsula.",
          "It shares land borders with Sweden, Finland and Russia, and it is bordered by the North Sea, the Norwegian Sea and the Barents Sea.",
        ],
      },
      {
        heading: "Important country facts",
        paragraphs: [
          "Norway's capital is Oslo. The country is known for a long coastline, deep fjords, mountains and Arctic landscapes.",
          "The Norwegian flag has a red background with a dark blue Scandinavian cross outlined in white.",
        ],
      },
      {
        heading: "Culture, language and society",
        paragraphs: [
          "Norway has a high-income economy supported by natural resources, maritime industries, technology and strong public institutions.",
          "Norwegian belongs to the North Germanic language family and has two official written forms: Bokmal and Nynorsk.",
        ],
      },
    ],
    questions: [
      {
        question: "What is Norway known for?",
        answer:
          "Norway is known for fjords, mountains, Vikings, northern lights, the midnight sun, high quality of life and strong cultural traditions.",
      },
      {
        question: "What is the capital of Norway?",
        answer: "The capital of Norway is Oslo.",
      },
    ],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export const seoPageAlternates = [
  {
    en: "norway-history",
    ptBr: "historia-da-noruega",
  },
  {
    en: "norway-culture",
    ptBr: "cultura-norueguesa",
  },
  {
    en: "norway-tourism",
    ptBr: "turismo-na-noruega",
  },
  {
    en: "northern-lights-norway",
    ptBr: "aurora-boreal-na-noruega",
  },
  {
    en: "norway-football",
    ptBr: "futebol-da-noruega",
  },
  {
    en: "norway-facts-for-students",
    ptBr: "trabalho-escolar-sobre-a-noruega",
  },
];

export const seoPagesPtBr: SeoPage[] = [
  {
    slug: "historia-da-noruega",
    title: "História da Noruega: Vikings, Independência e Era Moderna",
    shortTitle: "História da Noruega",
    description:
      "Guia simples sobre a história da Noruega para estudantes, com Era Viking, união com a Suécia, independência, Segunda Guerra Mundial e era do petróleo.",
    keywords: [
      "história da Noruega",
      "Era Viking Noruega",
      "independência da Noruega",
      "trabalho escolar sobre a Noruega",
    ],
    image: "/images/history/viking-age.webp",
    imageAlt: "Navio viking norueguês navegando por uma paisagem nórdica",
    sections: [
      {
        heading: "Da Era Viking à Noruega moderna",
        paragraphs: [
          "A história da Noruega inclui exploração, uniões políticas, independência, resistência e grande transformação econômica.",
          "Durante a Era Viking, exploradores, comerciantes e colonizadores noruegueses viajaram pela Europa e pelo Atlântico Norte.",
        ],
      },
      {
        heading: "Independência e identidade nacional",
        paragraphs: [
          "A Noruega entrou em uma união política com a Suécia em 1814, mantendo sua própria Constituição e seu Parlamento.",
          "Em 7 de junho de 1905, o Parlamento norueguês declarou a união dissolvida. A Suécia reconheceu oficialmente a independência em 26 de outubro de 1905.",
        ],
      },
      {
        heading: "Guerra, petróleo e prosperidade",
        paragraphs: [
          "Durante a Segunda Guerra Mundial, a Alemanha nazista invadiu a Noruega em 1940, enquanto o governo e a família real resistiram do exílio.",
          "No final do século XX, descobertas de petróleo e gás no Mar do Norte transformaram a economia norueguesa.",
        ],
      },
    ],
    questions: [
      {
        question: "O que foi a Era Viking na Noruega?",
        answer:
          "Foi um período entre o final do século VIII e o século XI, quando vikings noruegueses exploraram, negociaram e colonizaram regiões da Europa e do Atlântico Norte.",
      },
      {
        question: "Quando a Noruega se tornou independente?",
        answer:
          "A Noruega se tornou totalmente independente em 1905, após o fim da união com a Suécia.",
      },
    ],
  },
  {
    slug: "cultura-norueguesa",
    title: "Cultura Norueguesa: Comida, Música, Dança e Bunad",
    shortTitle: "Cultura Norueguesa",
    description:
      "Conheça a cultura norueguesa, incluindo farikal, música folclórica, violino de Hardanger, hallingdans e o traje tradicional bunad.",
    keywords: [
      "cultura norueguesa",
      "tradições da Noruega",
      "comida típica da Noruega",
      "bunad Noruega",
    ],
    image: "/images/culture/traditional-clothes.webp",
    imageAlt: "Pessoas usando roupa tradicional norueguesa bunad",
    sections: [
      {
        heading: "Tradições ligadas às regiões e à natureza",
        paragraphs: [
          "As tradições norueguesas foram moldadas por comunidades rurais, identidade regional, natureza e séculos de história.",
          "Muitas práticas culturais estão ligadas a celebrações locais, música, narrativas e ao contato forte com a paisagem.",
        ],
      },
      {
        heading: "Comida, música e dança",
        paragraphs: [
          "Farikal, um ensopado de cordeiro ou carneiro com repolho, é considerado o prato nacional da Noruega.",
          "A música folclórica norueguesa tem forte ligação com comunidades rurais, e o violino de Hardanger é um instrumento tradicional famoso.",
          "O hallingdans é uma dança tradicional enérgica que exige força, flexibilidade e equilíbrio.",
        ],
      },
      {
        heading: "Bunad e celebrações nacionais",
        paragraphs: [
          "O bunad é o traje tradicional da Noruega. Suas cores, bordados, joias e padrões costumam representar regiões específicas.",
          "Ele é usado em casamentos, celebrações formais e especialmente em 17 de maio, Dia da Constituição da Noruega.",
        ],
      },
    ],
    questions: [
      {
        question: "Qual é o prato nacional da Noruega?",
        answer:
          "Farikal é geralmente considerado o prato nacional da Noruega. Ele é feito com cordeiro ou carneiro, repolho, sal e pimenta.",
      },
      {
        question: "O que é bunad?",
        answer:
          "Bunad é uma roupa tradicional norueguesa com cores, bordados, padrões e joias ligados a regiões do país.",
      },
    ],
  },
  {
    slug: "turismo-na-noruega",
    title: "Turismo na Noruega: Fiordes, Oslo, Bergen, Tromso e Lofoten",
    shortTitle: "Turismo na Noruega",
    description:
      "Veja lugares famosos para visitar na Noruega, como Geirangerfjord, Oslo, Bergen, Tromso, Ilhas Lofoten, Preikestolen e North Cape.",
    keywords: [
      "turismo na Noruega",
      "lugares para visitar na Noruega",
      "fiordes da Noruega",
      "Oslo Bergen Tromso",
    ],
    image: "/images/tourism/geirangerfjord.webp",
    imageAlt: "Geirangerfjord cercado por montanhas e cachoeiras",
    sections: [
      {
        heading: "Por que visitar a Noruega",
        paragraphs: [
          "A Noruega atrai visitantes com fiordes dramáticos, paisagens árticas, cidades históricas, rotas de montanha e fenômenos naturais únicos.",
          "A geografia do país cria paisagens variadas, com cachoeiras, geleiras, ilhas, florestas, lagos e costas árticas.",
        ],
      },
      {
        heading: "Destinos famosos",
        paragraphs: [
          "Geirangerfjord é um dos fiordes mais famosos da Noruega, conhecido por montanhas íngremes, água azul profunda e mirantes panorâmicos.",
          "Oslo combina arquitetura moderna, museus, parques e instituições culturais. Bergen é conhecida como porta de entrada para os fiordes.",
          "Tromso é associada à aurora boreal, turismo de inverno e cultura polar.",
        ],
      },
      {
        heading: "Paisagens naturais",
        paragraphs: [
          "As Ilhas Lofoten são conhecidas por montanhas, vilas de pescadores e paisagens costeiras dramáticas.",
          "Preikestolen, também chamado Pulpit Rock, é um penhasco famoso acima do Lysefjord. North Cape é um mirante ártico ligado ao sol da meia-noite.",
        ],
      },
    ],
    questions: [
      {
        question: "Por que a Noruega é famosa no turismo?",
        answer:
          "A Noruega é famosa por fiordes, montanhas, aurora boreal, sol da meia-noite, paisagens árticas e cidades históricas.",
      },
      {
        question: "Quais lugares visitar na Noruega?",
        answer:
          "Alguns lugares famosos são Geirangerfjord, Oslo, Bergen, Tromso, Ilhas Lofoten, Preikestolen e North Cape.",
      },
    ],
  },
  {
    slug: "aurora-boreal-na-noruega",
    title: "Aurora Boreal na Noruega: Tromso, Céu Ártico e Inverno",
    shortTitle: "Aurora Boreal",
    description:
      "Guia simples sobre aurora boreal na Noruega, com Tromso, paisagens árticas, noites de inverno e o fenômeno natural no norte do país.",
    keywords: [
      "aurora boreal na Noruega",
      "Tromso aurora boreal",
      "luzes do norte Noruega",
      "norte da Noruega",
    ],
    image: "/images/tourism/tromso.webp",
    imageAlt: "Cidade de Tromso e paisagem ártica sob a aurora boreal",
    sections: [
      {
        heading: "Norte da Noruega e aurora boreal",
        paragraphs: [
          "O norte da Noruega é uma das regiões mais conhecidas para observar a aurora boreal.",
          "Tromso é uma importante cidade ártica e um destino popular para aurora boreal, atividades de inverno e cultura polar.",
        ],
      },
      {
        heading: "Por que o céu é especial",
        paragraphs: [
          "A aurora boreal aparece quando partículas carregadas do Sol interagem com a atmosfera da Terra.",
          "No norte, as longas noites de inverno criam céus escuros que ajudam na observação quando o tempo está limpo.",
        ],
      },
      {
        heading: "Outros fenômenos árticos",
        paragraphs: [
          "A Noruega também é conhecida pelo sol da meia-noite, fenômeno de verão em que o sol continua visível durante a noite acima do Círculo Polar Ártico.",
          "No inverno, algumas regiões do norte passam pela noite polar, quando o sol não nasce acima do horizonte por um período.",
        ],
      },
    ],
    questions: [
      {
        question: "Onde ver aurora boreal na Noruega?",
        answer:
          "O norte da Noruega é a principal região para observar aurora boreal. Tromso é uma das cidades mais famosas para esse tipo de viagem.",
      },
      {
        question: "O que é aurora boreal?",
        answer:
          "A aurora boreal é um fenômeno natural de luz causado pela interação de partículas solares com a atmosfera da Terra.",
      },
    ],
  },
  {
    slug: "futebol-da-noruega",
    title: "Futebol da Noruega: Haaland, Copa do Mundo e Torcedores",
    shortTitle: "Futebol da Noruega",
    description:
      "Conheça o futebol da Noruega, Erling Haaland, a seleção norueguesa, participações em Copas e a partida histórica Noruega x Brasil em 1998.",
    keywords: [
      "futebol da Noruega",
      "Noruega Copa do Mundo",
      "Haaland Noruega",
      "Noruega x Brasil 1998",
    ],
    image: "/images/football/erling-haaland.webp",
    imageAlt: "Erling Haaland representando a seleção norueguesa",
    sections: [
      {
        heading: "A paixão pelo futebol norueguês",
        paragraphs: [
          "O futebol norueguês combina momentos históricos em Copas do Mundo, estrelas internacionais modernas e forte identidade nacional entre os torcedores.",
          "Erling Haaland é um dos jogadores noruegueses mais famosos da era moderna, conhecido por velocidade, força, posicionamento e finalização.",
        ],
      },
      {
        heading: "História em Copas do Mundo",
        paragraphs: [
          "A Noruega participou da Copa do Mundo masculina em 1938, 1994, 1998 e 2026.",
          "A Copa de 1998 é muito lembrada porque a Noruega venceu o Brasil por 2 a 1 na fase de grupos.",
        ],
      },
      {
        heading: "Torcedores e tradições",
        paragraphs: [
          "Torcedores noruegueses costumam usar camisas vermelhas, agitar bandeiras nacionais e cantar Heia Norge, que significa Vamos, Noruega.",
          "A seleção feminina também tem grande história internacional, incluindo o título da Copa do Mundo Feminina de 1995.",
        ],
      },
    ],
    questions: [
      {
        question: "Quem é o jogador norueguês mais famoso atualmente?",
        answer:
          "Erling Haaland é um dos jogadores noruegueses mais famosos atualmente e uma grande estrela da seleção da Noruega.",
      },
      {
        question: "A Noruega já venceu o Brasil na Copa?",
        answer:
          "Sim. A Noruega venceu o Brasil por 2 a 1 na fase de grupos da Copa do Mundo FIFA de 1998.",
      },
    ],
  },
  {
    slug: "trabalho-escolar-sobre-a-noruega",
    title: "Trabalho Escolar Sobre a Noruega: História, Cultura e Curiosidades",
    shortTitle: "Trabalho Sobre a Noruega",
    description:
      "Resumo para trabalho escolar ou projeto de Inglês sobre a Noruega, com geografia, capital, cultura, idioma, economia, turismo e curiosidades.",
    keywords: [
      "trabalho escolar sobre a Noruega",
      "projeto de Inglês sobre a Noruega",
      "curiosidades sobre a Noruega",
      "resumo sobre a Noruega",
    ],
    image: "/images/country/norway-map.webp",
    imageAlt: "Mapa da Noruega no norte da Europa",
    sections: [
      {
        heading: "Onde fica a Noruega",
        paragraphs: [
          "A Noruega é um país nórdico no norte da Europa, localizado na parte ocidental da Península Escandinava.",
          "O país faz fronteira com Suécia, Finlândia e Rússia, além de ser banhado pelo Mar do Norte, Mar da Noruega e Mar de Barents.",
        ],
      },
      {
        heading: "Informações importantes",
        paragraphs: [
          "A capital da Noruega é Oslo. O país é conhecido por sua longa costa, fiordes profundos, montanhas e paisagens árticas.",
          "A bandeira norueguesa tem fundo vermelho com uma cruz escandinava azul-escura contornada em branco.",
        ],
      },
      {
        heading: "Cultura, idioma e sociedade",
        paragraphs: [
          "A Noruega tem uma economia de alta renda apoiada por recursos naturais, indústrias marítimas, tecnologia e instituições públicas fortes.",
          "O norueguês pertence à família das línguas germânicas do norte e possui duas formas escritas oficiais: Bokmål e Nynorsk.",
        ],
      },
    ],
    questions: [
      {
        question: "Pelo que a Noruega e conhecida?",
        answer:
          "A Noruega é conhecida por fiordes, montanhas, vikings, aurora boreal, sol da meia-noite, qualidade de vida e tradições culturais.",
      },
      {
        question: "Qual é a capital da Noruega?",
        answer: "A capital da Noruega é Oslo.",
      },
    ],
  },
];

export function getSeoPagePtBr(slug: string) {
  return seoPagesPtBr.find((page) => page.slug === slug);
}

export function getPtBrAlternateSlug(englishSlug: string) {
  return seoPageAlternates.find((page) => page.en === englishSlug)?.ptBr;
}

export function getEnglishAlternateSlug(ptBrSlug: string) {
  return seoPageAlternates.find((page) => page.ptBr === ptBrSlug)?.en;
}

import type { ImageMetadata } from "astro";
import heroImage from "@images/pages/home/hero.png";
import luna from "@images/products/luna/lunaai.png";
import motoViagens from "@images/products/motoviagens/motoviagens3.jpg";
import triplut from "@images/products/triplut/triplut6.jpg";
import verbo from "@images/products/verbo/verbo_app_card.jpg";
import type { Locale } from "@utils/locale";

export interface HomeHeadline {
  before: string;
  accent: string;
  after: string;
}

export interface HomeCard {
  title: string;
  description: string;
}

export interface HomeService extends HomeCard {
  href: string;
}

export interface HomeProject extends HomeCard {
  href: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface HomeContent {
  locale: Locale;
  lang: string;
  pathname: string;
  pageTitle: string;
  pageDescription: string;
  contactUrl: string;
  primaryCta: string;
  announcement: HomeCard & {
    badge: string;
  };
  hero: {
    badgeLabel: string;
    headline: HomeHeadline;
    subTitle: string;
    trustItems: string[];
    image: ImageMetadata;
    imageAlt: string;
  };
  proof: Array<HomeCard & { label: string }>;
  services: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    items: HomeService[];
  };
  founder: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    items: HomeProject[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: HomeCard[];
  };
  trust: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    note: string;
  };
  finalCta: HomeCard;
  faqTitle: string;
}

const serviceHrefs = {
  en: [
    "/services/business-website-design",
    "/services/website-redesign",
    "/services/seo-ready-websites",
    "/services/custom-web-apps",
  ],
  es: [
    "/es/services/business-website-design",
    "/es/services/website-redesign",
    "/es/services/seo-ready-websites",
    "/es/services/custom-web-apps",
  ],
  ja: [
    "/ja/services/business-website-design",
    "/ja/services/website-redesign",
    "/ja/services/seo-ready-websites",
    "/ja/services/custom-web-apps",
  ],
  ko: [
    "/ko/services/business-website-design",
    "/ko/services/website-redesign",
    "/ko/services/seo-ready-websites",
    "/ko/services/custom-web-apps",
  ],
  br: ["/br/services", "/br/services", "/br/services", "/br/services"],
  fr: ["/fr/services", "/fr/services", "/fr/services", "/fr/services"],
} satisfies Record<Locale, string[]>;

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    locale: "en",
    lang: "en",
    pathname: "/",
    pageTitle: "Websites That Stop Losing Good Leads | Dawn Web",
    pageDescription:
      "Dawn Web fixes unclear websites, redesigns underperforming pages, and builds custom web apps for growing service businesses that need more qualified inquiries.",
    contactUrl: "/contact",
    primaryCta: "Book a free consultation",
    announcement: {
      badge: "Free clarity audit",
      title: "Spot the leaks before you rebuild",
      description:
        "Get a focused review of the message, flow, and trust gaps costing your site good inquiries.",
    },
    hero: {
      badgeLabel: "Founder-led web strategy",
      headline: {
        before: "A clearer website should bring ",
        accent: "qualified leads",
        after: ".",
      },
      subTitle:
        "Dawn Web turns confusing pages into fast, polished experiences that explain your value, earn trust, and guide serious visitors toward a call.",
      trustItems: [
        "Direct with the builder",
        "SEO-ready foundations",
        "Clean handoff",
      ],
      image: heroImage,
      imageAlt: "Dawn Web website design and web development workspace",
    },
    proof: [
      {
        label: "01",
        title: "Clarity first",
        description: "Visitors understand what you do and why it matters fast.",
      },
      {
        label: "02",
        title: "Built lean",
        description:
          "Clean structure, quick loading, and no bloated page furniture.",
      },
      {
        label: "03",
        title: "Direct delivery",
        description: "You work with the person shaping the copy, UX, and code.",
      },
    ],
    services: {
      eyebrow: "Services",
      title: "Fix the parts of your site that make good visitors hesitate",
      description:
        "Choose the path that matches the real blockage: unclear offer, tired design, missing search basics, or manual work that needs a web app.",
      actionLabel: "Learn more",
      items: [
        {
          title: "Business websites",
          href: serviceHrefs.en[0],
          description:
            "A focused site that explains your offer and makes the next step obvious.",
        },
        {
          title: "Website redesigns",
          href: serviceHrefs.en[1],
          description:
            "A sharper message, cleaner flow, and stronger trust signals for an existing site.",
        },
        {
          title: "SEO-ready builds",
          href: serviceHrefs.en[2],
          description:
            "Technical search foundations in place before the site goes live.",
        },
        {
          title: "Custom web apps",
          href: serviceHrefs.en[3],
          description:
            "Dashboards, portals, booking flows, and internal tools built around the workflow.",
        },
      ],
    },
    founder: {
      eyebrow: "Founder-led",
      title: "No translation layer between strategy and build.",
      body: "You work directly with Andrew Henrice, the full-stack developer leading the structure, copy direction, technical choices, and delivery.",
      points: [
        "Fewer slow handoffs",
        "Copy and code stay aligned",
        "Practical tradeoffs early",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Real product work, presented without the noise",
      description:
        "A quick look at products built around bookings, language learning, travel planning, and guided digital experiences.",
      actionLabel: "View project",
      items: [
        {
          title: "Moto Viagens",
          href: "/products/motoviagens",
          image: motoViagens,
          imageAlt: "Moto Viagens Brazilian motorcycle routes and tours",
          description: "Booking-focused motorcycle travel platform for Brazil.",
        },
        {
          title: "Verbo",
          href: "/products/verboai",
          image: verbo,
          imageAlt: "Verbo AI language learning platform interface",
          description:
            "AI language learning built around practice and retention.",
        },
        {
          title: "Triplut",
          href: "/products/triplut",
          image: triplut,
          imageAlt: "Illustration of Triplut AI travel platform",
          description:
            "Travel planning concept for routes, budgets, and trip details.",
        },
        {
          title: "Luna AI",
          href: "/products/luna",
          image: luna,
          imageAlt: "Luna AI mascot and digital assistant for Dawn Web",
          description: "Assistant concept for clearer product guidance.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Simple steps. Clear decisions.",
      items: [
        {
          title: "Diagnose",
          description: "Find where visitors lose clarity or confidence.",
        },
        {
          title: "Shape",
          description: "Define the message, pages, scope, and best path.",
        },
        {
          title: "Build",
          description: "Design and develop with steady checkpoints.",
        },
        {
          title: "Launch",
          description:
            "Ship with performance, SEO basics, and handoff covered.",
        },
      ],
    },
    trust: {
      eyebrow: "Trust",
      title: "Most sites look fine. The gap is what they ",
      accent: "fail to explain",
      description:
        "A polished page can still lose leads when the offer is vague, proof is thin, or the CTA hides below too much copy.",
      note: "The redesign starts with buyer clarity, then supports it with UX, performance, SEO, and the right functionality.",
    },
    finalCta: {
      title: "Turn unclear pages into a better first conversation.",
      description:
        "Book a free consultation and leave with a practical next step for your website, redesign, SEO-ready build, or custom web app.",
    },
    faqTitle: "Common<br />questions",
  },
  br: {
    locale: "br",
    lang: "pt-BR",
    pathname: "/br",
    pageTitle: "Sites que param de desperdiçar bons leads | Dawn Web",
    pageDescription:
      "A Dawn Web corrige sites confusos, redesenha páginas que não convertem e desenvolve aplicações web sob medida para empresas de serviços que precisam de mais contatos qualificados.",
    contactUrl: "/br/contact",
    primaryCta: "Agendar uma consulta gratuita",
    announcement: {
      badge: "Auditoria gratuita",
      title: "Encontre os pontos fracos antes de refazer o site",
      description:
        "Receba uma revisão objetiva da mensagem, do fluxo e da confiança que seu site transmite.",
    },
    hero: {
      badgeLabel: "Estratégia web liderada pelo fundador",
      headline: {
        before: "Um site mais claro deve gerar ",
        accent: "bons leads",
        after: ".",
      },
      subTitle:
        "A Dawn Web transforma páginas confusas em experiências rápidas e elegantes que explicam seu valor, criam confiança e levam visitantes certos ao contato.",
      trustItems: [
        "Direto com quem constrói",
        "Base pronta para SEO",
        "Entrega clara",
      ],
      image: heroImage,
      imageAlt:
        "Ambiente de trabalho da Dawn Web para criação de sites e desenvolvimento web",
    },
    proof: [
      {
        label: "01",
        title: "Clareza primeiro",
        description:
          "O visitante entende o que você faz e por que isso importa.",
      },
      {
        label: "02",
        title: "Construção enxuta",
        description:
          "Estrutura limpa, carregamento rápido e menos excesso visual.",
      },
      {
        label: "03",
        title: "Entrega direta",
        description: "Você fala com quem decide copy, UX e código.",
      },
    ],
    services: {
      eyebrow: "Serviços",
      title: "Corrija os pontos do site que fazem bons visitantes hesitarem",
      description:
        "Escolha o caminho certo para o problema real: oferta confusa, design cansado, SEO básico ausente ou trabalho manual que precisa virar sistema.",
      actionLabel: "Saiba mais",
      items: [
        {
          title: "Sites empresariais",
          href: serviceHrefs.br[0],
          description:
            "Um site focado que explica sua oferta e deixa o próximo passo óbvio.",
        },
        {
          title: "Redesign de sites",
          href: serviceHrefs.br[1],
          description:
            "Mensagem mais clara, fluxo melhor e sinais de confiança mais fortes.",
        },
        {
          title: "Base de SEO",
          href: serviceHrefs.br[2],
          description:
            "Fundamentos técnicos de busca prontos antes da publicação.",
        },
        {
          title: "Apps web sob medida",
          href: serviceHrefs.br[3],
          description:
            "Portais, dashboards, reservas e ferramentas internas para seu fluxo real.",
        },
      ],
    },
    founder: {
      eyebrow: "Liderado pelo fundador",
      title: "Sem camada de tradução entre estratégia e construção.",
      body: "Você trabalha direto com Andrew Henrice, o desenvolvedor full-stack que conduz estrutura, direção de copy, escolhas técnicas e entrega.",
      points: [
        "Menos repasses lentos",
        "Copy e código alinhados",
        "Decisões práticas cedo",
      ],
    },
    portfolio: {
      eyebrow: "Portfólio",
      title: "Produtos reais, sem excesso de explicação",
      description:
        "Projetos criados para reservas, aprendizado de idiomas, planejamento de viagens e orientação dentro de produtos digitais.",
      actionLabel: "Ver projeto",
      items: [
        {
          title: "Moto Viagens",
          href: "/br/products/motoviagens",
          image: motoViagens,
          imageAlt: "Rotas e viagens de moto no Brasil com Moto Viagens",
          description:
            "Plataforma de viagens de moto focada em reservas no Brasil.",
        },
        {
          title: "Verbo",
          href: "/br/products/verboai",
          image: verbo,
          imageAlt: "Interface da plataforma de aprendizado de idiomas Verbo",
          description: "Aprendizado de idiomas com IA para prática e retenção.",
        },
        {
          title: "Triplut",
          href: "/br/products/triplut",
          image: triplut,
          imageAlt: "Ilustração da plataforma de viagens com IA Triplut",
          description:
            "Conceito para planejar rotas, orçamento e detalhes da viagem.",
        },
        {
          title: "Luna AI",
          href: "/br/products/luna",
          image: luna,
          imageAlt: "Mascote e assistente digital Luna AI da Dawn Web",
          description:
            "Assistente conceitual para guiar melhor usuários em produtos.",
        },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Etapas simples. Decisões claras.",
      items: [
        {
          title: "Diagnosticar",
          description: "Encontrar onde o visitante perde clareza ou confiança.",
        },
        {
          title: "Definir",
          description: "Organizar mensagem, páginas, escopo e melhor caminho.",
        },
        {
          title: "Construir",
          description: "Desenhar e desenvolver com checkpoints constantes.",
        },
        {
          title: "Lançar",
          description: "Publicar com performance, base de SEO e entrega clara.",
        },
      ],
    },
    trust: {
      eyebrow: "Confiança",
      title: "Muitos sites parecem bons. O problema é o que eles ",
      accent: "não explicam",
      description:
        "Uma página bonita ainda pode perder leads quando a oferta é vaga, a prova é fraca ou o CTA fica escondido em texto demais.",
      note: "O redesign começa pela clareza para o comprador e depois reforça isso com UX, performance, SEO e funcionalidade.",
    },
    finalCta: {
      title: "Transforme páginas confusas em conversas melhores.",
      description:
        "Agende uma consulta gratuita e saia com um próximo passo prático para site, redesign, SEO ou app web sob medida.",
    },
    faqTitle: "Perguntas<br />frequentes",
  },
  es: {
    locale: "es",
    lang: "es",
    pathname: "/es",
    pageTitle: "Sitios web que dejan de perder buenos leads | Dawn Web",
    pageDescription:
      "Dawn Web mejora sitios web poco claros, rediseña páginas de bajo rendimiento y crea aplicaciones web a medida para empresas de servicios que necesitan más consultas calificadas.",
    contactUrl: "/es/contact",
    primaryCta: "Reservar una consulta gratuita",
    announcement: {
      badge: "Auditoría gratuita",
      title: "Detecta las fugas antes de reconstruir",
      description:
        "Recibe una revisión concreta del mensaje, el recorrido y la confianza que transmite tu sitio.",
    },
    hero: {
      badgeLabel: "Estrategia web dirigida por el fundador",
      headline: {
        before: "Un sitio más claro debe traer ",
        accent: "buenos leads",
        after: ".",
      },
      subTitle:
        "Dawn Web convierte páginas confusas en experiencias rápidas y pulidas que explican tu valor, generan confianza y guían a visitantes serios hacia una consulta.",
      trustItems: [
        "Directo con quien construye",
        "Base lista para SEO",
        "Entrega clara",
      ],
      image: heroImage,
      imageAlt: "Espacio de trabajo de Dawn Web para diseño y desarrollo web",
    },
    proof: [
      {
        label: "01",
        title: "Claridad primero",
        description: "El visitante entiende qué haces y por qué importa.",
      },
      {
        label: "02",
        title: "Construcción ligera",
        description: "Estructura limpia, carga rápida y menos ruido visual.",
      },
      {
        label: "03",
        title: "Entrega directa",
        description: "Trabajas con quien decide copy, UX y código.",
      },
    ],
    services: {
      eyebrow: "Servicios",
      title: "Corrige las partes del sitio que hacen dudar a buenos visitantes",
      description:
        "Elige el camino según el bloqueo real: oferta poco clara, diseño cansado, SEO básico pendiente o trabajo manual que necesita una app.",
      actionLabel: "Saber más",
      items: [
        {
          title: "Sitios empresariales",
          href: serviceHrefs.es[0],
          description:
            "Un sitio enfocado que explica tu oferta y hace obvio el siguiente paso.",
        },
        {
          title: "Rediseño web",
          href: serviceHrefs.es[1],
          description:
            "Mensaje más claro, mejor recorrido y señales de confianza más fuertes.",
        },
        {
          title: "Bases SEO",
          href: serviceHrefs.es[2],
          description: "Fundamentos técnicos de búsqueda antes de publicar.",
        },
        {
          title: "Apps web a medida",
          href: serviceHrefs.es[3],
          description:
            "Portales, dashboards, reservas y herramientas internas para tu flujo real.",
        },
      ],
    },
    founder: {
      eyebrow: "Dirigido por el fundador",
      title: "Sin capa de traducción entre estrategia y construcción.",
      body: "Trabajas directamente con Andrew Henrice, el desarrollador full stack que dirige estructura, copy, decisiones técnicas y entrega.",
      points: [
        "Menos traspasos lentos",
        "Copy y código alineados",
        "Decisiones prácticas temprano",
      ],
    },
    portfolio: {
      eyebrow: "Portafolio",
      title: "Productos reales, sin ruido",
      description:
        "Proyectos creados para reservas, aprendizaje de idiomas, planificación de viajes y guía dentro de productos digitales.",
      actionLabel: "Ver proyecto",
      items: [
        {
          title: "Moto Viagens",
          href: "/es/products/motoviagens",
          image: motoViagens,
          imageAlt: "Rutas y tours en moto por Brasil con Moto Viagens",
          description:
            "Plataforma de viajes en moto enfocada en reservas en Brasil.",
        },
        {
          title: "Verbo",
          href: "/es/products/verboai",
          image: verbo,
          imageAlt:
            "Interfaz de la plataforma de aprendizaje de idiomas Verbo AI",
          description:
            "Aprendizaje de idiomas con IA para práctica y retención.",
        },
        {
          title: "Triplut",
          href: "/es/products/triplut",
          image: triplut,
          imageAlt: "Ilustración de la plataforma de viajes con IA Triplut",
          description:
            "Concepto para planificar rutas, presupuestos y detalles.",
        },
        {
          title: "Luna AI",
          href: "/es/products/luna",
          image: luna,
          imageAlt: "Mascota y asistente digital Luna AI de Dawn Web",
          description: "Asistente conceptual para guiar mejor a usuarios.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Pasos simples. Decisiones claras.",
      items: [
        {
          title: "Diagnosticar",
          description: "Encontrar dónde se pierde claridad o confianza.",
        },
        {
          title: "Definir",
          description: "Ordenar mensaje, páginas, alcance y mejor camino.",
        },
        {
          title: "Construir",
          description: "Diseñar y desarrollar con revisiones constantes.",
        },
        {
          title: "Lanzar",
          description: "Publicar con rendimiento, SEO base y entrega clara.",
        },
      ],
    },
    trust: {
      eyebrow: "Confianza",
      title: "Muchos sitios se ven bien. La brecha está en lo que ",
      accent: "no explican",
      description:
        "Una página pulida puede perder leads si la oferta es vaga, la prueba es débil o el CTA queda enterrado bajo demasiado texto.",
      note: "El rediseño empieza con claridad para el comprador y la refuerza con UX, rendimiento, SEO y funcionalidad.",
    },
    finalCta: {
      title: "Convierte páginas confusas en mejores conversaciones.",
      description:
        "Reserva una consulta gratuita y sal con un próximo paso práctico para tu sitio, rediseño, SEO o app web a medida.",
    },
    faqTitle: "Preguntas<br />frecuentes",
  },
  fr: {
    locale: "fr",
    lang: "fr",
    pathname: "/fr",
    pageTitle:
      "Des sites qui arrêtent de faire perdre de bons prospects | Dawn Web",
    pageDescription:
      "Dawn Web améliore les sites peu clairs, refond les pages qui performent mal et crée des applications web sur mesure pour les entreprises de services qui ont besoin de demandes plus qualifiées.",
    contactUrl: "/fr/contact",
    primaryCta: "Réserver une consultation gratuite",
    announcement: {
      badge: "Audit gratuit",
      title: "Repérez les fuites avant de refaire le site",
      description:
        "Recevez un avis concret sur le message, le parcours et les signaux de confiance de votre site.",
    },
    hero: {
      badgeLabel: "Stratégie web menée par le fondateur",
      headline: {
        before: "Un site plus clair doit attirer de ",
        accent: "bons prospects",
        after: ".",
      },
      subTitle:
        "Dawn Web transforme les pages confuses en expériences rapides et soignées qui expliquent votre valeur, inspirent confiance et guident les bons visiteurs vers un échange.",
      trustItems: [
        "Direct avec le créateur",
        "Bases SEO prêtes",
        "Livraison claire",
      ],
      image: heroImage,
      imageAlt:
        "Espace de travail Dawn Web pour la conception et le développement web",
    },
    proof: [
      {
        label: "01",
        title: "Clarté d'abord",
        description:
          "Le visiteur comprend vite ce que vous faites et pourquoi.",
      },
      {
        label: "02",
        title: "Construction légère",
        description:
          "Structure nette, chargement rapide et moins de bruit visuel.",
      },
      {
        label: "03",
        title: "Livraison directe",
        description:
          "Vous échangez avec la personne qui façonne copy, UX et code.",
      },
    ],
    services: {
      eyebrow: "Services",
      title: "Corrigez les parties du site qui font hésiter les bons visiteurs",
      description:
        "Choisissez le bon levier : offre floue, design fatigué, bases SEO absentes ou travail manuel à transformer en application.",
      actionLabel: "En savoir plus",
      items: [
        {
          title: "Sites professionnels",
          href: serviceHrefs.fr[0],
          description:
            "Un site ciblé qui explique votre offre et rend l'étape suivante évidente.",
        },
        {
          title: "Refonte de site",
          href: serviceHrefs.fr[1],
          description:
            "Message plus net, parcours plus simple et confiance renforcée.",
        },
        {
          title: "Bases SEO",
          href: serviceHrefs.fr[2],
          description:
            "Fondations techniques de recherche prêtes avant la mise en ligne.",
        },
        {
          title: "Apps web sur mesure",
          href: serviceHrefs.fr[3],
          description:
            "Portails, tableaux de bord, réservations et outils internes adaptés.",
        },
      ],
    },
    founder: {
      eyebrow: "Mené par le fondateur",
      title: "Aucune couche de traduction entre stratégie et construction.",
      body: "Vous travaillez directement avec Andrew Henrice, le développeur full-stack qui pilote la structure, la direction copy, les choix techniques et la livraison.",
      points: [
        "Moins de relais lents",
        "Copy et code alignés",
        "Arbitrages pratiques tôt",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Des produits réels, sans surcharge",
      description:
        "Des projets conçus pour la réservation, l'apprentissage des langues, la planification de voyage et l'accompagnement produit.",
      actionLabel: "Voir le projet",
      items: [
        {
          title: "Moto Viagens",
          href: "/fr/products/motoviagens",
          image: motoViagens,
          imageAlt: "Routes et voyages moto au Brésil avec Moto Viagens",
          description:
            "Plateforme de voyages moto au Brésil, pensée pour la réservation.",
        },
        {
          title: "Verbo",
          href: "/fr/products/verboai",
          image: verbo,
          imageAlt:
            "Interface de la plateforme d'apprentissage linguistique Verbo",
          description:
            "Apprentissage linguistique avec IA, pratique et mémorisation.",
        },
        {
          title: "Triplut",
          href: "/fr/products/triplut",
          image: triplut,
          imageAlt: "Illustration de la plateforme de voyage IA Triplut",
          description:
            "Concept pour organiser itinéraires, budgets et détails de voyage.",
        },
        {
          title: "Luna AI",
          href: "/fr/products/luna",
          image: luna,
          imageAlt: "Mascotte et assistante numérique Luna AI de Dawn Web",
          description:
            "Concept d'assistante pour mieux guider les utilisateurs.",
        },
      ],
    },
    process: {
      eyebrow: "Processus",
      title: "Des étapes simples. Des décisions claires.",
      items: [
        {
          title: "Diagnostiquer",
          description: "Repérer où le visiteur perd clarté ou confiance.",
        },
        {
          title: "Structurer",
          description: "Définir message, pages, périmètre et meilleur chemin.",
        },
        {
          title: "Construire",
          description: "Designer et développer avec des points réguliers.",
        },
        {
          title: "Lancer",
          description:
            "Publier avec performance, bases SEO et passation claire.",
        },
      ],
    },
    trust: {
      eyebrow: "Confiance",
      title: "Beaucoup de sites semblent bons. L'écart vient de ce qu'ils ",
      accent: "n'expliquent pas",
      description:
        "Une page soignée peut perdre des prospects si l'offre reste floue, la preuve manque ou le CTA disparaît sous trop de texte.",
      note: "La refonte commence par la clarté acheteur, puis l'appuie avec UX, performance, SEO et fonctionnalités utiles.",
    },
    finalCta: {
      title: "Transformez des pages confuses en meilleurs échanges.",
      description:
        "Réservez une consultation gratuite et repartez avec une prochaine étape concrète pour votre site, refonte, SEO ou app web.",
    },
    faqTitle: "Questions<br />fréquentes",
  },
  ja: {
    locale: "ja",
    lang: "ja",
    pathname: "/ja",
    pageTitle: "見込み客を逃さないWebサイト | Dawn Web",
    pageDescription:
      "Dawn Webは、伝わりにくいWebサイトの改善、成果が出にくいページのリニューアル、成長するサービス企業向けのカスタムWebアプリ開発を行います。",
    contactUrl: "/ja/contact",
    primaryCta: "無料相談を予約",
    announcement: {
      badge: "無料チェック",
      title: "作り直す前に、離脱の原因を見つけます",
      description: "メッセージ、導線、信頼感の弱点を短く具体的に確認します。",
    },
    hero: {
      badgeLabel: "創業者主導のWeb戦略",
      headline: {
        before: "伝わるサイトは",
        accent: "良い問い合わせを",
        after: "増やします。",
      },
      subTitle:
        "Dawn Webは分かりにくいページを、価値が伝わり、信頼を作り、相談へ進みやすい高速で洗練された体験に整えます。",
      trustItems: ["作り手と直接進行", "SEO基盤込み", "分かりやすい引き継ぎ"],
      image: heroImage,
      imageAlt: "Dawn WebのWebデザインとWeb開発の作業スペース",
    },
    proof: [
      {
        label: "01",
        title: "まず明確に",
        description: "訪問者が何を提供しているかすぐ理解できます。",
      },
      {
        label: "02",
        title: "軽く構築",
        description: "整理された構成、速い表示、余計な装飾を抑えた画面。",
      },
      {
        label: "03",
        title: "直接進行",
        description: "コピー、UX、コードを作る本人と進められます。",
      },
    ],
    services: {
      eyebrow: "サービス",
      title: "良い訪問者を迷わせる部分を改善します",
      description:
        "提供価値が伝わらない、見た目が古い、SEO基盤が弱い、手作業が多い。課題に合わせて最短の改善を選びます。",
      actionLabel: "詳しく見る",
      items: [
        {
          title: "ビジネスサイト",
          href: serviceHrefs.ja[0],
          description: "提供価値と次の行動が自然に伝わるWebサイト。",
        },
        {
          title: "サイトリニューアル",
          href: serviceHrefs.ja[1],
          description: "メッセージ、導線、信頼要素をより分かりやすく改善。",
        },
        {
          title: "SEO基盤",
          href: serviceHrefs.ja[2],
          description: "公開前から検索に必要な技術基盤を整えます。",
        },
        {
          title: "カスタムWebアプリ",
          href: serviceHrefs.ja[3],
          description:
            "ポータル、ダッシュボード、予約、社内ツールを業務に合わせて構築。",
        },
      ],
    },
    founder: {
      eyebrow: "創業者主導",
      title: "戦略と実装の間に余計な伝言ゲームを作りません。",
      body: "構成、コピー方針、技術判断、納品まで、フルスタック開発者のAndrew Henriceと直接進めます。",
      points: [
        "遅い引き継ぎを削減",
        "コピーとコードを一貫",
        "早い段階で現実的に判断",
      ],
    },
    portfolio: {
      eyebrow: "制作実績",
      title: "実際のプロダクトを、すっきり紹介",
      description:
        "予約、語学学習、旅行計画、プロダクト内ガイドを中心にした開発事例です。",
      actionLabel: "プロジェクトを見る",
      items: [
        {
          title: "Moto Viagens",
          href: "/ja/products/motoviagens",
          image: motoViagens,
          imageAlt: "ブラジルのオートバイルートとツアーを扱うMoto Viagens",
          description: "ブラジルの予約型オートバイ旅行プラットフォーム。",
        },
        {
          title: "Verbo",
          href: "/ja/products/verboai",
          image: verbo,
          imageAlt: "Verbo AI語学学習プラットフォームの画面",
          description: "練習と記憶定着を中心にしたAI語学学習。",
        },
        {
          title: "Triplut",
          href: "/ja/products/triplut",
          image: triplut,
          imageAlt: "Triplut AI旅行プラットフォームのイラスト",
          description: "ルート、予算、旅の詳細を整理する旅行計画コンセプト。",
        },
        {
          title: "Luna AI",
          href: "/ja/products/luna",
          image: luna,
          imageAlt: "Dawn WebのLuna AIマスコットとデジタルアシスタント",
          description: "ユーザー案内を分かりやすくするアシスタント構想。",
        },
      ],
    },
    process: {
      eyebrow: "進め方",
      title: "少ない手順で、判断を明確に。",
      items: [
        {
          title: "診断",
          description: "どこで分かりにくさや不安が生まれるか確認。",
        },
        {
          title: "設計",
          description: "メッセージ、ページ、範囲、進め方を決定。",
        },
        {
          title: "構築",
          description: "定期確認しながらデザインと開発を進行。",
        },
        { title: "公開", description: "速度、SEO基盤、引き継ぎを整えて公開。" },
      ],
    },
    trust: {
      eyebrow: "信頼",
      title: "多くのサイトは見た目よりも、",
      accent: "説明不足",
      description:
        "提供価値、証拠、CTAが弱いと、きれいなページでも問い合わせにつながりません。",
      note: "リニューアルは顧客に伝わる明確さから始め、UX、速度、SEO、機能で支えます。",
    },
    finalCta: {
      title: "分かりにくいページを、相談につながる入口へ。",
      description:
        "無料相談で、サイト、リニューアル、SEO、Webアプリの次の一手を整理しましょう。",
    },
    faqTitle: "よくある<br />質問",
  },
  ko: {
    locale: "ko",
    lang: "ko",
    pathname: "/ko",
    pageTitle: "좋은 문의를 놓치지 않는 웹사이트 | Dawn Web",
    pageDescription:
      "Dawn Web은 제안이 명확하지 않은 웹사이트를 개선하고, 성과가 낮은 페이지를 리디자인하며, 성장하는 서비스 비즈니스를 위한 맞춤형 웹 앱을 구축합니다.",
    contactUrl: "/ko/contact",
    primaryCta: "무료 상담 예약",
    announcement: {
      badge: "무료 점검",
      title: "다시 만들기 전에 이탈 지점을 확인하세요",
      description:
        "메시지, 흐름, 신뢰 요소에서 문의를 놓치게 만드는 부분을 빠르게 점검합니다.",
    },
    hero: {
      badgeLabel: "창업자 주도 웹 전략",
      headline: {
        before: "명확한 웹사이트는 ",
        accent: "좋은 문의",
        after: "를 만듭니다.",
      },
      subTitle:
        "Dawn Web은 혼란스러운 페이지를 가치가 잘 보이고, 신뢰를 만들고, 진지한 방문자가 상담으로 이어지는 빠르고 깔끔한 경험으로 바꿉니다.",
      trustItems: ["제작자와 직접 진행", "SEO 기반 포함", "명확한 인수인계"],
      image: heroImage,
      imageAlt: "Dawn Web 웹사이트 디자인 및 웹 개발 작업 공간",
    },
    proof: [
      {
        label: "01",
        title: "명확함 우선",
        description: "방문자가 무엇을 제공하는지 빠르게 이해합니다.",
      },
      {
        label: "02",
        title: "가볍게 구축",
        description: "깔끔한 구조, 빠른 로딩, 과한 장식을 줄인 화면.",
      },
      {
        label: "03",
        title: "직접 전달",
        description: "카피, UX, 코드를 만드는 사람과 바로 진행합니다.",
      },
    ],
    services: {
      eyebrow: "서비스",
      title: "좋은 방문자를 망설이게 만드는 부분을 고칩니다",
      description:
        "제안이 흐리거나, 디자인이 낡았거나, SEO 기본기가 빠졌거나, 수작업을 앱으로 바꿔야 할 때 맞는 방향을 선택합니다.",
      actionLabel: "자세히 보기",
      items: [
        {
          title: "비즈니스 웹사이트",
          href: serviceHrefs.ko[0],
          description: "제안과 다음 행동이 분명하게 보이는 집중된 웹사이트.",
        },
        {
          title: "웹사이트 리디자인",
          href: serviceHrefs.ko[1],
          description: "더 선명한 메시지, 쉬운 흐름, 강한 신뢰 요소.",
        },
        {
          title: "SEO 기반 구축",
          href: serviceHrefs.ko[2],
          description: "출시 전부터 검색에 필요한 기술 기반을 준비합니다.",
        },
        {
          title: "맞춤형 웹 앱",
          href: serviceHrefs.ko[3],
          description:
            "포털, 대시보드, 예약, 내부 도구를 실제 업무에 맞게 구축.",
        },
      ],
    },
    founder: {
      eyebrow: "창업자 주도",
      title: "전략과 구현 사이에 불필요한 전달 단계를 두지 않습니다.",
      body: "구조, 카피 방향, 기술 선택, 납품까지 풀스택 개발자 Andrew Henrice와 직접 진행합니다.",
      points: ["느린 전달 감소", "카피와 코드 정렬", "초기에 현실적 결정"],
    },
    portfolio: {
      eyebrow: "포트폴리오",
      title: "실제 제품을 간결하게 보여드립니다",
      description:
        "예약, 언어 학습, 여행 계획, 제품 내 안내를 중심으로 한 제품 작업입니다.",
      actionLabel: "프로젝트 보기",
      items: [
        {
          title: "Moto Viagens",
          href: "/ko/products/motoviagens",
          image: motoViagens,
          imageAlt: "브라질 오토바이 여행 경로와 투어를 제공하는 Moto Viagens",
          description: "브라질 예약 중심 오토바이 여행 플랫폼.",
        },
        {
          title: "Verbo",
          href: "/ko/products/verboai",
          image: verbo,
          imageAlt: "Verbo AI 언어 학습 플랫폼 인터페이스",
          description: "연습과 기억 유지를 중심으로 한 AI 언어 학습.",
        },
        {
          title: "Triplut",
          href: "/ko/products/triplut",
          image: triplut,
          imageAlt: "Triplut AI 여행 플랫폼 일러스트레이션",
          description: "경로, 예산, 여행 정보를 정리하는 여행 계획 콘셉트.",
        },
        {
          title: "Luna AI",
          href: "/ko/products/luna",
          image: luna,
          imageAlt: "Dawn Web의 Luna AI 마스코트와 디지털 어시스턴트",
          description: "사용자 안내를 더 명확하게 만드는 어시스턴트 콘셉트.",
        },
      ],
    },
    process: {
      eyebrow: "프로세스",
      title: "단순한 단계. 명확한 결정.",
      items: [
        {
          title: "진단",
          description: "어디서 명확함과 신뢰가 사라지는지 확인.",
        },
        {
          title: "정리",
          description: "메시지, 페이지, 범위, 진행 방향을 결정.",
        },
        {
          title: "구축",
          description: "정기 확인과 함께 디자인과 개발을 진행.",
        },
        {
          title: "출시",
          description: "성능, SEO 기본기, 인수인계를 갖춰 공개.",
        },
      ],
    },
    trust: {
      eyebrow: "신뢰",
      title: "많은 사이트는 보기보다 ",
      accent: "설명이 부족합니다",
      description:
        "제안, 근거, CTA가 약하면 깔끔한 페이지도 좋은 문의로 이어지지 않습니다.",
      note: "리디자인은 구매자에게 명확하게 전달되는 것에서 시작하고 UX, 속도, SEO, 기능으로 뒷받침합니다.",
    },
    finalCta: {
      title: "혼란스러운 페이지를 더 나은 상담의 시작점으로.",
      description:
        "무료 상담에서 웹사이트, 리디자인, SEO, 맞춤형 웹 앱의 다음 단계를 정리해보세요.",
    },
    faqTitle: "자주 묻는 질문",
  },
};

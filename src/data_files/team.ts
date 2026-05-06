import type { Locale } from "@utils/locale";

const basePath = import.meta.env.BASE_URL || "/";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  portfolio: string;
  instagram: string;
  github: string;
}

export interface TeamPageContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  heroImageAlt: string;
  primaryCta: string;
  primaryCtaUrl: string;
  secondaryCta: string;
  secondaryCtaUrl: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  proofTitle: string;
  proofDescription: string;
  proofPoints: Array<{
    title: string;
    description: string;
  }>;
  teamEyebrow: string;
  teamTitle: string;
  teamDescription: string;
  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processItems: Array<{
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaUrl: string;
}

const sharedMembers = {
  andrew: {
    id: "andrew",
    name: "Andrew Henrice",
    image: `${basePath}team/Andrew.png`,
    portfolio: "https://www.andrewhenrice.com",
    instagram: "https://instagram.com/brenoandrew",
    github: "https://www.github.com/brenoandrew",
  },
  daniel: {
    id: "daniel",
    name: "Daniel Moraes",
    image: `${basePath}team/DanielMoraes.png`,
    portfolio: "https://www.instagram.com/daniel.h.moraes/",
    instagram: "https://www.instagram.com/daniel.h.moraes/",
    github: "https://www.github.com/",
  },
  mada: {
    id: "mada",
    name: "Mada",
    image: `${basePath}team/mada.png`,
    portfolio: "https://www.instagram.com/madalena_bf/",
    instagram: "https://www.instagram.com/madalena_bf/",
    github: "https://www.github.com/",
  },
} as const;

const localizedMembers = {
  en: {
    andrew: {
      role: "CEO & Full Stack Web Developer",
      bio: "Leads strategy, architecture, and client direction so every project connects business goals with a clear technical path.",
    },
    daniel: {
      role: "CTO & Back-End Developer",
      bio: "Builds stable, scalable foundations behind the scenes, from data flow to integrations and long-term platform reliability.",
    },
    mada: {
      role: "UX Designer & Visual Artist",
      bio: "Shapes intuitive interfaces and visual systems that make complex ideas feel polished, useful, and easy to navigate.",
    },
  },
  fr: {
    andrew: {
      role: "CEO et développeur full stack",
      bio: "Dirige la stratégie, l'architecture et l'accompagnement client pour relier chaque projet à des objectifs métier clairs.",
    },
    daniel: {
      role: "CTO et développeur back-end",
      bio: "Construit des bases stables et évolutives, des flux de données aux intégrations et à la fiabilité des plateformes.",
    },
    mada: {
      role: "Designer UX et artiste visuelle",
      bio: "Crée des interfaces intuitives et des systèmes visuels qui rendent les idées complexes plus claires et agréables à utiliser.",
    },
  },
  br: {
    andrew: {
      role: "CEO e desenvolvedor full stack",
      bio: "Lidera estratégia, arquitetura e direção com clientes para conectar cada projeto a objetivos de negócio claros.",
    },
    daniel: {
      role: "CTO e desenvolvedor back-end",
      bio: "Constrói bases estáveis e escaláveis, dos fluxos de dados às integrações e à confiabilidade de longo prazo.",
    },
    mada: {
      role: "Designer UX e artista visual",
      bio: "Cria interfaces intuitivas e sistemas visuais que tornam ideias complexas mais claras, úteis e fáceis de navegar.",
    },
  },
} satisfies Record<
  Locale,
  Record<keyof typeof sharedMembers, Pick<TeamMember, "role" | "bio">>
>;

const memberOrder = ["andrew", "daniel", "mada"] as const;

export const teamMembersByLocale: Record<Locale, TeamMember[]> = {
  en: memberOrder.map((id) => ({
    ...sharedMembers[id],
    ...localizedMembers.en[id],
  })),
  fr: memberOrder.map((id) => ({
    ...sharedMembers[id],
    ...localizedMembers.fr[id],
  })),
  br: memberOrder.map((id) => ({
    ...sharedMembers[id],
    ...localizedMembers.br[id],
  })),
};

export const teamPageContent: Record<Locale, TeamPageContent> = {
  en: {
    seoTitle: "Meet the Dawn Web Team | Web Design Experts",
    seoDescription:
      "Meet the Dawn Web team behind custom business websites, web development, UX design, and digital strategy for growing companies.",
    eyebrow: "Dawn Web team",
    title: "A senior team building serious digital momentum.",
    description:
      "We combine strategy, UX, engineering, and launch support so growing businesses get websites and web apps that are clear, fast, and built to keep improving.",
    heroImageAlt: "Laptop showing a website design workspace",
    primaryCta: "Work with the team",
    primaryCtaUrl: "/contact",
    secondaryCta: "Explore services",
    secondaryCtaUrl: "/services",
    stats: [
      { value: "3", label: "Core disciplines" },
      { value: "1", label: "Dedicated delivery team" },
      { value: "100%", label: "Built around business goals" },
    ],
    proofTitle: "What clients get from a focused team",
    proofDescription:
      "Every project is guided by people who understand both the business outcome and the implementation details.",
    proofPoints: [
      {
        title: "Strategy before screens",
        description:
          "We define the offer, audience, and conversion path before polishing the interface.",
      },
      {
        title: "UX with purpose",
        description:
          "Layouts, content, and interactions are shaped around clarity instead of decoration.",
      },
      {
        title: "Reliable engineering",
        description:
          "We build with maintainable foundations, performance, and future updates in mind.",
      },
      {
        title: "Launch support",
        description:
          "From deployment to handoff, we stay close to the details that make launch day smoother.",
      },
    ],
    teamEyebrow: "The people",
    teamTitle: "Specialists who stay close to the work",
    teamDescription:
      "Dawn Web keeps strategy, design, and development closely connected so decisions move with clarity from planning to launch.",
    processEyebrow: "How we work",
    processTitle:
      "Clear communication, practical decisions, polished delivery.",
    processDescription:
      "The team page is not just about names. It is about how those people collaborate with you from first idea to final launch.",
    processItems: [
      {
        title: "Discover the real need",
        description:
          "We start with goals, constraints, and the decisions your customers need to make.",
      },
      {
        title: "Design for trust",
        description:
          "We make every page easier to scan, understand, and act on.",
      },
      {
        title: "Build for the next step",
        description:
          "We ship clean foundations that support launch, measurement, and iteration.",
      },
    ],
    ctaTitle: "Want this team on your next project?",
    ctaDescription:
      "Tell us what you are building and we will help turn it into a clear plan for your website, redesign, or custom web app.",
    ctaLabel: "Start a project",
    ctaUrl: "/contact",
  },
  fr: {
    seoTitle: "Équipe Dawn Web | Experts en conception web",
    seoDescription:
      "Découvrez l'équipe Dawn Web derrière les sites professionnels, le développement web, l'UX design et la stratégie digitale.",
    eyebrow: "Équipe Dawn Web",
    title: "Une équipe senior pour créer un vrai élan digital.",
    description:
      "Nous réunissons stratégie, UX, ingénierie et accompagnement au lancement pour créer des sites et applications web clairs, rapides et prêts à évoluer.",
    heroImageAlt: "Ordinateur portable affichant un espace de conception web",
    primaryCta: "Travailler avec l'équipe",
    primaryCtaUrl: "/fr/contact",
    secondaryCta: "Voir les services",
    secondaryCtaUrl: "/fr/services",
    stats: [
      { value: "3", label: "Disciplines clés" },
      { value: "1", label: "Équipe de livraison dédiée" },
      { value: "100%", label: "Aligné sur vos objectifs" },
    ],
    proofTitle: "Ce qu'une équipe concentrée apporte",
    proofDescription:
      "Chaque projet est guidé par des personnes qui comprennent à la fois le résultat attendu et les détails de mise en œuvre.",
    proofPoints: [
      {
        title: "Stratégie avant les écrans",
        description:
          "Nous clarifions l'offre, l'audience et le parcours de conversion avant de finaliser l'interface.",
      },
      {
        title: "UX utile",
        description:
          "Les pages, contenus et interactions sont pensés pour la clarté plutôt que la décoration.",
      },
      {
        title: "Ingénierie fiable",
        description:
          "Nous construisons des bases maintenables, performantes et prêtes pour les évolutions futures.",
      },
      {
        title: "Support au lancement",
        description:
          "Du déploiement à la passation, nous suivons les détails qui rendent le lancement plus fluide.",
      },
    ],
    teamEyebrow: "Les personnes",
    teamTitle: "Des spécialistes proches du projet",
    teamDescription:
      "Dawn Web relie étroitement stratégie, design et développement pour faire avancer les décisions avec clarté, de la planification au lancement.",
    processEyebrow: "Notre méthode",
    processTitle:
      "Communication claire, décisions pratiques, livraison soignée.",
    processDescription:
      "Cette page ne parle pas seulement de noms. Elle montre comment l'équipe collabore avec vous, de la première idée au lancement.",
    processItems: [
      {
        title: "Comprendre le besoin réel",
        description:
          "Nous partons des objectifs, contraintes et décisions que vos clients doivent prendre.",
      },
      {
        title: "Concevoir pour inspirer confiance",
        description:
          "Nous rendons chaque page plus simple à parcourir, comprendre et utiliser.",
      },
      {
        title: "Construire pour la suite",
        description:
          "Nous livrons des bases propres pour le lancement, la mesure et l'itération.",
      },
    ],
    ctaTitle: "Vous voulez cette équipe sur votre prochain projet ?",
    ctaDescription:
      "Expliquez-nous ce que vous construisez et nous transformerons l'idée en plan clair pour votre site, refonte ou application web.",
    ctaLabel: "Démarrer un projet",
    ctaUrl: "/fr/contact",
  },
  br: {
    seoTitle: "Equipe Dawn Web | Especialistas em web design",
    seoDescription:
      "Conheça a equipe Dawn Web por trás de sites profissionais, desenvolvimento web, UX design e estratégia digital para empresas.",
    eyebrow: "Equipe Dawn Web",
    title: "Uma equipe sênior criando impulso digital de verdade.",
    description:
      "Unimos estratégia, UX, engenharia e suporte de lançamento para criar sites e aplicativos web claros, rápidos e prontos para evoluir.",
    heroImageAlt: "Notebook exibindo uma área de trabalho de design de site",
    primaryCta: "Trabalhe com a equipe",
    primaryCtaUrl: "/br/contact",
    secondaryCta: "Ver serviços",
    secondaryCtaUrl: "/br/services",
    stats: [
      { value: "3", label: "Disciplinas principais" },
      { value: "1", label: "Equipe dedicada à entrega" },
      { value: "100%", label: "Guiado pelos objetivos do negócio" },
    ],
    proofTitle: "O que uma equipe focada entrega",
    proofDescription:
      "Cada projeto é guiado por pessoas que entendem tanto o resultado de negócio quanto os detalhes de implementação.",
    proofPoints: [
      {
        title: "Estratégia antes das telas",
        description:
          "Definimos oferta, público e caminho de conversão antes de polir a interface.",
      },
      {
        title: "UX com propósito",
        description:
          "Páginas, conteúdo e interações são pensados para clareza, não apenas decoração.",
      },
      {
        title: "Engenharia confiável",
        description:
          "Construímos bases fáceis de manter, performáticas e preparadas para evoluir.",
      },
      {
        title: "Suporte no lançamento",
        description:
          "Do deploy à entrega, acompanhamos os detalhes que tornam o lançamento mais tranquilo.",
      },
    ],
    teamEyebrow: "As pessoas",
    teamTitle: "Especialistas próximos do trabalho",
    teamDescription:
      "A Dawn Web mantém estratégia, design e desenvolvimento bem conectados para que as decisões avancem com clareza do planejamento ao lançamento.",
    processEyebrow: "Como trabalhamos",
    processTitle: "Comunicação clara, decisões práticas e entrega bem acabada.",
    processDescription:
      "A página de equipe não é só sobre nomes. Ela mostra como essas pessoas colaboram com você da primeira ideia ao lançamento.",
    processItems: [
      {
        title: "Descobrir a necessidade real",
        description:
          "Começamos por objetivos, restrições e decisões que seus clientes precisam tomar.",
      },
      {
        title: "Desenhar para gerar confiança",
        description:
          "Deixamos cada página mais fácil de escanear, entender e usar.",
      },
      {
        title: "Construir para o próximo passo",
        description:
          "Entregamos bases limpas para lançamento, medição e evolução.",
      },
    ],
    ctaTitle: "Quer essa equipe no seu próximo projeto?",
    ctaDescription:
      "Conte o que você está construindo e vamos transformar a ideia em um plano claro para seu site, redesign ou aplicativo web.",
    ctaLabel: "Começar um projeto",
    ctaUrl: "/br/contact",
  },
};

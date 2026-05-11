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
  ko: {
    andrew: {
      role: "CEO 및 풀스택 웹 개발자",
      bio: "전략, 아키텍처, 클라이언트 방향성을 이끌며 모든 프로젝트가 비즈니스 목표와 명확한 기술 방향으로 연결되도록 합니다.",
    },
    daniel: {
      role: "CTO 및 백엔드 개발자",
      bio: "데이터 흐름, 통합, 장기적인 플랫폼 안정성까지 보이지 않는 곳에서 안정적이고 확장 가능한 기반을 구축합니다.",
    },
    mada: {
      role: "UX 디자이너 및 비주얼 아티스트",
      bio: "복잡한 아이디어를 세련되고 유용하며 쉽게 탐색할 수 있는 경험으로 바꾸는 직관적인 인터페이스와 비주얼 시스템을 설계합니다.",
    },
  },
  ja: {
    andrew: {
      role: "CEO・フルスタックWeb開発者",
      bio: "戦略、アーキテクチャ、クライアントとの方向性をリードし、各プロジェクトを事業目標と明確な技術方針につなげます。",
    },
    daniel: {
      role: "CTO・バックエンド開発者",
      bio: "データフロー、連携、長期的なプラットフォーム信頼性まで、裏側で安定して拡張できる基盤を構築します。",
    },
    mada: {
      role: "UXデザイナー・ビジュアルアーティスト",
      bio: "複雑なアイデアを、洗練され、役に立ち、迷わず使える体験へ変える直感的なインターフェースとビジュアルシステムを設計します。",
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
  ko: memberOrder.map((id) => ({
    ...sharedMembers[id],
    ...localizedMembers.ko[id],
  })),
  ja: memberOrder.map((id) => ({
    ...sharedMembers[id],
    ...localizedMembers.ja[id],
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
  ko: {
    seoTitle: "Dawn Web 팀 소개 | 웹 디자인 전문가",
    seoDescription:
      "성장하는 기업을 위한 맞춤형 비즈니스 웹사이트, 웹 개발, UX 디자인, 디지털 전략을 만드는 Dawn Web 팀을 만나보세요.",
    eyebrow: "Dawn Web 팀",
    title: "진지한 디지털 성장을 만드는 시니어 팀입니다.",
    description:
      "전략, UX, 엔지니어링, 출시 지원을 결합해 성장하는 기업이 명확하고 빠르며 계속 개선할 수 있는 웹사이트와 웹 앱을 갖추도록 돕습니다.",
    heroImageAlt: "웹사이트 디자인 작업 화면이 표시된 노트북",
    primaryCta: "팀과 함께 일하기",
    primaryCtaUrl: "/ko/contact",
    secondaryCta: "서비스 보기",
    secondaryCtaUrl: "/ko/services",
    stats: [
      { value: "3", label: "핵심 전문 분야" },
      { value: "1", label: "전담 실행 팀" },
      { value: "100%", label: "비즈니스 목표 중심" },
    ],
    proofTitle: "집중된 팀이 클라이언트에게 제공하는 것",
    proofDescription:
      "모든 프로젝트는 비즈니스 결과와 구현 세부 사항을 모두 이해하는 사람들이 이끕니다.",
    proofPoints: [
      {
        title: "화면보다 먼저 전략",
        description:
          "인터페이스를 다듬기 전에 제안, 대상 고객, 전환 흐름을 먼저 정의합니다.",
      },
      {
        title: "목적 있는 UX",
        description:
          "레이아웃, 콘텐츠, 상호작용은 장식보다 명확성을 기준으로 설계됩니다.",
      },
      {
        title: "신뢰할 수 있는 엔지니어링",
        description:
          "유지보수성, 성능, 향후 개선을 고려한 견고한 기반으로 구축합니다.",
      },
      {
        title: "출시 지원",
        description:
          "배포부터 인수인계까지 출시일을 더 매끄럽게 만드는 세부 사항을 함께 챙깁니다.",
      },
    ],
    teamEyebrow: "사람들",
    teamTitle: "작업 가까이에 머무는 전문가들",
    teamDescription:
      "Dawn Web은 전략, 디자인, 개발을 긴밀하게 연결해 기획부터 출시까지 결정을 명확하게 이어갑니다.",
    processEyebrow: "일하는 방식",
    processTitle: "명확한 소통, 실용적인 결정, 완성도 있는 전달.",
    processDescription:
      "팀 페이지는 단순한 이름 소개가 아닙니다. 첫 아이디어부터 최종 출시까지 이 사람들이 어떻게 함께 일하는지 보여줍니다.",
    processItems: [
      {
        title: "진짜 필요 파악",
        description:
          "목표, 제약, 고객이 내려야 할 결정을 먼저 이해합니다.",
      },
      {
        title: "신뢰를 만드는 디자인",
        description:
          "모든 페이지를 더 쉽게 훑어보고 이해하고 행동할 수 있게 만듭니다.",
      },
      {
        title: "다음 단계를 위한 구축",
        description:
          "출시, 측정, 반복 개선을 뒷받침하는 깔끔한 기반을 제공합니다.",
      },
    ],
    ctaTitle: "다음 프로젝트에 이 팀이 필요하신가요?",
    ctaDescription:
      "무엇을 만들고 싶은지 알려주시면 웹사이트, 리디자인, 맞춤형 웹 앱을 위한 명확한 계획으로 정리해 드립니다.",
    ctaLabel: "프로젝트 시작하기",
    ctaUrl: "/ko/contact",
  },
  ja: {
    seoTitle: "Dawn Webチーム紹介 | Webデザインの専門家",
    seoDescription:
      "成長企業向けのカスタムビジネスサイト、Web開発、UXデザイン、デジタル戦略を手がけるDawn Webのチームをご紹介します。",
    eyebrow: "Dawn Webチーム",
    title: "本気のデジタル成長を支えるシニアチームです。",
    description:
      "戦略、UX、エンジニアリング、ローンチ支援を組み合わせ、成長企業にとって分かりやすく、速く、改善し続けられるWebサイトとWebアプリを構築します。",
    heroImageAlt: "Webサイト制作の作業画面を表示したノートパソコン",
    primaryCta: "チームに相談する",
    primaryCtaUrl: "/ja/contact",
    secondaryCta: "サービスを見る",
    secondaryCtaUrl: "/ja/services",
    stats: [
      { value: "3", label: "主要専門領域" },
      { value: "1", label: "専任の実行チーム" },
      { value: "100%", label: "事業目標を中心に設計" },
    ],
    proofTitle: "集中したチームが提供する価値",
    proofDescription:
      "すべてのプロジェクトは、事業成果と実装の細部の両方を理解するメンバーが進めます。",
    proofPoints: [
      {
        title: "画面より先に戦略",
        description:
          "UIを磨き込む前に、提供価値、対象ユーザー、コンバージョン導線を定義します。",
      },
      {
        title: "目的のあるUX",
        description:
          "レイアウト、コンテンツ、操作は装飾ではなく、分かりやすさを軸に設計します。",
      },
      {
        title: "信頼できるエンジニアリング",
        description:
          "保守性、パフォーマンス、今後の改善を見据えた基盤で構築します。",
      },
      {
        title: "ローンチ支援",
        description:
          "デプロイから引き継ぎまで、公開日をスムーズにする細部まで伴走します。",
      },
    ],
    teamEyebrow: "メンバー",
    teamTitle: "現場に近い専門家たち",
    teamDescription:
      "Dawn Webは戦略、デザイン、開発を密接につなぎ、計画から公開まで判断を明確に進めます。",
    processEyebrow: "進め方",
    processTitle: "明確なコミュニケーション、実用的な判断、丁寧な納品。",
    processDescription:
      "このページは名前を紹介するだけではありません。最初のアイデアから公開まで、チームがどのように協力するかを示しています。",
    processItems: [
      {
        title: "本当のニーズを把握する",
        description:
          "目標、制約、顧客が判断するために必要な情報から始めます。",
      },
      {
        title: "信頼される設計にする",
        description:
          "すべてのページを、見つけやすく、理解しやすく、行動しやすくします。",
      },
      {
        title: "次の成長に備えて作る",
        description:
          "公開、計測、改善を支えるクリーンな基盤を納品します。",
      },
    ],
    ctaTitle: "次のプロジェクトをこのチームに相談しませんか？",
    ctaDescription:
      "作りたいものをお聞かせください。Webサイト、リニューアル、カスタムWebアプリのための明確な計画に落とし込みます。",
    ctaLabel: "プロジェクトを始める",
    ctaUrl: "/ja/contact",
  },
};

import { SITE } from "@data/constants";
import { SEO_DESCRIPTIONS, SEO_TITLES } from "@utils/seo";
import type { Locale } from "@utils/locale";

export interface BlogLocaleCopy {
  htmlLang: string;
  index: {
    title: string;
    subTitle: string;
    secondTitle: string;
    secondSubTitle: string;
    pageTitle: string;
    pageDescription: string;
    pathname: string;
  };
  article: {
    readTimeLabel: (minutes: number) => string;
    feedbackTitle: string;
    feedbackYes: string;
    feedbackNo: string;
    relatedTitle: string;
    cta: {
      prefix: string;
      firstLinkText: string;
      firstLinkHref: string;
      middle: string;
      secondLinkText: string;
      secondLinkHref: string;
      suffix: string;
    };
  };
}

export const BLOG_LOCALE_COPY = {
  en: {
    htmlLang: "en",
    index: {
      title: "Meet Dawn Web's Universe",
      subTitle:
        "Read practical guidance on business website design, website redesigns, SEO-ready development, UX, and digital growth.",
      secondTitle: "Insights",
      secondSubTitle:
        "Explore our insights section for expert analysis and thought leadership in the development sector. From market trends to innovative solutions, our insights provide valuable perspectives to help you navigate the ever-evolving landscape of web development.",
      pageTitle: SEO_TITLES.blog,
      pageDescription: SEO_DESCRIPTIONS.blog,
      pathname: "/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes} min read`,
      feedbackTitle: "Was this post helpful?",
      feedbackYes: "Yes",
      feedbackNo: "No",
      relatedTitle: "Related articles",
      cta: {
        prefix: "Planning a new site? Explore our ",
        firstLinkText: "business website design service",
        firstLinkHref: "/services/business-website-design",
        middle: " or compare options for a ",
        secondLinkText: "website redesign",
        secondLinkHref: "/services/website-redesign",
        suffix: ".",
      },
    },
  },
  fr: {
    htmlLang: "fr",
    index: {
      title: "Découvrez l’univers de Dawn Web",
      subTitle:
        "Suivez nos dernières actualités, mises à jour et analyses sur le développement web. Notre blog est votre source de référence pour des conseils d’experts, les tendances du secteur et les nouveautés de l’entreprise.",
      secondTitle: "Analyses",
      secondSubTitle:
        "Plongez dans notre section analyses pour bénéficier d’expertises et de points de vue éclairés sur le secteur du développement. Des tendances du marché aux solutions innovantes, nos analyses vous offrent des perspectives précieuses pour évoluer dans un environnement en constante mutation.",
      pageTitle: `Blog | ${SITE.title}`,
      pageDescription:
        "Lisez les conseils de Dawn Web sur la conception de sites professionnels, la refonte, le SEO technique, l'UX et la croissance digitale.",
      pathname: "/fr/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes} min de lecture`,
      feedbackTitle: "Cet article était-il utile?",
      feedbackYes: "Oui",
      feedbackNo: "Non",
      relatedTitle: "Articles connexes",
      cta: {
        prefix: "Vous préparez un nouveau site ? Découvrez notre ",
        firstLinkText: "service de conception de site professionnel",
        firstLinkHref: "/services/business-website-design",
        middle: " ou comparez les options pour une ",
        secondLinkText: "refonte de site",
        secondLinkHref: "/services/website-redesign",
        suffix: ".",
      },
    },
  },
  br: {
    htmlLang: "pt-BR",
    index: {
      title: "Conheça o universo da Dawn Web",
      subTitle:
        "Acompanhe novidades, atualizações e análises sobre desenvolvimento web. Nosso blog reúne conselhos práticos, tendências do setor e notícias da Dawn Web.",
      secondTitle: "Insights",
      secondSubTitle:
        "Explore perspectivas sobre estratégia digital, tecnologia e crescimento online para tomar decisões mais claras em um mercado em constante mudança.",
      pageTitle: `Blog | ${SITE.title}`,
      pageDescription:
        "Leia insights da Dawn Web sobre design de sites profissionais, redesign, bases tecnicas de SEO, UX e crescimento digital.",
      pathname: "/br/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes} min de leitura`,
      feedbackTitle: "Este artigo foi útil?",
      feedbackYes: "Sim",
      feedbackNo: "Não",
      relatedTitle: "Artigos relacionados",
      cta: {
        prefix: "Planejando um novo site? Conheça nosso ",
        firstLinkText: "serviço de design de sites profissionais",
        firstLinkHref: "/services/business-website-design",
        middle: " ou compare opções para um ",
        secondLinkText: "redesign de site",
        secondLinkHref: "/services/website-redesign",
        suffix: ".",
      },
    },
  },
  ko: {
    htmlLang: "ko",
    index: {
      title: "Dawn Web 블로그",
      subTitle:
        "웹사이트 전략, 리디자인, SEO 기반 구축, UX, 디지털 성장에 대한 실용적인 관점을 확인하세요.",
      secondTitle: "인사이트",
      secondSubTitle:
        "시장 흐름부터 실행 가능한 개선 아이디어까지, 더 명확한 디지털 결정을 돕는 Dawn Web의 분석을 살펴보세요.",
      pageTitle: `블로그 | ${SITE.title}`,
      pageDescription:
        "비즈니스 웹사이트 제작, 리디자인, SEO 기반 개발, UX, 디지털 성장 전략에 대한 Dawn Web의 글을 읽어보세요.",
      pathname: "/ko/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes}분 읽기`,
      feedbackTitle: "이 글이 도움이 되었나요?",
      feedbackYes: "네",
      feedbackNo: "아니요",
      relatedTitle: "관련 글",
      cta: {
        prefix: "새 웹사이트를 계획 중인가요? ",
        firstLinkText: "비즈니스 웹사이트 제작 서비스",
        firstLinkHref: "/ko/services/business-website-design",
        middle: "를 살펴보거나 ",
        secondLinkText: "웹사이트 리디자인",
        secondLinkHref: "/ko/services/website-redesign",
        suffix: " 옵션을 비교해 보세요.",
      },
    },
  },
  ja: {
    htmlLang: "ja",
    index: {
      title: "Dawn Webブログ",
      subTitle:
        "Webサイト戦略、リニューアル、SEO対応構築、UX、デジタル成長についての実用的な視点をお届けします。",
      secondTitle: "インサイト",
      secondSubTitle:
        "市場の変化から実行しやすい改善案まで、より明確なデジタル判断に役立つDawn Webの分析をご覧ください。",
      pageTitle: `ブログ | ${SITE.title}`,
      pageDescription:
        "ビジネスサイト制作、リニューアル、SEO対応開発、UX、デジタル成長戦略に関するDawn Webの記事をお読みください。",
      pathname: "/ja/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes}分で読めます`,
      feedbackTitle: "この記事は役に立ちましたか？",
      feedbackYes: "はい",
      feedbackNo: "いいえ",
      relatedTitle: "関連記事",
      cta: {
        prefix: "新しいWebサイトを計画していますか？",
        firstLinkText: "ビジネスサイト制作サービス",
        firstLinkHref: "/ja/services/business-website-design",
        middle: "を見るか、",
        secondLinkText: "Webサイトリニューアル",
        secondLinkHref: "/ja/services/website-redesign",
        suffix: "の選択肢を比較してみてください。",
      },
    },
  },
  es: {
    htmlLang: "es",
    index: {
      title: "Blog de Dawn Web",
      subTitle:
        "Ideas prácticas sobre estrategia web, rediseños, bases SEO, UX y crecimiento digital.",
      secondTitle: "Ideas y análisis",
      secondSubTitle:
        "Análisis de Dawn Web para tomar decisiones digitales más claras, desde tendencias hasta mejoras aplicables.",
      pageTitle: `Blog | ${SITE.title}`,
      pageDescription:
        "Lee ideas de Dawn Web sobre diseño web empresarial, rediseño, desarrollo preparado para SEO, UX y crecimiento digital.",
      pathname: "/es/blog",
    },
    article: {
      readTimeLabel: (minutes) => `${minutes} min de lectura`,
      feedbackTitle: "¿Te resultó útil este artículo?",
      feedbackYes: "Sí",
      feedbackNo: "No",
      relatedTitle: "Artículos relacionados",
      cta: {
        prefix: "¿Estás planificando un sitio nuevo? Explora nuestro ",
        firstLinkText: "servicio de diseño de sitios web empresariales",
        firstLinkHref: "/es/services/business-website-design",
        middle: " o compara opciones para un ",
        secondLinkText: "rediseño de sitio web",
        secondLinkHref: "/es/services/website-redesign",
        suffix: ".",
      },
    },
  },
} satisfies Record<Locale, BlogLocaleCopy>;

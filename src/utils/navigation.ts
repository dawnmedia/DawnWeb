import { DEFAULT_LOCALE, type Locale } from "./locale";

interface NavLink {
  name: string;
  url: string;
}

interface FooterSection {
  section: string;
  links: NavLink[];
}

interface NavigationStrings {
  navBarLinks: NavLink[];
  footerLinks: FooterSection[];
  socialLinks: {
    facebook: string;
    x: string;
    github: string;
  };
  footerCopy: {
    newsletterTitle: string;
    newsletterContent: string;
    crafted: string;
  };
}

const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/DawnLabsEN",
  github: "https://github.com/dawnmedia",
};

const navigation: Record<Locale, NavigationStrings> = {
  en: {
    navBarLinks: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
      { name: "Blog", url: "/blog" },
      { name: "Team", url: "/team" },
      { name: "Contact", url: "/contact" },
    ],
    footerLinks: [
      {
        section: "Ecosystem",
        links: [
          { name: "Website Design", url: "/services/business-website-design" },
          { name: "Website Redesign", url: "/services/website-redesign" },
          { name: "SEO-Ready Websites", url: "/services/seo-ready-websites" },
          { name: "Custom Web Apps", url: "/services/custom-web-apps" },
          { name: "Project Portfolio", url: "/products" },
        ],
      },
      {
        section: "Company",
        links: [
          { name: "About us", url: "/team" },
          { name: "Blog", url: "/blog" },
          { name: "Our Team", url: "/team" },
          { name: "Careers", url: "/contact" },
        ],
      },
    ],
    socialLinks,
    footerCopy: {
      newsletterTitle: "Stay up to date",
      newsletterContent:
        "Stay updated with the latest services, projects, and digital growth ideas.",
      crafted: "Crafted by",
    },
  },
  fr: {
    navBarLinks: [
      { name: "Accueil", url: "/fr" },
      { name: "Produits", url: "/fr/products" },
      { name: "Services", url: "/fr/services" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Équipe", url: "/fr/team" },
      { name: "Contact", url: "/fr/contact" },
    ],
    footerLinks: [
      {
        section: "Écosystème",
        links: [
          { name: "Produits", url: "/fr/products" },
          { name: "Services", url: "/fr/services" },
        ],
      },
      {
        section: "Société",
        links: [
          { name: "À propos de nous", url: "/fr/team" },
          { name: "Blog", url: "/fr/blog" },
          { name: "Notre Équipe", url: "/fr/team" },
          { name: "Carrières", url: "/fr/contact" },
        ],
      },
    ],
    socialLinks,
    footerCopy: {
      newsletterTitle: "Rester à jour",
      newsletterContent:
        "Restez informé des derniers outils et des offres exclusives.",
      crafted: "Fabriqué par",
    },
  },
  br: {
    navBarLinks: [
      { name: "Inicio", url: "/br" },
      { name: "Produtos", url: "/br/products" },
      { name: "Serviços", url: "/br/services" },
      { name: "Blog", url: "/br/blog" },
      { name: "Equipe", url: "/br/team" },
      { name: "Contato", url: "/br/contact" },
    ],
    footerLinks: [
      {
        section: "Ecossistema",
        links: [
          { name: "Produtos", url: "/br/products" },
          { name: "Serviços", url: "/br/services" },
        ],
      },
      {
        section: "Empresa",
        links: [
          { name: "Sobre Nós", url: "/br/team" },
          { name: "Blog", url: "/br/blog" },
          { name: "Nossa Equipe", url: "/br/team" },
          { name: "Trabalhe Conosco", url: "/br/contact" },
        ],
      },
    ],
    socialLinks,
    footerCopy: {
      newsletterTitle: "Fique por dentro",
      newsletterContent:
        "Receba novidades sobre ferramentas, serviços e ofertas exclusivas.",
      crafted: "Criado por",
    },
  },
  ko: {
    navBarLinks: [
      { name: "홈", url: "/ko" },
      { name: "제품", url: "/ko/products" },
      { name: "서비스", url: "/ko/services" },
      { name: "블로그", url: "/ko/blog" },
      { name: "팀", url: "/ko/team" },
      { name: "문의", url: "/ko/contact" },
    ],
    footerLinks: [
      {
        section: "서비스",
        links: [
          { name: "비즈니스 웹사이트 제작", url: "/ko/services/business-website-design" },
          { name: "웹사이트 리디자인", url: "/ko/services/website-redesign" },
          { name: "SEO 기반 웹사이트", url: "/ko/services/seo-ready-websites" },
          { name: "맞춤형 웹 앱", url: "/ko/services/custom-web-apps" },
          { name: "프로젝트 포트폴리오", url: "/ko/products" },
        ],
      },
      {
        section: "회사",
        links: [
          { name: "소개", url: "/ko/team" },
          { name: "블로그", url: "/ko/blog" },
          { name: "팀", url: "/ko/team" },
          { name: "채용", url: "/ko/contact" },
        ],
      },
    ],
    socialLinks,
    footerCopy: {
      newsletterTitle: "최신 소식 받기",
      newsletterContent:
        "서비스, 프로젝트, 디지털 성장 아이디어에 대한 최신 소식을 받아보세요.",
      crafted: "제작",
    },
  },
  ja: {
    navBarLinks: [
      { name: "ホーム", url: "/ja" },
      { name: "プロダクト", url: "/ja/products" },
      { name: "サービス", url: "/ja/services" },
      { name: "ブログ", url: "/ja/blog" },
      { name: "チーム", url: "/ja/team" },
      { name: "お問い合わせ", url: "/ja/contact" },
    ],
    footerLinks: [
      {
        section: "サービス",
        links: [
          { name: "ビジネスサイト制作", url: "/ja/services/business-website-design" },
          { name: "サイトリニューアル", url: "/ja/services/website-redesign" },
          { name: "SEO対応サイト", url: "/ja/services/seo-ready-websites" },
          { name: "カスタムWebアプリ", url: "/ja/services/custom-web-apps" },
          { name: "制作実績", url: "/ja/products" },
        ],
      },
      {
        section: "会社",
        links: [
          { name: "会社紹介", url: "/ja/team" },
          { name: "ブログ", url: "/ja/blog" },
          { name: "チーム", url: "/ja/team" },
          { name: "採用情報", url: "/ja/contact" },
        ],
      },
    ],
    socialLinks,
    footerCopy: {
      newsletterTitle: "最新情報を受け取る",
      newsletterContent:
        "サービス、プロジェクト、デジタル成長に関する最新情報をお届けします。",
      crafted: "制作",
    },
  },
};

export function getNavigation(locale: Locale = DEFAULT_LOCALE): NavigationStrings {
  return navigation[locale] ?? navigation[DEFAULT_LOCALE];
}

export default navigation.en;

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
          { name: "Documentation", url: "/guides/intro/" },
          { name: "Products", url: "/products" },
          { name: "Services", url: "/services" },
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
          { name: "Documentation", url: "/fr/guides/intro/" },
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
          { name: "Documentação", url: "/br/guides/intro/" },
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
};

export function getNavigation(locale: Locale = DEFAULT_LOCALE): NavigationStrings {
  return navigation[locale] ?? navigation[DEFAULT_LOCALE];
}

export default navigation.en;

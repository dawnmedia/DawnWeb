
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/comingsoon" },
      { name: "Products", url: "/fr/products" },
      { name: "Services", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/comingsoon" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Our Team", url: "/comingsoon" },
      { name: "Careers", url: "/fr/contact" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/DawnLabsEN",
  github: "https://github.com/dawnmedia",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
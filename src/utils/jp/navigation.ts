
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Produits", url: "/" },
  { name: "Services", url: "/" },
//  { name: "Blog", url: "/" },
  { name: "Contact", url: "/" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/" },
      { name: "Outils et Équipements", url: "/jp" },
      { name: "Services de Construction", url: "/jp" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/jp" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/dawnmedia",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Produits", url: "/" },
  { name: "Services", url: "/" },
  { name: "Blog", url: "/" },
  { name: "Contact", url: "/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/" },
      { name: "Outils et Équipements", url: "/" },
      { name: "Services de Construction", url: "/" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/" },
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
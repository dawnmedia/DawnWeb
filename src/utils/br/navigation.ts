// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/br" },
  { name: "Produtos", url: "/br/products" },
  { name: "Serviços", url: "/br/services" },
  { name: "Blog", url: "/br/blog" },
  { name: "Equipe", url: "/br/team" },
  { name: "Contato", url: "/br/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentação", url: "/br/comingsoon" },
      { name: "Produtos", url: "/br/products" },
      { name: "Serviços", url: "/br/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Sobre Nós", url: "/br/comingsoon" },
      { name: "Blog", url: "/br/blog" },
      { name: "Nossa Equipe", url: "/br/team" },
      { name: "Trabalhe Conosco", url: "/br/contact" },
    ],
  },
];
// An object of links for social icons
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
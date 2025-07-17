// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Team", url: "/team" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/comingsoon" },
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/comingsoon" },
      { name: "Blog", url: "/blog" },
      { name: "Our Team", url: "/team" },
      { name: "Careers", url: "/contact" },
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
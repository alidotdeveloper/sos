import { Content } from "./types";

const content: Content = {
  menuItems: [
    {
      menu: "Home",
      link: "/",
    },
    {
      menu: "About Us",
      link: "/about",
    },
    {
      menu: "Features",
      link: "/features",
    },
    {
      menu: "Contact Us",
      link: "/contact-us",
    },
  ],
  Footer: [
    {
      title: "Index",
      navitems: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About Us",
          link: "/about",
        },
        {
          title: "Features",
          link: "/features",
        },
        {
          title: "Contact Us",
          link: "/contact-us",
        },
      ],
    },

    {
      title: "Legal",
      navitems: [
        {
          title: "Terms & Condition",
          link: "/terms",
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
      ],
    },
  ],
  Buttons: [
    {
      appLinks: [
        {
          title: "App Store",
          link: "https://www.apple.com/app-store/",
        },
        {
          title: "Play Store",
          link: "https://play.google.com/store/games?hl=en&gl=US",
        },
      ],
    },
  ],
};

export default content;

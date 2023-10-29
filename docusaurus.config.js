// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dragon Age Polyshipping",
  url: "https://dapolyshipping.neocities.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
        },
        blog: {
          blogTitle: "Announcements",
          blogDescription:
            "See the latest announcements about Dragon Age Polyshipping. Get exchange news and mod updates.",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} enigmalea`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      respectPrefersColorScheme: true,
      navbar: {
        title: "Dragon Age Polyshipping",
        logo: {
          alt: "Dragon Age Polyshipping Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Poly Sharing",
            position: "left",
            className: "sharing",
            items: [
              {
                type: "doc",
                label: "General",
                docId: "sharing/intro",
              },
              {
                type: "doc",
                label: "FAQs",
                docId: "sharing/faq",
              },
              {
                type: "doc",
                label: "On Art Theft",
                docId: "sharing/arttheft",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Exchange",
            position: "left",
            className: "exchange",
            items: [
              {
                type: "doc",
                label: "Info",
                docId: "exchange/intro",
              },
              {
                type: "doc",
                label: "FAQs",
                docId: "exchange/faq",
              },
              {
                label: "SIGN-UP HERE",
                href: "https://archiveofourown.org/collections/dapolyex2023/signups/new",
              },
              {
                type: "doc",
                label: "Treats & Treatless FAQ",
                docId: "exchange/treats",
              },
              {
                label: "Tag Set",
                href: "https://archiveofourown.org/tag_sets/16282",
              },
              {
                label: "Nominations Sheet",
                href: "https://docs.google.com/spreadsheets/d/1ie4M0Bid8NZFYxj2gb55Z0WVIizWHdErUsJTNoqE2hE/edit?usp=sharing",
              },
              {
                label: "AutoAO3: Requests",
                href: "https://autoao3app.fandom.tools/#/dapolyex2023/all",
              },
							{
								label: "Treatless",
								href: "https://airtable.com/appY5fs0OEcU1KK70/shrBVIVizfQ6O5rAv/tblvGEu0Tyo14AL4q",
							},
              {
                label: "Request an Extension",
                href: "/extensions",
              },
              {
                label: "Past Events",
                href: "/past",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tutorials",
            position: "left",
            className: "tutorial",
            items: [
              {
                type: "doc",
                label: "How to Nominate",
                docId: "exchange/tutorials/nominate",
              },
              {
                type: "doc",
                label: "How to Sign-Up",
                docId: "exchange/tutorials/signups",
              },
              {
                type: "doc",
                label: "On Exchange Letters",
                docId: "exchange/tutorials/letters",
              },
              {
                type: "doc",
                label: "How to Filter the AutoAO3 App",
                docId: "exchange/tutorials/autoao3",
              },
              {
                type: "doc",
                label: "How to Fulfill Your Assignment",
                docId: "exchange/tutorials/fulfill",
              },
              {
                type: "doc",
                label: "Keeping It Anon",
                docId: "exchange/tutorials/anon",
              },
            ],
          },
          {
            type: "dropdown",
            position: "left",
            label: "AO3",
            className: "ao3",
            items: [
              {
                label: "Parent Collection",
                href: "https://archiveofourown.org/collections/dapolyex/",
                className: "ao3",
              },
              {
                label: "2023 Collection",
                href: "https://archiveofourown.org/collections/dapolyex2023/",
                className: "ao3",
              },
              {
                label: "2022 Collection",
                href: "https://archiveofourown.org/collections/dapolyex2022/",
                className: "ao3",
              },
              {
                label: "2021 Collection",
                href: "https://archiveofourown.org/collections/dapolyex2021/",
                className: "ao3",
              },
            ],
          },
          {
            label: "Tumblr",
            href: "https://dapolyshipping.tumblr.com",
            position: "left",
            className: "tumblr",
          },
          {
            label: "Discord",
            href: "https://discord.gg/VUaGepeJmf",
            position: "left",
            className: "discord",
          },
          {
            type: "dropdown",
            label: "Announcements",
            position: "left",
            className: "blog",
            items: [
              {
                label: "View",
                href: "/blog",
              },
              {
                label: "Follow via RSS",
                href: "https://dapolyshipping.neocities.org/blog/rss.xml",
                className: "rss",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Info",
            items: [
              {
                label: "Poly Sharing",
                to: "/docs/sharing/intro",
              },
              {
                label: "Exchange Info",
                to: "/docs/exchange/intro",
              },
              {
                label: "Exchange FAQs",
                to: "/docs/exchange/faq",
              },
              {
                label: "SIGN-UP HERE",
                href: "https://archiveofourown.org/collections/dapolyex2023/signups/new",
              },
            ],
          },
          {
            title: "Tutorials",
            items: [
              {
                label: "How to Nominate",
                to: "/docs/exchange/tutorials/nominate",
              },
              {
                label: "How to Sign-Up",
                to: "/docs/exchange/tutorials/signups",
              },
              {
                label: "On Exchange Letters",
                to: "/docs/exchange/tutorials/letters",
              },
              {
                label: "How to Filter the AutoAO3 App",
                to: "/docs/exchange/tutorials/autoao3",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Tumblr Ask",
                href: "https://dapolyshipping.tumblr.com/ask",
              },
              {
                label: "Discord",
                href: "https://discord.gg/VUaGepeJmf",
              },
              {
                label: "dapolyshipping@gmail.com",
                href: "mailto:dapolyshipping@gmail.com",
              },
            ],
          },
          {
            title: "Mods",
            items: [
              {
                html: '<div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/enig.png" /> <div class="avatar__intro"><div class="avatar__name">enigmalea</div><small class="avatar__subtitle"><a href="https://www.enigmalea.quest" class="footer__link-item"><i class="fa-solid fa-house"></i></a> <a href="https://enigmalea.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a> <a href="https://indiepocalypse.social/@enigmalea" class="footer__link-item"><i class="fa-brands fa-mastodon"></i></a></small></div></div><div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/fox.png" /> <div class="avatar__intro"><div class="avatar__name">foxinboots</div><small class="avatar__subtitle"><a href="https://twitter.com/TheFoxInBoots" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="https://thefoxinboots.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a> <a href="https://www.instagram.com/foxinboots/" class="footer__link-item"><i class="fa-brands fa-instagram"></i></a></small></div></div>',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DA Polyshipping. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: "theme-color", content: "#0a1027" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "dapolyshipping" },
        { name: "og:image", content: "/img/logo.png" },
      ],
      zoom: {
        selector: ".markdown img",
        background: {
          light: "rgba(212, 212, 212, 0.75)",
          dark: "rgba(44, 44, 44, 0.75)",
        },
      },
    }),
};

module.exports = config;

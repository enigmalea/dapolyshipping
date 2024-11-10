// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
                label: "Rules & Information",
                docId: "exchange/intro",
              },
              {
                type: "doc",
                label: "FAQs",
                docId: "exchange/faq",
              },
              {
                label: "SIGN-UP HERE",
                href: "https://archiveofourown.org/collections/dapolyex2024/signups/new",
              },
              {
                type: "doc",
                label: "Treats & Treatless FAQ",
                docId: "exchange/treats",
              },
              {
                label: "Tag Set",
                href: "https://archiveofourown.org/tag_sets/20815",
              },
              {
                label: "Nominations Sheet",
                href: "https://docs.google.com/spreadsheets/d/1w4E9Pre8sPjRx75YADBgtT7dYBvUusGDXv0ivB-ua44/edit?usp=sharing",
              },
              {
                label: "AutoAO3: Requests",
                href: "https://autoao3app.fandom.tools/#/dapolyex2024/all",
              },
							{
								label: "Treatless List",
								href: "https://docs.google.com/spreadsheets/d/1Lwe49QWm8xm_UxERbQcw2G4aVJ7gUCl6qs3gXc8J90w/edit?usp=sharing",
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
                label: "2024 Collection",
                href: "https://archiveofourown.org/collections/dapolyex2024/",
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
            type: "dropdown",
            label: "Follow Us",
            position: "left",
            className: "follow",
            items: [
              {
                label: "Tumblr",
                href: "https://dapolyshipping.tumblr.com",
                className: "tumblr",
              },
              {
                label: "BlueSky",
                href: "https://bsky.app/profile/dapolyshipping.bsky.social",
                className: "bluesky",
              },
              {
                label: "Discord",
                href: "https://discord.gg/VUaGepeJmf",
                className: "discord",
              },
              {
                label: "View Blog",
                href: "/blog",
                className: "blog",
              },
              {
                label: "Blog RSS",
                href: "https://dapolyshipping.neocities.org/blog/rss.xml",
                className: "rss",
              },
            ],
          },
          {
            label: "Mod Team",
            position: "left",
            href: "/mod",
            className: "modlink",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://thehangedman.club" class="navbar__link">The Hanged Man</a>`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
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

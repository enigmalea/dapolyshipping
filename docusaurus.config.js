// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DA Polyshipping',
  tagline: 'Dinosaurs are cool',
  url: 'https://dapolyshipping.neocities.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'DA Polyshipping',
        logo: {
          alt: 'DA Polyshipping Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Polyshipping Week',
            position: 'left',
            className: 'week',
            items: [
              {
                type: 'doc',
                label: 'General',
                docId: 'dapolyweek/intro',
              },
              {
                type: 'doc',
                label: 'FAQs',
                docId: 'dapolyweek/faq',
              },
              {
                type: 'doc',
                label: 'On Art Theft',
                docId: 'dapolyweek/arttheft',
              },
            ],
            },
          {
            type: 'dropdown',
            label: 'Exchange',
            position: 'left',
            className: 'exchange',
            items: [
              {
                type: 'doc',
                label: 'Info',
                docId: 'exchange/intro',
              },
              {
                type: 'doc',
                label: 'FAQs',
                docId: 'exchange/faq',
              },
              {
                type: 'doc',
                label: 'Treats & Treatless FAQ',
                docId: 'exchange/treats',
              },
              {
                label: 'Tag Set',
                href: 'https://archiveofourown.org/tag_sets/11946',
              },
              {
                label: 'Nominations Sheet',
                href: 'https://docs.google.com/spreadsheets/d/1xvcTzUAcScThPZC85SMyjiW9MmStGVjfg2vlqNFx1LA/edit?usp=sharing',
              },
              {
                label: 'AutoAO3: Requests',
                href: 'https://autoao3app.firebaseapp.com/#/dapolyex2022/all',
              },
              {
                label: 'Request an Extension',
                href: '/extensions',
              },
              {
                label: 'Past Events',
                href: '/past',
              },
            ],
            },
          {
            type: 'dropdown',
            label: 'Tutorials',
            position: 'left',
            className: 'tutorial',
            items: [
              {
                type: 'doc',
                label: 'How to Nominate',
                docId: 'exchange/tutorials/nominate',
              },
              {
                type: 'doc',
                label: 'How to Sign-Up',
                docId: 'exchange/tutorials/signups',
              },
              {
                type: 'doc',
                label: 'On Exchange Letters',
                docId: 'exchange/tutorials/letters',
              },
              {
                type: 'doc',
                label: 'How to Filter the AutoAO3 App',
                docId: 'exchange/tutorials/autoao3',
              },
              {
                type: 'doc',
                label: 'How to Fulfill Your Assignment',
                docId: 'exchange/tutorials/fulfill',
              },
              {
                type: 'doc',
                label: 'Keeping It Anon',
                docId: 'exchange/tutorials/anon',
              },
            ],
            },
            {
            type: 'dropdown',
            position: 'left',
            label: 'AO3',
            className: 'ao3',
            items: [
              {
                label: '2022 Collection',
                href: 'https://archiveofourown.org/collections/dapolyex2022/',
                className: 'ao3',
              },
              {
                label: '2021 Collection',
                href: 'https://archiveofourown.org/collections/dapolyex2021/',
                className: 'ao3',
              },
              {
                label: 'Parent Collection',
                href: 'https://archiveofourown.org/collections/dapolyex/',
                className: 'ao3',
              },
            ], 
          },
          {
            label: 'Tumblr',
            href: 'https://dapolyshipping.tumblr.com',
            position: 'left',
            className: 'tumblr',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/dapolyshipping',
            position: 'left',
            className: 'twitter',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/VUaGepeJmf',
            position: 'left',
            className: 'discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Info',
            items: [{
              label: 'DA Polyshipping Week',
              to: '/docs/dapolyweek/intro',
            },
            {
              label: 'Exchange Info',
              to: '/docs/exchange/intro',
            },
            {
              label: 'Exchange FAQs',
              to: '/docs/exchange/faq',
            },
            ],
          },
          {
            title: 'Tutorials',
            items: [
              {
                label: 'How to Nominate',
                to: '/docs/exchange/tutorials/nominate',
              },
              {
                label: 'How to Sign-Up',
                to: '/docs/exchange/tutorials/signups',
              },
              {
                label: 'On Exchange Letters',
                to: '/docs/exchange/tutorials/letters',
              },
              {
                label: 'How to Filter the AutoAO3 App',
                to: '/docs/exchange/tutorials/autoao3',
              },
            ],
          },
          {
            title: 'Contact',
            items: [{
                label: 'Tumblr Ask',
                href: 'https://dapolyshipping.tumblr.com/ask',
              },
              {
                label: 'Twitter DM',
                href: 'https://twitter.com/messages/compose?recipient_id=1408877238221692928',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VUaGepeJmf',
              },
              {
                label: 'dapolyshipping@gmail.com',
                href: 'mailto:dapolyshipping@gmail.com',
              },
            ],
          },
          {
            title: 'Mods',
            items: [{
              html: '<div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/enig.png" /> <div class="avatar__intro"><div class="avatar__name">enigmalea</div><small class="avatar__subtitle"><a href="http://twitter.com/enigmaleaDA" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://enigmalea.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div><div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/fox.png" /> <div class="avatar__intro"><div class="avatar__name">foxinboots</div><small class="avatar__subtitle"><a href="http://twitter.com/TheFoxInBoots" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://thefoxinboots.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div>'
            }, ],
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
        {name: 'theme-color', content: '#0a1027'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:creator', content: 'dapolyshipping'},
        {name: 'og:image', content: '/img/logo.png'},
      ],
    }
    ),
};

module.exports = config;

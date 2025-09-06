// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightThemeRapide from "starlight-theme-rapide";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dapolyshipping.neocities.org",

  integrations: [
    metaTags(),
    starlight({
      title: "Dragon Age Polyshipping",
      customCss: ["./src/styles/global.css"],
      logo: {
        src: "/public/favicon.svg",
      },
      pagefind: false,
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      plugins: [
        starlightThemeRapide(),
        starlightImageZoom(),
        starlightLinksValidator(),
        starlightSidebarTopics([
          {
            label: "DA Poly Sharing",
            link: "sharing/intro",
            icon: "external",
            items: [
              {
                label: "DA Poly Sharing",
                autogenerate: { directory: "sharing/" },
              },
            ],
          },
          {
            label: "DA Poly Exchange",
            icon: "heart",
            link: "exchange/intro",
            id: "exchanges",
            items: [
              "exchange/intro",
              "exchange/faq",
              "exchange/treats",
              {
                label: "Tutorials",
                autogenerate: { directory: "exchange/tutorials/" },
              },
              {
                label: "Current Exchange",
                badge: { text: "New", variant: "success" },
                items: [
                  {
                    label: "2025 Collection",
                    link: "https://archiveofourown.org/collections/dapolyex2025/",
                  },
                  {
                    label: "Tag Nominations",
                    link: "https://archiveofourown.org/tag_sets/25091",
                  },
                  {
                    label: "SIGN-UP HERE!",
                    link: "https://archiveofourown.org/collections/dapolyex2025/signups/new",
                  },
                  {
                    label: "Nominations Spreadsheet",
                    link: "https://docs.google.com/spreadsheets/d/1i8zVpxuR5n88zcZRqkoi_yWDMDVXEz6bQveHa7wSuBU/edit?usp=sharing",
                  },
                  {
                    label: "AutoAO3App: Tags",
                    link: "https://autoao3app.fandom.tools/#/dapolyex2025/tagset",
                  },
                  {
                    label: "AutoAO3App: Requests",
                    link: "https://autoao3app.fandom.tools/#/dapolyex2025/all",
                  },
                  {
                    label: "Treatless List",
                    link: "https://docs.google.com/spreadsheets/d/1PshNZg8xlqbfwIPboo0WJTgvaWei3731hqe62HikIBA/edit?usp=sharing",
                  },
                ],
              },
              {
                label: "Past Exchanges",
                items: [
                  {
                    label: "Parent Collection",
                    link: "https://archiveofourown.org/collections/dapolyex/",
                    badge: { text: "All Works", variant: "tip" },
                  },
                  {
                    label: "2024 Collection",
                    link: "https://archiveofourown.org/collections/dapolyex2024/",
                  },
                  {
                    label: "2023 Collection",
                    link: "https://archiveofourown.org/collections/dapolyex2023/",
                  },
                  {
                    label: "2022 Collection",
                    link: "https://archiveofourown.org/collections/dapolyex2022/",
                  },
                  {
                    label: "2021 Collection",
                    link: "https://archiveofourown.org/collections/dapolyex2021/",
                  },
                ],
              },
            ],
          },
        ]),
      ],
      expressiveCode: {
        themes: ["rose-pine", "rose-pine-dawn"],
      },
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/dapolyshipping.bsky.social",
        },
        {
          icon: "discord",
          label: "DA Poly Discord",
          href: "https://discord.gg/VUaGepeJmf",
        },
      ],
    }),
    favicons(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/search", "/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "CCBot",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "Slurp",
          crawlDelay: 30,
        },
      ],
    }),
    icon(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

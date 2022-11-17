// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WhatSend",
  tagline:
    "A Flutter Mobile Application Project That Allow Users To Send Easily WhatsApp Messages To Any Number In The World Without Saving Their Number In The Phone.",
  url: "https://Gwhyyy.github.io",
  baseUrl: "/WhatSend",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Gwhyyy", // Usually your GitHub org/user name.
  projectName: "WhatSend", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "WhatSend",
        logo: {
          alt: "WhatSend App Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "features",
            position: "left",
            label: "Features",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Gwhyyy",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://codecanyon.net/user/anasfik",
            label: "Codecanyon",
            position: "left",
          },
        ],
      },

      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

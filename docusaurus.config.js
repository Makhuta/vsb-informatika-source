// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VŠB Informatika',
  tagline: 'Database of the hardest/most needed subjects',
  favicon: 'img/vsb_informatika_icon.png',

  // Set the production url of your site here
  url: 'https://makhuta.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vsb-informatika/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Makhuta', // Usually your GitHub org/user name.
  projectName: 'vsb-informatika', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Makhuta/vsb-informatika-source/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Makhuta/vsb-informatika-source/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/vsb_informatika_banner.webp',
      navbar: {
        title: 'VŠB Informatika',
        logo: {
          alt: 'VŠB Informatika',
          src: 'img/vsb_informatika_icon.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Subjects',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'Úvod do logického myšlení',
                sidebarId: 'ULM',
              },
              {
                type: 'docSidebar',
                label: 'Algoritmy I',
                sidebarId: 'ALGI',
              },
              {
                type: 'docSidebar',
                label: 'Architektury počítačů a paralelních systémů',
                sidebarId: 'APPS',
              },
            ],
          },
          {
            label: 'Blog',
            to: 'blog',
            position: 'right',
          },
          {
            href: 'https://github.com/Makhuta/vsb-informatika',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Makhuta/vsb-informatika',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VŠB Informatika, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

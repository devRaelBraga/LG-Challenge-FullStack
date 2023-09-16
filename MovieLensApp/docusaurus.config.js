// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MovieLens App',
  tagline: 'Your favorite movies',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: String(process.env.API_URL),
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MovieLens App',
            // logo: {
            //   alt: 'My Site Logo',
            //   src: 'img/logo.svg',
            // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, 
          {
            href: 'https://github.com/devRaelBraga/LG-Challenge-FullStack',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/About/intro',
              },
            ],
          },
          {
            title: 'Technologies',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'NestJS',
                href: 'https://nestjs.com/',
              },
              {
                label: 'Docker',
                href: 'https://www.docker.com/',
              },
            ],
          },
          {
            title: 'My links',
            items: [
              {
                label: 'My site',
                href: 'https://hisrael.dev'
              },
              { 
                label: 'GitHub',
                href: 'https://github.com/devRaelBraga',
              },
              { 
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/hisrael-da-silva-braga-052188216/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hisrael Braga.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;
// module.exports = API_URL;

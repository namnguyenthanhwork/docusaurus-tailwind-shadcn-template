// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KreatorFlow Help Center',
  tagline: 'Your guide to creating with KreatorFlow.AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.kreatorflow.ai', // Assuming a subdomain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KreatorFlow', // Usually your GitHub org/user name.
  projectName: 'help-center', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KreatorFlow/help-center/tree/main'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/kreatorflow-social-card.jpg',
      navbar: {
        title: 'KreatorFlow Help Center',
        logo: {
          alt: 'KreatorFlow Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides'
          },
          { to: 'https://kreatorflow.ai/create', label: 'Create', position: 'left' },
          { to: 'https://kreatorflow.ai/video', label: 'Video', position: 'left' },
          { to: 'https://kreatorflow.ai/discover', label: 'Discover', position: 'left' },
          { to: 'https://kreatorflow.ai/pricing', label: 'Pricing', position: 'left' }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AI Tools',
            items: [
              {
                label: 'AI Image Generator',
                to: 'https://kreatorflow.ai/create'
              },
              {
                label: 'AI Video Generator',
                to: 'https://kreatorflow.ai/video'
              },
              {
                label: 'AI Character Generator',
                to: 'https://kreatorflow.ai/character'
              },
              {
                label: 'AI Face Swap (Coming Soon)',
                href: '#'
              },
              {
                label: 'AI Image Upscaler (Coming Soon)',
                href: '#'
              }
            ]
          },
          {
            title: 'Help',
            items: [
              {
                label: 'Guides & Tutorials',
                to: '/docs/intro'
              },
              {
                label: 'team@kreatorflow.ai',
                href: 'mailto:team@kreatorflow.ai'
              },
              {
                label: 'Discord Community',
                href: 'https://discord.gg/kreatorflow'
              }
            ]
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: 'https://kreatorflow.ai/privacy'
              },
              {
                label: 'Terms of Service',
                to: 'https://kreatorflow.ai/terms'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KreatorFlow.AI. All rights reserved.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Changelog',
        blogDescription: 'Latest updates and changes to KreatorFlow.AI.',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'blog',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/KreatorFlow/help-center/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config

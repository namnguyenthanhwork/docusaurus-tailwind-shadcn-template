// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Tailwind Shadcn/ui',
  tagline: 'Templates Docusaurus with Tailwind CSS and Shadcn/ui',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'namnguyenthanhwork', // Usually your GitHub org/user name.
  projectName: 'docusaurus-tailwind-shadcn-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true,
    v4: true
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
            'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main',
          docItemComponent: '@theme/ApiItem' // Derived from docusaurus-theme-openapi
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docusaurus Tailwind',
        logo: {
          alt: 'Docusaurus Tailwind Shadcn/ui Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/about-me',
            label: 'About Me',
            position: 'left'
          },
          {
            label: 'Petstore API',
            position: 'left',
            to: '/docs/category/petstore-versioned-api'
          },
          {
            'href': 'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template',
            'position': 'right',
            'className': 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Tailwind Shadcn. Templates by <a href="https://github.com/namnguyenthanhwork" style="font-weight: bold;" target="_blank">Thành Nam Nguyễn</a>`
      },
      prism: {
        additionalLanguages: [
          'ruby',
          'csharp',
          'php',
          'java',
          'powershell',
          'json',
          'bash',
          'dart',
          'objectivec',
          'r'
        ]
      },
      languageTabs: [
        { highlight: 'python', language: 'python', logoClass: 'python' },
        { highlight: 'bash', language: 'curl', logoClass: 'curl' },
        { highlight: 'csharp', language: 'csharp', logoClass: 'csharp' },
        { highlight: 'go', language: 'go', logoClass: 'go' },
        { highlight: 'javascript', language: 'nodejs', logoClass: 'nodejs' },
        { highlight: 'ruby', language: 'ruby', logoClass: 'ruby' },
        { highlight: 'php', language: 'php', logoClass: 'php' },
        { highlight: 'java', language: 'java', logoClass: 'java', variant: 'unirest' },
        { highlight: 'powershell', language: 'powershell', logoClass: 'powershell' },
        { highlight: 'dart', language: 'dart', logoClass: 'dart' },
        { highlight: 'javascript', language: 'javascript', logoClass: 'javascript' },
        { highlight: 'c', language: 'c', logoClass: 'c' },
        { highlight: 'objective-c', language: 'objective-c', logoClass: 'objective-c' },
        { highlight: 'ocaml', language: 'ocaml', logoClass: 'ocaml' },
        { highlight: 'r', language: 'r', logoClass: 'r' },
        { highlight: 'swift', language: 'swift', logoClass: 'swift' },
        { highlight: 'kotlin', language: 'kotlin', logoClass: 'kotlin' },
        { highlight: 'rust', language: 'rust', logoClass: 'rust' }
      ]
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
    ],
    'docusaurus-theme-openapi-docs'
  ],
  plugins: [
    ['./src/plugins/webpack-alias.js', {}],
    ['./src/plugins/tailwind-config.js', {}],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          // multiVersion
          petstore_versioned: {
            specPath: 'api-swagger/petstore.yaml',
            outputDir: 'docs/petstore_versioned', // No trailing slash
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            },
            version: '2.0.0', // Current version
            label: 'v2.0.0', // Current version label
            baseUrl: '/docs/petstore_versioned/swagger-petstore-yaml', // Leading slash is important
            downloadUrl:
              'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore.yaml',
            versions: {
              '1.0.0': {
                specPath: 'api-swagger/petstore-1.0.0.yaml',
                outputDir: 'docs/petstore_versioned/1.0.0', // No trailing slash
                label: 'v1.0.0',
                baseUrl: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml', // Leading slash is important
                downloadUrl:
                  'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore-1.0.0.yaml'
              }
            }
          }
          // singleVersion
          // petstore: {
          //   specPath: 'api-swagger/petstore.yaml',
          //   outputDir: 'docs/petstore',
          //   sidebarOptions: { groupPathsBy: 'tag', categoryLinkSource: 'tag' },
          //   downloadUrl: '/petstore.yaml',
          //   hideSendButton: false,
          //   showSchemas: true
          // }
        }
      }
    ],
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
        blogTitle: 'Blog',
        blogDescription: 'Blog description is here ...',
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
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config

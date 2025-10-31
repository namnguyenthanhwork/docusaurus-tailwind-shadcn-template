# Integrating TailwindCSS & Shadcn/UI with Docusaurus

This project demonstrates how to integrate TailwindCSS and Shadcn/UI with Docusaurus V3, creating a modern documentation website with beautiful, accessible UI components. Perfect for technical documentation, api docs, blogs, and project websites.

[**View Demo →**](https://docusaurus-tailwind-shadcn-template.vercel.app)

## Technology Stack

- ⚡️ Docusaurus V3
- 🎨 TailwindCSS for styling (Support v3 and v4)
- 🧩 Shadcn/UI components
- 🔍 `@easyops-cn/docusaurus-search-local` for search functionality
- 📝 Support generation API Docs by `@PaloAltoNetworks/docusaurus-openapi-docs` plugin
- 📱 Fully responsive design
- 🌗 Light/dark mode support

## Key Features

- **Modern Component Library**: Shadcn/UI integration provides beautiful, accessible components
- **Customizable Styling**: TailwindCSS enables rapid styling and customization
- **Full-Text Search**: Local search functionality powered by @easyops-cn/docusaurus-search-local
- **Dark Mode**: Seamless dark mode support with Docusaurus and Shadcn/UI
- **Performance Optimized**: Built with performance best practices

The website also features a new blog UI was built using TailwindCSS & Shadcn/UI components and provides a modern, clean interface for displaying blog posts. The blog posts are managed by a custom blog plugin, defined in `src/plugins/blog-plugin.js` and homepage config in `components/Homepage/index.js`.

Website has integrated OpenAPI Docs by `@PaloAltoNetworks/docusaurus-openapi-docs` plugin. You can see the API Docs in [API Docs](https://docusaurus-openapi.tryingpan.dev/).

## Quick Start

- To use this template (docs/blog) with Tailwind v3, switch to the `feature/docusaurus-tailwind-v3` branch.

```bash
git clone -b feature/docusaurus-tailwind-v3 https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
```

- To use this template (docs, api docs and blog) with Tailwind v3, switch to the `feature/docusaurus-tailwind-v3-openapi-docs` branch.

```bash
git clone -b feature/docusaurus-tailwind-v3-openapi-docs https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
```

- To use this template (docs/blog) with Tailwind v4, switch to the `feature/docusaurus-tailwind-v4` branch.

```bash
git clone -b feature/docusaurus-tailwind-v4 https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
```

- To use this template (docs, api docs and blog) with Tailwind v4, use `main` branch or switch to the `feature/docusaurus-tailwind-v4-openapi-docs` branch.

```bash
git clone -b feature/docusaurus-tailwind-v4-openapi-docs https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
```

## Deployments

### Vercel

You can get started by creating your own Docusaurus website and deploy to Vercel by clicking the link:

[![clone](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fnamnguyenthanhwork%2Fdocusaurus-tailwind-shadcn-template&showOptionalTeamCreation=false)

Vercel will copy the [Docusaurus TailwindCSS Shadcn/ui](https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template) and deploy the website for you. Once completed, every commit in the repo will be deployed automatically.

### Cloudflare Pages

Go to the platform of your choice and follow the instructions to deploy a new site from a Git repository.

Notice: Use yarn instead of npm for Cloudflare Pages.

### Netlify and Others

Go to the platform of your choice and follow the instructions to deploy a new site from a Git repository.

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
cd docusaurus-tailwind-shadcn-template
```

2. Install dependencies:

```bash
yarn install or npm install
```

3. Start the development server:

```bash
yarn start or npm start
```

4. Build for production:

```bash
yarn build or npm run build
```

5. Serve the production build:

```bash
yarn serve or npm run serve
```

## Project Structure

```bash
docusaurus-tailwind-shadcn-template/
├── api-swagger/         # API Swagger files - generate API Docs (if using @PaloAltoNetworks/docusaurus-openapi-docs)
├── blog/
├── docs/
├── src/
│   ├── components/
│   │   └── ui/           # Shadcn/UI components
│   ├── css/
│   │   └── custom.css    # TailwindCSS config and custom styles
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # React pages
│   ├── plugins/          # Docusaurus plugins
│   └── theme/            # Docusaurus theme customization
├── static/               # Static assets
├── tailwind.config.js    # TailwindCSS configuration (if using v3, removed in v4)
├── postcss.config.js     # PostCSS configuration
└── docusaurus.config.js  # Docusaurus configuration
```

## Configuration

### TailwindCSS Setup

The project includes a custom TailwindCSS configuration optimized for Docusaurus:

In v3, you can customize the TailwindCSS configuration in `tailwind.config.js`.

```javascript
// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{js,jsx,ts,tsx}',
    './blog/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-theme="dark"]'] // Support Docusaurus dark mode
  // ... rest of the configuration
}
```

In v4, you can customize the TailwindCSS configuration in `custom.css`. The `tailwind.config.js` file is removed in v4.

Read more about [TailwindCSS v4](https://tailwindcss.com/blog/tailwindcss-v4).

### Shadcn/UI Components

All Shadcn/UI components are located in `src/components/ui/`. To use a component:

```tsx
import { Button } from '@/components/ui/button'

function MyComponent() {
  return <Button variant='outline'>Click me</Button>
}
```

**Note:** Because Docusaurus doesn't support CLI installation for Shadcn/UI, you'll need to manually copy the components and adjust the import paths.

### Alias Configuration

This project includes configured path aliases to simplify imports and improve code organization. The aliases are set up in two places:

#### 1. JSConfig Configuration (`jsconfig.json`)

The `jsconfig.json` file provides TypeScript-like path mapping for better IDE support and IntelliSense:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@css/*": ["src/css/*"],
      "@lib/*": ["src/lib/*"],
      "@pages/*": ["src/pages/*"],
      "@plugins/*": ["src/plugins/*"],
      "@theme/*": ["src/theme/*"]
    }
  }
}
```

#### 2. Webpack Alias Configuration (`src/plugins/webpack-alias.js`)

The webpack alias plugin ensures that these paths work at build time:

```javascript
const path = require('path')

module.exports = function () {
  return {
    name: 'webpack-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../'),
            '@components': path.resolve(__dirname, '../components'),
            '@css': path.resolve(__dirname, '../css'),
            '@lib': path.resolve(__dirname, '../lib'),
            '@pages': path.resolve(__dirname, '../pages'),
            '@plugins': path.resolve(__dirname, '../plugins'),
            '@theme': path.resolve(__dirname, '../theme')
          }
        }
      }
    }
  }
}
```

#### Usage Examples

With these aliases, you can use cleaner import statements:

```tsx
// Instead of relative imports like this:
import { Button } from '../../../components/ui/button'
import { cn } from '../../../lib/utils'

// You can use alias imports:
import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
```

### Search Configuration

The local search is configured in `docusaurus.config.js`:

```javascript
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
```

### OpenAPI Docs Configuration

The [docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) package extends the Docusaurus CLI with commands for generating MDX using the OpenAPI specification as the source. The resulting MDX is fully compatible with [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) and can be used to render beautiful reference API docs when combined with the `docusaurus-theme-openapi-docs` theme.

If you don't have `docusaurus-plugin-openapi-docs` and `docusaurus-theme-openapi-docs` installed, you can install it by running:

```bash
yarn install docusaurus-openapi-docs docusaurus-theme-openapi-docs
```

or

```bash
npm install docusaurus-openapi-docs docusaurus-theme-openapi-docs
```

#### Configuration Generator

**Required:** You must have `.yaml` files in the `api-swagger` directory. The plugin will generate API docs based on these files.

Here is an example of properly configuring `docusaurus.config.js` for `docusaurus-plugin-openapi-docs` and `docusaurus-theme-openapi-docs` usage.

```javascript
// docusaurus.config.js
{
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem' // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      })
    ]
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          // if your API spec has multiple versions, you can use the following configuration
          petstore_versioned: {
            specPath: 'api-swagger/petstore.yaml', // Path to your API spec
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
                specPath: 'api-swagger/petstore-1.0.0.yaml', // Path to your API spec
                outputDir: 'docs/petstore_versioned/1.0.0', // No trailing slash
                label: 'v1.0.0',
                baseUrl: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml', // Leading slash is important
                downloadUrl:
                  'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore-1.0.0.yaml'
              }
            }
          }
          // if your API spec is a single version, you can use the following configuration
          petstore: {
            specPath: 'api-swagger/petstore.yaml', // Path to your API spec
            outputDir: 'docs/petstore', // No trailing slash
            sidebarOptions: { groupPathsBy: 'tag', categoryLinkSource: 'tag' },
            downloadUrl: '/petstore.yaml',
            hideSendButton: false,
            showSchemas: true
          }
        }
      }
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
}
```

Add prism and language support in `docusaurus.config.js`: see sample code in `docusaurus.config.js - themeConfig`.

#### Generating and Cleaning API Docs

Add scripts to `package.json` if not exist:

```json
"scripts": {
    "gen-api-docs": "docusaurus gen-api-docs",
    "clean-api-docs": "docusaurus clean-api-docs",
    "gen-api-docs:version": "docusaurus gen-api-docs:version",
    "clean-api-docs:version": "docusaurus clean-api-docs:version"
}
```

Generating versioned API docs example (current version):

```bash
yarn gen-api-docs <id config>
```

or

```bash
npm run gen-api-docs <id config>
```

Generating all Petstore versioned API docs (exclude current version):

```bash
yarn gen-api-docs:version petstore:all
```

or

```bash
npm run gen-api-docs:version petstore:all
```

Cleaning versioned API docs example:

```bash
yarn clean-api-docs <id config>
```

or

```bash
npm run clean-api-docs <id config>
```

or delete the `docs/<id>` directory manually.

#### API Docs Sidebar

You can customize the API Docs sidebar by editing the `sidebars.js` file.

```javascript
// sidebars.js
import petstoreVersions from './docs/petstore_versioned/versions.json' // import if using multi versioned sidebar

import { versionCrumb, versionSelector } from 'docusaurus-plugin-openapi-docs/lib/sidebars/utils'

import petstoreVersionedSidebar from './docs/petstore_versioned/sidebar' // import when run generate API Docs command
import petstoreVersionSidebar from './docs/petstore_versioned/1.0.0/sidebar' // import when run generate API Docs command

const sidebars = {
  // sidebar for docs
  'tutorialSidebar': [
    'intro',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations'
      ]
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: ['tutorial-extras/manage-docs-versions', 'tutorial-extras/translate-your-site']
    }
  ],

  // sidebar for api docs
  // single versioned sidebar
  // 'openApiSidebar': [
  //   {
  //     type: 'category',
  //     label: 'Petstore',
  //     link: {
  //       type: 'generated-index',
  //       title: 'Petstore API',
  //       description:
  //         'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
  //       slug: '/category/petstore-api'
  //     },
  //     items: petstoreVersionedSidebar // import when run generate API Docs command
  //   }
  // ],

  // multi versioned sidebar
  'petstore-2.0.0': [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(petstoreVersions), // import if using multi versioned sidebar
      className: 'version-button'
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`)
    },
    {
      type: 'category',
      label: 'Petstore',
      link: {
        type: 'generated-index',
        title: 'Petstore API (latest)',
        description:
          'This is a sample server Petstore server. Generated by @docusaurus-plugin-openapi-docs plugin. Read more: https://github.com/PaloAltoNetworks/docusaurus-openapi-docs',
        slug: '/category/petstore-versioned-api'
      },
      items: petstoreVersionedSidebar // import when run generate API Docs command
    }
  ],

  'petstore-1.0.0': [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(petstoreVersions), // import if using multi versioned sidebar
      className: 'version-button'
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`)
    },
    {
      type: 'category',
      label: 'Petstore',
      link: {
        type: 'generated-index',
        title: 'Petstore API (v1.0.0)',
        description:
          'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
        slug: '/category/petstore-api-1.0.0'
      },
      items: petstoreVersionSidebar // import when run generate API Docs command
    }
  ]
}

export default sidebars
```

👉 Read more config about [docusaurus-plugin-openapi-docs](https://docusaurus-openapi.tryingpan.dev/)

## Customization theme

1. Modify colors in `tailwind.config.js` (v3) or `src/css/custom.css` (v4)
2. Update CSS variables in `src/css/custom.css`
3. Customize Shadcn/UI components in `src/components/ui/`

### Adding New Components

1. Create component in `src/components/ui/` or `src/components/`
2. Import and use in your pages/docs

Example:

```tsx
// src/components/ui/custom-button.tsx
import { Button } from '@/components/ui/button'

export function CustomButton({ children }) {
  return <Button className='custom-styles'>{children}</Button>
}
```

### Overriding Docusaurus Components

You can override Docusaurus components by Swizzling. Read more about [Component Swizzling](https://docusaurus.io/docs/swizzling).

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Support

- 📚 [Docusaurus Documentation](https://docusaurus.io/)
- 🎨 [Shadcn/UI Documentation](https://ui.shadcn.com/)
- 🌈 [TailwindCSS Documentation](https://tailwindcss.com/)
- 📝 [OpenAPI Docs](https://docusaurus-openapi.tryingpan.dev/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Built with ♥ by [namnguyenthanhwork]

## Buy me a coffee

If you find this project helpful, you can buy me a coffee 🙏

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Donate-FF813F.svg)](https://buymeacoffee.com/thanhnamnguyen)

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here. [🙏 Become a sponsor via Buy me a coffee](https://buymeacoffee.com/thanhnamnguyen)

<a href="https://github.com/fthobe" target="_blank"><img src="https://avatars.githubusercontent.com/u/579379" alt="fthobe" width="64px" height="64px" style="border-radius: 50%;" /></a>

## Template similar

- [Docusaurus Material UI Template](https://github.com/namnguyenthanhwork/docusaurus-material-ui-template)

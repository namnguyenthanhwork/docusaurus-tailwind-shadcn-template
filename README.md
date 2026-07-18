# Integrating TailwindCSS & Shadcn/UI with Docusaurus

This project demonstrates how to integrate TailwindCSS and Shadcn/UI with Docusaurus V3, creating a modern documentation website with beautiful, accessible UI components. Perfect for technical documentation, api docs, blogs, and project websites.

[**View Demo →**](https://docusaurus-tailwind-shadcn-template.netlify.app)

## Technology Stack

- ⚡️ Docusaurus V3
- 🟦 TypeScript throughout (config, plugins, theme, components)
- 🥟 [Bun](https://bun.sh) as the package manager and runtime
- 🎨 TailwindCSS for styling (Support v3 and v4)
- 🧩 Shadcn/UI components
- 🔍 `@easyops-cn/docusaurus-search-local` for search functionality
- 📝 Support generation API Docs by `@PaloAltoNetworks/docusaurus-openapi-docs` plugin
- 🖊️ Git-based Admin CMS powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms), served from `static/admin`
- 📱 Fully responsive design
- 🌗 Light/dark mode support

## Key Features

- **Modern Component Library**: Shadcn/UI integration provides beautiful, accessible components
- **Customizable Styling**: TailwindCSS enables rapid styling and customization
- **Full-Text Search**: Local search functionality powered by @easyops-cn/docusaurus-search-local
- **Dark Mode**: Seamless dark mode support with Docusaurus and Shadcn/UI
- **Performance Optimized**: Built with performance best practices

The website also features a new blog UI was built using TailwindCSS & Shadcn/UI components and provides a modern, clean interface for displaying blog posts. The blog posts are managed by a custom blog plugin, defined in `src/plugins/blog-plugin.ts` and homepage config in `src/components/homepage/index.tsx`.

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

Notice: Use `bun` as the install command for Cloudflare Pages, it's a fast JS runtime.

Workers & Page: Go to settings project -> Build -> Change build command to `bun install && bun run build`. In Variables and secrets: add `BUN_VERSION` and value `1.3.11`

### Netlify and Others

Go to the platform of your choice and follow the instructions to deploy a new site from a Git repository.

## Local Development

This project uses [Bun](https://bun.sh) (`>=1.3.0`) as the package manager and runtime. Node.js `>=24.0` is also required.

1. Clone the repository:

```bash
git clone https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
cd docusaurus-tailwind-shadcn-template
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun start
```

4. Type-check the project:

```bash
bun run typecheck
```

5. Build for production:

```bash
bun run build
```

6. Serve the production build:

```bash
bun run serve
```

## Project Structure

```bash
docusaurus-tailwind-shadcn-template/
├── api-swagger/         # API Swagger files - generate API Docs (if using @PaloAltoNetworks/docusaurus-openapi-docs)
├── blog/
├── docs/
├── src/
│   ├── components/
│   │   ├── homepage/     # Homepage sections (hero, features, latest news wiring)
│   │   ├── personal/     # About-me page sections
│   │   ├── shared/       # Components shared across pages (HeroBanner, LatestNews, TimeStamp)
│   │   └── ui/           # Shadcn/UI components
│   ├── css/
│   │   └── custom.css    # TailwindCSS config and custom styles
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # React pages (.tsx)
│   ├── plugins/          # Docusaurus plugins (.ts)
│   └── theme/            # Docusaurus theme customization (swizzled components, .tsx)
├── static/
│   └── admin/            # Sveltia CMS (config.yml + index.html), served at /admin
├── tailwind.config.js    # TailwindCSS configuration (if using v3, removed in v4)
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration and path aliases
├── sidebars.ts           # Docs sidebar configuration
└── docusaurus.config.ts  # Docusaurus configuration
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

#### 1. TypeScript Configuration (`tsconfig.json`)

The `tsconfig.json` file provides path mapping for TypeScript, IDE support, and IntelliSense:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@css/*": ["./src/css/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@lib/*": ["./src/lib/*"],
      "@pages/*": ["./src/pages/*"],
      "@plugins/*": ["./src/plugins/*"],
      "@store/*": ["./src/store/*"],
      "@theme/*": ["./src/theme/*"],
      "@types/*": ["./src/types/*"],
      "@constants/*": ["./src/constants/*"],
      "@utils/*": ["./src/utils/*"]
    }
  }
}
```

#### 2. Webpack Alias Configuration (`src/plugins/webpack-alias.ts`)

The webpack alias plugin ensures that these paths work at build time:

```typescript
import path from 'node:path'

import type { Plugin } from '@docusaurus/types'

export default function webpackAliasPlugin(): Plugin<void> {
  return {
    name: 'webpack-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../'),
            '@components': path.resolve(__dirname, '../components'),
            '@css': path.resolve(__dirname, '../css'),
            '@hooks': path.resolve(__dirname, '../hooks'),
            '@lib': path.resolve(__dirname, '../lib'),
            '@pages': path.resolve(__dirname, '../pages'),
            '@plugins': path.resolve(__dirname, '../plugins'),
            '@store': path.resolve(__dirname, '../store'),
            '@theme': path.resolve(__dirname, '../theme'),
            '@types': path.resolve(__dirname, '../types'),
            '@constants': path.resolve(__dirname, '../constants'),
            '@utils': path.resolve(__dirname, '../utils')
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

The local search is configured in `docusaurus.config.ts`:

```typescript
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
bun add docusaurus-plugin-openapi-docs docusaurus-theme-openapi-docs
```

#### Configuration Generator

**Required:** You must have `.yaml` files in the `api-swagger` directory. The plugin will generate API docs based on these files.

Here is an example of properly configuring `docusaurus.config.ts` for `docusaurus-plugin-openapi-docs` and `docusaurus-theme-openapi-docs` usage.

```typescript
// docusaurus.config.ts
import type { Options as PresetClassicOptions } from '@docusaurus/preset-classic'

{
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem' // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      } satisfies PresetClassicOptions
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

Add prism and language support in `docusaurus.config.ts`: see sample code in `docusaurus.config.ts - themeConfig`.

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
bun run gen-api-docs <id config>
```

Generating all Petstore versioned API docs (exclude current version):

```bash
bun run gen-api-docs:version petstore:all
```

Cleaning versioned API docs example:

```bash
bun run clean-api-docs <id config>
```

or delete the `docs/<id>` directory manually.

#### API Docs Sidebar

You can customize the API Docs sidebar by editing the `sidebars.ts` file.

```typescript
// sidebars.ts
// import if using multi versioned sidebar
import { versionCrumb, versionSelector } from 'docusaurus-plugin-openapi-docs/lib/sidebars/utils'

// import when run generate API Docs command
import petstoreVersionSidebar from './docs/petstore_versioned/1.0.0/sidebar'
import petstoreVersions from './docs/petstore_versioned/versions.json'

import petstoreVersionedSidebar from './docs/petstore_versioned/sidebar'

// import when run generate API Docs command

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

### Admin CMS (Sveltia CMS)

This project ships a Git-based Admin CMS at `static/admin`, so it's served at `/admin` on the built site (e.g. `http://localhost:3000/admin` in dev). It uses [Sveltia CMS](https://github.com/sveltia/sveltia-cms), a Decap/Netlify CMS compatible, actively maintained alternative that needs no extra dependency — `static/admin/index.html` loads it straight from a CDN (`https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js`).

- `static/admin/index.html` — the CMS entry page, points to `config.yml` and loads the Sveltia CMS script
- `static/admin/config.yml` — defines the `backend` (GitHub repo/branch) and all `collections` (blog posts, docs, authors)

#### Local editing

`config.yml` sets `local_backend: true`, which lets Sveltia CMS work directly against your local git checkout instead of GitHub, using the File System Access API (Chromium-based browsers only, e.g. Chrome/Edge):

1. Run `bun start` and open `http://localhost:3000/admin`
2. Click **Work with Local Repository** and grant access to the project folder
3. Edits are written straight to the local files in `blog/` / `docs/` — review and commit them with git as usual

#### Production editing

In production the CMS commits directly to GitHub via the `backend` config (`repo`, `branch`) in `config.yml`. Signing in with GitHub requires an OAuth client:

- **Netlify**: OAuth is handled automatically by Netlify's identity/git-gateway integration, no extra setup needed
- **Vercel / Cloudflare Pages / other hosts**: you need to deploy your own GitHub OAuth app/proxy (Sveltia CMS is compatible with the same OAuth provider setup as Decap CMS, e.g. [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)) and reference it via `backend.base_url` in `config.yml`

#### Customizing collections

Edit `static/admin/config.yml` to add/remove `collections` (each maps to a folder like `blog` or `docs/...` and a set of frontmatter `fields`). See the [Sveltia CMS docs](https://github.com/sveltia/sveltia-cms#configuration) (config format is the same as Decap/Netlify CMS) for all available widgets and options.

## Customization theme

1. Modify colors in `tailwind.config.js` (v3) or `src/css/custom.css` (v4)
2. Update CSS variables in `src/css/custom.css`
3. Customize Shadcn/UI components in `src/components/ui/`

### Adding New Components

1. Create the component under `src/components/ui/` (Shadcn/UI primitives), `src/components/shared/` (components reused across multiple pages), or a page-specific folder like `src/components/homepage/` / `src/components/personal/`
2. Import and use in your pages/docs

Example:

```tsx
// src/components/ui/custom-button.tsx
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

export function CustomButton({ children }: { children: ReactNode }) {
  return <Button className='custom-styles'>{children}</Button>
}
```

### Overriding Docusaurus Components

You can override Docusaurus components by Swizzling. Since this project is TypeScript-first, prefer the `--typescript` flag so ejected components land in `src/theme/` as `.tsx`:

```bash
bun run swizzle @docusaurus/theme-classic <ComponentName> --typescript --eject
```

Read more about [Component Swizzling](https://docusaurus.io/docs/swizzling).

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

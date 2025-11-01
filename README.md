# Integrating TailwindCSS & Shadcn/UI with Docusaurus

This project demonstrates how to integrate TailwindCSS and Shadcn/UI with Docusaurus V3, creating a modern documentation website with beautiful, accessible UI components. Perfect for technical documentation, api docs, blogs, and project websites.

[**View Demo →**](https://docusaurus-tailwind-shadcn-template.vercel.app)

## Technology Stack

- ⚡️ Docusaurus V3
- 🎨 TailwindCSS for styling (Support v3 and v4)
- 🧩 Shadcn/UI components
- 🔍 `@easyops-cn/docusaurus-search-local` for search functionality
- 📱 Fully responsive design
- 🌗 Light/dark mode support

## Key Features

- **Modern Component Library**: Shadcn/UI integration provides beautiful, accessible components
- **Customizable Styling**: TailwindCSS enables rapid styling and customization
- **Full-Text Search**: Local search functionality powered by @easyops-cn/docusaurus-search-local
- **Dark Mode**: Seamless dark mode support with Docusaurus and Shadcn/UI
- **Performance Optimized**: Built with performance best practices

The website also features a new blog UI was built using TailwindCSS & Shadcn/UI components and provides a modern, clean interface for displaying blog posts. The blog posts are managed by a custom blog plugin, defined in `src/plugins/blog-plugin.js` and homepage config in `components/Homepage/index.js`.

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

## Cloudflare Pages

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
npm install
```

3. Start the development server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

5. Serve the production build:

```bash
npm run serve
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

## Customization

### Theming

1. Modify colors in `tailwind.config.js`
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

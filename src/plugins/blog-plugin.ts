import type { BlogContent, BlogPost, PluginOptions } from '@docusaurus/plugin-content-blog'
import defaultBlogPlugin, { validateOptions } from '@docusaurus/plugin-content-blog'
import type { LoadContext, Plugin, PluginContentLoadedActions } from '@docusaurus/types'

// Extra homepage-related options accepted alongside the standard blog plugin options
type BlogPluginExtendedOptions = PluginOptions & {
  blogTitle?: string
  blogDescription?: string
}

async function createRecentPostModule(
  blogPost: BlogPost,
  index: number,
  actions: PluginContentLoadedActions
) {
  return {
    // Inject the metadata you need for each recent blog post
    blogData: await actions.createData(
      `home-page-recent-post-metadata-${index}.json`,
      JSON.stringify({
        metadata: blogPost.metadata
      })
    ),

    // Inject the MDX excerpt as a JSX component prop
    // (what's above the <!-- truncate --> marker)
    Preview: {
      __import: true,
      // The markdown file for the blog post will be loaded by webpack
      path: blogPost.metadata.source,
      query: {
        truncated: true
      }
    }
  }
}

async function blogPluginExtended(
  context: LoadContext,
  pluginOptions: BlogPluginExtendedOptions
): Promise<Plugin<BlogContent>> {
  const blogPluginInstance = await defaultBlogPlugin(context, pluginOptions)

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (params) {
      const { content, actions } = params

      // Get the 6 latest blog posts
      const recentPostsLimit = 6
      const recentPosts = [...content.blogPosts].splice(0, recentPostsLimit)

      actions.addRoute({
        // Add route for the home page
        path: '/',
        exact: true,

        // The component to use for the "Home" page route
        component: '@site/src/components/homepage/index',

        // These are the props that will be passed to our "Home" page component
        modules: {
          homePageBlogMetadata: await actions.createData(
            'home-page-blog-metadata.json',
            JSON.stringify({
              blogTitle: pluginOptions.blogTitle,
              blogDescription: pluginOptions.blogDescription,
              path: pluginOptions.path,
              totalPosts: content.blogPosts.length,
              totalRecentPosts: recentPosts.length
            })
          ),
          recentPosts: await Promise.all(
            recentPosts.map((blogPost, index) => createRecentPostModule(blogPost, index, actions))
          )
        }
      })

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded!(params)
    }
  }
}

export { validateOptions }
export default blogPluginExtended

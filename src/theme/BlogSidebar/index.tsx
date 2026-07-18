import type { ReactNode } from 'react'

import { useWindowSize } from '@docusaurus/theme-common'

import type { Props } from '@theme/BlogSidebar'
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop'
import BlogSidebarMobile from '@theme/BlogSidebar/Mobile'

// Extends the official Props with a custom flag to fully hide the sidebar on
// desktop (used on the homepage-embedded blog list, which has its own layout)
export interface BlogSidebarProps extends Props {
  readonly hideOnDesktop?: boolean
}

export default function BlogSidebar({ sidebar, hideOnDesktop }: BlogSidebarProps): ReactNode {
  const windowSize = useWindowSize()

  if (!sidebar?.items.length) {
    return null
  }
  // Mobile sidebar doesn't need to be server-rendered
  if (windowSize === 'mobile') {
    return <BlogSidebarMobile sidebar={sidebar} />
  }

  if (hideOnDesktop) {
    return <></>
  }

  return <BlogSidebarDesktop sidebar={sidebar} />
}

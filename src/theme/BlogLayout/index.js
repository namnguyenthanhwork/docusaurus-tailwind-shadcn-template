import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import BlogSidebar from '@theme/BlogSidebar'

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props
  const hasSidebar = sidebar && sidebar.items.length > 0

  return (
    <Layout {...layoutProps}>
      <div className='container max-w-7xl px-4 py-10'>
        <div className='row'>
          <BlogSidebar sidebar={sidebar} hideOnDesktop />
          <main
            className={clsx('col', {
              'col--12': hasSidebar && !toc,
              'col--9': hasSidebar && toc,
              'col--9 col--offset-1': !hasSidebar
            })}
          >
            {children}
          </main>
          {toc && <div className='col col--3'>{toc}</div>}
        </div>
      </div>
    </Layout>
  )
}

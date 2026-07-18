import clsx from 'clsx'
import type { ReactNode } from 'react'

import Link from '@docusaurus/Link'
import { useBlogMetadata } from '@docusaurus/plugin-content-blog/client'
import { HtmlClassNameProvider, PageMetadata, ThemeClassNames } from '@docusaurus/theme-common'
import {
  BlogAuthorNoPostsLabel,
  BlogAuthorsListViewAllLabel,
  useBlogAuthorPageTitle
} from '@docusaurus/theme-common/internal'

import Author from '@theme/Blog/Components/Author'
import type { Props } from '@theme/Blog/Pages/BlogAuthorsPostsPage'
import BlogLayout from '@theme/BlogLayout'
import BlogPostItems from '@theme/BlogPostItems'
import SearchMetadata from '@theme/SearchMetadata'

import { BlogPagination } from '../../../BlogPagination'

function Metadata({ author }: Props): ReactNode {
  const title = useBlogAuthorPageTitle(author)
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag='blog_authors_posts' />
    </>
  )
}

function ViewAllAuthorsLink() {
  const { authorsListPath } = useBlogMetadata()
  return (
    <Link href={authorsListPath}>
      <BlogAuthorsListViewAllLabel />
    </Link>
  )
}

function Content({ author, items, sidebar, listMetadata }: Props): ReactNode {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className='mb-10'>
        <Author as='h1' author={author} />
        {author.description && <p>{author.description}</p>}
        <ViewAllAuthorsLink />
      </header>
      {items.length === 0 ? (
        <p>
          <BlogAuthorNoPostsLabel />
        </p>
      ) : (
        <>
          <BlogPostItems items={items} />
          <BlogPagination metadata={listMetadata} />
        </>
      )}
    </BlogLayout>
  )
}

export default function BlogAuthorsPostsPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogAuthorsPostsPage)}
    >
      <Metadata {...props} />
      <Content {...props} />
    </HtmlClassNameProvider>
  )
}

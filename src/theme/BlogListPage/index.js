import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
import BlogLayout from '@theme/BlogLayout'
import SearchMetadata from '@theme/SearchMetadata'
import BlogPostItems from '@theme/BlogPostItems'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { BlogPagination } from '../BlogPagination'

function BlogListPageMetadata(props) {
  const { metadata } = props
  const {
    siteConfig: { title: siteTitle }
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === '/'
  const title = isBlogOnlyMode ? siteTitle : blogTitle

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag='blog_posts_list' />
    </>
  )
}

function BlogHomepageBanner(props) {
  const blogMetadata = props.metadata
  const imageDefault = {
    urlBannerBg:
      'https://res.cloudinary.com/thanhnam/image/upload/v1696174608/thanhnamnguyen.dev/blog/blog-banner_othakp.png',
    urlAvatar:
      'https://res.cloudinary.com/thanhnam/image/upload/v1715137157/project/docusaurus-material-ui-template/logo_wnw5lv.png'
  }

  return (
    <div className='blog'>
      <div className='relative'>
        <Image
          img={useBaseUrl(imageDefault.urlBannerBg)}
          alt='Blog banner'
          className='rounded-lg'
          loading='lazy'
        />
        <Image
          img={useBaseUrl(imageDefault.urlAvatar)}
          alt='avatar blog'
          className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-white p-2'
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
      <div className='my-20 text-center'>
        <h2 className='mb-2 text-xl font-bold md:text-2xl lg:text-3xl'>{blogMetadata.blogTitle}</h2>
        <p className=''>{blogMetadata.blogDescription}</p>
      </div>
    </div>
  )
}

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props

  return (
    <BlogLayout sidebar={sidebar}>
      <BlogHomepageBanner {...props} />
      <BlogPostItems items={items} />
      <BlogPagination metadata={metadata} />
    </BlogLayout>
  )
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}

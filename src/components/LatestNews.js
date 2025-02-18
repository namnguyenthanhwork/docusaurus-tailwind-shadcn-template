import React from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import TagsListInline from '@theme/TagsListInline'

import TimeStamp from './TimeStamp'
import { Avatar } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter } from '../components/ui/card'

function RecentBlogPostCard({ recentPost }) {
  const { blogData } = recentPost

  return (
    <Card className='flex w-full flex-col border-0 bg-transparent shadow-none'>
      <Link
        to={blogData.metadata.permalink}
        className='overflow-hidden transition-opacity hover:opacity-90'
      >
        <Image
          className='block h-auto w-full rounded-lg object-cover'
          img={useBaseUrl(blogData.metadata.frontMatter.image)}
          alt={blogData.metadata.title}
          loading='lazy'
        />
      </Link>

      <CardContent className='mt-2 p-4'>
        <Link to={blogData.metadata.permalink} className='mt-4'>
          <p className='mb-1 p-0 text-xl font-semibold'>{blogData.metadata.title}</p>
        </Link>

        <p className='mt-2 mb-4 line-clamp-2 dark:text-gray-400'>{blogData.metadata.description}</p>
        <div className='my-2 flex flex-wrap items-center gap-2'>
          {blogData.metadata.authors.map((author, index) => (
            <Link
              href={author.page.permalink}
              title={author.name}
              key={index}
              className='transition-opacity hover:opacity-80'
            >
              <Avatar>
                <Image
                  alt={author.name}
                  img={useBaseUrl(author.imageURL)}
                  className='aspect-square h-full w-full'
                />
              </Avatar>
            </Link>
          ))}

          <div className='text-sm dark:text-gray-400'>
            <span>
              <TimeStamp timestamp={blogData.metadata.date} />
            </span>
            <span className='mx-2'>•</span>
            <span>{Math.ceil(blogData.metadata.readingTime)} min read</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='px-2'>
        {blogData.metadata.tags.length > 0 && (
          <div className='blog-tags flex flex-wrap gap-2'>
            <TagsListInline tags={blogData.metadata.tags} />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default function LatestNews({ homePageBlogMetadata, recentPosts }) {
  return (
    <div className='mx-auto my-16 max-w-7xl px-4'>
      <div className='mb-16 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>{homePageBlogMetadata.blogTitle}</h2>
        <p>{homePageBlogMetadata.blogDescription}</p>
      </div>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {recentPosts.map((recentPost, index) => (
          <div key={index}>
            <RecentBlogPostCard recentPost={recentPost} />
          </div>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <Button asChild>
          <Link to={homePageBlogMetadata.path} className='hover:text-primary-foreground'>
            See all
          </Link>
        </Button>
      </div>
    </div>
  )
}

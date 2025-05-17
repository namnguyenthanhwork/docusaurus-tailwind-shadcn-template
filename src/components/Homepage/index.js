import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import HomepageFeatures from './Features'
import LatestNews from '../LatestNews'

import { Button } from '../ui/button'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header
      className='hero hero--primary px-2 py-20 text-center'
    >
      <div className='container'>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'>
          {siteConfig.title}
        </Heading>

        <p className='mb-8 text-lg md:text-xl lg:text-2xl'>
          <span className='mb-1 block'>{siteConfig.tagline}</span>
        </p>

        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <Button asChild size='lg' className='w-full bg-gradient-to-r from-purple-600 via-purple-500 to-sky-500 text-white hover:from-purple-500 hover:via-purple-400 hover:to-sky-400 sm:w-auto'>
            <Link href='https://kreatorflow.ai/create'>
              Return to Creation
            </Link>
          </Button>
          <Button asChild size='lg' variant='outline' className='w-full border-purple-500/40 bg-purple-900/20 text-white/90 hover:bg-purple-800/40 hover:text-white sm:w-auto'>
            <Link to='/docs/guides'>
              Explore the Docs
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LatestNews recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  )
}

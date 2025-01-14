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
      className='px-2 py-20 text-center text-slate-800'
      style={{
        backgroundImage: `url('/img/banner.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className='container'>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'>
          {siteConfig.title}
        </Heading>

        <p className='mb-4 text-lg md:text-xl lg:text-2xl'>
          <span className='mb-1 block'>{siteConfig.tagline}</span>
          <Link
            href='https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template'
            className='text-blue-700 dark:text-green-700'
          >
            Please read README.md for more about project information
          </Link>
        </p>

        <Button asChild>
          <Link to='/docs/intro'>Docusaurus Tutorial - 5min ⏱️</Link>
        </Button>
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

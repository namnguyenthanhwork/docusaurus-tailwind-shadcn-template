import type { ReactNode } from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import Layout from '@theme/Layout'

import HomepageFeatures from '@/components/homepage/Features'
import HeroBanner from '@/components/shared/HeroBanner'
import LatestNews from '@/components/shared/LatestNews'
import type { HomePageBlogMetadata, RecentPost } from '@/components/shared/LatestNews'

interface HomeProps {
  homePageBlogMetadata: HomePageBlogMetadata
  recentPosts: RecentPost[]
}

export default function Home({ homePageBlogMetadata, recentPosts }: HomeProps): ReactNode {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main className='background-grid background-grid--fade-out'>
        <HeroBanner />
        <HomepageFeatures />
        <LatestNews recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  )
}

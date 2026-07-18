import type { ReactNode } from 'react'

import Layout from '@theme/Layout'

import { AboutSection, ContactSection, HeroSection, SkillsSection } from '@/components/personal'

export default function About(): ReactNode {
  return (
    <Layout
      title='About Me'
      description='Software Engineer turned Entrepreneur. I love building things and helping people.'
    >
      <div className='background-grid background-grid--fade-out'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </Layout>
  )
}

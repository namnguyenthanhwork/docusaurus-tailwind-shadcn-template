import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Image from '@theme/IdealImage'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

export default function HeroSection() {
  const avatarUrl = useBaseUrl('/img/docusaurus.png')
  const emailIcon = useBaseUrl('/img/email.svg')
  const xIcon = useBaseUrl('/img/x-logo.svg')
  const githubIcon = useBaseUrl('/img/github.svg')
  const linkedinIcon = useBaseUrl('/img/linkedin.svg')

  return (
    <section className='container mx-auto max-w-5xl px-4 pt-20 pb-16'>
      <div className='flex flex-col items-center gap-8 md:flex-row'>
        {/* Left side - Text content */}
        <div className='flex-1 space-y-6'>
          <div className='inline-block'>
            <AnimatedGradientText className='text-lg font-semibold'>
              👋 Hi, I'm Lorem Ipsum
            </AnimatedGradientText>
          </div>

          <h1 className='text-5xl font-bold tracking-tight md:text-6xl'>
            Consectetur Adipiscing Engineer
          </h1>

          <p className='text-xl leading-relaxed text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className='flex flex-wrap gap-3 pt-4'>
            <Button variant='outline' size='lg' asChild>
              <a href='mailto:lorem@ipsum.com' className='flex items-center'>
                <Image img={emailIcon} alt='Email' className='h-5 w-5' />
                Email me
              </a>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link
                to='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center'
              >
                <Image img={xIcon} alt='X' className='h-5 w-5 text-white' />
                Twitter
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link
                to='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center'
              >
                <Image img={githubIcon} alt='GitHub' className='h-5 w-5' />
                GitHub
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link
                to='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center'
              >
                <Image img={linkedinIcon} alt='LinkedIn' className='h-5 w-5' />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        {/* Right side - Avatar */}
        <div className='shrink-0'>
          <Avatar className='h-48 w-48 border-4 border-gray-200 dark:border-gray-700'>
            <AvatarImage src={avatarUrl} alt='Profile Picture' />
            <AvatarFallback className='bg-linear-to-br from-blue-500 to-purple-600 text-6xl font-bold text-white'>
              DV
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}

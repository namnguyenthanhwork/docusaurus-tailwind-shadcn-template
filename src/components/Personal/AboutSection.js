import React from 'react'
import Link from '@docusaurus/Link'

export default function AboutSection() {
  return (
    <section className='container mx-auto max-w-5xl px-4 py-16'>
      <h2 className='mb-8 text-3xl font-bold'>About</h2>
      <div className='prose prose-lg dark:prose-invert max-w-none'>
        <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.{' '}
          <Link
            to='https://example.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-blue-600 no-underline hover:underline'
          >
            Learn more
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

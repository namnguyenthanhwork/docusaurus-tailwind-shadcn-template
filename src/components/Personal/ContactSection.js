import React from 'react'
import Link from '@docusaurus/Link'

export default function ContactSection() {
  return (
    <section id='contact' className='container mx-auto max-w-5xl px-4 py-16'>
      <div className='space-y-6 text-center'>
        <h2 className='text-3xl font-bold'>Get in Touch</h2>
        <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt{' '}
          <Link
            to='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-blue-600 hover:underline'
          >
            ut labore et dolore magna aliqua
          </Link>{' '}
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  )
}

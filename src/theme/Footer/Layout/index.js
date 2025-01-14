import React from 'react'

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer className='bg-gray-100 dark:bg-slate-950/50'>
      <div className='container max-w-7xl py-10'>
        {links}
        {(logo || copyright) && (
          <div className='footer__bottom text--center'>
            {logo && <div className='margin-bottom--sm'>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  )
}

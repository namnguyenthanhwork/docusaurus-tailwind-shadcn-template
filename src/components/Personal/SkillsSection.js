import React from 'react'

export default function SkillsSection() {
  const skills = [
    'Lorem',
    'Ipsum',
    'Dolor',
    'Sit Amet',
    'Consectetur',
    'Adipiscing',
    'Elit',
    'Sed Do',
    'Eiusmod',
    'Tempor',
    'Incididunt',
    'Ut Labore',
    'Dolore Magna',
    'Aliqua'
  ]

  return (
    <section className='container mx-auto max-w-5xl px-4 py-16'>
      <h2 className='mb-8 text-3xl font-bold'>Skills</h2>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-blue-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-900/30'
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

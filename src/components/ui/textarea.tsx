import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'w-full rounded-lg border border-gray-300 p-3 font-sans text-sm focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-gray-400',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

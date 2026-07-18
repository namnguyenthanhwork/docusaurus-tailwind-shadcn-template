import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border border-l-4 px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current lg:text-base lg:[&>svg]:size-6',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border-l-slate-400',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90 border-l-destructive',
        info: 'text-blue-600 bg-blue-50 border-blue-200 border-l-blue-500 [&>svg]:text-blue-600 *:data-[slot=alert-description]:text-blue-600/90 dark:bg-blue-950/30 dark:text-white dark:border-blue-900 dark:*:data-[slot=alert-description]:text-white/90 dark:[&>svg]:text-white',
        success:
          'text-green-600 bg-green-50 border-green-200 border-l-green-500 [&>svg]:text-green-600 *:data-[slot=alert-description]:text-green-600/90 dark:bg-green-950/30 dark:text-white dark:border-green-900 dark:*:data-[slot=alert-description]:text-white/90 dark:[&>svg]:text-white',
        warning:
          'text-amber-600 bg-amber-50 border-amber-200 border-l-amber-500 [&>svg]:text-amber-600 *:data-[slot=alert-description]:text-amber-600/90 dark:bg-amber-950/30 dark:text-white dark:border-amber-900 dark:*:data-[slot=alert-description]:text-white/90 dark:[&>svg]:text-white',
        error:
          'text-red-600 bg-red-50 border-red-200 border-l-red-500 [&>svg]:text-red-600 *:data-[slot=alert-description]:text-red-600/90 dark:bg-red-950/30 dark:text-white dark:border-red-900 dark:*:data-[slot=alert-description]:text-white/90 dark:[&>svg]:text-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot='alert'
      role='alert'
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-title'
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight lg:text-lg',
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-description'
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm lg:text-base [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

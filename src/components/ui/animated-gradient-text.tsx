import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<'div'> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          backgroundSize: `${speed * 300}% 100%`,
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo}, ${colorFrom})`
        } as React.CSSProperties
      }
      className={cn(`inline animate-gradient bg-clip-text text-transparent`, className)}
      {...props}
    >
      {children}
    </span>
  )
}

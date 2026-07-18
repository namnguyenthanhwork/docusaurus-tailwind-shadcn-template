'use client'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

// @ts-ignore
import Image from '@theme/IdealImage'

export const AnimatedTooltip = ({
  items
}: {
  items: {
    id: number
    name: string
    title: string
    imageURL: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items.map((item, idx) => (
        <div
          className='group relative -mr-4'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className='bg-foreground absolute -top-16 -left-3/4 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md px-4 py-2 text-xs shadow-xl'
              >
                <div className='absolute inset-x-10 -bottom-px z-30 h-[3px] w-[20%] bg-linear-to-r from-transparent via-emerald-500 to-transparent' />
                <div className='absolute -bottom-px left-10 z-30 h-[3px] w-[40%] bg-linear-to-r from-transparent via-sky-500 to-transparent' />
                <div className='text-primary-foreground relative z-30 text-base font-bold'>
                  {item.name}
                </div>
                <div className='text-primary-foreground text-xs'>{item.title}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            img={item.imageURL}
            alt={item.name}
            className='relative m-0! h-10 w-10 rounded-full! object-cover object-top p-0! transition duration-500 group-hover:z-30 group-hover:scale-105'
          />
        </div>
      ))}
    </>
  )
}

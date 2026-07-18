'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  loop?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  stopOnInteraction?: boolean
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  loop = false,
  autoplay = false,
  autoplayDelay = 4000,
  stopOnInteraction = false,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const autoplayPlugin = React.useMemo(
    () => (autoplay ? Autoplay({ delay: autoplayDelay, stopOnInteraction }) : undefined),
    [autoplay, autoplayDelay, stopOnInteraction]
  )

  const resolvedPlugins = React.useMemo(
    () => [...(autoplayPlugin ? [autoplayPlugin] : []), ...(plugins ?? [])],
    [autoplayPlugin, plugins]
  )

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      loop,
      axis: orientation === 'horizontal' ? 'x' : 'y'
    },
    resolvedPlugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
    const autoplayPlugin = api?.plugins()?.autoplay as { reset?: () => void } | undefined
    autoplayPlugin?.reset?.()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
    const autoplayPlugin = api?.plugins()?.autoplay as { reset?: () => void } | undefined
    autoplayPlugin?.reset?.()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        loop,
        autoplay,
        autoplayDelay,
        stopOnInteraction
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role='region'
        aria-roledescription='carousel'
        data-slot='carousel'
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className='overflow-hidden' data-slot='carousel-content'>
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role='group'
      aria-roledescription='slide'
      data-slot='carousel-item'
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'sm',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot='carousel-previous'
      variant={variant}
      size={size}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon className='cn-rtl-flip' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'sm',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot='carousel-next'
      variant={variant}
      size={size}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon className='cn-rtl-flip' />
      <span className='sr-only'>Next slide</span>
    </Button>
  )
}

function CarouselDots({ className, ...props }: React.ComponentProps<'div'>) {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!api) return
    setScrollSnaps(api.scrollSnapList())
    setSelectedIndex(api.selectedScrollSnap())
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    const onInit = () => setScrollSnaps(api.scrollSnapList())
    api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    return () => {
      api.off('reInit', onInit).off('reInit', onSelect).off('select', onSelect)
    }
  }, [api])

  if (scrollSnaps.length <= 1) return null

  return (
    <div
      data-slot='carousel-dots'
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type='button'
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => {
            api?.scrollTo(index)
            const autoplayPlugin = api?.plugins()?.autoplay as { reset?: () => void } | undefined
            autoplayPlugin?.reset?.()
          }}
          className={cn(
            'h-4 w-4 rounded-full border-none transition-all',
            index === selectedIndex
              ? 'bg-primary w-7'
              : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
          )}
        />
      ))}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel
}

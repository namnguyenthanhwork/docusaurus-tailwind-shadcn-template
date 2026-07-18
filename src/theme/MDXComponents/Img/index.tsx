import clsx from 'clsx'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import type { Props } from '@theme/MDXComponents/Img'

import styles from './styles.module.css'

interface LightboxSlide {
  src: string
  alt?: string
}

export default function MDXImg(props: Props): ReactNode {
  const imgRef = useRef<HTMLImageElement>(null)
  const [open, setOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const [slides, setSlides] = useState<LightboxSlide[]>([])
  const [isZoomable, setIsZoomable] = useState(false)

  useEffect(() => {
    if (imgRef.current && !imgRef.current.closest('a')) {
      setIsZoomable(true)
    }
  }, [])

  const handleClick = () => {
    const img = imgRef.current
    if (!img || img.closest('a')) return

    const container = img.closest('article') ?? document.querySelector('.theme-doc-markdown')

    if (!container) return

    const allImgs = Array.from(container.querySelectorAll<HTMLImageElement>('img'))
    const eligibleImgs = allImgs.filter((el) => !el.closest('a'))

    const gallerySlides: LightboxSlide[] = eligibleImgs.map((el) => ({
      src: el.src,
      alt: el.alt || undefined
    }))

    const index = eligibleImgs.indexOf(img)
    setSlides(gallerySlides)
    setSlideIndex(index >= 0 ? index : 0)
    setOpen(true)
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        ref={imgRef}
        decoding='async'
        loading='lazy'
        {...props}
        className={clsx(props.className, styles.img, isZoomable && styles.zoomable)}
        onClick={handleClick}
      />
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={slideIndex}
          slides={slides}
          plugins={[Fullscreen, Thumbnails, Zoom]}
        />
      )}
    </>
  )
}

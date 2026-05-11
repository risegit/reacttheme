'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  markers?: boolean
  scrub?: number | boolean
  onAnimationCreated?: (animation: gsap.core.Tween, scrollTrigger: ScrollTrigger) => void
  extraScroll?: number
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const {
    offset = 0,
    duration = 2,
    ease = 'none',
    start = 'top top',
    markers = false,
    scrub = 1,
    onAnimationCreated,
    extraScroll = 200,
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger || window.innerWidth < 768) return

      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        const viewportWidth = window.innerWidth
        const scrollDistance = contentWidth - viewportWidth + offset
        return -Math.max(0, scrollDistance)
      }

      // Set content to flex-nowrap to prevent wrapping
      content.style.display = 'flex'
      content.style.flexWrap = 'nowrap'

      const animation = gsap.to(content, {
        x: getScrollAmount(),
        duration,
        ease,
      })

      const viewportWidth = window.innerWidth
      const scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end: () => `+=${Math.abs(getScrollAmount()) + viewportWidth * 0.5}`,
        pin: true,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
      })

      if (onAnimationCreated) {
        onAnimationCreated(animation, scrollTrigger)
      }

      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        animation.kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, onAnimationCreated],
      scope: triggerRef,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll
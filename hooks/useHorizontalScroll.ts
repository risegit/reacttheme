'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  end?: string
  markers?: boolean
  scrub?: number | boolean
  pinSpacing?: boolean
  extraScroll?: number
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const {
    offset = 60,
    duration = 2,
    ease = 'none',
    start = 'top top',
    markers = false,
    scrub = 1,
    pinSpacing = true,
    extraScroll = 370,
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger) return

      // Kill any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === trigger) st.kill()
      })

      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        const viewportWidth = window.innerWidth
        
        if (viewportWidth >= 768) {
          return -(contentWidth - viewportWidth + offset + extraScroll)
        }
        return 0
      }

      const animation = gsap.to(content, {
        x: getScrollAmount(),
        duration,
        ease,
      })

      const scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end: () => {
          const scrollAmount = Math.abs(getScrollAmount())
          return `+=${scrollAmount + window.innerHeight * 0.5}`
        },
        pin: true,
        pinSpacing,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
        onRefresh: () => {
          animation.vars.x = getScrollAmount()
          animation.invalidate()
        },
        onUpdate: (self) => {
          // Ensure smooth scrolling
          if (content && self.progress === 1) {
            const finalX = getScrollAmount()
            if (content.style.transform !== `translateX(${finalX}px)`) {
              gsap.set(content, { x: finalX })
            }
          }
        },
      })

      const handleResize = () => {
        if (window.innerWidth < 768) {
          // Reset position on mobile
          gsap.set(content, { x: 0, clearProps: 'transform' })
          scrollTrigger.disable()
        } else {
          scrollTrigger.enable()
          animation.vars.x = getScrollAmount()
          ScrollTrigger.refresh()
        }
      }

      // Initial check for mobile
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        animation.kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, pinSpacing],
      scope: triggerRef,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll
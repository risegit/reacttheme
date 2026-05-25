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
  disabled?: boolean
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  const {
    offset = 60,
    duration = 2,
    ease = 'none',
    start = 'top 100px',
    markers = false,
    scrub = 1,
    onAnimationCreated,
    extraScroll = 370,
  } = options

  // Wait for component to mount and styles to load
  useEffect(() => {
    // Small delay to ensure CSS is fully loaded
    const timer = setTimeout(() => setIsReady(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useGSAP(
    () => {
      if (!isReady) return

      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger || window.innerWidth < 768) return

      // Check if we're on mobile
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        gsap.set(content, { x: 0, clearProps: 'transform' })
        return
      }

      // Function to calculate scroll amount
      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        return -(contentWidth - window.innerWidth + offset + extraScroll)
      }
      
      ensureContentReady()

      const animation = gsap.to(content, {
        x: getScrollAmount(),
        duration,
        ease,
        overwrite: true,
      })

      const scrollTriggerConfig: ScrollTrigger.Vars = {
        trigger,
        start,
        end: () => `+=${Math.abs(getScrollAmount()) + window.innerWidth * 0.1}`,
        pin: true,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
        anticipatePin: 1, // Helps with pinning performance
        onRefresh: () => {
          animation.vars.x = getScrollAmount()
        },
      }

      if (onAnimationCreated) {
        onAnimationCreated(animation, scrollTrigger)
      }

      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)
      window.addEventListener('load', handleFontsAndImages)
      
      // Initial refresh after all content is rendered
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 200)

      return () => {
        clearTimeout(resizeTimeout)
        animation.kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('load', handleFontsAndImages)
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, onAnimationCreated],
      scope: triggerRef,
      revertOnUpdate: true,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll

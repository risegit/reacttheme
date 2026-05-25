'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect, useState } from 'react'

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
    pinSpacing = true,
    extraScroll = 200,
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

      if (!content || !trigger) return

      // Kill any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === trigger) st.kill()
      })

      // Check if we're on mobile
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        gsap.set(content, { x: 0, clearProps: 'transform' })
        return
      }

      // Function to calculate scroll amount
      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        const viewportWidth = window.innerWidth
        const scrollableWidth = contentWidth - viewportWidth
        
        // Calculate based on visible area
        const paddingLeft = parseFloat(getComputedStyle(content).paddingLeft) || 0
        const visibleArea = viewportWidth - paddingLeft - offset
        
        return -(scrollableWidth - (viewportWidth - visibleArea) + extraScroll)
      }

      // Ensure content is ready
      const ensureContentReady = () => {
        if (content.scrollWidth === 0) {
          // Force a reflow
          content.style.display = 'none'
          content.offsetHeight // Force reflow
          content.style.display = ''
        }
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
        end: () => {
          const scrollAmount = Math.abs(getScrollAmount())
          const additionalScroll = window.innerHeight * 0.3
          return `+=${scrollAmount + additionalScroll}`
        },
        pin: true,
        pinSpacing,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
        anticipatePin: 1, // Helps with pinning performance
        onRefresh: () => {
          if (content.scrollWidth > 0) {
            const newX = getScrollAmount()
            animation.vars.x = newX
            animation.invalidate()
          }
        },
        onUpdate: (self) => {
          // Prevent overlap by ensuring proper spacing
          if (self.progress === 1) {
            const nextSection = trigger.nextElementSibling
            if (nextSection) {
              const triggerRect = trigger.getBoundingClientRect()
              const nextRect = nextSection.getBoundingClientRect()
              if (triggerRect.bottom > nextRect.top) {
                // Adjust spacing if overlapping
                document.documentElement.style.setProperty('--scroll-spacing', `${triggerRect.height}px`)
              }
            }
          }
        },
      }

      const scrollTrigger = ScrollTrigger.create(scrollTriggerConfig)

      // Handle window resize with debounce
      let resizeTimeout: NodeJS.Timeout
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          const isMobileNow = window.innerWidth < 768
          if (isMobileNow) {
            gsap.set(content, { x: 0 })
            scrollTrigger.disable()
          } else {
            scrollTrigger.enable()
            if (content.scrollWidth > 0) {
              animation.vars.x = getScrollAmount()
            }
          }
          ScrollTrigger.refresh()
        }, 150)
      }

      // Handle font and image loading
      const handleFontsAndImages = () => {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            ScrollTrigger.refresh()
          })
        }
        
        // Wait for images
        const images = content.querySelectorAll('img')
        if (images.length > 0) {
          let loadedImages = 0
          images.forEach(img => {
            if (img.complete) {
              loadedImages++
            } else {
              img.addEventListener('load', () => {
                loadedImages++
                if (loadedImages === images.length) {
                  ScrollTrigger.refresh()
                }
              })
            }
          })
        }
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
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, pinSpacing, isReady],
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

'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface HorizontalScrollOptions {
  offset?: number
  markers?: boolean
  disabled?: boolean
  extraScroll?: number
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const pinSpacerRef = useRef<HTMLDivElement | null>(null)
  const [isClient, setIsClient] = useState(false)

  const {
    offset = 0,
    markers = false,
    disabled = false,
    extraScroll = 100,
  } = options

  const logMarker = useCallback((message: string, color: string = 'blue') => {
    if (markers) {
      console.log(`%c[HorizontalScroll] ${message}`, `color: ${color}`)
    }
  }, [markers])

  // Get the total scroll width needed
  const getTotalScrollWidth = useCallback(() => {
    const content = contentRef.current
    if (!content) return 0
    // Get the actual scrollable width minus visible width
    const maxScrollLeft = content.scrollWidth - content.clientWidth
    console.log('scrollWidth:', content.scrollWidth, 'clientWidth:', content.clientWidth, 'maxScrollLeft:', maxScrollLeft)
    return Math.max(0, maxScrollLeft + offset + extraScroll)
  }, [offset, extraScroll])

  // Core scroll handler — maps vertical scroll progress → horizontal scrollLeft
  const updateHorizontalScroll = useCallback(() => {
    const content = contentRef.current
    const pinSpacer = pinSpacerRef.current
    if (!content || !pinSpacer || disabled) return

    const totalScrollWidth = getTotalScrollWidth()
    if (totalScrollWidth <= 0) {
      console.log('No scroll width available')
      return
    }

    // pinSpacer top relative to document
    const spacerRect = pinSpacer.getBoundingClientRect()
    const spacerTop = spacerRect.top + window.scrollY
    const spacerHeight = spacerRect.height

    // Calculate scroll progress
    const scrollStart = spacerTop
    const scrollEnd = spacerTop + spacerHeight - window.innerHeight

    const currentScroll = window.scrollY

    let progress = 0
    if (currentScroll <= scrollStart) {
      progress = 0
    } else if (currentScroll >= scrollEnd) {
      progress = 1
    } else {
      progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart)
    }

    const maxScrollLeft = content.scrollWidth - content.clientWidth
    const targetScrollLeft = progress * maxScrollLeft

    // Apply scroll without smooth for better performance during wheel scroll
    if (content.scrollLeft !== targetScrollLeft) {
      content.scrollLeft = targetScrollLeft
    }

    logMarker(
      `scroll: ${currentScroll.toFixed(0)} | start: ${scrollStart.toFixed(0)} | end: ${scrollEnd.toFixed(0)} | progress: ${(progress * 100).toFixed(1)}% | scrollLeft: ${targetScrollLeft.toFixed(0)} | maxLeft: ${maxScrollLeft}`,
      'cyan'
    )
  }, [getTotalScrollWidth, disabled, logMarker])

  // Build the pin spacer wrapper and make the trigger sticky
  const setupPinSpacer = useCallback(() => {
    const trigger = triggerRef.current
    const content = contentRef.current
    if (!trigger || !content || disabled) return

    // Force a reflow so scrollWidth/clientWidth reflect actual rendered layout
    void content.getBoundingClientRect()

    const totalScrollWidth = getTotalScrollWidth()
    if (totalScrollWidth <= 0) return

    // Reuse existing spacer if already created
    let pinSpacer = pinSpacerRef.current

    if (!pinSpacer) {
      pinSpacer = document.createElement('div')
      pinSpacer.className = 'horizontal-pin-spacer'
      const parent = trigger.parentElement
      if (!parent) return
      parent.insertBefore(pinSpacer, trigger)
      pinSpacer.appendChild(trigger)
      pinSpacerRef.current = pinSpacer
    }

    // The spacer height should be the scrollable width plus viewport height
    const spacerHeight = window.innerHeight + totalScrollWidth
    pinSpacer.style.height = `${spacerHeight}px`
    pinSpacer.style.position = 'relative'

    // Make the trigger sticky inside the spacer
    trigger.style.position = 'sticky'
    trigger.style.top = '0'
    trigger.style.height = '100vh'
    trigger.style.overflow = 'hidden'
    trigger.style.width = '100%'

    logMarker(`Pin spacer height: ${spacerHeight}px (100vh + ${totalScrollWidth}px)`, 'green')
  }, [getTotalScrollWidth, disabled, logMarker])

  // Setup horizontal container - ensure it can scroll horizontally
  const setupHorizontalContainer = useCallback(() => {
    const content = contentRef.current
    if (!content || disabled) return

    // Ensure horizontal scrolling is enabled
    content.style.overflowX = 'auto'
    content.style.overflowY = 'hidden'
    content.style.scrollbarWidth = 'none'
    ;(content.style as any).msOverflowStyle = 'none'
    content.classList.add('horizontal-scroll-container')
    
    // Log the scrollable width
    console.log('Container setup - scrollWidth:', content.scrollWidth, 'clientWidth:', content.clientWidth)

    logMarker('Horizontal container ready', 'blue')
  }, [disabled, logMarker])

  // Tear everything down cleanly
  const resetStyles = useCallback(() => {
    const trigger = triggerRef.current
    const pinSpacer = pinSpacerRef.current

    if (pinSpacer && trigger) {
      const parent = pinSpacer.parentElement
      if (parent) {
        parent.insertBefore(trigger, pinSpacer)
        pinSpacer.remove()
      }
      pinSpacerRef.current = null
    }

    if (trigger) {
      trigger.style.position = ''
      trigger.style.top = ''
      trigger.style.height = ''
      trigger.style.overflow = ''
      trigger.style.width = ''
    }

    const content = contentRef.current
    if (content) {
      content.style.overflowX = ''
      content.style.overflowY = ''
      content.style.scrollbarWidth = ''
      ;(content.style as any).msOverflowStyle = ''
      content.classList.remove('horizontal-scroll-container')
    }
  }, [])

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!disabled) {
      updateHorizontalScroll()
    }
  }, [updateHorizontalScroll, disabled])

  // Resize handler
  const handleResize = useCallback(() => {
    if (disabled) return
    setTimeout(() => {
      // Destroy and rebuild with fresh measurements
      resetStyles()
      setTimeout(() => {
        setupHorizontalContainer()
        setupPinSpacer()
        updateHorizontalScroll()
        logMarker('Resized — recalculated', 'orange')
      }, 50)
    }, 150)
  }, [setupHorizontalContainer, setupPinSpacer, updateHorizontalScroll, resetStyles, disabled, logMarker])

  useEffect(() => {
    setIsClient(true)

    if (disabled || !triggerRef.current || !contentRef.current) return

    // Inject styles for scrollbar hiding and horizontal scrolling
    if (!document.getElementById('hscroll-style')) {
      const style = document.createElement('style')
      style.id = 'hscroll-style'
      style.textContent = `
        .horizontal-scroll-container::-webkit-scrollbar { 
          display: none; 
        }
        .horizontal-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `
      document.head.appendChild(style)
    }

    // Initial setup
    const init = setTimeout(() => {
      setupHorizontalContainer()
      setupPinSpacer()
      updateHorizontalScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(init)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      resetStyles()
    }
  }, [
    handleScroll,
    handleResize,
    setupHorizontalContainer,
    setupPinSpacer,
    updateHorizontalScroll,
    resetStyles,
    disabled,
  ])

  return { contentRef, triggerRef, isClient }
}

export default useHorizontalScroll
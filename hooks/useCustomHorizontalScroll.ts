// useHorizontalScroll.ts
'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface HorizontalScrollOptions {
  offset?: number
  markers?: boolean
  disabled?: boolean
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
  } = options

  const logMarker = useCallback((message: string, color: string = 'blue') => {
    if (markers) {
      console.log(`%c[HorizontalScroll] ${message}`, `color: ${color}`)
    }
  }, [markers])

  // The true max scrollLeft the browser will allow on the content div.
  // Using scrollWidth - clientWidth is the only reliable source of truth —
  // it accounts for padding, gaps, card widths, and any right-side overflow.
  const getTotalScrollWidth = useCallback(() => {
    const content = contentRef.current
    if (!content) return 0
    // scrollWidth - clientWidth = exact px the container can be scrolled horizontally
    const maxScrollLeft = content.scrollWidth - content.clientWidth
    return Math.max(0, maxScrollLeft + offset)
  }, [offset])

  // Core scroll handler — maps vertical scroll progress → horizontal scrollLeft
  const updateHorizontalScroll = useCallback(() => {
    const content = contentRef.current
    const pinSpacer = pinSpacerRef.current
    if (!content || !pinSpacer || disabled) return

    const totalScrollWidth = getTotalScrollWidth()
    if (totalScrollWidth <= 0) return

    // pinSpacer top relative to document
    const spacerTop = pinSpacer.getBoundingClientRect().top + window.scrollY

    // The sticky section starts being "active" once the spacer top hits the viewport top
    // and ends when the spacer bottom minus 100vh hits the viewport top
    const scrollStart = spacerTop
    const scrollEnd = spacerTop + totalScrollWidth

    const currentScroll = window.scrollY

    let progress = 0
    if (currentScroll <= scrollStart) {
      progress = 0
    } else if (currentScroll >= scrollEnd) {
      progress = 1
    } else {
      progress = (currentScroll - scrollStart) / totalScrollWidth
    }

    const maxScrollLeft = content.scrollWidth - content.clientWidth
    content.scrollLeft = Math.min(progress * totalScrollWidth, maxScrollLeft)

    logMarker(
      `scroll: ${currentScroll.toFixed(0)} | start: ${scrollStart.toFixed(0)} | end: ${scrollEnd.toFixed(0)} | progress: ${(progress * 100).toFixed(1)}%`,
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

    // Height = section viewport height + extra vertical scroll needed to traverse all cards
    // The sticky element is 100vh tall; the spacer must be 100vh + totalScrollWidth
    // so the section "holds" for exactly totalScrollWidth px of vertical scroll.
    pinSpacer.style.height = `calc(100vh + ${totalScrollWidth}px)`
    pinSpacer.style.position = 'relative'

    // Make the trigger sticky inside the spacer
    trigger.style.position = 'sticky'
    trigger.style.top = '0'
    trigger.style.height = '100vh'
    trigger.style.overflow = 'hidden'
    trigger.style.width = '100%'

    logMarker(`Pin spacer height: calc(100vh + ${totalScrollWidth}px)`, 'green')
  }, [getTotalScrollWidth, disabled, logMarker])

  // Hide native scrollbar on the horizontal container
  const setupHorizontalContainer = useCallback(() => {
    const content = contentRef.current
    if (!content || disabled) return

    content.style.overflowX = 'scroll'
    content.style.overflowY = 'hidden'
    content.style.scrollbarWidth = 'none'
    ;(content.style as any).msOverflowStyle = 'none'
    content.classList.add('horizontal-scroll-container')

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
    if (!disabled) updateHorizontalScroll()
  }, [updateHorizontalScroll, disabled])

  // Resize handler — full recalculation
  const handleResize = useCallback(() => {
    if (disabled) return
    setTimeout(() => {
      // Destroy and rebuild so measurements are fresh
      const trigger = triggerRef.current
      const pinSpacer = pinSpacerRef.current

      if (pinSpacer) {
        pinSpacer.style.height = ''
      }

      if (trigger) {
        trigger.style.position = ''
        trigger.style.top = ''
        trigger.style.height = ''
        trigger.style.overflow = ''
        trigger.style.width = ''
      }

      // Re-setup with fresh measurements
      setupHorizontalContainer()
      setupPinSpacer()
      updateHorizontalScroll()

      logMarker('Resized — recalculated', 'orange')
    }, 150)
  }, [setupHorizontalContainer, setupPinSpacer, updateHorizontalScroll, disabled, logMarker])

  useEffect(() => {
    setIsClient(true)

    if (disabled || !triggerRef.current || !contentRef.current) return

    // Inject webkit scrollbar hide once
    if (!document.getElementById('hscroll-style')) {
      const style = document.createElement('style')
      style.id = 'hscroll-style'
      style.textContent = `.horizontal-scroll-container::-webkit-scrollbar { display: none; }`
      document.head.appendChild(style)
    }

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
'use client'

import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const data = [
  {
    id: 1,
    title: 'Search Visibility',
    href: '#search-visibility',
    description:
      'We improve discoverability through SEO strategy, technical SEO, content marketing, digital PR, authority building, and search optimisation, helping businesses rank higher and attract consistent organic traffic.',
    image: '/images/services-2/service-item-1.png',
  },
  {
    id: 2,
    title: 'Demand Generation',
    href: '#demand-generation',
    description:
      'We build demand generation systems using performance marketing, Meta Ads, Google Ads, LinkedIn advertising, social media marketing, email marketing, and lead generation strategies that attract and convert qualified audiences.',
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 3,
    title: 'Conversion Optimisation',
    href: '#conversion-optimisation',
    description:
      'Through conversion rate optimisation, landing page optimisation, marketing funnel strategy, user journey optimisation, analytics tracking, and performance measurement systems, we improve conversion performance.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 4,
    title: 'Brand Authority',
    href: '#search-visibility',
    description:
      'We strengthen brand presence through content strategy, social media marketing, digital PR campaigns, corporate video production, brand storytelling, and authority-driven content marketing.',
    image: '/images/services-2/service-item-3.png',
  },
  {
    id: 5,
    title: 'Digital Infrastructure',
    href: '#digital-infrastructure',
    description:
      'We build scalable digital foundations through website design and development, marketing automation systems, CRM integrations, analytics setup, tracking infrastructure, and digital performance optimisation.',
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 6,
    title: 'Marketing Intelligence',
    href: '#conversion-optimisation',
    description:
      'We implement analytics dashboards, conversion tracking systems, reporting frameworks, campaign measurement, and marketing intelligence tools to guide data-driven growth decisions.',
    image: '/images/services-2/service-item-3.png',
  },
]

const ServicesV10 = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(370)

  // Responsive card width
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth
      setCardWidth(w <= 1366 && w >= 1280 ? 250 : 370)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Self-contained GSAP horizontal scroll — no external hook needed
  useEffect(() => {
    const trigger = triggerRef.current
    const content = contentRef.current

    // Mobile: skip horizontal scroll entirely
    if (!trigger || !content || window.innerWidth < 768) return

    let animation: gsap.core.Tween
    let st: ScrollTrigger
    let cancelled = false

    const getScrollAmount = () => -Math.max(0, content.scrollWidth - window.innerWidth)

    const initGSAP = () => {
      if (cancelled) return

      // Always kill previous instances before creating new ones
      st?.kill()
      animation?.kill()

      animation = gsap.to(content, {
        x: getScrollAmount,
        ease: 'none',
        duration: 1,
      })

      st = ScrollTrigger.create({
        trigger,
        start: 'top top',
        // end is exactly the scroll distance to reveal all cards — no overshoot
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation,
        scrub: 1,
        anticipatePin: 1,       // smooths the jank at pin-start
        invalidateOnRefresh: true,
      })
    }

    // Wait for all images to load so scrollWidth measurement is accurate.
    // Without this, GSAP measures before images have dimensions → wrong end point.
    const images = Array.from(content.querySelectorAll<HTMLImageElement>('img'))
    const pending = images.filter((img) => !img.complete)

    const waitForImages = (): Promise<void> =>
      new Promise((resolve) => {
        if (pending.length === 0) return resolve()
        let done = 0
        const tick = () => { if (++done >= pending.length) resolve() }
        pending.forEach((img) => {
          img.addEventListener('load', tick, { once: true })
          img.addEventListener('error', tick, { once: true }) // never block on broken images
        })
      })

    // Double rAF ensures we run after the browser has fully painted,
    // not just after React's commit — this fixes the intermittent "works on refresh" bug.
    waitForImages().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(initGSAP)
      })
    })

    const handleResize = () => {
      if (window.innerWidth < 768) {
        st?.kill()
        animation?.kill()
        gsap.set(content, { x: 0 })
      } else {
        ScrollTrigger.refresh()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelled = true
      st?.kill()
      animation?.kill()
      gsap.set(content, { clearProps: 'x' })
      window.removeEventListener('resize', handleResize)
    }
  // Re-run when cardWidth changes (covers the SSR→client hydration jump)
  }, [cardWidth])

  return (
    // `isolate` creates a new CSS stacking context so the pinned section
    // never bleeds z-index over adjacent sections during GSAP pinning
    <section className="relative isolate pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[60px]">

      {/* Heading lives OUTSIDE triggerRef so it scrolls away normally
          and never overlaps the horizontally-scrolling cards */}
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              MARKETING PROBLEMS <i className="font-instrument">we solve</i>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper as="p">
            They need solutions to real growth challenges. Rise IT solves these challenges through
            integrated marketing systems combining SEO, performance marketing, social media
            marketing, digital PR, conversion optimisation, website development, analytics
            infrastructure, and marketing strategy.
          </RevealWrapper>
        </div>
      </div>

      {/* Only the card strip is pinned — heading never gets trapped inside */}
      <div ref={triggerRef} className="service-section pt-10">
        <div
          ref={contentRef}
          className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 sm:flex-row sm:flex-nowrap"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <figure className="hero-video-container overflow-hidden">
                <Link
                  target="_blank"
                  href={`/services${item.href}`}
                  className="hero-video block"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </figure>
              <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">
                {item.title}
              </h3>
              <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesV10
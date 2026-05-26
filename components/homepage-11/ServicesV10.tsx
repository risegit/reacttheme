'use client'

import useCustomHorizontalScroll from '@/hooks/useCustomHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef } from 'react'
const TextAppearAnimation = dynamic(() => import('../animation/TextAppearAnimation'), {
  ssr: false,
})

const data = [
  {
    id: 1,
    title: 'Search Visibility',
    href: '#search-visibility',
    description:
      "We improve discoverability through SEO strategy, technical SEO, content marketing, digital PR, authority building, and search optimisation, helping businesses rank higher and attract consistent organic traffic.",
    image: '/images/services-2/services-1.jpg',
  },
  {
    id: 2,
    title: 'Demand Generation',
    href: '#demand-generation',
    description:
      'We build demand generation systems using performance marketing, Meta Ads, Google Ads, LinkedIn advertising, social media marketing, email marketing, and lead generation strategies that attract and convert qualified audiences.',
    image: '/images/services-2/services-2.jpg',
  },
  {
    id: 3,
    title: 'Conversion Optimisation',
    href: '#conversion-optimisation',
    description: 'Through conversion rate optimisation, landing page optimisation, marketing funnel strategy, user journey optimisation, analytics tracking, and performance measurement systems, we improve conversion performance.',
    image: '/images/services-2/services-3.jpg',
  },
  {
    id: 4,
    title: 'Brand Authority',
    href: '#search-visibility',
    description: 'We strengthen brand presence through content strategy, social media marketing, digital PR campaigns, corporate video production, brand storytelling, and authority-driven content marketing.',
    image: '/images/services-2/services-4.jpg',
  },
  {
    id: 5,
    title: 'Digital Infrastructure',
    href: '#digital-infrastructure',
    description: 'We build scalable digital foundations through website design and development, marketing automation systems, CRM integrations, analytics setup, tracking infrastructure, and digital performance optimisation',
    image: '/images/services-2/services-5.jpg',
  },
  {
    id: 6,
    title: 'Marketing Intelligence',
    href: '#conversion-optimisation',
    description: 'We implement analytics dashboards, conversion tracking systems, reporting frameworks, campaign measurement, and marketing intelligence tools to guide data-driven growth decisions.',
    image: '/images/services-2/services-6.jpg',
  },
]

const ServicesV10 = () => {
  const { contentRef, triggerRef, isClient } = useCustomHorizontalScroll()
  const [cardWidth, setCardWidth] = useState<number>(370)
  const [visibleCount, setVisibleCount] = useState<number>(4)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth
      if (width <= 1366 && width >= 1280) {
        setCardWidth(300)
      } else {
        setCardWidth(370)
      }
      
      // Calculate how many cards fit based on viewport width
      // This ensures exactly 4 cards visible by default
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth
        const gap = 24 // gap-6 = 24px
        const availableWidth = containerWidth - (gap * (visibleCount - 1))
        const calculatedWidth = availableWidth / visibleCount
        
        // Only adjust if needed, but keep base card width
        if (calculatedWidth < cardWidth && cardWidth > 250) {
          setCardWidth(Math.max(calculatedWidth, 250))
        }
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [cardWidth, visibleCount])

  // Split data into visible (first 4) and scrollable (last 2)
  const visibleCards = data.slice(0, visibleCount)
  const scrollableCards = data.slice(visibleCount)

  return (
    <section className="relative pb-10 pt-14 md:pb-16 md:pt-16 lg:pb-[8px] lg:pt-[68px] xl:pb-[10px]">
      <div className="container">
        <div className="text-center mb-8">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              BUSINESS  PROBLEMS<br/> <i className="font-instrument">we solve</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper as="p">
           Let Rise IT Digital help you scale your business while maximizing ROI. Contact us today for a free consultation.
          </RevealWrapper>
        </div>
      </div>

      <div ref={triggerRef} className="service-section home-sevice-container w-full">
        <div
          ref={contentRef}
          className="flex w-full flex-row gap-6 pl-[5%] pr-[5%]"
          style={{
            height: '100vh',
            alignItems: 'start',
            paddingBottom: '20px',
            overflowX: 'auto',
            scrollbarWidth: 'thin',
          }}
        >
          {/* Visible Cards - First 4 */}
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: isClient ? cardWidth : 370 }}
            >
              <figure className="hero-video-container overflow-hidden">
                <Link
                  href={`/services${item.href}`}
                  className="hero-video block group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </figure>
              <Link
                href={`/services${item.href}`}
                className="hero-video block group"
              >
                <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">
                  {item.title}
                </h3>
              </Link>
              <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}

          {/* Scrollable Cards - Last 2 (only visible on scroll) */}
          {scrollableCards.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 scrollable-card"
              style={{ width: isClient ? cardWidth : 370 }}
            >
              <figure className="hero-video-container overflow-hidden">
                <Link
                  target="_blank"
                  href={`/services${item.href}`}
                  className="hero-video block group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </figure>
              <Link
                target="_blank"
                href={`/services${item.href}`}
                className="hero-video block group"
              >
                <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">
                  {item.title}
                </h3>
              </Link>
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
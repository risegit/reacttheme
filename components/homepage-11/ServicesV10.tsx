'use client'

import useCustomHorizontalScroll from '@/hooks/useCustomHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
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
    image: '/images/services-2/service-1.png',
  },
  {
    id: 2,
    title: 'Demand Generation',
    href: '#demand-generation',
    description:
      'We build demand generation systems using performance marketing, Meta Ads, Google Ads, LinkedIn advertising, social media marketing, email marketing, and lead generation strategies that attract and convert qualified audiences.',
    image: '/images/services-2/service-3.png',
  },
  {
    id: 3,
    title: 'Conversion Optimisation',
    href: '#conversion-optimisation',
    description: 'Through conversion rate optimisation, landing page optimisation, marketing funnel strategy, user journey optimisation, analytics tracking, and performance measurement systems, we improve conversion performance.',
    image: '/images/services-2/service-4.png',
  },
  {
    id: 4,
    title: 'Brand Authority',
    href: '#search-visibility',
    description: 'We strengthen brand presence through content strategy, social media marketing, digital PR campaigns, corporate video production, brand storytelling, and authority-driven content marketing.',
    image: '/images/services-2/service-2.png',
  },
  {
    id: 5,
    title: 'Digital Infrastructure',
    href: '#digital-infrastructure',
    description: 'We build scalable digital foundations through website design and development, marketing automation systems, CRM integrations, analytics setup, tracking infrastructure, and digital performance optimisation',
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 6,
    title: 'Marketing Intelligence',
    href: '#conversion-optimisation',
    description: 'We implement analytics dashboards, conversion tracking systems, reporting frameworks, campaign measurement, and marketing intelligence tools to guide data-driven growth decisions.',
    image: '/images/services-2/service-item-3.png',
  },
]

const ServicesV10 = () => {
  // isClient is now returned from the hook directly
  const { contentRef, triggerRef, isClient } = useCustomHorizontalScroll()
  const [cardWidth, setCardWidth] = useState<number>(370)

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth
      if (width <= 1366 && width >= 1280) {
        setCardWidth(250)
      } else {
        setCardWidth(370)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[60px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              BUSINESS  PROBLEMS <i className="font-instrument">we solve</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper as="p">
           Let Rise IT Digital help you scale your business while maximizing ROI. Contact us today for a free consultation.

          </RevealWrapper>
        </div>
      </div>

      {/*
        IMPORTANT: triggerRef must be OUTSIDE the container div so it spans full width.
        The hook wraps it in a pin-spacer and makes it sticky.
        The container padding/centering lives inside contentRef's children instead.
      */}
      <div ref={triggerRef} className="service-section w-full">
        <div
          ref={contentRef}
          className="flex w-full flex-row gap-6 pl-[5%] pr-[5%]"
          style={{
            // Full height of the sticky viewport
            height: '90vh',
            alignItems: 'center', // vertically center cards within the sticky 100vh
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: isClient ? cardWidth : 370 }}
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
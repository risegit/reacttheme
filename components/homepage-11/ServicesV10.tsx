'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import dynamic from 'next/dynamic'
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
    description: 'Through conversion rate optimisation, landing page optimisation, marketing funnel strategy, user journey optimisation, analytics tracking, and performance measurement systems, we improve conversion performance.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 4,
    title: 'Brand Authority',
    href: '#search-visibility',
    description: 'We strengthen brand presence through content strategy, social media marketing, digital PR campaigns, corporate video production, brand storytelling, and authority-driven content marketing.',
    image: '/images/services-2/service-item-3.png',
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
  const { contentRef, triggerRef } = useHorizontalScroll()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length)
  }

  // Desktop Horizontal Scroll View
  const DesktopView = () => (
    <div ref={triggerRef} className="service-section pt-10">
      <div
        ref={contentRef}
        className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 sm:flex-row sm:flex-nowrap">
        {data.map((item) => (
          <div
            key={item.id}
            className="group"
            style={{
              width: typeof window !== 'undefined' && window.innerWidth <= 1366 && window.innerWidth >= 1280 ? "250px" : "370px"
            }}
          >
            <figure className="hero-video-container overflow-hidden">
              <Link
                target="blank"
                href={`/services${item.href}`}
                className="hero-video block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </figure>
            <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{item.title}</h3>
            <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

  // Mobile Carousel View
  const MobileView = () => (
    <div className="relative pt-10">
      {/* Carousel Container */}
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 px-2"
            >
              <figure className="hero-video-container overflow-hidden rounded-lg">
                <Link
                  target="blank"
                  href={`/services${item.href}`}
                  className="hero-video block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full"
                  />
                </Link>
              </figure>
              <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal">{item.title}</h3>
              <p className="text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Now centered on the card */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-[45%] -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-[45%] -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[60px]">
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
            They need solutions to real growth challenges.
            Rise IT solves these challenges through integrated marketing systems combining SEO, performance marketing, social media marketing, digital PR, conversion optimisation, website development, analytics infrastructure, and marketing strategy.
          </RevealWrapper>
        </div>
        
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </section>
  )
}

export default ServicesV10
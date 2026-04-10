'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Search Visibility ',
    description:
      "We improve discoverability through SEO strategy, technical SEO, content marketing, digital PR, authority building, and search optimisation, helping businesses rank higher and attract consistent organic traffic.",
    image: '/images/services-2/service-item-1.png',
  },
  {
    id: 2,
    title: 'Demand Generation',
    description:
      'We build demand generation systems using performance marketing, Meta Ads, Google Ads, LinkedIn advertising, social media marketing, email marketing, and lead generation strategies that attract and convert qualified audiences.',
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 3,
    title: 'Conversion Optimisation',
    description: 'Through conversion rate optimisation, landing page optimisation, marketing funnel strategy, user journey optimisation, analytics tracking, and performance measurement systems, we improve conversion performance.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 4,
    title: 'Brand Authority',
    description: 'We strengthen brand presence through content strategy, social media marketing, digital PR campaigns, corporate video production, brand storytelling, and authority-driven content marketing.',
    image: '/images/services-2/service-item-3.png',
  },
  {
    id: 5,
    title: 'Digital Infrastructure',
    description: 'We build scalable digital foundations through website design and development, marketing automation systems, CRM integrations, analytics setup, tracking infrastructure, and digital performance optimisation',
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 6,
    title: 'Marketing Intelligence',
    description: 'We implement analytics dashboards, conversion tracking systems, reporting frameworks, campaign measurement, and marketing intelligence tools to guide data-driven growth decisions.',
    image: '/images/services-2/service-item-3.png',
  },
 

]

const ServicesV10 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
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
        <div ref={triggerRef} className="service-section pt-10">
          <div
            ref={contentRef}
            className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 md:flex-row md:flex-nowrap">
            {data.map((item) => (
              <div
                key={item.id}
                // className="group cursor-fancy"
                style={{
                  width: window.innerWidth <= 1366 && window.innerWidth >= 1280 ? "250px" : "370px"
                }}
              >
                <figure className="hero-video-container overflow-hidden">
                  <Link
                    target="_blank"
                    href=""
                    className="hero-video block ">
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
      </div>
    </section>
  )
}

export default ServicesV10

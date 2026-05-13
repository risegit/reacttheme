// 'use client'
// import useHorizontalScroll from '@/hooks/useHorizontalScroll'
// import Link from 'next/link'
// import { FC } from 'react'
// import RevealWrapper from '../animation/RevealWrapper'

// interface ServiceCard {
//   slug: string
//   title: string
//   description: string
//   thumbnail: string
//   coverImage: string
//   serialNumber: number
// }

// const SeoService: FC = () => {
//   const { contentRef, triggerRef } = useHorizontalScroll()

//   const servicesData: ServiceCard[] = [
//     {
//       slug: 'keyword-research',
//       title: 'Keyword Research',
//       description: 'Identifying high-impact keywords to improve search rankings and drive targeted traffic.',
//       thumbnail: '/images/home-5/seo-service-1.png',
//       coverImage: '/images/home-5/seo-service-1.png',
//       serialNumber: 1
//     },
//     {
//       slug: 'link-building',
//       title: 'Link Building',
//       description: 'Acquiring high-quality backlinks to enhance website authority and improve SEO performance.',
//       thumbnail: '/images/home-5/seo-service-2.png',
//       coverImage: '/images/home-5/seo-service-2.png',
//       serialNumber: 2
//     },
//     {
//       slug: 'technical-seo',
//       title: 'Technical SEO',
//       description: 'Optimizing website structure, speed, and indexing to ensure better search engine visibility.',
//       thumbnail: '/images/home-5/seo-service-3.png',
//       coverImage: '/images/home-5/seo-service-3.png',
//       serialNumber: 3
//     },
//     {
//       slug: 'on-page-seo',
//       title: 'On-Page SEO',
//       description: 'Optimizing website content, meta tags, and structure to improve search rankings and user experience.',
//       thumbnail: '/images/home-5/seo-service-4.png',
//       coverImage: '/images/home-5/seo-service-4.png',
//       serialNumber: 4
//     }
//   ]

//   return (
//     <section
//       ref={triggerRef}
//       className="service-section min-h-screen relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <h2>Our SEO Expertise</h2>
//       </div>
//       <div className="relative w-full overflow-x-hidden">
//         <div
//           ref={contentRef}
//           className="service-wrapper mt-16 flex flex-col gap-6 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10">
//           <RevealWrapper>
//             <div className="grid max-h-[404px] w-[332px] shrink-0 content-between max-md:px-5">
//               <p className="text-sm uppercase leading-[1.1] tracking-[3px] text-secondary dark:text-backgroundBody">
//                 Our services
//               </p>
//               <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" width={97} height={96} viewBox="0 0 97 96" fill="none">
//                   <path
//                     d="M60.5 48L78.5 66M78.5 66L60.5 84M78.5 66H24.5V12"
//                     className="stroke-secondary dark:stroke-backgroundBody"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </RevealWrapper>
//           {servicesData.map((card) => (
//             <div key={card.slug} className="group shrink-0 border p-5 dark:border-dark md:w-[740px] md:p-[30px] lg:w-[890px]">
//               <Link href={`seo-agency/services/${card.slug}`}>
//                 <div className="flex flex-col items-start gap-y-7 md:flex-row md:gap-x-12">
//                   <figure className="max-md:w-full">
//                     <img src={card.thumbnail} alt={card.title} className="h-auto w-full" />
//                   </figure>

//                   <div className="flex flex-col justify-between">
//                     <figure className="relative mb-[50px] mt-2 hidden size-20 cursor-pointer self-end overflow-hidden border bg-backgroundBody p-7 transition-all duration-500 group-hover:border-none group-hover:bg-primary dark:border-dark dark:bg-dark md:block lg:p-8">
//                       <img
//                         src="/images/icons/arrow-Icon.svg"
//                         alt="Arrow Icon"
//                         className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
//                       />
//                       <img
//                         src="/images/home-5/arrow-Icon.svg"
//                         alt="Arrow Icon"
//                         className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-100 dark:block"
//                       />
//                       <img
//                         src="/images/icons/arrow-Icon.svg"
//                         alt="Arrow Icon"
//                         className="absolute -translate-x-[47px] translate-y-16 opacity-0 transition-all duration-500 group-hover:-translate-y-[3px] group-hover:translate-x-0 group-hover:opacity-100"
//                       />
//                     </figure>
//                     <p className="text-base lg:text-lg">{card.description}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-end justify-between sm:mt-2">
//                   <h4 className="text-[25px] lg:text-[46px] lg:leading-[1.1] lg:tracking-[-1.44px]">{card.title}</h4>
//                   <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:tracking-[-2.88px]">
//                     0{card.serialNumber}
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SeoService






// old services

'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { useEffect, useState } from 'react'

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
  const { contentRef, triggerRef } = useHorizontalScroll()
  const [cardWidth, setCardWidth] = useState<number>(370)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
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
    <section className="relative overflow-hidden min-h-screen pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[60px]">
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
            className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 sm:flex-row sm:flex-nowrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{
                  width: isClient ? cardWidth : 370,
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
      </div>
    </section>
  )
}

export default ServicesV10

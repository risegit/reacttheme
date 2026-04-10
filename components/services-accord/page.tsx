'use client'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { link } from 'fs'
import { slug } from 'github-slugger'

const servicesData = [
  {
    id: 1,
    title: 'Demand Generation',
    subtitle: 'Generating consistent leads requires visibility',
    slug: 'demand-generation',
    items: [
      'Across multiple platforms combined with targeted audience acquisition strategies.',
      'Demand generation connects paid advertising, social media marketing, and lead generation ',
      'Systems to attract qualified prospects and convert them into enquiries.',
    ],
  },
  {
    id: 2,
    title: 'Performance Marketing',
    subtitle: 'Because your brand should be visible wherever your audience is searching or browsing.',
    slug: 'performance-marketing',
    items: [
      'Google Ads Management',
      'Meta Ads (Facebook & Instagram Ads)',
      'LinkedIn Advertising',
      'PPC Campaign Management',
      'Display Advertising',
      'Remarketing Campaigns',
    ],
  },
  {
    id: 3,
    title: 'Lead Generation Systems',
    subtitle: 'Because reaching the right audience directly often accelerates growth.',
    slug: 'lead-generation-systems',
    items: [
      'B2B Lead Generation',
      'Email Outreach Systems',
      'Marketing Funnel Strategy',
      'Marketing Automation',
      'CRM Integrations',
      'Audience Targeting',
    ],
  },
  {
    id: 4,
    title: 'Social Media Marketing',
    subtitle: 'Because people need to see and trust your brand organically.',
    slug: 'social-media-marketing',
    items: [
      'Social Media Strategy',
      'Social Media Management',
      'Content Planning',
      'Organic Social Media Marketing',
      'Community Engagement',
      'Campaign Management',
    ],
  },
    {
    id: 5,
    title: 'Email Marketing',
    subtitle: 'Because consistent communication helps nurture prospects and maintain engagement with customers.',
    items: [
    'Email Campaign Strategy',
    'Newsletter Campaigns',
    'Promotional Campaigns',
    'Automated Email Workflows',
    ],
  },
]

const Servicesaccor = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Our website isn’t<span className="font-instrument italic"> &nbsp; generating</span> enough leads.</h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="faq-body-transition overflow-hidden border border-secondary/10 bg-backgroundBody duration-300 dark:border-backgroundBody/10 dark:bg-dark">
              <div
                className={`group relative flex cursor-pointer items-center justify-between px-5 py-5 md:px-10 ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}>
                {/* <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-4xl md:leading-[1.2]">
                  <span className="text-inherit">{service.title}</span>
                  <span className="pr-[2px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {service.subtitle}
                  </span>
                </h3> */}
                <Link
                  href={`/services/${service.slug}`}
                  className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-4xl md:leading-[1.2]">
                  <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-4xl md:leading-[1.2]">
                    <span className="text-inherit max-w-[250px]">{service.title}</span>
                    <span className="pr-[2px] max-w-[450px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {service.subtitle}
                    </span>
                  </h3>
                  </Link>
                <div className="accordion-header-iconV5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-team-bezier group-hover:rotate-90 md:size-8">
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <div className="accordion-body flex flex-col justify-start px-10 pb-10 duration-300 sm:ml-2.5 sm:flex-row sm:gap-10 md:ml-6 lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
        <RevealWrapper as="ul" className="reveal-me mt-14 flex justify-center">
          <li className="max-md:w-full">
            {/* <Link
              href="/services"
              className="rv-button rv-button-white block w-full text-center md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Explore Services</span>
              </div>
              <div className="rv-button-bottom">
                <span>Explore Services</span>
              </div>
            </Link> */}
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Servicesaccor

'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import gradientBg from '../../public/images/gradient-bg.png'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Growth marketing strategy',
    description: 'Protect your company with comprehensive coverage against unforeseen risks.',
  },
  {
    id: 2,
    title: ' Search engine optimisation (SEO)',
    description: 'Shield your home, valuables, and property with tailored policies.',
  },
  {
    id: 3,
    title: ' Performance marketing',
    description: 'Secure your vehicles with the right protection for your business or personal use.',
  },
  {
    id: 4,
    title: ' Social media marketing',
    description: 'Collaborate with top influencers for brand awareness.',
  },
  {
    id: 5,
    title: ' Digital PR',
    description: 'Detailed insights to measure campaign success.',
  },
  {
    id: 6,
    title: 'Lead generation systems',
    description: "Tailored strategies for your brand's growth.",
  },
  {
    id: 7,
    title: ' Conversion rate optimisation',
    description: 'Protect your brand during challenging times.',
  },
  {
    id: 8,
    title: ' Website design and development',
    description: 'Empower your team with social media skills.',
  },
    {
    id: 9,
    title: '  Marketing analytics and tracking',
    description: 'Empower your team with social media skills.',
  },
  {
    id: 10,
    title: '   Content and creative production',
    description: 'Empower your team with social media skills.',
  },
]

const SolutionV3 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })
  return (
    <section
      ref={triggerRef}
      className="service-section overflow-hidden  pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[70px]"
      aria-labelledby="solutions-heading" >
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2 className="text-appear text-left text-secondary dark:text-secondary max-md:text-3xl max-sm:text-3xl">
              What We Do{' '}
                <span className="font-instrument italic text-secondary dark:text-secondary">Our work includes:</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-secondary/70 dark:text-secondary/70">
                Rise IT builds digital marketing systems that connect strategy, marketing channels, and technology.

              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-7 md:mt-14">
             <Link href="/services" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>Explore All Services</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Explore All Services</span>
              </div>
            </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
        aria-label="Our service offerings">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-1 flex-col gap-4 rounded-none border-t border-t-secondary bg-backgroundBody px-5 py-14 dark:border-t-primary dark:bg-black md:w-[370px] md:flex-row md:gap-[22px] md:px-[25px] md:py-[70px]">
            <div aria-hidden="true">
              <p className="font-instrument text-5xl font-normal leading-[64px] text-black dark:text-white max-md:text-3xl">
                0{item.id}
              </p>
            </div>
            <div className="space-y-4 md:space-y-8">
              <h3 className="font-normal leading-[110%] tracking-[-1.08px] text-black dark:text-white max-md:text-2xl md:max-w-[200px] md:text-4xl">
                {item.title}
              </h3>
              <p className="text-base font-normal leading-6 tracking-[0.32px] text-colorText dark:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionV3

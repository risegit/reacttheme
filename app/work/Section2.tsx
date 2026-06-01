// Section2.tsx
import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'

const Section2 = () => {
  return (
    <>
    
      <section className="relative overflow-hidden pb-10 pt-10 md:pb-12 md:pt-12 lg:pb-14 lg:pt-14 xl:pb-16 xl:pt-16">
        
        {/* Gradient Background Effect */}
        <div
          id="hero-gradient-wrapper"
          className="h-fw-full absolute top-1/2 -z-10 w-full -translate-y-1/2 scale-75 blur-[90px]">
          <img
            src="/images/hero-gradient-background.png"
            alt="hero-gradient-background"
            id="hero-gradient"
            className="absolute top-1/2 -translate-y-1/2"
          />
        </div>

        <RevealWrapper className="container">
          
          <h1 className="mb-6 mt-5 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 sm:mt-10 md:mb-10 lg:py-10 xl:leading-[1.1]">
            How We Work With <i className="font-instrument"><br />clients</i>
          </h1>
          <RevealWrapper>
            <p className="md:max-w-[670px]">
              Every engagement usually begins with understanding the business and its current digital presence.
            </p>
          </RevealWrapper>
          {/* Points */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-[800px]">
            
            {/* Column 1 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <span className="text-lg font-medium leading-snug">Understanding the business model and audience</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <span className="text-lg font-medium leading-snug">Reviewing existing marketing channels and performance</span>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <span className="text-lg font-medium leading-snug">Identifying growth opportunities across search, advertising, and content</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <span className="text-lg font-medium leading-snug">Building a marketing roadmap that aligns with business goals</span>
              </li>
            </ul>

          </div>
          <RevealWrapper>
            <p className="mt-8 md:max-w-[750px]">
              From there, we help businesses implement and optimise marketing systems that support visibility, lead generation, and conversion.
            </p>
          </RevealWrapper>
          <RevealWrapper>
            <ul className="mt-8 flex list-none justify-start md:mt-14">
              <li className="block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-sm rv-button-primary block md:inline-block">
                  <div className="rv-button-top">
                    <span className='text-white'>Let’s Talk</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">Let’s Talk</span>
                  </div>
                </Link>
              </li>
            </ul>
          </RevealWrapper>

        </RevealWrapper>
      </section>
    </>
  )
}

export default Section2
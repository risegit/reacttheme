import aboutImg from '@/public/images/portfolio/about-banner.png'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Aboutsection2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-20 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-40 xl:pb-[90px] xl:pt-[80px]">
      <div className="container">

        <div>
          {/* Badge */}
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About</span>
          </RevealWrapper>

          {/* Heading */}
          <TextAppearAnimation>
            <h4 className=" text-appear mb-10 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-[40px] lg:text-[54px] xl:text-[58px] xl:leading-[1.1]">
              How We Think About Marketing
            </h4>
          </TextAppearAnimation>

          {/* Main Layout */}
          <RevealWrapper className="flex flex-col gap-x-16 gap-y-10 lg:flex-row">

            {/* Image (UNCHANGED) */}
            <Image src={aboutImg} alt="About" className="max-lg:w-full" />

            {/* Content */}
            <div className="max-w-xl">

              {/* Paragraph 1 */}
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Most marketing problems are not caused by a lack of effort.
                <br />
                They are caused by disconnected systems.
              </p>

              {/* Paragraph 2 */}
              <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SEO runs separately from advertising. Social media operates independently from lead generation.
                Websites attract traffic but fail to convert visitors.
              </p>

              {/* Divider */}
              <div className="my-8 h-[1px] w-full bg-gray-200 dark:bg-gray-700" />

              {/* Supporting line */}
              <p className="text-base text-gray-600 dark:text-gray-400">
                Marketing works when these pieces work together.
              </p>

              {/* Simple list (clean like your reference) */}
              <div className="mt-4 space-y-1 text-base font-medium text-gray-900 dark:text-white">
                <p>Visibility</p>
                <p>Demand generation</p>
                <p>Conversion</p>
              </div>

              {/* Closing line */}
              <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
                When these three elements align, marketing becomes a growth system.
              </p>

              {/* CTA */}
              <div className="mt-8">
                  <Link href="/about" className="rv-button rv-button-sm rv-button-primary">
              <div className="rv-button-top">
                <span>Let’s Talk</span>
              </div>
              <div className="rv-button-bottom">
                <span>Let’s Talk</span>
              </div>
            </Link>
              </div>

            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection2
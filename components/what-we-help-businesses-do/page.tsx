import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

export const metadata = {
  title: 'Innovative Marketing  - Rivor',
}

const homepage16 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mx-auto max-w-[1500px] px-4 md:px-[30px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              <RevealWrapper className="py-2.5">
                <h6>Improve search visibility</h6>
                <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">
                  Every campaign is backed by analytics and tailored for ROI.
                </p>
              </RevealWrapper>
              <RevealWrapper className="py-2.5">
                <h6>Generate consistent leads</h6>
                <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">
                  We create seamless experiences across digital platforms.
                </p>
              </RevealWrapper>
              <RevealWrapper className="py-2.5">
                <h6> Strengthen brand presence online</h6>
                <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">
                  A perfect blend of creativity and data-driven insights.
                </p>
              </RevealWrapper>
              <RevealWrapper className="py-2.5">
                <h6>Increase website conversion rates</h6>
                <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">
                  Cutting-edge marketing technologies for optimal results.
                </p>
              </RevealWrapper>
              <RevealWrapper className="py-2.5">
                <h6> Scale digital marketing performance
</h6>
                <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">You'll always know what's working.</p>
              </RevealWrapper>
            </div>
            <RevealWrapper as="ul" className="mt-7 max-md:w-full md:mt-14">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/portfolio-agency/case-study" className="rv-button rv-button-primary block md:inline-block">
                  <div className="rv-button-top">
                    <span className='text-white'>Start a Conversation</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">Start a Conversation</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
          <RevealWrapper className="md:w-[55%]">
            <div className="rv-badge mb-3.5">
              <span className="rv-badge-text">Why Choose Us</span>
            </div>
            <TextAppearAnimation>
              <h2 className="text-appear">
               WHAT WE HELP
                <i className="font-instrument">  businesses do?
 </i>
              </h2>
            </TextAppearAnimation>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default homepage16

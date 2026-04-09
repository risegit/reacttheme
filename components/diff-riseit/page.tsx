import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        
        <div className="mb-8 text-right md:mb-14">
          {/* Badge */}
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About</span>
          </RevealWrapper>

          {/* Heading */}
          <TextAppearAnimation>
            <h4 className="text-appear mb-10 text-2xl text-right leading-tight sm:text-[34px] md:text-[44px] lg:mb-[40px] lg:text-[54px] xl:text-[58px] xl:leading-[1.1]">
              What Businesses Usually Come To Us For
            </h4>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 [&>*]:border-b">

            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>“Our brand is not visible online.”</h5>
            </RevealWrapper>

            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>“Our website isn’t generating enough leads.”</h5>
            </RevealWrapper>

            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>“Our marketing traffic is not converting.”</h5>
            </RevealWrapper>

            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>“Our digital presence feels outdated.”</h5>
            </RevealWrapper>

            {/* FINAL STATEMENT */}
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px] border-b-0">
              <p className="mt-2 leading-[1.6] tracking-[0.32px]">
                Our role is to turn these challenges into structured digital growth systems.
              </p>
            </RevealWrapper>

          </div>

          {/* IMAGE (UNCHANGED) */}
          <RevealWrapper as="figure" className="md:w-1/2">
            <img src="/images/home-5/why-rivor.png" alt="AI Solutions" className="h-full w-full" />
          </RevealWrapper>
        </div>

        {/* CTA */}
        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li>
                <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>Let's Talk</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Let's Talk</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>

      </div>
    </section>
  )
}

export default WhyChooseUs
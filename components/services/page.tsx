import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const AboutV13 = () => {
    return (
        <section className="relative pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
            <HeroGradientAnimation />
            <div className="container">
                <div className="text-center">
                    <RevealWrapper className="rv-badge mb-3">
                        <span className="rv-badge-text">Services</span>
                    </RevealWrapper>
                    <TextAppearAnimation>
                        <h2 className="text-appear mb-6">Digital Marketing Services</h2>
                    </TextAppearAnimation>
                    <RevealWrapper as="h5">
                        Businesses rarely struggle because they lack marketing tools.
                        They struggle because their digital marketing efforts are fragmented.
                    </RevealWrapper>
                    <RevealWrapper as="h5">
                        Rise IT helps businesses solve core digital growth challenges through integrated marketing systems combining SEO, performance marketing, social media marketing, digital PR, conversion optimisation, website development, and marketing strategy.
                    </RevealWrapper>
                    
                    <RevealWrapper as="p" className="mx-auto mt-3 max-w-3xl">
                        Our approach focuses on building integrated marketing systems that connect visibility, demand generation, and conversion.

                    </RevealWrapper>
                    <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
                        <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
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
            </div>
        </section>
    )
}

export default AboutV13

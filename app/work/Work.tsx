import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'

const Sectionwork1 = () => {
    return (
        <section
            id="hero"
            className="relative overflow-hidden pb-14 pt-[137px] md:pb-16 md:pt-[160px] lg:pb-[88px] xl:pb-[112px] xl:pt-[220px]"
            aria-labelledby="hero-heading"
        >
            {/* Gradient */}
            <div
                id="hero-gradient-wrapper"
                className="absolute left-0 top-0 -z-10 blur-[65px]"
                aria-hidden="true"
            >
                <img
                    src="/images/hero-gradient-background.png"
                    alt="hero"
                    id="hero-gradient"
                    className="left-0 top-0"
                />
            </div>

            <div className="mx-auto max-w-[1600px] px-6 md:px-14">

                {/* TOP SECTION */}
                <RevealWrapper className="flex flex-col gap-y-10 xl:flex-row xl:justify-between">

                    {/* LEFT CONTENT */}
                    <div className="flex-1">

                        {/* Heading */}
                        <RevealWrapper
                            as="h1"
                            id="hero-heading"
                            className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.0] 2xl:tracking-[-2.88px]"
                        >
                            How we<br className="hidden md:block" />
                             approach <br className="hidden md:block" />
                            <i className="font-instrument">growth</i>

                        </RevealWrapper>

                        {/* Intro */}
                        <RevealWrapper className="mt-6 max-w-xl text-base leading-relaxed">
                            <strong>Most marketing challenges come down to three things.</strong>
                        </RevealWrapper>

                        {/* 3 POINTS */}
                        <ul className="mt-6 space-y-3 pl-5 list-disc marker:text-neutral-800 marker:text-base">
                            <li className="text-lg font-medium leading-snug">Visibility</li>
                            <li className="text-lg font-medium leading-snug">Demand generation</li>
                            <li className="text-lg font-medium leading-snug">Conversion</li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-8 md:mt-10 lg:mt-14">
                            <Link
                                href="/contact"
                                className="rv-button rv-button-primary rv-button-sm block md:inline-block"
                                aria-label="Book a Free Consultation"
                            >
                                <div className="rv-button-top text-center">
                                    <span className='text-white'>Book a Free Consultation</span>
                                </div>
                                <div className="rv-button-bottom text-center text-white">
                                    <span className="text-nowrap">
                                        Book a Free Consultation
                                    </span>
                                </div>
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="flex w-full flex-1 flex-col gap-5 md:flex-row">
                        <figure>
                            <img
                                src="/images/hero-img/business-hero-1.png"
                                alt="Business professionals in a consultation meeting"
                                className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
                                width={410}
                                height={540}
                            />
                        </figure>

                        <figure>
                            <img
                                src="/images/hero-img/business-hero-2.png"
                                alt="Business growth and strategy visualization"
                                className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
                                width={410}
                                height={540}
                            />
                        </figure>
                    </div>

                </RevealWrapper>

                {/* FULL WIDTH CONTENT (FIXED PART) */}
                <RevealWrapper className="mt-10 max-w-[1100px] space-y-6 text-sm leading-relaxed text-neutral-600">

                    <p>
                        Businesses often try to solve these problems independently. SEO happens separately from advertising. Social media operates without a clear role in lead generation. Websites attract traffic but fail to convert visitors.
                    </p>

                    <p>
                        Our approach focuses on connecting these elements into a structured marketing system.
                    </p>

                    <p>
                        Visibility ensures the right audience can find your business. Demand generation brings qualified prospects to your digital platforms. Conversion ensures that attention turns into real enquiries and opportunities.
                    </p>

                    <p>
                        When these three elements work together, marketing becomes a growth system.
                    </p>

                </RevealWrapper>

            </div>
        </section>
    )
}

export default Sectionwork1
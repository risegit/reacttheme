import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Aboutwework = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[70px]">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Solutions</span>
          </RevealWrapper>

          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              The Way We Work
            </h2>
          </TextAppearAnimation>
        </div>

        {/* Placeholder Cards */}
        <div className="[&>*:not(:last-child)]:mb-4">

          {/* CARD 1 */}
          <RevealWrapper className="underline-hover-effect group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0">
            <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
              <Link href="#">
                <div className="blog-title mb-6">
                  <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">
                    We believe good marketing partnerships are collaborative.

                  </h3>
                </div>
              </Link>
              <p className="border-t pt-2 dark:border-dark md:pt-5">
                Description placeholder for your first content block. Add your custom text here.
              </p>
            </div>

            <figure className="h-full w-full flex-1 overflow-hidden">
              <Link href="#" className="block">
                <Image
                  width={509}
                  height={295}
                  src="/images/blog-img/blogV3-img-1.png"
                  alt="Placeholder Image"
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>
            </figure>
          </RevealWrapper>

          {/* CARD 2 */}
          <RevealWrapper className="underline-hover-effect group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0">
            <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
              <Link href="#">
                <div className="blog-title mb-6">
                  <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">
                 Businesses bring deep expertise in their industry.


                  </h3>
                </div>
              </Link>
              <p className="border-t pt-2 dark:border-dark md:pt-5">
                 We bring expertise in digital visibility, marketing systems, and growth strategy.
              </p>
            </div>

            <figure className="h-full w-full flex-1 overflow-hidden">
              <Link href="#" className="block">
                <Image
                  width={509}
                  height={295}
                  src="/images/blog-img/blogV3-img-2.png"
                  alt="Placeholder Image"
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>
            </figure>
          </RevealWrapper>

          {/* CARD 3 */}
          <RevealWrapper className="underline-hover-effect group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0">
            <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
              <Link href="#">
                <div className="blog-title mb-6">
                  <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">
                    Together, the goal is simple.

                  </h3>
                </div>
              </Link>
              <p className="border-t pt-2 dark:border-dark md:pt-5">
                Make the right audience find you.
              </p>
            </div>

            <figure className="h-full w-full flex-1 overflow-hidden">
              <Link href="#" className="block">
                <Image
                  width={509}
                  height={295}
                  src="/images/blog-img/blogV3-img-3.png"
                  alt="Placeholder Image"
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>
            </figure>
          </RevealWrapper>

                    <RevealWrapper className="underline-hover-effect group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0">
            <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
              <Link href="#">
                <div className="blog-title mb-6">
                  <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">
                   Help them understand what you do.
                  </h3>
                </div>
              </Link>
              <p className="border-t pt-2 dark:border-dark md:pt-5">
               Turn that attention into real business opportunities.
              </p>
            </div>

            <figure className="h-full w-full flex-1 overflow-hidden">
              <Link href="#" className="block">
                <Image
                  width={509}
                  height={295}
                  src="/images/blog-img/blogV3-img-2.png"
                  alt="Placeholder Image"
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>
            </figure>
          </RevealWrapper>

        </div>

        {/* CTA Button */}
        <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
          <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>Start your growth journey </span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Start your growth journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Aboutwework
import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'

const Carrer1 = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-[137px] md:pb-[90px] md:pt-[180px] lg:pb-[0px] lg:pt-[15px]">
        
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
          
          <h2 className="mb-6 mt-5 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 sm:mt-10 md:mb-10 lg:py-10 xl:leading-[1.1]">
           The Kind of People We <i className="font-instrument"><br /> look for</i>
          </h2>
          <RevealWrapper>
            <p className="md:max-w-[670px]">
             We usually work best with people who are:
            </p>
          </RevealWrapper>
          
          {/* Points */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Column 1 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <strong>Curious about how businesses grow</strong>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <strong>Comfortable learning new tools and platforms</strong>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <strong>Thoughtful in how they approach problems</strong>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <strong>Clear Communication</strong>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <strong>Easy to work with in a team</strong>
              </li>
            </ul>
          </div>
          
          <RevealWrapper>
            <p className="mt-8 md:max-w-[750px]">
              You do not need to know everything on day one. But you should be willing to learn and take ownership of your work.
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

          {/* ===== NEW SECTIONS ===== */}

          {/* Open Roles */}
          <RevealWrapper>
            <h2 className="mt-20 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 md:mb-10 lg:py-10">
              Open Roles
            </h2>
            <p className="md:max-w-[670px]">
              This section will list current openings.
            </p>
            <p className="mt-4 md:max-w-[750px]">
              If there are no roles listed at the moment but you feel your skills could be useful, you can still reach out.
            </p>
          </RevealWrapper>

          {/* How To Apply */}
          <RevealWrapper>
            <h2 className="mt-16 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 md:mb-10 lg:py-10">
              How To Apply
            </h2>
            <p className="md:max-w-[670px]">
              Send your resume and portfolio (if applicable) to:
            </p>
            <p className="mt-2 text-primary">
              careers@riseit.com
            </p>
            <p className="mt-4 md:max-w-[750px]">
              Include a short note about the kind of work you are interested in and why you would like to work with Rise IT.
            </p>
          </RevealWrapper>

          {/* Closing Message */}
          <RevealWrapper>
            <p className="mt-16 md:max-w-[800px]">
              We are always interested in meeting people who enjoy thoughtful work and are curious about how marketing and businesses evolve.
            </p>
            <p className="mt-4 font-semibold">
              If that sounds like you, feel free to reach out.
            </p>
          </RevealWrapper>

        </RevealWrapper>
      </section>
    </>
  )
}

export default Carrer1
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

const Section2 = () => {
  // Manually added service data
  const servicesData = [
    {
      slug: 'demand-generation',
      title: 'Demand Generation',
      description:
        'Generating consistent leads requires visibility across multiple platforms combined with targeted audience acquisition strategies.',
      feature: [],
    },
    {
      slug: 'performance marketing',
      title: 'Performance Marketing',
      description:
        'Because your business needs to appear where people are actively searching.',
      feature: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram Ads)',
        ' LinkedIn Advertising',
        ' PPC Campaign Management',
        'Paid Social Advertising',
        ' Display Advertising',
        ' Remarketing Campaigns',
        ' Conversion-Focused Ad Campaigns',
      ],
    },
    {
      slug: 'lead-generation-systems',
      title: 'Lead Generation Systems',
      description:
        'Because reaching the right audience directly often accelerates growth.',
      feature: [
        'B2B Lead Generation',
        ' Email Marketing Campaigns',
        ' Marketing Funnel Strategy',
        ' Lead Nurturing Systems',
        ' Marketing Automation',
        ' CRM Integrations',
        'Audience Targeting Strategies',
      ],
    },
    {
      slug: 'social-media-marketing',
      title: 'Social Media Marketing',
      description:
        'Because people need to see and trust your brand organically.',
      feature: [
        'Social media strategy',
        'Content creation and curation',
        'Community management',
        'Social media advertising',
        'Influencer partnerships',
        'Social media analytics and reporting',
        'Community engagement',
      ],
    },
     {
      slug: 'social-media-marketing',
      title: 'Social Media Marketing',
      description:
        'Because people need to see and trust your brand organically.',
      feature: [
        'Social media strategy',
        'Content creation and curation',
        'Community management',
        'Social media advertising',
        'Influencer partnerships',
        'Social media analytics and reporting',
        'Community engagement',
      ],
    },
  ]

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="md:w-[60%]">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">Services</span>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2>
                Our website isn’t
                <span className="font-instrument italic"> &nbsp; Visible</span> <br />
                generating enough leads
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="max-md:w-full md:w-[40%]">
            <p className="text-appear text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
              We offer digital solutions to boost your brand and online presence.
            </p>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Get Free Quotes</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Get Free Quotes</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="flex justify-center max-xl:flex-wrap max-xl:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-l [&>*:last-child]:border-r dark:[&>*:last-child]:border-l-dark dark:[&>*:last-child]:border-r-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {servicesData.map((service) => (
          <RevealWrapper key={service.slug} className="group relative h-[500px] w-[400px] overflow-hidden">
            <div className="absolute flex h-full w-full translate-y-0 items-center justify-start opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
              <h5 className="pl-7 max-sm:text-2xl">{service.title}</h5>
            </div>
            <div className="absolute z-10 h-full w-full translate-y-full border-t border-primary bg-secondary p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
              <Link href={`/app-development/${service.slug}`}>
                <div className="mb-[35px] flex items-center justify-between gap-1">
                  <h5 className="translate-y-5 text-primary opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-3xl">
                    {service.title}
                  </h5>
                  <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                      <path
                        d="M5 16H27"
                        className="stroke-primary dark:stroke-backgroundBody"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 7L27 16L18 25"
                        className="stroke-primary dark:stroke-backgroundBody"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="translate-y-5 text-backgroundBody/70 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody/70">
                  {service.description}
                </p>
                <ul className="mt-6 translate-y-5 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
                  {service.feature.map((f: string) => (
                    <li
                      key={f}
                      className="leading-relexed list-disc text-base text-backgroundBody/70 dark:text-backgroundBody/70">
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default Section2
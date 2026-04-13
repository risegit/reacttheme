'use client'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import { slug } from 'github-slugger'

const servicesData = [
  {
    id: 1,
    title: 'Digital Infrastructure',
    subtitle: 'A strong digital presence requires reliable infrastructure',
    items: [
      'Modern websites must be fast, conversion-focused, search-friendly, and integrated with marketing analytics and automation systems.',
 
    ],
  },
  {
    id: 2,
    title: 'Website Design & Development',
    slug: 'website-design-development',
    subtitle: 'Because your website should support both visibility and conversion.',
    items: [
'Website Design',
 'Website Development',
 'Conversion-Focused Websites',
 'SEO-Friendly Architecture',
 'Landing Page Development',
'Technology Integration',
'CRM Integration',
'CMS Development',
 'API Integration',
 'Marketing Platform Integrations',

    ],
  },
  {
    id: 3,
    title: 'Marketing Infrastructure & Automation',
    slug: 'marketing-analytics-tracking',
    subtitle: 'Because scalable growth requires strong systems behind the scenes.',
    items: [
    'Marketing Automation',
    'Lead Tracking Systems',
    'CRM Integrations',
    'Analytics Integration',
    'Marketing Technology Setup',

    ],
  },
  
]

const Section4 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Our brand communication feels<span className="font-instrument italic"> outdated</span> </h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="faq-body-transition overflow-hidden border border-secondary/10 bg-backgroundBody duration-300 dark:border-backgroundBody/10 dark:bg-dark">
              <div
                className={`group relative flex cursor-pointer items-center justify-between px-5 py-5 md:px-10 ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}>
                {/* <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-4xl md:leading-[1.2]">
                  <span className="text-inherit">{service.title}</span>
                  <span className="pr-[2px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {service.subtitle}
                  </span>
                </h3> */}
                <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-4xl md:leading-[1.2]">
                  <span className="text-inherit max-w-[250px]">{service.title}</span>
                  <span className="pr-[2px] max-w-[450px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {service.subtitle}
                  </span>
                </h3>
                <div className="accordion-header-iconV5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-team-bezier group-hover:rotate-90 md:size-8">
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <div className="accordion-body flex flex-col justify-start px-10 pb-10 duration-300 sm:ml-2.5 sm:flex-row sm:gap-10 md:ml-6 lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
        <RevealWrapper as="ul" className="reveal-me mt-14 flex justify-center">
          <li className="max-md:w-full">
            {/* <Link
              href="/services"
              className="rv-button rv-button-white block w-full text-center md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Explore Services</span>
              </div>
              <div className="rv-button-bottom">
                <span>Explore Services</span>
              </div>
            </Link> */}
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Section4

// import Link from 'next/link'
// import RevealWrapper from '../animation/RevealWrapper'
// import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

// const Section4 = () => {
//   // Manually added service data
//   const servicesData = [
//     {
//       slug: 'digital-infrastructure',
//       title: 'Digital Infrastructure',
//       description: 'A strong digital presence requires reliable infrastructure.Modern websites must be fast, conversion-focused, search-friendly, and integrated with marketing analytics and automation systems.',
//       feature: [],
//     },
//     {
//       slug: 'website-design-development',
//       title: 'Website Design & Development',
//       description:
//         'Because your website should support both visibility and conversion.',
//       feature: [    
//         'Website Design',
//         'Website Development',
//         'Conversion-focused websites',
//         'SEO-Optimized websites Architecture',
//         'Landing Page Development',
//         ' Performance Optimisation'
      
//       ],
//     },
//     {
//       slug: 'marketing-infrastructure-automation',
//       title: 'Marketing Infrastructure & Automation',
//       description:
//         'Because scalable growth requires strong systems behind the scenes.',
//       feature: [
//         'Marketing Automation',
//         'CRM Integration',
//         'Lead Tracking Systems',
//         'Analytics Integration',
//         'Marketing Technology Setup',
//       ],
//     },
//   ]

//   return (
//     <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
//       <div className="container">
//         <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
//           <div className="md:w-[60%]">
//             <RevealWrapper className="rv-badge mb-3 md:mb-4">
//               <span className   ="rv-badge-text">Services</span>
//             </RevealWrapper>
//             <TextAppearAnimation02>
//               <h2>
//                 Our website and  
//                 <span className="font-instrument italic"> &nbsp; marketing</span> <br />
//               systems feel outdated.
//               </h2>
//             </TextAppearAnimation02>
//           </div>
//           <div className="max-md:w-full md:w-[40%]">
//             <p className="text-appear text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
//               We offer digital solutions to boost your brand and online presence.
//             </p>
//             <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
//               <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
//                 <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
//                   <div className="rv-button-top">
//                     <span>Get Free Quotes</span>
//                   </div>
//                   <div className="rv-button-bottom">
//                     <span>Get Free Quotes</span>
//                   </div>
//                 </Link>
//               </li>
//             </RevealWrapper>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center max-xl:flex-wrap max-xl:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-l [&>*:last-child]:border-r dark:[&>*:last-child]:border-l-dark dark:[&>*:last-child]:border-r-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
//         {servicesData.map((service) => (
//           <RevealWrapper key={service.slug} className="group relative h-[500px] w-[400px] overflow-hidden">
//             <div className="absolute flex h-full w-full translate-y-0 items-center justify-start opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
//               <h5 className="pl-7 max-sm:text-2xl">{service.title}</h5>
//             </div>
//             <div className="absolute z-10 h-full w-full translate-y-full border-t border-primary bg-secondary p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
//               <Link href={`/app-development/${service.slug}`}>
//                 <div className="mb-[35px] flex items-center justify-between gap-1">
//                   <h5 className="translate-y-5 text-primary opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-3xl">
//                     {service.title}
//                   </h5>
//                   <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
//                     <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
//                       <path
//                         d="M5 16H27"
//                         className="stroke-primary dark:stroke-backgroundBody"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M18 7L27 16L18 25"
//                         className="stroke-primary dark:stroke-backgroundBody"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//                 <p className="translate-y-5 text-backgroundBody/70 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody/70">
//                   {service.description}
//                 </p>
//                 <ul className="mt-6 translate-y-5 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
//                   {service.feature.map((f: string) => (
//                     <li
//                       key={f}
//                       className="leading-relaxed list-disc text-base text-backgroundBody/70 dark:text-backgroundBody/70">
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//               </Link>
//             </div>
//           </RevealWrapper>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Section4;
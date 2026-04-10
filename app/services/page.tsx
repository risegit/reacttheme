import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Services from '@/components/services/page'
import ServicesV15 from '@/components/homepage-17/ServicesV15'
import Secttion2 from '@/components/section-2/page'
import Section3 from '@/components/section-3/page'
import Section4 from '@/components/section-04/page'
import Servicesaccor from '@/components/services-accord/page'
import Services05 from '@/components/services-05/page'
import RevealWrapper from '@/components/animation/RevealWrapper'


export const metadata = {
  title: 'Services ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
   <Services/>
   <ServicesV15/>
   <Servicesaccor/>
    {/* <Secttion2/> */}
    <Section3/>
    <Section4/>
    <Services05/>
    {/* <Seopage params={Promise.resolve({ slug: '' })}/> */}
    
    <RevealWrapper>
      <CTA>
        Let’s build a digital marketing
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/16.png' },
            { id: '3', img: '/images/agent/17.png' },
          ]}
        />
        system that 

        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">supports real growth.</i>
      </CTA>{' '}
      </RevealWrapper>
    </LayoutOne>
  )
}

export default ServicesPage

import Sectionwork1 from './Work'
import MarqueeV5 from '@/components/homepage-24/MarqueeV5'
import ProcessV11 from '@/components/homepage-24/ProcessV11'
import ProjectCaseStudies from '@/components/homepage-24/ProjectCaseStudies'
import ServicesV16 from '@/components/homepage-24/ServicesV16'
import TestimonialV12 from '@/components/homepage-24/TestimonialV12'
import Section2 from './Section2'
// import WhyChooseUsV8 from '@/components/homepage-24/WhyChooseUsV8'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import Case from './Casestudy'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import Industries from './Clients'
import Clients from '@/components/clients/page'

export const metadata = {
  title: 'Management Consulting Agency - Rivor',
}

const homepage23 = () => {
  return (
    <LayoutOne>
      <Sectionwork1 />
      <MarqueeV5 />
      <Section2 />
      <Case />
      {/* <WhyChooseUsV8 /> */}
      {/* <ProjectCaseStudies /> */}
      <RevealWrapperV2>
        <Clients/>
        {/* <Industries /> */}
      
    
      <CTA buttonText="Get Started Today">
        Let’s explore how your business  <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/19.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />can grow.
        <h5 className="cta-span mb-3 mt-10">If you're looking to improve visibility, generate leads, or strengthen your digital presence, we would be happy to start a conversation.</h5>
      </CTA>
      
      </RevealWrapperV2>
    </LayoutOne>
  )
}

export default homepage23

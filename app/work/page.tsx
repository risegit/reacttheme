// work/page.tsx
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
  title: 'RiseIT - How We Work With Clients',
}

const homepage23 = () => {
  return (
    <LayoutOne>
      <Sectionwork1 />
      <Section2 />
      <Case />
      <RevealWrapperV2>
        <Clients />
        <CTA buttonText="Get Started Today">
          Let’s explore how your business  <CtaImageSlider
            slides={[
              { id: '1', img: '/images/agent/cta1.jpg' },
              { id: '2', img: '/images/agent/cta2.jpg' },
              { id: '3', img: '/images/agent/cta5.jpg' },
            ]}
          />can grow.
          <h5 className="cta-span mb-3 mt-10">If you're looking to improve visibility, generate leads, or strengthen your digital presence, we would be happy to start a conversation.</h5>
        </CTA>
      </RevealWrapperV2>
    </LayoutOne>
  )
}

export default homepage23
import Clients from '@/components/homepage-03/Clients'
import AboutV4 from '@/components/homepage-04/AboutV4'
import HeroV11 from '@/components/homepage-04/HeroV11'
import ImageMarque from '@/components/homepage-04/ImageMarque'
import ProjectServices from '@/components/homepage-04/ProjectServices'
import ServicesV5 from '@/components/homepage-04/ServicesV5'
import TestimonialV5 from '@/components/homepage-04/TestimonialV5'
import ClientsV3 from '@/components/shared/ClientsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Homeabout from '@/components/home-about/page'
import HeroV6 from '@/components/homepage-06/HeroV6'
import ServicesV10 from '@/components/homepage-11/ServicesV10'
import RevealWrapper from '@/components/animation/RevealWrapper'
import Marquee from '@/components/shared/Marquee'
import AnimatedHeroImage from '@/components/homepage-06/AnimatedHeroImage'
import BlogPostsV5 from '@/components/homepage-08/BlogPostsV5'
import TestimonialV2 from '@/components/shared/TestimonialV2'
import FaqV2 from '@/components/shared/FaqV2'
import HeroV18 from '@/components/homepage-18/HeroV18'
import PortfolioV5 from '@/components/homepage-18/PortfolioV5'
import TestimonialV7 from '@/components/homepage-11/TestimonialV7'
import WhatWeHelpBusinessesDo from '@/components/what-we-help-businesses-do/page'
import FaqV3 from '@/components/homepage-21/FaqV3'
import WhyChooseUsV8 from '@/components/homepage-25/WhyChooseUsV8'
import DiffRise from '@/components/diff-riseit/page'
import Testimoniale from '@/components/testimonial/page'
import TestimonialV12 from '@/components/homepage-24/TestimonialV12'

export const metadata = {
  title: 'Photography Studio - Rivorr',
}

const home = () => {
  return (
    <LayoutOne>
      <HeroV11 />
      {/* <HeroV18 /> */}
      <Homeabout />
      <WhatWeHelpBusinessesDo />
      <AnimatedHeroImage />
      <ServicesV10 />
       {/* CASE STUDIES section BElow */}
      <PortfolioV5 />
      <WhyChooseUsV8 />
      {/* Marquee Section */}
      {/* _____UPAR KE SAB MERE HAI */}
      {/* <ClientsV3 /> */}
      {/* <ServicesV5 /> */}
      <Marquee withBorder={true} />
      {/* <ImageMarque /> */}
      <TestimonialV7 />
      <BlogPostsV5 />
     {/* <DiffRise /> */}
      <FaqV2 />
     

      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default home

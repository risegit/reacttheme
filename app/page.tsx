import Clients from '@/components/homepage-03/Clients'
import AboutV4 from '@/components/homepage-04/AboutV4'
import HeroV11 from '@/components/homepage-04/HeroV11'

import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Homeabout from '@/components/home-about/page'

import ServicesV10 from '@/components/homepage-11/ServicesV10'

import Marquee from '@/components/shared/Marquee'
import AnimatedHeroImage from '@/components/homepage-06/AnimatedHeroImage'

import FaqV2 from '@/components/shared/FaqV2'

import PortfolioV5 from '@/components/homepage-18/PortfolioV5'
import TestimonialV7 from '@/components/homepage-11/TestimonialV7'
import WhatWeHelpBusinessesDo from '@/components/what-we-help-businesses-do/page'

export const metadata = {
  title: 'Rise IT Digital Marketing Agency in Andheri West , Mumbai',
}

const home = () => {
  return (
    <LayoutOne>
      <HeroV11 />
      {/* <HeroV18 /> */}
      <AnimatedHeroImage />
       <WhatWeHelpBusinessesDo />
        <Marquee withBorder={true} />
        <Homeabout />
        <ServicesV10 />
        {/* <HomeService/> */}

       {/* CASE STUDIES section BElow */}
      <PortfolioV5 />
      {/* <WhyChooseUsV8 /> */}
      {/* Marquee Section */}
      {/* _____UPAR KE SAB MERE HAI */}
      {/* <ClientsV3 /> */}
      {/* <ServicesV5 /> */}
     
      {/* <ImageMarque /> */}
      <TestimonialV7 />
      {/* <BlogPostsV5 /> */}
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
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10"></i>
      </CTA>
    </LayoutOne>
  )
}

export default home

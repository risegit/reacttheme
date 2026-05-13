import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import PageHero from '@/components/shared/PageHero'
import Video from '@/components/shared/Video'
import Aboutsection2 from '@/components/aboutsection-2/page'
import WhyChooseUs from '@/components/diff-riseit/page'
import Aboutservice from '@/components/about-services/page'
import Aboutwework from '@/components/about-wework/page'
import ProcessV4 from '@/components/homepage-07/ProcessV4'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="About"
        title="The Idea Behind Rise IT"
        italicTitle="Digital"
        description="Every business has expertise.
But expertise alone is not enough.
If the right people cannot find your business, they cannot choose it.
Rise IT helps businesses connect their expertise with the audiences that need them.
We focus on improving visibility, generating demand, and turning digital attention into meaningful business growth."
      />
      <Video />
      <Aboutsection2 />
      {/* <WhyChooseUs /> */}
      <Aboutservice />
      <Marquee withBorder={true} />
      <ProcessV4 /> 
      {/* <Aboutwework /> */}
      {/* <AwardsV2 /> */}
      <CTA>
        Let's Build 
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/12.png' },
            { id: '3', img: '/images/agent/13.png' },
          ]}
        />
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Something Meaningful!</i>
      </CTA>
    </LayoutOne>
  )
}

export default AboutPage

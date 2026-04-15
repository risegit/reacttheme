import Careerform from '@/components/career-form/page'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Carrer1 from './Career-sec1'
import CareerSection from '@/components/career-section/pages'

export const metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Work With Us"
        badgeTitle="Career"
        description="Rise IT is a digital marketing agency working across strategy, SEO, performance marketing, content, design, and website development.
Our work involves helping businesses solve real marketing challenges. Some days involve analysing campaign performance. Some days involve building ideas, creating content, or improving websites.
The work is varied, and it requires people who enjoy figuring things out.
If that kind of work interests you, we would be happy to hear from you."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <Carrer1 />
      <CareerSection />
      <CTA>
    <h5>  We are always interested in meeting people who enjoy thoughtful work and are curious about how marketing and businesses evolve.
If that sounds like you, feel free to reach out.</h5>

       
      </CTA>
    </LayoutOne>
  )
}

export default ContactPage

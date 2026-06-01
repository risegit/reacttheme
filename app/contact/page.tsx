import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact us today | Rise IT Digital Marketing ',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Let's Work Together"
        badgeTitle="Contact"
        description="If you're exploring ways to improve your digital presence, generate more leads, or strengthen your marketing systems, we would be happy to talk."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/cta1.jpg' },
            { id: '2', img: '/images/agent/cta5.jpg' },
            { id: '3', img: '/images/agent/cta4.jpg' },
          ]}
        />
        with us.
       
      </CTA>
    </LayoutOne>
  )
}

export default ContactPage

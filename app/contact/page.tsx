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

      {/* Office Address and Phone */}
      <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Office Address */}
        <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span>📍</span> Our Office
          </div>

          <p className="text-md leading-6 text-gray-600">
            Vastu Prestige, 203-B & C, 2nd Floor, New Link Road, Above Tanishq Showroom, Andheri (W), Mumbai,
            Maharashtra 400053
          </p>
        </div>

        {/* Phone Number */}
        <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2 text-xl font-semibold text-gray-800">
            <span>📞</span> Call Us
          </div>

          <a href="tel:+919323013570" className="text-lg font-medium text-gray-700 transition hover:text-black">
            +91 93230 13570
          </a>

          <p className="text-md text-gray-500">Feel free to get in touch with us.</p>
        </div>
      </div>

      {/* Existing Contact Form - Unchanged */}
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

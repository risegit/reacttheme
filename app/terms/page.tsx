import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Terms & Conditions | Rise IT Digital Marketing Agency',
  description:
    'Read the Terms & Conditions governing the use of Rise IT Digital Marketing Agency website, services, and content.',
}

const TermsPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Terms & "
        italicTitle="Conditions"
        badgeTitle="Terms"
        scale
        description="Welcome to Rise IT Digital Marketing. These Terms & Conditions govern your access to and use of the Rise IT website and any content, information, services, or materials made available through it.

By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use of the website."
      />

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="terms-content space-y-8">
          {/* Section 1: Eligibility */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Eligibility</h2>
            <p className="mb-3">By using this website, you confirm that:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>You are at least 18 years of age.</li>
              <li>You have the legal capacity to enter into binding agreements.</li>
              <li>You will use the website only for lawful purposes.</li>
            </ul>
          </section>

          {/* Section 2: About Rise IT */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">2. About Rise IT</h2>
            <p className="mb-3">
              Rise IT is a digital marketing and creative agency providing services including but not limited to:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Brand Strategy</li>
              <li>Website Design &amp; Development</li>
              <li>Search Engine Optimisation (SEO)</li>
              <li>Performance Marketing</li>
              <li>Social Media Marketing</li>
              <li>Graphic Design</li>
              <li>Content Production</li>
              <li>Content Writing</li>
              <li>Email Marketing</li>
              <li>Marketing Automation</li>
              <li>Digital Consulting</li>
            </ul>
            <p className="mt-3">
              The information on this website is provided for general informational purposes only and does not
              constitute professional advice.
            </p>
          </section>

          {/* Section 3: Website Use */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Website Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Use the website for unlawful purposes.</li>
              <li>Attempt to gain unauthorised access to our systems.</li>
              <li>Upload malicious software or code.</li>
              <li>Disrupt website functionality.</li>
              <li>Copy or reproduce website content without permission.</li>
              <li>Misrepresent your identity.</li>
              <li>Interfere with the experience of other users.</li>
            </ul>
          </section>

          {/* Section 4: Intellectual Property */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Intellectual Property</h2>
            <p className="mb-3">Unless otherwise stated, all content on this website—including:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Logos</li>
              <li>Branding</li>
              <li>Designs</li>
              <li>Graphics</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Website layouts</li>
              <li>Articles</li>
              <li>Copy</li>
              <li>Icons</li>
              <li>Downloads</li>
            </ul>
            <p className="mb-3">
              is owned by or licensed to Rise IT and is protected by applicable intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, publish, or commercially exploit any content without our prior
              written permission.
            </p>
          </section>

          {/* Section 5: User Submissions */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">5. User Submissions</h2>
            <p className="mb-3">
              If you submit enquiries, feedback, ideas, proposals, or other materials through our website, you confirm
              that:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>The information provided is accurate.</li>
              <li>You have the right to share it.</li>
              <li>It does not infringe the rights of any third party.</li>
              <li>It does not contain unlawful or harmful content.</li>
            </ul>
            <p className="mt-3">
              We may use the information solely for responding to your enquiry or delivering our services, in accordance
              with our Privacy Policy.
            </p>
          </section>

          {/* Section 6: Client Projects */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Client Projects</h2>
            <p className="mb-3">
              Any engagement for services is governed by a separate proposal, quotation, Statement of Work (SOW), or
              service agreement.
            </p>
            <p className="mt-3">
              These Terms govern only the use of the website and do not replace contractual agreements entered into
              between Rise IT and its clients.
            </p>
          </section>

          {/* Section 7: Pricing & Quotations */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Pricing &amp; Quotations</h2>
            <p className="mb-3">All quotations, estimates, and proposals:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Are subject to change until accepted in writing.</li>
              <li>May have validity periods.</li>
              <li>Are based on the agreed scope of work.</li>
              <li>May exclude taxes unless specifically stated.</li>
              <li>May be revised where project requirements change.</li>
            </ul>
          </section>

          {/* Section 8: Third-Party Platforms */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Third-Party Platforms</h2>
            <p className="mb-3">Our services may involve the use of third-party platforms such as:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Google</li>
              <li>Meta</li>
              <li>LinkedIn</li>
              <li>WordPress</li>
              <li>Shopify</li>
              <li>HubSpot</li>
              <li>Mailchimp</li>
              <li>Other technology providers</li>
            </ul>
            <p className="mt-3">
              Rise IT is not responsible for changes, outages, pricing updates, policies, or decisions made by these
              third-party platforms.
            </p>
          </section>

          {/* Section 9: Website Availability */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Website Availability</h2>
            <p className="mb-3">
              We strive to keep our website available at all times. However, we do not guarantee uninterrupted or
              error-free access.
            </p>
            <p className="mb-3">We reserve the right to:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Suspend the website.</li>
              <li>Modify content.</li>
              <li>Update services.</li>
              <li>Remove pages.</li>
              <li>Conduct maintenance.</li>
            </ul>
            <p className="mt-3">without prior notice.</p>
          </section>

          {/* Section 10: Accuracy of Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Accuracy of Information</h2>
            <p className="mb-3">
              While we make reasonable efforts to ensure the accuracy of information published on our website, we do not
              warrant that all content is complete, current, or error-free.
            </p>
            <p className="mt-3">Content may be updated without notice.</p>
          </section>

          {/* Section 11: Links to Third-Party Websites */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Links to Third-Party Websites</h2>
            <p className="mb-3">Our website may contain links to external websites.</p>
            <p className="mb-3">These links are provided solely for convenience.</p>
            <p className="mb-3">Rise IT does not endorse or assume responsibility for:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Third-party content.</li>
              <li>Third-party privacy practices.</li>
              <li>Products or services offered by external websites.</li>
            </ul>
          </section>

          {/* Section 12: Limitation of Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Limitation of Liability</h2>
            <p className="mb-3">To the fullest extent permitted by law, Rise IT shall not be liable for any:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Indirect damages.</li>
              <li>Consequential damages.</li>
              <li>Loss of profits.</li>
              <li>Loss of revenue.</li>
              <li>Loss of data.</li>
              <li>Business interruption.</li>
              <li>Website downtime.</li>
              <li>Reliance on website information.</li>
            </ul>
            <p className="mt-3">arising from your use of this website.</p>
          </section>

          {/* Section 13: Indemnity */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">13. Indemnity</h2>
            <p className="mb-3">
              You agree to indemnify and hold harmless Rise IT, its directors, employees, consultants, and affiliates
              from any claims, liabilities, losses, or expenses arising from:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Your misuse of the website.</li>
              <li>Your violation of these Terms.</li>
              <li>Your infringement of third-party rights.</li>
            </ul>
          </section>

          {/* Section 14: Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">14. Disclaimer</h2>
            <p className="mb-3">The website and all content are provided on an "as is" and "as available" basis.</p>
            <p className="mb-3">Rise IT makes no warranties, express or implied, regarding:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Accuracy.</li>
              <li>Reliability.</li>
              <li>Availability.</li>
              <li>Fitness for a particular purpose.</li>
              <li>Merchantability.</li>
              <li>Non-infringement.</li>
            </ul>
          </section>

          {/* Section 15: Confidentiality */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">15. Confidentiality</h2>
            <p className="mb-3">
              Information submitted through enquiry forms or project discussions will be handled in accordance with our
              Privacy Policy.
            </p>
            <p className="mt-3">
              However, users should avoid submitting confidential information unless specifically requested.
            </p>
          </section>

          {/* Section 16: Force Majeure */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">16. Force Majeure</h2>
            <p className="mb-3">
              Rise IT shall not be liable for delays or failure to perform resulting from events beyond our reasonable
              control, including but not limited to:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Natural disasters.</li>
              <li>Government actions.</li>
              <li>Internet outages.</li>
              <li>Cyberattacks.</li>
              <li>Pandemics.</li>
              <li>Labour disputes.</li>
              <li>Utility failures.</li>
            </ul>
          </section>

          {/* Section 17: Changes to These Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">17. Changes to These Terms</h2>
            <p className="mb-3">We reserve the right to amend these Terms at any time.</p>
            <p className="mb-3">Changes become effective upon publication on this website.</p>
            <p className="mt-3">Continued use of the website constitutes acceptance of the revised Terms.</p>
          </section>

          {/* Section 18: Governing Law */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">18. Governing Law</h2>
            <p className="mb-3">These Terms shall be governed by the laws of India.</p>
            <p className="mt-3">
              Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the
              courts located in Mumbai, Maharashtra.
            </p>
          </section>

          {/* Section 19: Contact Us */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">19. Contact Us</h2>
            <p className="mb-3">If you have any questions regarding these Terms &amp; Conditions, please contact us:</p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="font-semibold">Rise IT Digital Marketing</p>
              <p>
                <strong>Email:</strong> info@riseit.com
              </p>
              <p>
                <strong>Phone:</strong> +91 93230 13570
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p>Vastu Prestige, 203-B &amp; C, 2nd Floor</p>
              <p>New Link Road, Above Tanishq Showroom</p>
              <p>Andheri (West), Mumbai – 400053</p>
              <p>Maharashtra, India</p>
            </div>
          </section>
        </div>
      </div>

      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/14.png' },
            { id: '2', img: '/images/agent/16.png' },
            { id: '3', img: '/images/agent/19.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default TermsPage

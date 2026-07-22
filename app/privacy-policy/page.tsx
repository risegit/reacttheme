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
import Clients from '@/components/clients/page'

export const metadata = {
  title: 'Privacy Policy | Rise IT Digital Marketing Agency',
  description:
    'Learn how Rise IT Digital Marketing collects, uses, stores, and protects your personal information in accordance with the Digital Personal Data Protection Act, 2023 and other applicable laws.',
}

const PrivacyPolicyPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Privacy Policy"
        title="Privacy Policy"
        description="This Privacy Policy explains how Rise IT Digital Marketing Agency collects, uses, stores, processes, shares, and protects your personal information when you access or use our website, engage with our services, communicate with us, or otherwise interact with our business.

By accessing or using our website, you acknowledge that you have read, understood, and agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with any part of this Privacy Policy, please discontinue the use of our website.

Rise IT is committed to protecting your privacy and handling your personal information responsibly in accordance with the Digital Personal Data Protection Act, 2023 (India) and other applicable laws."
      />

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="privacy-policy-content space-y-8">
          {/* Section 1: Scope */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Scope</h2>
            <p className="mb-3">This Privacy Policy applies to all personal information collected through:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Our website</li>
              <li>Contact and enquiry forms</li>
              <li>Email communications</li>
              <li>Phone calls</li>
              <li>WhatsApp conversations</li>
              <li>Social media interactions</li>
              <li>Strategy consultations</li>
              <li>Business enquiries</li>
              <li>Client onboarding</li>
              <li>Marketing communications</li>
              <li>Events and webinars</li>
              <li>Any other interaction with Rise IT</li>
            </ul>
            <p className="mt-3">
              This Privacy Policy does not apply to third-party websites, applications, or services that may be linked
              from our website. We encourage you to review the privacy policies of those third parties before sharing
              any personal information.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Information We Collect</h2>
            <p className="mb-4">
              Depending on how you interact with us, we may collect the following categories of information.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">A. Information You Voluntarily Provide</h3>
            <p className="mb-3">You may choose to provide personal information when you:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Submit a contact form</li>
              <li>Request a proposal</li>
              <li>Book a consultation</li>
              <li>Download resources (e.g., case studies, whitepapers, guides)</li>
              <li>Subscribe to our newsletter</li>
              <li>Apply for a job or internship</li>
              <li>Contact us through email or WhatsApp</li>
              <li>Engage with us through social media</li>
              <li>Become a client</li>
              <li>Participate in our webinars or events</li>
            </ul>
            <p className="mb-3">This information may include:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Full name</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business address</li>
              <li>Website URL</li>
              <li>Industry</li>
              <li>Project requirements</li>
              <li>Marketing objectives and goals</li>
              <li>Budget information (for proposal preparation)</li>
              <li>Brand guidelines and creative assets</li>
              <li>Business-related documents shared with us</li>
              <li>Any additional information you voluntarily provide</li>
            </ul>
            <p className="mt-3">
              Providing personal information is voluntary. However, certain information may be necessary for us to
              respond to your enquiry or provide our services.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">B. Information Collected Automatically</h3>
            <p className="mb-3">
              When you visit our website, we may automatically collect certain technical and usage information,
              including:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Screen resolution</li>
              <li>Language preferences</li>
              <li>Date and time of access</li>
              <li>Website pages visited</li>
              <li>Navigation behaviour and click patterns</li>
              <li>Time spent on pages</li>
              <li>Referral URLs (how you found us)</li>
              <li>Exit pages</li>
              <li>Approximate geographic location</li>
              <li>Session duration</li>
            </ul>
            <p className="mt-3">
              This information helps us understand how visitors interact with our website and allows us to improve
              performance, usability, and user experience.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">C. Information Collected Through Cookies</h3>
            <p className="mb-3">
              Our website uses cookies and similar technologies to enhance your browsing experience.
            </p>
            <p className="mb-3">Cookies may collect information including:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Session identifiers</li>
              <li>Browser preferences</li>
              <li>Authentication status</li>
              <li>Website usage statistics</li>
              <li>Marketing attribution</li>
              <li>Analytics information</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-3">
              You may disable cookies through your browser settings; however, doing so may affect certain features and
              functionality of our website.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">D. Information from Third Parties</h3>
            <p className="mb-3">We may receive information from trusted third-party sources including:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Social media platforms (LinkedIn, Facebook, Instagram, etc.)</li>
              <li>Advertising platforms (Google Ads, Meta Ads, etc.)</li>
              <li>Analytics providers (Google Analytics, etc.)</li>
              <li>Business partners and referral sources</li>
              <li>CRM systems</li>
              <li>Marketing automation platforms</li>
              <li>Publicly available business sources</li>
            </ul>
            <p className="mt-3">Such information is processed only where permitted by applicable law.</p>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">3. How We Use Your Information</h2>
            <p className="mb-3">We use your personal information for legitimate business purposes, including:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Responding to your enquiries and requests</li>
              <li>Providing strategy consultations and recommendations</li>
              <li>Preparing proposals and quotations</li>
              <li>Delivering requested digital marketing services</li>
              <li>Managing client relationships and communications</li>
              <li>Communicating project updates and milestones</li>
              <li>Improving our website, services, and offerings</li>
              <li>Analysing website performance and user behaviour</li>
              <li>Understanding visitor preferences and trends</li>
              <li>Personalising user experience on our website</li>
              <li>Sending newsletters and marketing communications (with consent)</li>
              <li>Conducting market research and analytics</li>
              <li>Maintaining website security and preventing misuse</li>
              <li>Complying with applicable legal and regulatory obligations</li>
              <li>Exercising or defending legal claims</li>
              <li>Any other purpose reasonably related to our business operations</li>
            </ul>
            <p className="mt-3">
              We will only use your information for the purposes for which it was collected or for compatible purposes
              permitted by applicable law.
            </p>
          </section>

          {/* Section 4: Legal Basis for Processing */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Legal Basis for Processing</h2>
            <p className="mb-3">
              Where applicable, particularly for visitors from jurisdictions such as the European Economic Area (EEA) or
              the United Kingdom, we process personal information based on one or more of the following legal grounds:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>
                <strong>Your consent</strong> - When you voluntarily provide information or subscribe to communications
              </li>
              <li>
                <strong>Performance of a contract</strong> - When processing is necessary to provide our services
              </li>
              <li>
                <strong>Compliance with legal obligations</strong> - When required by law
              </li>
              <li>
                <strong>Legitimate business interests</strong> - For improving our services and marketing activities
              </li>
            </ul>
            <p className="mt-3">
              Where processing is based on consent, you may withdraw your consent at any time. Withdrawal of consent
              will not affect any processing carried out prior to such withdrawal.
            </p>
          </section>

          {/* Section 5: Cookies and Tracking Technologies */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Rise IT uses cookies, pixels, and similar technologies to improve website functionality, analyze traffic,
              and enhance user experience.
            </p>

            <h4 className="mb-2 mt-4 text-lg font-semibold">Essential Cookies</h4>
            <p className="mb-3">These cookies are necessary for the website to function properly:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Security</li>
              <li>Session management</li>
              <li>Form functionality</li>
              <li>Load balancing</li>
            </ul>

            <h4 className="mb-2 mt-4 text-lg font-semibold">Performance & Analytics Cookies</h4>
            <p className="mb-3">These cookies help us understand how visitors interact with our website:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Website performance optimization</li>
              <li>Navigation and user journey analysis</li>
              <li>Popular content identification</li>
              <li>User behaviour patterns</li>
            </ul>

            <h4 className="mb-2 mt-4 text-lg font-semibold">Marketing Cookies</h4>
            <p className="mb-3">Marketing cookies help us measure and improve our campaigns:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Measure advertising effectiveness</li>
              <li>Improve campaign performance</li>
              <li>Deliver relevant advertisements</li>
              <li>Support remarketing initiatives</li>
              <li>Track conversions and leads</li>
            </ul>
            <p className="mt-3">You can modify your cookie preferences through your browser settings.</p>
          </section>

          {/* Section 6: Disclosure of Personal Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Disclosure of Personal Information</h2>
            <p className="mb-3">
              Rise IT does not sell, rent, or trade your personal information to third parties for their independent
              marketing purposes.
            </p>
            <p className="mb-3">We may share your information only in the following circumstances:</p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">A. Service Providers</h3>
            <p className="mb-3">
              We may share information with carefully selected third-party service providers who assist us in operating
              our business:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Website hosting and maintenance</li>
              <li>Cloud storage and backup services</li>
              <li>Customer Relationship Management (CRM) platforms</li>
              <li>Email marketing and communication tools</li>
              <li>Marketing automation platforms</li>
              <li>Analytics and reporting tools</li>
              <li>Advertising platforms</li>
              <li>Video conferencing and collaboration tools</li>
              <li>Project management software</li>
              <li>IT support and security providers</li>
            </ul>
            <p className="mt-3">
              These third parties are contractually obligated to protect the confidentiality and security of your
              information.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">B. Business Partners</h3>
            <p className="mb-3">
              Where required for delivering specific services, we may share relevant information with trusted partners,
              consultants, or freelancers working on behalf of Rise IT.
            </p>
            <p className="mt-3">
              Such parties are required to process information only in accordance with our instructions and applicable
              privacy laws.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">C. Legal Requirements</h3>
            <p className="mb-3">We may disclose your information where required to:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Comply with applicable laws and regulations</li>
              <li>Respond to lawful requests from courts or government authorities</li>
              <li>Enforce our legal rights</li>
              <li>Protect our business</li>
              <li>Investigate or prevent fraud or unlawful activity</li>
              <li>Protect the rights, property, or safety of Rise IT, our clients, or the public</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">D. Business Transfers</h3>
            <p className="mb-3">
              In the event of a merger, acquisition, or restructuring, your personal information may be transferred as
              part of that transaction. Any acquiring entity will continue to process your information in accordance
              with this Privacy Policy.
            </p>
          </section>

          {/* Section 7: Analytics & Advertising */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Analytics & Advertising Technologies</h2>
            <p className="mb-3">
              To understand website performance and improve our services, we use analytics and advertising technologies
              including:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Google Ads</li>
              <li>Google Search Console</li>
              <li>Meta Pixel (Facebook/Instagram)</li>
              <li>LinkedIn Insight Tag</li>
              <li>Other analytics and advertising tools</li>
            </ul>
            <p className="mb-3">These services may collect information such as:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Website interactions and behaviour</li>
              <li>Device and browser information</li>
              <li>Session duration and engagement</li>
              <li>Referral sources and traffic sources</li>
              <li>Advertising interactions and conversions</li>
              <li>Campaign performance metrics</li>
              <li>General usage analytics</li>
            </ul>
            <p className="mt-3">
              This information helps us improve our website, measure campaign effectiveness, and enhance user
              experience.
            </p>
          </section>

          {/* Section 8: Marketing Communications */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Marketing Communications</h2>
            <p className="mb-3">Where permitted by law or with your consent, Rise IT may send you:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Email newsletters</li>
              <li>Marketing and promotional communications</li>
              <li>Industry insights and thought leadership content</li>
              <li>Event and webinar invitations</li>
              <li>Company updates and service announcements</li>
              <li>Case studies and success stories</li>
              <li>Educational resources and guides</li>
              <li>Special offers and announcements</li>
            </ul>
            <p className="mb-3">You may unsubscribe from marketing communications at any time by:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Clicking the unsubscribe link in marketing emails</li>
              <li>Contacting us directly</li>
              <li>Updating your communication preferences</li>
            </ul>
            <p className="mt-3">
              We may still send important service-related communications even if you opt out of marketing
              communications.
            </p>
          </section>

          {/* Section 9: Data Retention */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Data Retention</h2>
            <p className="mb-3">We retain personal information only for as long as reasonably necessary to:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Respond to your enquiries and requests</li>
              <li>Deliver our services and manage client relationships</li>
              <li>Maintain business records and documentation</li>
              <li>Meet contractual and legal obligations</li>
              <li>Comply with accounting, taxation, and regulatory requirements</li>
              <li>Resolve disputes and enforce our legal rights</li>
              <li>For legitimate business purposes</li>
            </ul>
            <p className="mt-3">
              When personal information is no longer required, we will securely delete or anonymise it in accordance
              with our retention policies.
            </p>
          </section>

          {/* Section 10: Information Security */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Information Security</h2>
            <p className="mb-3">
              Protecting your personal information is important to us. Rise IT implements appropriate safeguards
              including:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Secure hosting infrastructure</li>
              <li>Data encryption where appropriate</li>
              <li>Access controls and authentication</li>
              <li>Network security measures</li>
              <li>Employee confidentiality obligations</li>
              <li>Restricted access to personal information</li>
              <li>Regular software updates and security monitoring</li>
            </ul>
            <p className="mt-3">
              While we strive to protect your information using commercially reasonable measures, no method of
              transmission over the internet is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 11: Your Privacy Rights */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Your Privacy Rights</h2>
            <p className="mb-3">Subject to applicable laws, you may have the right to:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw your consent where applicable</li>
              <li>Object to certain processing activities</li>
              <li>Request restriction of processing</li>
              <li>Lodge a complaint with the appropriate regulatory authority</li>
            </ul>
            <p className="mb-3">To exercise any of these rights, please contact us using the details provided below.</p>
            <p className="mt-3">
              We may request reasonable verification of your identity before processing your request.
            </p>
          </section>

          {/* Section 12: Data Breach Response */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Data Breach Response</h2>
            <p className="mb-3">
              We maintain internal processes to detect, investigate, and respond to security incidents involving
              personal information. In the event of a data breach that may affect your rights, we will:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Investigate the nature and scope of the incident</li>
              <li>Take measures to contain and mitigate the impact</li>
              <li>Notify affected individuals where required by law</li>
              <li>Notify relevant regulatory authorities where legally required</li>
              <li>Implement corrective actions to prevent future incidents</li>
            </ul>
          </section>

          {/* Section 13: AI Usage */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">13. Artificial Intelligence (AI)</h2>
            <p className="mb-3">
              Rise IT may utilise AI tools to assist with digital marketing, creative, and content production services.
              When AI tools are used:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Human oversight is maintained throughout the process</li>
              <li>AI-generated outputs are reviewed before delivery</li>
              <li>Client confidential information is handled responsibly</li>
              <li>We do not use confidential client information to train public AI models</li>
            </ul>
          </section>

          {/* Section 14: Recruitment */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">14. Recruitment & Careers</h2>
            <p className="mb-3">If you apply for employment or internship opportunities, we may collect:</p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Name and contact details</li>
              <li>Resume/CV and portfolio</li>
              <li>Employment and educational history</li>
              <li>References and other application information</li>
            </ul>
            <p className="mt-3">This information is used solely for recruitment, hiring, and evaluation purposes.</p>
          </section>

          {/* Section 15: Contact Information */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">15. Contact Us</h2>
            <p className="mb-3">
              If you have any questions regarding this Privacy Policy or how your personal information is handled, you
              may contact us at:
            </p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="font-semibold">Rise IT Digital Marketing</p>
              <p>
                <strong>Email:</strong> info@riseit.com
              </p>
              <p>
                <strong>Phone:</strong>+91 93230 13570
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p>Vastu Prestige, 203-B & C, 2nd Floor</p>
              <p>New Link Road, Above Tanishq Showroom</p>
              <p>Andheri (West), Mumbai – 400053</p>
              <p>Maharashtra, India</p>
            </div>
          </section>

          {/* Section 16: Grievance Officer */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">16. Grievance Officer</h2>
            <p className="mb-3">
              In accordance with the Digital Personal Data Protection Act, 2023, you may contact our Grievance Officer
              regarding concerns related to your personal information:
            </p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="font-semibold">Grievance Officer</p>
              <p>Rise IT Digital Marketing</p>
              <p>
                <strong>Email:</strong> info@riseit.com
              </p>
            </div>
            <p className="mt-3">We will respond to grievances within the timelines prescribed under applicable law.</p>
          </section>

          {/* Section 17: Governing Law */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">17. Governing Law & Jurisdiction</h2>
            <p className="mb-3">
              This Privacy Policy shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="mt-3">
              Any disputes arising out of this Privacy Policy shall be subject to the exclusive jurisdiction of courts
              in Mumbai, Maharashtra, India.
            </p>
          </section>

          {/* Section 18: Consent */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">18. Consent</h2>
            <p className="mb-3">
              By accessing or using the Rise IT website, submitting your personal information, or requesting our
              services, you acknowledge that you have read and understood this Privacy Policy and consent to the
              collection, use, and processing of your personal information in accordance with this Privacy Policy.
            </p>
            <p className="mt-3">
              If you do not agree with this Privacy Policy, please discontinue the use of our website and services.
            </p>
          </section>

          {/* Section 19: Changes to Policy */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">19. Changes to This Privacy Policy</h2>
            <p className="mb-3">
              Rise IT reserves the right to update or modify this Privacy Policy at any time to reflect:
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>Changes in our services or operations</li>
              <li>Changes in applicable laws or regulations</li>
              <li>Improvements to our privacy practices</li>
              <li>Changes in technology</li>
            </ul>
            <p className="mb-3">The revised Privacy Policy will become effective immediately upon publication.</p>
            <p className="mt-3">
              We encourage you to review this page periodically to remain informed about how we protect your
              information.
            </p>
          </section>
        </div>
      </div>

      <CTA>
        Let's Build
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/cta1.jpg' },
            { id: '2', img: '/images/agent/cta2.jpg' },
            { id: '3', img: '/images/agent/cta4.jpg' },
          ]}
        />
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Something Meaningful!</i>
      </CTA>
    </LayoutOne>
  )
}

export default PrivacyPolicyPage

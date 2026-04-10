import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import Websdevelopment from './WebDevelopment'

export async function generateStaticParams() {
  return [
    { slug: 'project-1' },
    { slug: 'project-2' },
    { slug: 'project-3' },
  ]
}

const SocialMediaMarketing = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  // Manual project data based on slug
  const getProjectData = (slug: string) => {
    const projects = {
      'project-1': {
        category: 'Services',
        title: 'Website Design & Development',
        description: 'A website is often the central platform through which customers discover, evaluate, and engage with a business.Modern websites must do more than present information. They need to communicate brand value clearly, support search visibility, and guide visitors toward meaningful actions such as enquiries, sign-ups, or purchases.At Rise IT, our website design and development services focus on building high-performance websites that support marketing initiatives, improve user experience, and strengthen digital visibility.From conversion-focused design to integrated marketing technology systems, we help businesses develop websites that support long-term digital growth.',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Website Design

Website design plays a critical role in how users perceive a brand and interact with digital platforms.
Clear visual hierarchy, intuitive navigation, and structured content help businesses communicate effectively while improving user engagement.



**Our website design services include:**

- **Website design strategy**
- **User experience design**
- **Brand-aligned website design**
- **Responsive website design**
- **Visual interface design**


### Website Development

Website development focuses on building secure, scalable, and high-performance digital platforms that support business growth.
Strong development practices ensure that websites perform reliably while supporting marketing campaigns and digital visibility.



**Our website development services includes:**

- **Website development**
- **Custom website development**
- **High-performance website builds**
- **Scalable website architecture**
- **Secure website development**


### Conversion-Focused Websites
A well-designed website should guide visitors toward meaningful actions such as enquiries, lead submissions, or purchases.
Conversion-focused websites are designed to improve user engagement while supporting marketing and lead generation initiatives.


**Our conversion-focused website services include:**

- **Conversion-focused website design**
- **Lead generation website development**
- **Conversion-driven user interface design**
- **Customer journey optimisation**
- **Conversion-optimised website structure**


### SEO-Friendly Architecture
Search visibility begins with a website structure that allows search engines to crawl and understand content effectively.
SEO-friendly architecture helps businesses improve search rankings while supporting long-term organic growth.



**Our SEO-friendly architecture services include:**

- **SEO-friendly website structure**
- **Search-optimised website architecture**
- **Technical SEO implementation**
- **Search engine crawl optimisation**
- **Website indexing optimisation**


### Landing Page Development

Landing pages play a critical role in marketing campaigns, advertising initiatives, and lead generation efforts.
Well-designed landing pages help businesses communicate value quickly and convert visitors into enquiries or leads.



**Our landing page development services include:**

- **Landing page design**
- **Campaign landing page development**
- **Lead capture landing pages**
- **Conversion-focused landing pages**
- **Marketing campaign landing pages**

### CRM Integration



CRM integration connects your website with customer relationship management systems, allowing businesses to capture, organise, and manage leads efficiently.
This integration helps align marketing activity with sales processes and customer management.



**Our CRM integration services include:**

- **CRM integration with website**
- **Lead capture system integration**
- **Customer data synchronisation**
- **Sales pipeline integration**
- **Marketing and CRM connectivity**


### CMS Development


Content management systems allow businesses to manage website content efficiently without requiring technical expertise.
A well-structured CMS helps organisations update content easily while maintaining performance and scalability.


**Our CMS development services include:**

- **CMS website development**
- **Custom CMS implementation**
- **Content management system setup**
- **CMS platform integration**
- **Website content management architecture**


### API Integration


API integrations allow websites to connect with external systems, tools, and platforms that support business operations.
These integrations enable seamless data exchange between marketing systems, applications, and digital platforms.


**Our API integration services include:**

- **API integration development**
- **Third-party system integration**
- **Application connectivity solutions**
- **Data synchronisation integrations**
- **Platform integration development**

### Marketing Platform Integrations



Marketing platforms play an important role in managing campaigns, tracking performance, and nurturing leads.
Integrating marketing platforms with your website helps businesses streamline marketing workflows and improve campaign performance.

**Our marketing platform integration services includes:**

- **Marketing automation platform integrations**
- **Analytics platform integration**
- **Advertising platform integration**
- **Lead tracking integrations**
- **Marketing system connectivity**

### OUR APPROACH

At Rise IT, website development is closely aligned with digital marketing strategy, SEO, and conversion optimisation.
Our approach focuses on building websites that not only look professional but also support marketing performance, lead generation, and long-term digital growth.
By combining design expertise with technical development and marketing integration, we help businesses create websites that function as powerful digital assets.


**RELATED SERVICES:**

- **SEO Services**
- **Content Production**
- **Digital PR**
- **Social Media Marketing**
- **Growth Marketing Strategy**


`,
        images: ['/images/home-5/case-study-3.png', '/images/home-5/case-study-3.png'],
      }
    }
    return projects[slug as keyof typeof projects] || projects['project-1']
  }

  const postprojects = getProjectData(slug)

  // Structure project object with content as string (markdown)
  const project = {
    data: {
      title: postprojects.title,
      category: postprojects.category,
      description: postprojects.description,
      images: postprojects.images,
      thumbnail: postprojects.thumbnail,
    },
    content: postprojects.content,
  }

  return (
    <LayoutOne>
      <ProjectDetailsHero
        badgeTitle={postprojects?.category}
        title={postprojects?.title}
        description={postprojects?.description}
        scale
      />
      
      {/* Pass data to client component for interactive features */}
      <Websdevelopment project={project} />
      
      <CTA>
     <span>Build a stronger social media presence</span> .
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/06.png' },
            { id: '2', img: '/images/agent/07.png' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
       <h5 className="mb-2.5 mt-5">If your business wants to strengthen brand visibility, engage audiences, and maintain a consistent social media presence, Rise IT can help.
</h5>
      </CTA>
    </LayoutOne>
  )
}

export default SocialMediaMarketing
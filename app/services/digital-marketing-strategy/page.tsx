import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import DigitalMarketingStrategy from './DigitalMarketingStrategy'

export async function generateStaticParams() {
  return [
    { slug: 'project-1' },
    { slug: 'project-2' },
    { slug: 'project-3' },
  ]
}

const Seopage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  // Manual project data based on slug
  const getProjectData = (slug: string) => {
    const projects = {
      'project-1': {
        category: 'Strategy',
        title: 'Digital Marketing Strategy & Audits',
        description: 'Search engines are often the first place customers go when researching products, services, and solutions online. If your business is not visible in search results, potential customers may never discover your brand.Rise IT provides structured SEO services designed to improve search rankings, increase organic traffic, and strengthen long-term digital visibility. Our search engine optimisation strategies combine technical optimisation, content development, and search performance analysis to help businesses rank for high-value keywords.',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Digital Marketing Audits
Digital marketing audits provide a comprehensive review of your current digital marketing activities across channels such as search engines, advertising platforms, social media, and content marketing.
The objective of a digital marketing audit is to identify performance gaps, highlight growth opportunities, and ensure marketing initiatives align with business objectives.


**Our digital marketing audit services include:**

- **Digital marketing audits**
- **Campaign performance reviews**
- **Digital channel strategy analysis**
- **Marketing performance diagnostics**
- **Growth opportunity identification**


### Brand Audits
Brand audits evaluate how your brand is positioned and perceived across digital platforms.
A strong digital presence requires consistent messaging, clear positioning, and effective communication across marketing channels. Brand audits help identify inconsistencies, positioning gaps, and opportunities to strengthen brand visibility.


**Our brand audit services include:**

- **Digital brand audits**
- **Brand positioning analysis**
- **Messaging consistency review**
- **Brand visibility analysis**
- **Competitor brand comparison**


### Website Audits
Your website is often the central hub of digital marketing activity. Website audits evaluate how effectively your website supports visibility, user engagement, and conversion.
By analysing structure, performance, and content, businesses can identify areas that may be limiting growth.


**Our website audit services include:**

- **Website performance audits**
- **Website structure analysis**
- **Conversion experience review**
- **User journey evaluation**
- **Website content performance analysis**


### Marketing Channel Analysis
Businesses today operate across multiple digital channels including search engines, advertising platforms, social media networks, and email marketing systems.
Marketing channel analysis helps identify which channels generate the strongest visibility, engagement, and customer acquisition opportunities.
This analysis allows businesses to prioritise investments in the channels that deliver the greatest impact.


**Our marketing channel analysis services include:**

- **Digital channel performance analysis**
- **Customer acquisition channel evaluation**
- **Advertising channel performance review**
- **Social media marketing analysis**
- **Marketing channel strategy insights**

### Search Opportunity Analysis
Search engines remain one of the most powerful sources of customer discovery.
Search opportunity analysis identifies keyword demand, search behaviour, and content opportunities that can improve digital visibility.
These insights help businesses prioritise SEO and content marketing initiatives that attract qualified organic traffic.


**Our search opportunity analysis services include:**

- **Keyword opportunity analysis**
- **Search demand analysis**
- **Competitor search visibility comparison**
- **Content gap analysis**
- **Organic growth opportunity identification**


### Digital Performance Evaluation
Digital performance evaluation focuses on measuring how effectively marketing initiatives contribute to business growth.
By analysing campaign results, website engagement, and customer acquisition metrics, businesses gain a clearer understanding of marketing effectiveness.
This evaluation helps guide strategic decisions and future marketing investments.



**Our digital performance evaluation services include:**

- **Marketing performance evaluation**
- **Campaign performance analysis**
- **Customer acquisition performance review**
- **Digital growth benchmarking**
- **Marketing data analysis**


### OUR APPROACH
At Rise IT, digital marketing strategy and audits focus on uncovering insights that guide smarter marketing decisions.
Rather than simply reviewing metrics, we analyse how marketing channels interact with each other and how they contribute to customer acquisition and business growth.
This structured evaluation helps businesses identify opportunities to improve marketing performance while building stronger strategies for long-term growth.




**Related Services:**

- **Growth Marketing Strategy**
- **SEO Services**
- **Performance Marketing**
- **Conversion Rate Optimisation**
- **Marketing Analytics & Tracking**

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
      <DigitalMarketingStrategy project={project} />
      
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/06.png' },
            { id: '2', img: '/images/agent/07.png' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default Seopage
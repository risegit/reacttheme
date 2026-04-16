import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import PerformanceMarketing from './PerformanceMarketing'

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
        category: 'Services',
        title: 'Performance Marketing',
        description: 'Performance marketing focuses on driving measurable results through targeted digital advertising campaigns. Businesses today compete for attention across multiple digital platforms, and paid advertising helps brands reach the right audience at the right time.Rise IT provides performance marketing services designed to generate qualified traffic, increase conversions, and maximise return on advertising spend. Our strategies combine audience targeting, data-driven campaign optimisation, and continuous performance monitoring to ensure every advertising campaign delivers measurable business outcomes.Through a combination of Google Ads, Meta Ads, LinkedIn advertising, and paid social media campaigns, we help businesses scale demand generation and acquire customers through performance-focused marketing systems.',
        thumbnail: '/images/home-5/case-study-3.png',
        content: `### Performance Marketing Strategy
A successful performance marketing campaign begins with a structured strategy focused on audience targeting, campaign objectives, and measurable outcomes.
Understanding where your audience spends time online allows businesses to run targeted advertising campaigns that generate meaningful engagement and conversions.
Our performance marketing strategies focus on building advertising systems that consistently attract qualified prospects while improving campaign efficiency over time.


**Our performance marketing strategy services include:**

-  **Paid Media Strategy Development**
-  **Audience Targeting Strategy**
-  **Campaign Planning & Funnel Strategy**
-  **Budget Allocation & Media Planning**
-  **Conversion-Focused Ad Strategy**
-  **Demand Generation Campaign Planning**

### Google Ads Management
Google Ads is one of the most powerful channels for capturing high-intent search traffic. Businesses can reach potential customers at the moment they are actively searching for solutions, products, or services.
Our Google Ads management services focus on creating targeted campaigns that improve visibility across search results while generating qualified traffic and conversions.
Through structured keyword targeting and campaign optimisation, businesses can maximise their return on advertising spend.


**Our Google Ads services include:**

- **Google Search Ads**
- **Google Display Advertising**
- **Google Performance Max Campaigns**
- **Keyword Research for Paid Search**
- **Search Campaign Optimisation**


### Meta Ads (Facebook & Instagram Ads)
Meta advertising allows businesses to reach audiences across Facebook and Instagram using highly targeted advertising campaigns.
Through advanced audience targeting, creative testing, and campaign optimisation, businesses can build strong brand visibility while generating leads and conversions.
Meta Ads are particularly effective for building demand, promoting products, and nurturing potential customers through the marketing funnel.

**Our Meta Ads services include:**

- **Facebook Ads Campaign Management**
- **Instagram Advertising Campaigns**
- **Audience Targeting & Lookalike Audiences**
- **Creative Ad Testing & Optimisation**
- **Lead Generation Ads**
- **Retargeting Campaigns**


### LinkedIn Advertising
LinkedIn advertising is particularly effective for B2B companies looking to reach professionals, decision makers, and industry-specific audiences.
LinkedIn Ads allow businesses to run highly targeted campaigns that reach professionals based on industry, job role, company size, and professional interests.
This makes LinkedIn advertising a powerful channel for B2B lead generation and professional audience targeting.

**Our LinkedIn advertising services include:**

- **LinkedIn Sponsored Content Campaigns**
- **LinkedIn Lead Generation Ads**
- **LinkedIn Message Ads**
- **Audience Targeting by Industry & Job Role**
- **B2B Lead Generation Campaigns**


### Campaign Optimisation & Performance Tracking
Performance marketing relies on continuous monitoring and optimisation to improve results over time.
By analysing campaign performance data, businesses can refine targeting strategies, optimise ad creatives, and improve conversion rates.
Our campaign optimisation process focuses on improving campaign efficiency while maximising advertising ROI.


**Our performance marketing optimisation services include:**

- **Conversion Tracking Setup**
- **Campaign Performance Analysis**
- **A/B Testing for Ads**
- **Landing Page Performance Analysis**
- **Advertising ROI Monitoring**

### Our Approach
At Rise IT, performance marketing is built around measurable growth. Every campaign is designed to generate meaningful engagement while driving conversions and lead generation.
Our approach focuses on combining data-driven advertising strategies, creative testing, and continuous optimisation to maximise campaign performance.
By analysing user behaviour, refining audience targeting, and optimising campaign performance over time, we help businesses scale their digital advertising efforts effectively.

**Related Services:**

- **SEO Services**
- **Social Media Marketing**
- **Lead Generation Systems**
- **Landing Page Performance Analysis**
- **Advertising ROI Monitoring**

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
      <PerformanceMarketing project={project} />

      <CTA>
        Build a lead generation system that drives real opportunities.
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

export default Seopage
import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import LeadGenSystem from './LeadGenSystem'

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
        title: 'Lead Generation Systems',
        description: 'Generating consistent leads requires more than running isolated marketing campaigns. Businesses need structured systems that attract the right audience, nurture prospects, and convert interest into qualified sales opportunities.Lead generation systems combine audience targeting, marketing funnels, outreach campaigns, and automation tools to create predictable pipelines for business growth.At Rise IT, we help businesses build lead generation systems designed to attract qualified prospects, improve lead quality, and support long-term customer acquisition.Our approach focuses on building scalable marketing systems that connect marketing channels with sales outcomes.',
        thumbnail: '/images/home-5/case-study-3.png',
        content: `### B2B Lead Generation

B2B lead generation focuses on identifying and attracting decision-makers who are actively looking for solutions relevant to your business.
Structured lead generation strategies help businesses build consistent pipelines of qualified prospects while improving customer acquisition efficiency.


**Our B2B lead generation services include:**

- **B2B lead generation strategy**
- **Lead acquisition campaigns**
- **Prospect targeting strategy**
- **Sales lead pipeline development**
- **Qualified lead generation systems**


### Email Outreach Systems

Email outreach allows businesses to directly reach potential customers with targeted communication.
Structured outreach systems help generate conversations, introduce services, and create opportunities for new business relationships.


**Our email outreach services include:**

- **Email outreach campaign strategy**
- **Cold email campaign systems**
- **Prospect outreach workflows**
- **Email campaign management**
- ** Lead engagement campaigns**


### Marketing Funnel Strategy
Marketing funnels guide potential customers from initial awareness to conversion.
A well-designed funnel helps businesses structure marketing activities that move prospects through different stages of the buying journey.


**Our marketing funnel services include:**

- **Marketing funnel strategy development**
- **Lead capture funnel design**
- **Customer journey mapping**
- **Conversion funnel optimisation**
- **Lead nurturing frameworks**


### Marketing Automation
Marketing automation helps businesses manage lead generation and communication processes more efficiently.
Automation systems support lead nurturing, follow-up communication, and marketing workflows that help convert prospects into customers.


**Our content SEO services include:**

- **Marketing automation system setup**
- **Lead nurturing automation**
- **Campaign automation workflows**
- **Customer journey automation**
- **Marketing automation integration**


### CRM Integrations
CRM systems help businesses manage customer data, track leads, and organise sales pipelines.
CRM integration ensures that marketing activities connect directly with sales processes and lead management systems.


**Our CRM integration services include:**

- **CRM integration setup**
- **Lead management systems**
- **Customer data integration**
- **Sales pipeline management systems**
- **Marketing and CRM integration**


### Audience Targeting
Effective lead generation begins with identifying the right audience.
Audience targeting strategies help businesses reach decision-makers who are most likely to convert into customers.


**Our audience targeting services include:**

- **Audience targeting strategy**
- **Customer segmentation analysis**
- **Target account identification**
- ** Prospect profiling**
- **Audience acquisition strategy**

### OUR APPROACH

At Rise IT, lead generation systems are designed to connect marketing activity with measurable business outcomes.
Our approach focuses on building structured systems that attract qualified prospects, nurture relationships, and convert opportunities into sales conversations.
By integrating lead generation with marketing automation, analytics, and customer relationship management systems, we help businesses create scalable pipelines for growth.



**RELATED SERVICES**

- **Performance Marketing**
- **Email Marketing**
- **Marketing Infrastructure & Automation**
- **Growth Marketing Strategy**
- **Conversion Rate Optimisation**

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
      <LeadGenSystem project={project} />
      
      <CTA>
        Build Something stronger
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
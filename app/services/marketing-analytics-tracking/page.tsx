import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import MarketAnalytics from './MarketAnalytics'

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
        title: 'Marketing Analytics & Tracking',
        description: 'Effective digital marketing depends on accurate data and clear performance insights.Marketing analytics and tracking systems help businesses understand how users interact with their website, campaigns, and digital platforms. By tracking conversions, analysing performance, and visualising marketing data, businesses gain the clarity needed to improve marketing decisions.At Rise IT, we help organisations build structured analytics systems that track marketing activity, measure campaign performance, and provide reliable insights for business growth.From conversion tracking to marketing dashboards, our analytics frameworks help businesses turn marketing data into actionable insights.',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Conversion Tracking

Conversion tracking helps businesses measure how website visitors interact with key actions such as enquiries, purchases, or lead submissions.
By accurately tracking conversions, businesses can understand which marketing channels generate the strongest results.




**Our conversion tracking services include:**

- **Conversion tracking setup**
- **Website conversion tracking**
- **Lead tracking systems**
- **Marketing conversion measurement**
- **Goal and event tracking implementation**


### Google Analytics Setup

Google Analytics provides valuable insights into website traffic, user behaviour, and marketing performance.
A properly configured analytics system helps businesses understand where traffic comes from, how visitors engage with content, and which marketing activities generate results.




**Our Google Analytics services includes:**

- **Google Analytics setup**
- **Google Analytics configuration**
- **Traffic source analysis**
- **User behaviour tracking**
- **Website performance analytics**


### Marketing Dashboards
Marketing dashboards provide a centralised view of campaign performance, traffic metrics, and conversion data.
Dashboards help businesses monitor marketing performance across channels while making it easier to identify trends and opportunities.



**Our marketing dashboard services include:**

- **Marketing performance dashboards**
- **Campaign analytics dashboards**
- **Data visualisation systems**
- **Marketing reporting dashboards**
- **Performance monitoring systems**


### Campaign Reporting Systems
Campaign reporting systems help businesses evaluate how marketing initiatives perform across channels such as search, advertising, and social media.
Structured reporting helps organisations track campaign progress and optimise marketing strategies over time.




**Our campaign reporting services includes:**

- **Campaign performance reporting**
- **Marketing performance reports**
- **Channel performance tracking**
- **Advertising campaign reporting**
- **Marketing insights reporting**


### Marketing Data Analysis


Marketing data analysis helps businesses interpret performance metrics and identify opportunities for improvement.
By analysing marketing data across channels, businesses can make informed decisions about campaign optimisation and resource allocation.




**Our marketing data analysis services include:**

- **Marketing performance analysis**
- **Digital campaign analysis**
- **Traffic and conversion analysis**
- **Marketing insights evaluation**
- **Data-driven marketing insights**

### OUR APPROACH




At Rise IT, marketing analytics and tracking systems are designed to support smarter decision-making across digital marketing initiatives.
Our approach focuses on building reliable tracking frameworks that connect marketing channels with measurable outcomes such as leads, conversions, and customer acquisition.
By combining analytics infrastructure with clear reporting and analysis, we help businesses gain visibility into marketing performance and improve strategic decision-making.




**RELATED SERVICES:**

- **Performance Marketing**
- **Conversion Rate Optimisation**
- **Lead Generation Systems**
- **Growth Marketing Strategy**
- ** Marketing Infrastructure & Automation**





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
      <MarketAnalytics project={project} />
      
      <CTA>
     <span>Make marketing decisions backed by data.</span> 
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/06.png' },
            { id: '2', img: '/images/agent/07.png' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
       <h5 className="mb-2.5 mt-5">If your business wants clearer insights into marketing performance and customer behaviour, Rise IT can help build the analytics systems needed to support smarter growth decisions.

</h5>
      </CTA>
    </LayoutOne>
  )
}

export default SocialMediaMarketing
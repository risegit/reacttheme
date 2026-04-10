import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import SocialMedia from './SocialMedia'

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
        title:'Growth Marketing Strategy',
        description: 'Businesses rarely struggle because they lack marketing channels. They struggle because their marketing efforts across SEO, advertising, content marketing, and social media operate independently without a clear strategy.Growth marketing strategy connects these channels into a structured framework designed to improve visibility, generate demand, and strengthen customer acquisition.At Rise IT, we help businesses develop growth marketing strategies that align digital marketing channels with measurable business outcomes. Our strategic approach focuses on identifying the most effective growth opportunities, prioritising marketing investments, and building scalable systems that support sustainable growth.Whether a business is launching a new product, expanding into new markets, or strengthening its digital presence, a structured growth strategy helps convert marketing activity into predictable business growth.',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Growth Marketing Strategy
Growth marketing strategy focuses on building structured marketing systems that support long-term customer acquisition and business growth.
Instead of relying on isolated campaigns, businesses benefit from integrated strategies that connect search visibility, paid media, content marketing, and conversion optimisation into a coordinated growth framework.
A well-defined growth marketing strategy helps businesses improve marketing efficiency, strengthen digital visibility, and identify scalable opportunities for growth.



**Our growth marketing strategy services include:**

-  **Growth marketing strategy development**
-  **Digital growth strategy planning**
-  **Integrated digital marketing strategy**
-  **Marketing funnel strategy**
-  **Cross-channel marketing strategy**
-  **Growth experimentation frameworks**

### Demand Generation Strategy
Demand generation strategies help businesses attract qualified prospects and create consistent opportunities for sales growth.
By combining search visibility, advertising campaigns, and content marketing initiatives, businesses can generate awareness, engagement, and demand across multiple digital channels.
A strong demand generation strategy ensures marketing efforts focus on reaching the right audiences and converting interest into qualified leads.



**Our demand generation strategy services include:**

- **Demand generation strategy development**
- **Multi-channel campaign planning**
- **Lead generation strategy**
- **Audience targeting strategy**
- **Demand generation campaign frameworks**


### Go-To-Market Strategy
Launching a product or entering a new market requires a structured go-to-market strategy that aligns messaging, positioning, and marketing channels.
A well-planned launch strategy helps businesses generate early awareness, reach the right audience, and accelerate market adoption.
Go-to-market strategies are particularly important for product launches, service expansions, and businesses entering competitive markets.


**Our go-to-market strategy services include:**

- **Go-to-market strategy development**
- **Product launch marketing strategy**
- **Market entry strategy**
- **Audience positioning strategy**
- **Launch campaign planning**

### Customer Acquisition Strategy
Customer acquisition strategies focus on identifying the most effective channels for attracting and converting new customers.
By analysing audience behaviour, search demand, and marketing performance data, businesses can prioritise the channels that generate the strongest acquisition opportunities.
A structured acquisition strategy helps businesses optimise marketing investments and build consistent customer growth pipelines.
  

**Our customer acquisition strategy services include:**

- **Customer acquisition strategy development**
- **Growth channel identification**
- **Audience acquisition strategy**
- **Customer acquisition funnel strategy**
- **Channel investment planning**


### Marketing Roadmap Development
A marketing roadmap provides a structured plan that aligns marketing initiatives with long-term business growth objectives.
Marketing roadmaps help businesses prioritise campaigns, coordinate marketing efforts across channels, and track progress toward defined growth milestones.
With a clear roadmap in place, organisations can execute marketing strategies with greater clarity and coordination.



**Our marketing roadmap services include:**

- **Marketing roadmap development**
- **Campaign planning frameworks**
- **Marketing initiative prioritisation**
- **Growth milestone planning**
- **Channel investment planning**

### Audience & Market Research
Successful growth strategies begin with understanding the audience, market demand, and competitive landscape.
Audience research helps businesses identify who their potential customers are, how they search for solutions, and what influences their purchasing decisions.
Market research also reveals opportunities for growth, positioning, and channel expansion.


**Our research services include:**

- **Audience research and segmentation**
- **Customer behaviour analysis**
- **Market demand analysis**
- **Search opportunity analysis**
- **User persona development**

### Competitor Analysis
Competitor analysis helps businesses understand how other organisations approach digital marketing and customer acquisition.
These insights help identify market gaps, uncover growth opportunities, and strengthen strategic positioning.
By analysing competitor strategies across search visibility, advertising, and content marketing, businesses can refine their own marketing approach.



**Our competitor analysis services include:**

- **Competitor digital strategy analysis**
- **Search visibility comparison**
- **Content strategy analysis**
- **Advertising strategy review**
- **Market positioning analysis**

### OUR APPROACH
At Rise IT, growth marketing strategy forms the strategic foundation that guides execution across SEO, performance marketing, social media marketing, and conversion optimisation.
Our approach focuses on building integrated marketing systems that connect visibility, demand generation, and conversion into a unified growth framework.
By aligning marketing channels with business objectives, we help organisations build scalable marketing systems designed for measurable growth.




**RELATED SERVICES:**



- **SEO Services**
- **Performance Marketing**
- **Lead Generation Systems**
- **Conversion Rate Optimisation**
- **Digital Marketing Strategy & Audits**

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
      <SocialMedia project={project} />
      
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
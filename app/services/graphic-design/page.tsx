import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import GraphicDesign from './GraphicDesign'

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
        title:'Graphic Design & Marketing Collaterals',
        description: 'Businesses rarely struggle because they lack marketing channels. They struggle because their marketing efforts across SEO, advertising, content marketing, and social media operate independently without a clear strategy.Growth marketing strategy connects these channels into a structured framework designed to improve visibility, generate demand, and strengthen customer acquisition.At Rise IT, we help businesses develop growth marketing strategies that align digital marketing channels with measurable business outcomes. Our strategic approach focuses on identifying the most effective growth opportunities, prioritising marketing investments, and building scalable systems that support sustainable growth.Whether a business is launching a new product, expanding into new markets, or strengthening its digital presence, a structured growth strategy helps convert marketing activity into predictable business growth.',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Social Media Creatives

Social media creatives help businesses communicate visually across platforms such as Instagram, Facebook, and LinkedIn.
Consistent visual communication helps strengthen brand recognition while supporting social media marketing campaigns.




**Our social media creative services includes:**

-  **Social media creative design**
-  **Marketing visual creatives**
-  **Brand-aligned social media graphics**
-  **Platform-specific creative assets**
-  **Campaign social media visuals**


### Marketing Collateral Design
Marketing collateral helps businesses communicate information clearly during marketing campaigns, presentations, and business interactions.
Well-designed collateral strengthens brand communication and supports marketing initiatives.




**Our marketing collateral design services include:**

- **Marketing collateral design**
- **Brand communication materials**
- **Marketing support assets**
- **Product marketing collateral**
- **Brand presentation materials**


### Brochure Design
Brochures help businesses present products, services, and brand information in a structured and visually engaging format.
Well-designed brochures can support marketing campaigns, client presentations, and sales communication.



**Our brochure design services includes:**

- **Corporate brochure design**
- **Product brochure design**
- **Service brochures**
- **Company profile brochures**
- **Marketing brochure layouts**

### Presentation Design
Professional presentations help businesses communicate ideas clearly during meetings, pitches, and marketing discussions.
Well-structured presentation design improves clarity while strengthening brand perception.

  

**Our presentation design services include:**

- **Corporate presentation design**
- **Pitch deck design**
- **Sales presentation design**
- **Business proposal presentations**
- **Brand presentation templates**


### Print Marketing Materials
Printed marketing materials remain valuable for events, exhibitions, and direct marketing initiatives.
Clear visual design ensures that print materials communicate information effectively and maintain brand consistency




**Our print marketing design services include:**

- **Print marketing materials**
- **Event marketing creatives**
- **Promotional print materials**
- **Marketing flyers and posters**
- **Branded print assets**

### Campaign Creatives
Marketing campaigns require consistent visual communication across digital platforms, advertising campaigns, and promotional materials.
Campaign creatives help businesses maintain strong visual identity while supporting marketing initiatives.


**Our campaign creative services include:**

- **Marketing campaign creatives**
- **Advertising creative design**
- **Promotional campaign visuals**
- **Digital campaign design assets**
- **Integrated campaign visuals**



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
      <GraphicDesign project={project} />
      
      <CTA>
     <span>Strengthen your brand communication through design.</span> 
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

export default Seopage
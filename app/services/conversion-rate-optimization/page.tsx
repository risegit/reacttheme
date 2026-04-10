import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import ConversionRate from './ConversionRate'
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
        title: 'Conversion Rate Optimisation (CRO)',
        description: 'Driving traffic to a website is only part of the growth equation. Businesses generate real results when website visitors convert into enquiries, leads, or customers.Conversion rate optimisation focuses on improving how effectively a website or marketing funnel turns traffic into measurable outcomes.At Rise IT, our CRO services help businesses increase conversions by improving landing pages, analysing user behaviour, and optimising customer journeys across digital touchpoints.By identifying friction points and improving key interactions, we help businesses maximise the value of their existing traffic and marketing investments',
        thumbnail: '/images/home-5/case-study-3.png',

        content: `### Conversion Rate Optimisation
Conversion rate optimisation focuses on improving how effectively a website converts visitors into leads, enquiries, or customers.
A structured CRO approach helps businesses maximise the value of their marketing traffic by improving the performance of key conversion points.


**Our conversion rate optimisation services include:**

- **Conversion rate optimisation strategy**
- **Website conversion optimisation**
- **Conversion performance analysis**
- **Conversion-focused website improvements**
- **Conversion growth strategy**


### Landing Page Optimisation
Landing pages play a critical role in converting advertising traffic and marketing visitors into leads.
Optimised landing pages help businesses capture user interest, communicate value clearly, and encourage visitors to take action.


**Our landing page optimisation services include:**

- **Landing page optimisation**
- **Conversion-focused landing page design**
- **Landing page performance improvement**
- **Lead capture page optimisation**
- **Campaign landing page optimisation**


### User Journey Analysis
Understanding how visitors interact with your website helps identify opportunities to improve engagement and conversions.
User journey analysis helps businesses identify friction points that may prevent visitors from completing desired actions.


**Our user journey analysis services includes:**

- **User behaviour analysis**
- **Customer journey mapping**
- **Conversion path analysis**
- **Website interaction analysis**
- **User experience evaluation**


### Funnel Optimisation
Marketing funnels guide potential customers through the journey from initial awareness to conversion.
Optimising funnel performance helps businesses improve lead generation, reduce drop-offs, and increase overall marketing efficiency.


**Our funnel optimisation services include:**

- **Marketing funnel optimisation**
- **Lead conversion funnel improvements**
- **Customer acquisition funnel optimisation**
- **Sales funnel performance analysis**
- **Conversion funnel optimisation**


### A/B Testing
A/B testing allows businesses to compare variations of pages, messaging, or design elements to determine which performs better.
Continuous testing helps improve conversion performance and optimise digital marketing campaigns over time.


**Our A/B testing services include:**

- **A/B testing strategy**
- **Landing page testing**
- **Conversion element testing**
- **Campaign performance testing**
- **Website optimisation testing**

### Conversion Analytics

Conversion analytics help businesses understand how marketing traffic translates into leads and customer acquisition.
Analysing conversion data allows businesses to refine strategies and prioritise improvements that generate measurable impact.



**Our conversion analytics services includes:**

- **Conversion performance tracking**
- **Marketing conversion analysis**
- **Lead conversion reporting**
- **Campaign conversion insights**
- **Conversion data analysis**

### OUR APPROACH

At Rise IT, conversion rate optimisation focuses on improving how marketing traffic translates into measurable business results.
Our CRO approach combines data analysis, user behaviour insights, and continuous optimisation to improve website performance and marketing efficiency.
By strengthening key conversion points across websites, landing pages, and marketing funnels, we help businesses turn more visitors into leads and customers.




**Related Services**

- **Performance Marketing**
- **Lead Generation Systems**
- **Marketing Analytics & Tracking**
- **Website Design & Development**
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
      <ConversionRate project={project} />

      <CTA>
       Turn website traffic into measurable growth.
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/06.png' },
            { id: '2', img: '/images/agent/07.png' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
     
      <h5  className="mb-2.5 mt-5">If your business wants to increase conversions, improve lead generation, and maximise the value of existing traffic, Rise IT can help.
</h5>
      </CTA>
    </LayoutOne>
  )
}

export default Seopage
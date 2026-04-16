import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import EmailMarketing from './EmailMarketing'
import RevealWrapper from '@/components/animation/RevealWrapper'

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
                title: 'Email Marketing',
                description: 'Email remains one of the most effective channels for maintaining direct communication with customers and prospects.Email marketing helps businesses nurture leads, strengthen customer relationships, and promote products or services through targeted communication.At Rise IT, our email marketing services focus on building structured communication systems that support lead nurturing, customer engagement, and marketing campaign performance.Through strategic planning, campaign management, and automation systems, we help businesses maintain consistent communication with their audience while supporting customer acquisition and retention.',
                thumbnail: '/images/home-5/case-study-3.png',

                content: `### Email Marketing Strategy

A structured email marketing strategy helps businesses maintain consistent communication with prospects and customers.
Strategic planning ensures email campaigns align with marketing objectives such as lead nurturing, product promotion, and customer engagement.


**Our email marketing strategy services include:**

-  **Email marketing strategy development**
-  **Customer communication strategy**
-  **Audience segmentation strategy**
-  **Campaign planning frameworks**
-  **Email marketing performance planning**


### Newsletter Campaigns

Newsletter campaigns help businesses maintain regular communication with their audience while sharing updates, insights, and announcements.
Consistent newsletters strengthen brand engagement and keep audiences informed about products, services, and company developments.





**Our newsletter campaign services include:**

- **Newsletter campaign strategy**
- **Newsletter content planning**
- **Email newsletter design and publishing**
- **Audience engagement newsletters**
- **Regular communication campaigns**


### Promotional Campaigns

Promotional email campaigns help businesses announce new products, highlight offers, and promote marketing initiatives.
These campaigns support lead generation, product launches, and customer acquisition initiatives.




**Our promotional email services include:**

- **Promotional email campaigns**
- **Product launch announcements**
- **Marketing campaign emails**
- **Offer and promotion campaigns**
- **Customer engagement promotions**

### Automated Email Workflows
Email automation allows businesses to maintain consistent communication with prospects without manual intervention.
Automated workflows help nurture leads, follow up with prospects, and guide customers through different stages of the buying journey.


  

**Our automated email workflow services include:**

- **Email automation setup**
- **Lead nurturing workflows**
- **Customer onboarding emails**
- **Behaviour-based email triggers**
- **Automated marketing communication systems**


### OUR APPROACH

At Rise IT, email marketing is integrated with broader digital marketing systems including lead generation, performance marketing, and marketing automation.
Our approach focuses on building structured email communication systems that support customer engagement, lead nurturing, and long-term relationship building.
By combining strategic planning with automation and analytics, we help businesses maintain effective and scalable email marketing systems.




**RELATED SERVICES**

- **Lead Generation Systems**
- **Content Writing**
- **Performance Marketing**
- **Marketing Infrastructure & Automation**
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
            <EmailMarketing project={project} />
<RevealWrapper>
            <CTA>
              Strengthen customer engagement through email.
               
           
                   <h5 className="mb-2.5 mt-5">If your business wants to strengthen brand visibility, engage audiences, and maintain a consistent social media presence, Rise IT can help.
</h5> <CtaImageSlider
                    slides={[
                        { id: '1', img: '/images/agent/06.png' },
                        { id: '2', img: '/images/agent/07.png' },
                        { id: '3', img: '/images/agent/08.png' },
                    ]}
                />
            </CTA>
            
            </RevealWrapper>
        </LayoutOne>
    )
}

export default Seopage
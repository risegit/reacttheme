import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import DigitalMarketing from './DigitalMarketing'

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
                title: 'Digital PR & Authority Building',
                description: 'Strong brands are not discovered only through search engines. They are discovered through credibility, media visibility, and consistent brand presence across trusted platforms.Digital PR helps businesses strengthen brand authority, build trust with audiences, and improve online visibility through strategic media placements, brand mentions, and reputation management.At Rise IT, our digital PR services focus on helping businesses increase brand visibility across relevant publications, strengthen online reputation, and build authority within their industry.By combining digital PR campaigns, media outreach, and authority-building strategies, we help organisations strengthen their digital presence and improve how their brand is perceived online',
                thumbnail: '/images/home-5/case-study-3.png',

                content: `### Digital PR Campaigns
Digital PR campaigns help businesses increase brand visibility by securing coverage across relevant media platforms, publications, and digital channels.
Strategic campaigns allow businesses to strengthen industry authority, reach wider audiences, and improve brand credibility.




**Our digital PR campaign services include:**

-  **Digital PR campaign strategy**
-  **Media outreach campaigns**
-  **Industry publication placements**
-  **Brand awareness campaigns**
-  **Thought leadership PR initiatives**


### Media Placements
Media placements help businesses gain visibility through trusted publications, industry platforms, and online media outlets.
Being featured in relevant publications strengthens brand credibility and helps businesses reach audiences who actively follow those platforms.




**Our media placement services include:**

- **Online media placements**
- **Industry publication placements**
- **Expert commentary placements**
- **Thought leadership articles**
- **Editorial content placements**


### Online Reputation Management
Online reputation plays a significant role in how customers perceive a brand.
Reputation management focuses on monitoring brand mentions, managing reviews, and strengthening how a brand appears across search engines and digital platforms



**Our reputation management services include:**

- **Online reputation management**
- **Brand sentiment monitoring**
- **Review management strategy**
- **Search reputation analysis**
- **Brand perception analysis**

### Brand Mention Strategy
Brand mentions across relevant websites and media platforms help strengthen brand visibility and digital authority.
Strategic brand mention campaigns ensure businesses appear consistently across trusted publications and industry platforms.

  

**Our brand mention services include:**

- **Brand mention outreach**
- **Editorial brand mentions**
- **Industry publication mentions**
- **Brand visibility campaigns**
- **Strategic content placements**


### Authority Link Building
Authority link building helps businesses strengthen search visibility and digital credibility by earning links from trusted websites and publications.
High-quality backlinks improve domain authority and support long-term search engine performance.



**Our authority link building services include:**

- **Authority backlink acquisition**
- **Editorial link placements**
- **Digital PR link building**
- **Industry publication backlinks**
- **Content-driven link outreach**

### OUR APPROACH
At Rise IT, digital PR focuses on building brand authority while supporting broader digital marketing initiatives such as SEO, content marketing, and brand positioning.
Our approach combines strategic media outreach, authority-building initiatives, and reputation management to strengthen how businesses are discovered and perceived online.
By increasing brand visibility across trusted platforms, we help businesses strengthen credibility and expand their digital presence.



**RELATED SERVICES**

- **SEO Services**
- **Content Writing**
- **Growth Marketing Strategy**
- **Social Media Marketing**
- **Performance Marketing**


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
            <DigitalMarketing project={project} />

            <CTA>
               Strengthen your brand authority online.
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
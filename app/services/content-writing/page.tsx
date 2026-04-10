import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import ContentWriting from './ContentWriting'
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
                title: 'Content Writing',
                description: 'Content plays a central role in how businesses communicate value, improve search visibility, and engage potential customers online.High-quality written content helps businesses attract organic traffic, explain products or services clearly, and support marketing campaigns across digital channels.At Rise IT, our content writing services focus on creating structured content that strengthens search engine visibility, improves audience engagement, and supports lead generation initiatives.From SEO-focused content to website messaging and marketing campaigns, we help businesses develop content that communicates effectively and supports measurable marketing outcomes.',
                thumbnail: '/images/home-5/case-study-3.png',

                content: `### SEO Content Writing


SEO content writing helps businesses improve search visibility by creating content aligned with relevant search queries.
Well-optimised content allows websites to attract qualified organic traffic while building authority across key topics related to their industry.






**Our SEO content writing services include:**

-  **SEO content writing**
-  **Search-focused content creation**
-  **Keyword-optimised articles**
-  **Search visibility content development**
-  **SEO blog content creation**


### Blog Content Writing


Blog content helps businesses share insights, strengthen industry authority, and improve long-term search visibility.
Consistent blog publishing also supports content marketing initiatives and helps businesses remain active across search engines.




**Our blog writing services include:**

- **Blog content writing**
- **Industry insights articles**
- **Educational blog content**
- **Search-optimised blog posts**
- **Topic authority development**


### Website Content Writing

Website content plays a critical role in communicating brand positioning, explaining services, and guiding visitors through the customer journey.
Clear and structured website content improves user experience while supporting conversion and search performance.



**Our website content writing services include:**

- **Website page content writing**
- **Service page content development**
- **Homepage messaging**
- **Product and service descriptions**
- ** SEO-friendly website content**

### Landing Page Copywriting
Landing pages are often the first interaction potential customers have with a brand during marketing campaigns.
Strong landing page copy helps communicate value quickly while encouraging visitors to take action.



  

**Our landing page copywriting services include:**

- **Landing page copywriting**
- **Campaign landing page content**
- **Lead generation landing pages**
- **Conversion-focused messaging**
- **Marketing campaign page content**


### Thought Leadership Content

Thought leadership content helps businesses position themselves as trusted experts within their industry.
Publishing high-quality insights allows organisations to strengthen brand credibility while attracting relevant audiences.


**Our thought leadership content services include**

- **Industry insight articles**
- **Executive thought leadership content**
- **Expert commentary articles**
- **Industry analysis content**
- **Authority-building publications**


### Marketing Copy


Marketing copy supports campaigns across advertising, websites, and promotional initiatives.
Effective marketing messaging helps businesses communicate value clearly while encouraging audience engagement and conversions.




**Our marketing copywriting services includes:**

- **Marketing campaign copy**
- **Product promotion messaging**
- **Advertising copywriting**
- **Brand messaging development**
- **Marketing communication content**

### OUR APPROACH


At Rise IT, content writing is closely aligned with broader marketing initiatives including SEO, digital PR, website development, and lead generation strategies.
Our approach focuses on developing structured content that strengthens visibility, communicates brand value clearly, and supports marketing performance across digital channels.
By combining search-focused writing with strategic messaging, we help businesses create content that attracts audiences and supports long-term growth.





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
            <ContentWriting project={project} />
            <RevealWrapper>
                <CTA>
                    Build stronger     <CtaImageSlider
                        slides={[
                            { id: '1', img: '/images/agent/06.png' },
                            { id: '2', img: '/images/agent/07.png' },
                            { id: '3', img: '/images/agent/08.png' },
                        ]}
                    />communication through content.

                

                    <h5 className="mb-2.5 mt-5">If your business wants to strengthen brand visibility, engage audiences, and maintain a consistent social media presence, Rise IT can help.
                    </h5>
                </CTA>
            </RevealWrapper>
        </LayoutOne>
    )
}

export default Seopage
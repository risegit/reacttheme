import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import SocialMediaClient from './SocialMediaClient'

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
        category: 'Brand Strategy',
        title: 'Social Media Marketing',
        description: 'Social media platforms play a central role in how businesses communicate with audiences, build brand awareness, and maintain an active digital presence.Social media marketing helps businesses stay visible across platforms such as Instagram, Facebook, LinkedIn, and other digital channels where customers discover and interact with brands.At Rise IT, our social media marketing services focus on building consistent brand presence, strengthening audience engagement, and supporting broader digital marketing initiatives.Through strategic planning, content development, and ongoing management, we help businesses maintain an active and relevant presence across social media platforms.',
        thumbnail: '/images/home-5/case-study-3.png',
        content: `### Social Media Strategy
A strong social media strategy helps businesses align their social presence with brand positioning, audience behaviour, and marketing objectives.
Strategic planning ensures social media platforms support brand visibility, engagement, and long-term audience growth.


**Our social media strategy services include:**

- **Social media strategy development**
- **Platform strategy planning**
- **Audience targeting strategy**
- **Content strategy developmen**
- **Social media growth planning**


### Social Media Management

Consistent management ensures that social media platforms remain active, relevant, and aligned with brand messaging.
Ongoing management helps businesses maintain visibility, communicate effectively with audiences, and strengthen brand presence.


**Our social media management services include:**

- **Social media account managemen**
- **Content publishing and scheduling**
- **Platform monitoring**
- **Brand communication managemen**
- **Performance tracking**


### Content Planning
Content planning ensures that social media communication remains structured, consistent, and aligned with marketing objectives.
A structured content plan helps businesses maintain regular engagement with their audience while supporting broader marketing campaigns.


**Our content planning services include:**

- **Social media content planning**
- **Content calendar development**
- **Campaign content planning**
- **Platform-specific content planning**
- **Marketing content coordination**


### Organic Social Media Marketing
Organic social media marketing helps businesses build long-term brand visibility without relying solely on paid campaigns.
Consistent organic content helps businesses remain discoverable while strengthening audience relationships.


**Our organic social media marketing services include:**

- **Organic content strategy**
- **Brand storytelling content**
- **Audience engagement content**
- ** Educational content development**
- **Brand visibility campaigns**


### Community Engagement

Active engagement helps businesses build stronger relationships with their audience and maintain meaningful interactions across social platforms.
Community engagement strengthens brand loyalty and encourages ongoing interaction with customers.


**Our community engagement services include:**

- **Audience interaction management**
- **Comment and message monitoring**
- **Community conversation management**
- **Brand interaction strategy**
- **Audience engagement initiatives**

### Campaign Management


Social media campaigns help businesses promote initiatives such as product launches, announcements, promotions, and brand storytelling initiatives.
Campaigns help increase reach, engagement, and visibility across social platforms.



**Our social media campaign services include:**

- **Social media campaign planning**
- **Platform campaign execution**
- **Launch campaign management**
- **Promotional campaign strategy**
- **Engagement campaign initiatives**


### OUR APPROACH


At Rise IT, social media marketing is integrated with broader marketing initiatives such as content marketing, performance marketing, and brand strategy.
Our approach focuses on building structured social media systems that support brand visibility, audience engagement, and long-term digital presence.
By combining strategic planning with consistent content and engagement, we help businesses strengthen their social media presence and maintain meaningful audience relationships.




**RELATED SERVICES:**

- **Content Writing**
- **Content Production**
- **Digital PR**
- **Performance Marketing**
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
      <SocialMediaClient project={project} />
      
      <CTA>
     <span>Build a stronger social media presence</span> .
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

export default SocialMediaMarketing
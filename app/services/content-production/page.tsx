import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import ContentProduction from './ContentProduction'
import RevealWrapper from '@/components/animation/RevealWrapper'

export async function generateStaticParams() {
  return [{ slug: 'project-1' }, { slug: 'project-2' }, { slug: 'project-3' }]
}
export const metadata = {
  title: 'Content Writing Services | Rise IT Digital Marketing',
}

const Seopage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  // Manual project data based on slug
  const getProjectData = (slug: string) => {
    const projects = {
      'project-1': {
        category: 'Services',
        title: 'Content Production',
        description:
          'Content plays a central role in how businesses communicate, build trust, and stay relevant across digital channels. Whether its  supporting brand awareness, product launches, marketing campaigns, social media, or advertising initiatives, high-quality content helps businesses connect with audiences and communicate more effectively.At Rise IT, our content production services focus on creating visual assets that support broader marketing objectives. From brand films and promotional videos to product content and AI-assisted production, we help businesses create content that is engaging, scalable, and aligned with their marketing strategy.Through strategic planning, creative production, and modern content workflows, we help businesses create content that supports visibility, engagement, and long-term growth. ',
        thumbnail: '/images/services_images/content-production.jpg',

        content: `### Corporate Videos



Corporate videos help businesses communicate their story, culture, expertise, and value proposition across digital platforms.
These videos are commonly used on websites, presentations, recruitment initiatives, investor communications, and brand-building activities.







**Our corporate video services include:**

-  **Corporate brand videos**
-  **Company profile videos**
-  **Leadership and founder videos**
-  **Recruitment and culture videos**
-  **Business communication videos**


### Promotional Videos


Promotional videos help businesses generate awareness, support campaigns, and communicate key messages in an engaging format.
These videos are often used across websites, advertising campaigns, social media, and marketing initiatives.





**Our promotional video services include:**

- **Promotional videos**
- **Product launch videos**
- **Campaign support videos**
- **Event promotion videos**
- **Advertising video creatives**


### Brand Videos


Brand videos help businesses communicate their identity, positioning, and values while building stronger audience connections.
Strong brand content helps businesses create recognition, trust, and long-term brand recall.




**Our brand video services include:**

- **Brand storytelling videos**
- **Brand awareness videos**
- **Founder story videos**
- **Brand positioning content**
- **Brand identity campaigns**

### Marketing Campaign Videos

Marketing campaigns often require content designed specifically to support launches, promotions, and audience engagement initiatives.
Campaign-focused video production helps businesses maintain consistent communication across multiple marketing channels.


**Our marketing campaign video services include:**

- **Marketing campaign videos**
- **Launch campaign content**
- **Promotional campaign videos**
- **Advertising creative production**
- **Multi-platform campaign assets**


### Product Videos

Product videos help businesses showcase products, features, benefits, and customer value in a clear and engaging way.
Effective product content helps customers better understand products while supporting marketing and sales efforts.



**Our product video services include:**

- **Product showcase videos**
- **Product demonstration videos**
- **E-commerce product videos**
- **Product launch content**
- **Product marketing assets**


### Testimonial Videos



Customer stories and testimonials help businesses build credibility and trust through authentic experiences and real-world results.
Testimonial content helps strengthen brand reputation while supporting sales and marketing initiatives.





**Our testimonial video services include:**

- **Customer testimonial videos**
- **Client success stories**
- **Case study videos**
- **Customer experience content**
- **Trust-building video assets**

### AI Production

AI-assisted production helps businesses scale content creation while maintaining quality, consistency, and creative flexibility.
Modern AI workflows support faster production and increased content output across marketing channels.


**Our testimonial video services include:**

- **AI-assisted content production**
- **Creative workflow optimisation**
- **Scalable content creation systems**
- **Marketing content production**
- **Creative production support**


### AI Video Generation

AI video generation enables businesses to produce video content efficiently for campaigns, social media, advertising, and marketing initiatives.
AI-generated videos help businesses increase content output while maintaining consistency across channels.



**Our AI video generation services include:**

- **AI-generated marketing videos**
- **AI campaign content**
- **AI-powered promotional videos**
- **Multi-format video assets**
- **Scalable video production**

### AI Image Generation

AI image generation helps businesses create custom visuals for websites, advertising campaigns, social media marketing, and brand communication.
Custom-generated imagery provides flexibility while supporting creative production at scale.




**Our AI image generation services include:**

- **AI-generated marketing visuals**
- **Campaign imagery**
- **Product marketing visuals**
- **Creative concept development**
- **Brand content assets**

### AI-Assisted Creative Production

Combining human creativity with AI-powered tools helps businesses accelerate production while maintaining creative quality and strategic direction.
AI-assisted creative production enables businesses to build scalable content systems across multiple marketing channels.





**Our AI-assisted creative production services include:**

- **AI-supported creative development**
- **Campaign asset production**
- **Content creation workflows**
- **Multi-platform creative production**
- **Scalable content systems**


### OUR APPROACH

At Rise IT, content production is integrated with broader marketing initiatives such as social media marketing, performance marketing, brand strategy, and digital campaigns.
Our approach focuses on creating content that supports visibility, engagement, and business growth while maintaining consistency across channels.
By combining strategic thinking, creative execution, and modern production workflows, we help businesses build content systems that support long-term marketing performance.






**RELATED SERVICES:**

- **Content Writing**
- **Social Media Marketing**
- **Performance Marketing**
- **Graphic Design & Marketing Collaterals**
- **Website Design & Development**




`,

        images: ['/images/home-5/case-study-3.png', '/images/home-5/case-study-3.png'],
      },
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
      <ContentProduction project={project} />
      <RevealWrapper>
        <CTA>
          Create content {' '}
          
         that supports visibility, engagement, and growth.<CtaImageSlider
            slides={[
              { id: '1', img: '/images/agent/cta2.jpg' },
              { id: '2', img: '/images/agent/cta3.jpg' },
              { id: '3', img: '/images/agent/cta5.jpg' },
            ]}
          />
          <h5 className="mb-2.5 mt-5">
            If your business wants to strengthen brand visibility, engage audiences, and maintain a consistent social
            media presence, Rise IT can help.
          </h5>
        </CTA>
      </RevealWrapper>
    </LayoutOne>
  )
}

export default Seopage

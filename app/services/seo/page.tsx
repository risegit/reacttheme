import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import LayoutOne from '@/components/shared/LayoutOne'
import SeoPageClient from './SeoPageClient'

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
        category: 'Brand Strategy',
        title: 'SEO Service',
        description: 'Search engines are often the first place customers go when researching products, services, and solutions online. If your business is not visible in search results, potential customers may never discover your brand.Rise IT provides structured SEO services designed to improve search rankings, increase organic traffic, and strengthen long-term digital visibility. Our search engine optimisation strategies combine technical optimisation, content development, and search performance analysis to help businesses rank for high-value keywords.',
        thumbnail: '/images/home-5/case-study-3.png',
        content: `### SEO Strategy
A successful SEO campaign begins with a clear strategy built around how people search online. Understanding search behaviour, competitor activity, and keyword demand allows businesses to identify the opportunities that will drive meaningful organic traffic.
Our SEO strategy services focus on building a roadmap that improves visibility across search engines while aligning with broader digital marketing objectives.
By analysing search intent and market competition, we help businesses target the right keywords and create a structured approach to ranking higher on search engines.

**OUR SEO strategy services include:**

- **Keyword Research**
- **Search Intent Analysis**
- **Competitor SEO Analysis**
- **SEO Roadmap Development**
- **Search Opportunity Analysis**
- **SEO Content Planning**

### Technical SEO
Technical SEO forms the foundation of every successful search engine optimisation strategy. Search engines must be able to crawl, index, and interpret your website efficiently in order to rank your pages correctly.
Technical improvements help search engines understand your content while improving website performance, user experience, and overall visibility in search results.
Our technical SEO services focus on identifying and resolving issues that prevent websites from reaching their full search potential.

**Our technical SEO services include:**

- **Technical SEO Audits**
- **Website Crawling & Indexing Optimisation**
- **Page Speed Optimisation**
- **Core Web Vitals Optimisation**
- **Structured Data Implementation**
- **Mobile SEO Optimisation**
- **Website Architecture Optimisation**

### On-Page SEO
On-page SEO focuses on optimising individual pages so search engines can better understand their content and relevance.
By improving page structure, metadata, and internal linking, businesses can increase their chances of ranking for relevant search queries.
Our on-page optimisation strategies ensure that every page communicates clear relevance to search engines while providing meaningful information to users.

**OUR On-Page SEO services include:**

- **Technical SEO Audits**
- **Website Crawling & Indexing Optimisation**
- **Page Speed Optimisation**
- **Core Web Vitals Optimisation**
- **Structured Data Implementation**
- **Mobile SEO Optimisation**
- **Website Architecture Optimisation**

### Content SEO
Content plays a central role in improving organic search visibility. Search engines prioritise websites that provide relevant, useful, and well-structured information aligned with user intent.
Content SEO focuses on developing content that helps businesses rank for valuable keywords while building topical authority in their industry.
Through structured content strategies and search-focused writing, we help businesses create content that attracts organic traffic and supports broader SEO performance.

**Our content SEO services include:**

- **SEO Content Strategy**
- **Search-Focused Content Creation**
- **Blog Content Optimisation**
- **Topic Authority Development**
- **Landing Page SEO**
- **Keyword-Optimised Content Writing**

### SEO Audits & Monitoring
SEO is an ongoing process that requires regular analysis and performance monitoring.
Through detailed SEO audits and performance tracking, businesses can identify opportunities to improve rankings, resolve technical issues, and optimise content performance.
Our monitoring and audit services help ensure that SEO strategies remain effective while adapting to search engine algorithm changes and evolving search trends.

**Our SEO audit services include:**

- **Website SEO Audits**
- **Content Performance Analysis**
- **Search Ranking Monitoring**
- **Organic Traffic Tracking**
- **Technical SEO Reviews**
- **Competitor SEO Benchmarking**
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
      <SeoPageClient project={project} />
      
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
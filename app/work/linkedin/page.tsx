import LayoutOne from '@/components/shared/LayoutOne'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealWrapper from '@/components/animation/RevealWrapper'


export const metadata = {
  title: 'Management Consulting Agency - Rivor',
}

const homepage23 = async ({ params }: { params: Promise<{ slug: string }> }) => {

    // Manual project data based on slug
    const getProjectData = () => {
        const projects = [
            {
                category: 'LinkedIn 1',
                title: 'LinkedIn 1',
                slug: '1',
                description: 'Content plays a central role in how businesses communicate value, improve search visibility, and engage potential customers online.High-quality written content helps businesses attract organic traffic, explain products or services clearly, and support marketing campaigns across digital channels.At Rise IT, our content writing services focus on creating structured content that strengthens search engine visibility, improves audience engagement, and supports lead generation initiatives.From SEO-focused content to website messaging and marketing campaigns, we help businesses develop content that communicates effectively and supports measurable marketing outcomes.',
                thumbnail: '/images/home-3/services-4.png',

                content: `### SEO Content Writing

SEO content writing helps businesses improve search visibility by creating content aligned with relevant search queries.
Well-optimised content allows websites to attract qualified organic traffic while building authority across key topics related to their industry.
`,

                images: ['/images/services/services-details-img.png', '/images/services/services-details-img.png'],
            },
            {
                category: 'LinkedIn 2',
                title: 'LinkedIn 2',
                slug: '2',
                description: 'Content plays a central role in how businesses communicate value, improve search visibility, and engage potential customers online.High-quality written content helps businesses attract organic traffic, explain products or services clearly, and support marketing campaigns across digital channels.At Rise IT, our content writing services focus on creating structured content that strengthens search engine visibility, improves audience engagement, and supports lead generation initiatives.From SEO-focused content to website messaging and marketing campaigns, we help businesses develop content that communicates effectively and supports measurable marketing outcomes.',
                thumbnail: '/images/home-3/services-3.png',

                content: `### SEO Content Writing

SEO content writing helps businesses improve search visibility by creating content aligned with relevant search queries.
Well-optimised content allows websites to attract qualified organic traffic while building authority across key topics related to their industry.
`,

                images: ['/images/services/services-details-img.png', '/images/services/services-details-img.png'],
            },
            {
                category: 'LinkedIn 3',
                title: 'LinkedIn 2',
                slug: '3',
                description: 'Content plays a central role in how businesses communicate value, improve search visibility, and engage potential customers online.High-quality written content helps businesses attract organic traffic, explain products or services clearly, and support marketing campaigns across digital channels.At Rise IT, our content writing services focus on creating structured content that strengthens search engine visibility, improves audience engagement, and supports lead generation initiatives.From SEO-focused content to website messaging and marketing campaigns, we help businesses develop content that communicates effectively and supports measurable marketing outcomes.',
                thumbnail: '/images/project-3/services-6.png',

                content: `### SEO Content Writing

SEO content writing helps businesses improve search visibility by creating content aligned with relevant search queries.
Well-optimised content allows websites to attract qualified organic traffic while building authority across key topics related to their industry.
`,

                images: ['/images/services/services-details-img.png', '/images/services/services-details-img.png'],
            },
        ]
        return projects;
    }

    const postprojects = getProjectData()

  return (
    <LayoutOne>
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <SectionHeader
            italicTitle="Selected"
            headingTitle="Growth Stories Studies"
            description="Below are examples of how businesses have used digital marketing systems to improve visibility, generate leads, and strengthen their digital presence."
          />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2">
         {postprojects?.map((project) => (
          <RevealWrapper key={project?.slug} className="single-project-item underline-hover-effect">
              <Link href={`/work/linkedin/${project?.slug}`} className="w-full">
                <figure className="overflow-hidden">
                  <Image
                    src={project?.thumbnail}
                    height={553}
                    width={553}
                    className="h-full w-full transition-all duration-500 hover:scale-125"
                    alt={project?.title}
                  />
                </figure>

                <div className="blog-title mb-1 mt-[30px] text-center">
                  <h3 className="text-center capitalize">{project?.title}</h3>
                </div>
              </Link>
            </RevealWrapper>
        ))}
        </div>

        <RevealWrapper as="ul" className="mt-[60px] flex justify-center">
          <li className="mx-auto block w-full md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top !text-center">
                <span>See all projects</span>
              </div>
              <div className="rv-button-bottom !text-center">
                <span>See all projects</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
    </LayoutOne>
  )
}

export default homepage23

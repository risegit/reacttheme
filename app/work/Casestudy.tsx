// case.tsx
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealWrapper from '@/components/animation/RevealWrapper'

interface projectType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudies: projectType[] = getMarkDownData('data/case-studies').slice(0, 4)

const Case = () => {
  return (
    <section className="pb-10 pt-10 md:pb-12 md:pt-12 lg:pb-14 lg:pt-14 xl:pb-16 xl:pt-16">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <SectionHeader
            italicTitle="Selected"
            headingTitle="Case Studies"
            description="Below are examples of how businesses have used digital marketing systems to improve visibility, generate leads, and strengthen their digital presence."
          />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2">
          {caseStudies?.map((project) => (
            <RevealWrapper key={project.slug} className="single-project-item underline-hover-effect">
              <Link href={project.slug !== 'instagram' ? `/work/${project?.slug}` : ``} className="w-full">
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
                  <h3 className="text-center capitalize">{project.title}</h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

      
      </div>
    </section>
  )
}

export default Case
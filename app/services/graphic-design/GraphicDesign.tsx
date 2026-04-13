'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { slugify } from '@/utils/slugify'

interface GraphicDesignProps {
  project: {
    data: {
      title: string
      category: string
      description: string
      images: string[]
      thumbnail: string
    }
    content: string
  }
}

export default function GraphicDesign({ project }: GraphicDesignProps) {
  const headings = project.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      },
    )

    tableOfContents.forEach((content) => {
      const element = document.getElementById(slugify(content))
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [tableOfContents])

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-7 md:px-20">
        <div className="flex flex-col gap-x-8 gap-y-12 lg:flex-row">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-40">
              <div>
                <h3 className="text-3xl md:text-4xl">Table of contents</h3>
                <ul className="mt-3.5 md:mt-5 lg:mt-10 [&>*:not(:last-child)]:mb-2 md:[&>*:not(:last-child)]:mb-5">
                  {tableOfContents.map((content) => {
                    const slug = slugify(content)
                    return (
                      <li key={content}>
                        <a
                          href={`#${slug}`}
                          className={`lenis-scroll-to text-xl font-normal normal-case leading-7 tracking-normal transition-all hover:text-secondary dark:hover:text-backgroundBody ${
                            activeSection === slug
                              ? 'text-secondary dark:text-backgroundBody'
                              : 'text-[#000000b3] dark:text-dark-100'
                          }`}
                        >
                          {content}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </aside>
          <article className="project-details-body overflow-hidden [&>*]:scroll-mt-20">
            <RevealWrapper as="figure" className="max-w-[870px] md:h-[480px]">
              <img src={project.data.thumbnail} alt="Services Big Img" className="h-full w-full object-cover" />
            </RevealWrapper>
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{project.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  )
}
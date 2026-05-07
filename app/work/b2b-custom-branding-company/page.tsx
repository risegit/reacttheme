// app/case-study/page.tsx
'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import LayoutOne from '@/components/shared/LayoutOne';
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero';
import CTA from '@/components/shared/CTA';
import CtaImageSlider from '@/components/shared/CtaImageSlider';
import RevealWrapper from '@/components/animation/RevealWrapper';
import { slugify } from '@/utils/slugify';

//Case study content in markdown format
const caseStudyContent = `### The Challenge

The client needed to scale monthly ad spend while maintaining profitability in online advertising. The primary goal was to break through a growth ceiling by increasing conversions and finding high-intent buyers without wasting advertising spend.

### How We Achieved the Results

**Conversion Rate Optimisation (CRO)**

*What we did:* Improved advertising communications.

The result: Our Conversion Rate nearly doubled (up 91%), jumping from 2.12% to 4.06%. This proved that the traffic we sent to the site was relevant.

**High-Intent & Long-Tail Keyword Expansion**

*What we did:* Revamped Keywords

The result: Even though impressions dropped, our Click-Through Rate (CTR) skyrocketed by 131%. This showed the new keywords were a perfect match for what customers were searching for. We generated 33% more clicks while spending slightly less per click. We ensured spending was focused entirely on high-value users, leading to a 57% increase in purchases.

**Smart Bidding Implementation**

*What we did:* We adjusted bids in real-time, focusing our budget on the auctions most likely to lead to a sale.

The result: The cost per conversion actually dropped by 7.8%, meaning we scaled up while getting more efficient.

### The Final Result

We generated 33% more clicks while spending slightly less per click. By blocking irrelevant searches, we ensured spending was focused entirely on high-value users, leading to **3,060 Purchases (a 57% increase)**.`;

export default function CaseStudyPage() {
  // Extract headings for table of contents
  const headings = caseStudyContent.match(/### .+/g) ?? [];
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''));
  const [activeSection, setActiveSection] = useState<string>('');

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      },
    );

    tableOfContents.forEach((content) => {
      const element = document.getElementById(slugify(content));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [tableOfContents]);

  return (
    <LayoutOne>
      <ProjectDetailsHero
        badgeTitle="Case Study"
        title="B2B Custom Branding Company"
        description="A B2B custom branding company specialising in high-quality promotional products."
        scale
        heading="B2B Custom Branding Company"
        headingDescription="A B2B custom branding company specialising in high-quality promotional products."
      />

      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="mx-auto max-w-[1440px] px-7 md:px-20">
          <div className="flex flex-col gap-x-8 gap-y-12 lg:flex-row">
            {/* Table of Contents Sidebar */}
            <aside className="min-w-[275px] flex-1">
              <div className="sticky top-40">
                <div>
                  <h3 className="text-3xl md:text-4xl">Table of contents</h3>
                  <ul className="mt-3.5 md:mt-5 lg:mt-10 [&>*:not(:last-child)]:mb-2 md:[&>*:not(:last-child)]:mb-5">
                    {tableOfContents.map((content) => {
                      const slug = slugify(content);
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
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <article className="project-details-body overflow-hidden [&>*]:scroll-mt-20">
              <RevealWrapper as="figure" className="max-w-[870px] md:h-[480px]">
                <img
                  src="/images/home-5/case-study-3.png"
                  alt="Case Study"
                  className="h-full w-full object-cover"
                />
              </RevealWrapper>

              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                {caseStudyContent}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      <CTA>
        {/* Ready to achieve similar results for your business?
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/06.png' },
            { id: '2', img: '/images/agent/07.png' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        /> */}
        <h5 className="">
          Let Rise IT help you scale your advertising efforts while maximizing ROI. Contact us today for a free consultation.
        </h5>
      </CTA>
    </LayoutOne>
  );
}
import RevealWrapper from '@/components/animation/RevealWrapper';
import TextAppearAnimation from '@/components/animation/TextAppearAnimation';
import CaseStudy from '@/components/homepage-18/CaseStudy';
import Link from 'next/link';
import AnimatedHeading from './AnimatedHeading';

// Hardcoded case study data based on the provided markdown content
const caseStudiesData = [
  {
    id: '1',
    slug: 'b2b-custom-branding-company',
    title: 'Google Ads ',
    image: '/images/home-5/case-study-3.png',
    thumbnail: '/images/home-5/case-study-3.png',
    alt: 'e-commerce-brand-3x-sales-growth',
    category: 'Movie Theiter',
    challenges: [
      'Challenge:The client needed to scale monthly ad spend while maintaining profitability in online advertising. ',
      'Results: We generated 33% more clicks while spending slightly less per click.',
    ],
    year: 2025,
    date: 'June 10',
    description:
      'Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It allows designers to fill a layout with text that resembles natural language without the distraction of meaningful content. This helps to focus on the visual aspects of the design, such as typography, spacing, and overall composition, making it easier to evaluate the aesthetic qualities of a project.',
  },
  {
    id: '2',
    slug: 'b2b-customer',
    title: 'Meta Ads',
    image: '/images/home-5/case-study-4.png',
    thumbnail: '/images/home-5/case-study-4.png',
    alt: 'saas-company-boost-in-conversions',
    category: 'Movie Theiter',
    challenges: [
      'Challenge: The client’s social media presence lacked reach and engagement and wasn’t effectively driving users back to the website',
      'Results: We saw strong growth across both platforms, with reach and visibility increasing significantly year over year',
    ],
    year: 2025,
    date: 'June 10',
    description:
      'Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It allows designers to fill a layout with text that resembles natural language without the distraction of meaningful content. This helps to focus on the visual aspects of the design, such as typography, spacing, and overall composition, making it easier to evaluate the aesthetic qualities of a project.',
  },
];

const PortfolioV5 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[70px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="rv-badge reveal-me">
              {/* <span className="rv-badge-text">Case Studies</span> */}
            </RevealWrapper>
            <AnimatedHeading />
          </div>
          <div className="max-md:w-full md:flex-1">
            {/* <TextAppearAnimation> */}
              <p className="text-appear overflow-hidden md:text-right">
                Words that win customers, Build trust &amp; increase revenue
              </p>
            {/* </TextAppearAnimation> */}
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/work" className="rv-button rv-button-primary block md:inline-block">
                  <div className="rv-button-top">
                    <span className="text-white">More Case Studies</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">More Case Studies</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="mb-[60px] space-y-[30px]">
          {caseStudiesData.map((study) => (
            <CaseStudy
              key={study.id}
              title={study.title}
              image={study.image}
              challenges={study.challenges}
              detailsLink={`/work/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioV5;
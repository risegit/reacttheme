'use client'
import useReveal from '@/hooks/useReveal'
import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from '../shared/CircleTextAnimation'
import dynamic from 'next/dynamic'
const TextAppearAnimation = dynamic(() => import('../animation/TextAppearAnimation'), {
  ssr: false,
})

const achievementStats = [
  { value: 13, label: 'Years of Experience', suffix: '+' },
  { value: 350, label: 'million USD in revenues generated for clients', suffix: '+' },
  { value: 110, label: ' Global Businesses Served', suffix: '+' },
  { value: 15, label: ' Countries with client presence', suffix: '+' },

]

const AboutV8 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="about relative pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] xl:pt[70px] ">
      <div className="container">
        <RevealWrapper>
       
        </RevealWrapper>
        <RevealWrapper>
         <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
              <h2 className="text-appear my-3">
           PROVEN DIGITAL MARKETING <i className="font-instrument">experience</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper as="p">
            Each project reflects our dedication to excellence, creativity, and innovation.
          </RevealWrapper>
        </div>
        </RevealWrapper>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-16">
          {achievementStats.map((achievement, index) => (
            <RevealWrapper
              key={achievement.label}
              className="flex min-w-[355px] flex-col items-center justify-center border-t py-7 dark:border-dark sm:flex-row sm:items-start sm:justify-between lg:min-w-[300px] xl:min-w-[355px]">
              <h2 className="sm:min-w-[170px]">
                <CounterAnimation number={achievement.value} />
                {achievement.suffix}
              </h2>
              <h6 className="text-lg self-center">{achievement.label}</h6>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV8

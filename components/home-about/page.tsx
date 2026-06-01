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
  { value: 350, label: 'Million USD in revenues generated for clients', suffix: '+' },
  { value: 110, label: 'Global businesses served', suffix: '+' },
  { value: 15, label: 'Countries with client presence', suffix: '+' },
]

const AboutV8 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="about xl:pt[70px] relative pb-14 pt-14 md:pb-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper></RevealWrapper>
        <RevealWrapper>
          <div className="mb-8 text-center md:mb-14">
            <RevealWrapper className="rv-badge reveal-me">
              <span className="rv-badge-text">Experience</span>
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
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-8">
          {achievementStats.map((achievement, index) => (
            <RevealWrapper
              key={achievement.label}
              className="flex flex-col items-center justify-center border-t py-7 text-center dark:border-dark">
              <h2 className="mb-2">
                <CounterAnimation number={achievement.value} />
                {achievement.suffix}
              </h2>
              <h6 className="mx-auto max-w-[400px] text-base md:text-lg">{achievement.label}</h6>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV8

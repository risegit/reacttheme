'use client'

import dynamic from 'next/dynamic'
import RevealWrapper from '@/components/animation/RevealWrapper'

const TextAppearAnimation = dynamic(() => import('@/components/animation/TextAppearAnimation'), {
  ssr: false,
})

export default function AnimatedHeading() {
  return (
    <>
      <RevealWrapper className="rv-badge reveal-me">
        <span className="rv-badge-text">Case Studies</span>
      </RevealWrapper>
      <TextAppearAnimation>
        <h2 className="text-appear mt-3 overflow-hidden">
          Real results
          <span className="font-instrument italic">real impact</span>
        </h2>
      </TextAppearAnimation>
    </>
  )
}
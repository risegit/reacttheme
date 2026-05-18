import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from './HeroGradientAnimation'

interface PropsType {
  badgeTitle?: string
  title: string
  italicTitle?: string
  description?: string
  spacing?: string
  scale?: boolean
}

const PageHero = ({ badgeTitle, title, description, italicTitle, spacing, scale }: PropsType) => {
  return (
    <section className={`${spacing ?? 'relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-20 lg:pt-[185px] lg:pb-[100px]'} `}>
      <HeroGradientAnimation scale={scale} />

      <div className="container">
        <RevealWrapper className="text-center">
          {badgeTitle && (
            <div className="rv-badge">
              <span className="rv-badge-text">{badgeTitle}</span>
            </div>
          )}
          {title && (
            <h1 className="mb-4 mt-3.5">
              {title} <i className="font-instrument italic">{italicTitle}</i>
            </h1>
          )}
          {description && <p className="text-appear mx-auto max-w-[470px] md:max-w-[900px]">{description}</p>}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PageHero

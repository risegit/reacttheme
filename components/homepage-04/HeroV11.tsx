'use client'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

interface Translation {
  x: string
  y: string
}

const HeroV11 = () => {
  const heroButtonRef = useRef<HTMLLIElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  useEffect(() => {
    const imagePaths: string[] = [
      '/images/home-4/img1.png',
      '/images/home-4/img2.png',
      '/images/home-4/img3.png',
      '/images/home-4/img4.png',
      '/images/home-4/img5.png',
      '/images/home-4/img6.png',
      '/images/home-4/img7.png',
      '/images/home-4/img8.png',
    ]

    const translations: Translation[] = [
      { x: '-50%', y: '-8%' },
      { x: '50%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '-50%', y: '-8%' },
      { x: '0%', y: '-8%' },
    ]

    // Filter out any null refs
    const decorativeImages: HTMLImageElement[] = imagesRef.current.filter(
      (ref): ref is HTMLImageElement => ref !== null,
    )

    // Store original src for each image
    const originalSrcs: string[] = decorativeImages.map((img) => img.src)

    const handleMouseEnter = (): void => {
      const shuffledPaths: string[] = [...imagePaths].sort(() => Math.random() - 0.5)

      // Ensure no duplicate images
      let selectedPaths: string[] = []
      if (decorativeImages.length > imagePaths.length) {
        for (let i = 0; i < decorativeImages.length; i++) {
          if (i < imagePaths.length) {
            selectedPaths.push(shuffledPaths[i])
          } else {
            const availablePaths = shuffledPaths.filter((path) => path !== selectedPaths[selectedPaths.length - 1])
            const randomPath = availablePaths[Math.floor(Math.random() * availablePaths.length)]
            selectedPaths.push(randomPath)
          }
        }
      } else {
        selectedPaths = shuffledPaths.slice(0, decorativeImages.length)
      }

      decorativeImages.forEach((img, index) => {
        const newImagePath = selectedPaths[index]
        const translation = translations[index % translations.length]

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            img.src = newImagePath

            gsap.set(img, {
              x: translation.x,
              y: translation.y,
              opacity: 0,
              scale: 0,
            })

            gsap.to(img, {
              duration: 0.7,
              opacity: 1,
              scale: 1,
            })
          },
        })
      })
    }

    const handleMouseLeave = (): void => {
      decorativeImages.forEach((img, index) => {
        const translation = translations[index % translations.length]
        const originalSrc = originalSrcs[index]

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            img.src = originalSrc

            gsap.set(img, { x: '0%', y: '0%', opacity: 0, scale: 0 })

            gsap.to(img, {
              duration: 0.7,
              opacity: 1,
              scale: 1,
            })
          },
        })
      })
    }

    // Add event listeners
    const buttonElement = heroButtonRef.current
    if (buttonElement && decorativeImages.length > 0) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter)
      buttonElement.addEventListener('mouseleave', handleMouseLeave)

      // Cleanup function
      return () => {
        buttonElement.removeEventListener('mouseenter', handleMouseEnter)
        buttonElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Function to correctly set refs for each image
  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <RevealWrapper
      as="section"
      className="mb-5 relative overflow-hidden pb-10 pt-[130px] md:pb-24 md:pt-[160px] lg:pb-32 xl:pb-[180px] xl:pt-[200px]">
      <HeroGradientAnimation />
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="rv-badge mb-2">
            {/* <span className="rv-badge-text">Digital Marketing Agency</span> */}
          </div>
        </div>
        <h2 className="text-center md:mt-20 sm:mt-5">
          Building <i className="font-instrument"> visibility</i>, generating <i className="font-instrument"> demand</i>, and scaling<i className="font-instrument">  growth</i> through<br />
         digital marketing systems
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center">
           We are growth marketing partner helping businesses strengthen their digital presence through<strong> Search engine optimization, Generative AI optimization, Performance marketing, Social media marketing, Public relations, and integrated digital marketing strategy.
          </strong>
        </p>

        <ul className="mt-14 flex list-none justify-center">
          <li className="inline cursor-pointer text-center" ref={heroButtonRef}>
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>Start a Conversation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Start a Conversation</span>
              </div>
            </Link>
            <p className="mx-auto max-w-3xl text-center mt-5">
              14+ years helping businesses grow through digital marketing.
            </p>
          </li>
        </ul>
      </div>
      <figure className="absolute left-[8%] top-[7%] hidden md:block lg:left-[24%] lg:top-[11%]">
        <img src="/images/home-4/img1.png" alt="" className="decorative-image" ref={setImageRef(0)} />
      </figure>
      <figure className="absolute right-[15%] top-[7%] hidden md:block lg:right-[29%] lg:top-[11%]">
        <img src="/images/home-4/img2.png" alt="" className="decorative-image" ref={setImageRef(1)} />
      </figure>
      <figure className="absolute left-[2%] top-[42%] hidden lg:block">
        <img src="/images/home-4/img3.png" alt="" className="decorative-image" ref={setImageRef(2)} />
      </figure>
      <figure className="absolute right-[2%] top-[32%] hidden lg:block">
        <img src="/images/home-4/img4.png" alt="" className="decorative-image" ref={setImageRef(3)} />
      </figure>
      <figure className="absolute bottom-[4%] left-[12%] hidden md:block lg:bottom-[7%] lg:left-[23%]">
        <img src="/images/home-4/img5.png" alt="" className="decorative-image" ref={setImageRef(4)} />
      </figure>
      <figure className="absolute bottom-[1%] right-[3%] hidden md:block lg:bottom-[3%] lg:right-[5%]">
        <img src="/images/home-4/img6.png" alt="" className="decorative-image" ref={setImageRef(5)} />
      </figure>
        <figure className="absolute bottom-[1%] right-[3%] hidden md:block lg:bottom-[3%] lg:right-[5%]">
        <img src="/images/home-4/img7.png" alt="" className="decorative-image" ref={setImageRef(5)} />
      </figure>
      <figure className="absolute bottom-[1%] right-[3%] hidden md:block lg:bottom-[3%] lg:right-[5%]">
        <img src="/images/home-4/img8.png" alt="" className="decorative-image" ref={setImageRef(5)} />
      </figure>
    </RevealWrapper>
  )
}

export default HeroV11




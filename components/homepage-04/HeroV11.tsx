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
           We are growth marketing partner helping businesses strengthen their digital presence through<strong> Search Engine Optimization, Generative AI Optimization, Performance Marketing, Social Media Marketing, Public Relations, and Integrated Digital Marketing Strategy.
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
      <figure className="absolute bottom-[4%] left-[12%] hidden md:block lg:bottom-[7%] lg:left-[13%]">
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



// 'use client'

// import gsap from 'gsap'
// import Link from 'next/link'
// import { useEffect, useRef } from 'react'
// import RevealWrapper from '../animation/RevealWrapper'
// import HeroGradientAnimation from '../shared/HeroGradientAnimation'

// interface Translation {
//   x: string
//   y: string
// }

// const HeroV11 = () => {
//   const heroButtonRef = useRef<HTMLLIElement>(null)
//   const imagesRef = useRef<Array<HTMLImageElement | null>>([])

//   useEffect(() => {
//     const imagePaths: string[] = [
//       '/images/home-4/random-1.png',
//       '/images/home-4/random-2.png',
//       '/images/home-4/random-3.png',
//       '/images/home-4/random-4.png',
//       '/images/home-4/random-5.png',
//       '/images/home-4/random-6.png',
//     ]

//     const translations: Translation[] = [
//       { x: '-50%', y: '-8%' },
//       { x: '50%', y: '-8%' },
//       { x: '0%', y: '-8%' },
//       { x: '0%', y: '-8%' },
//       { x: '-50%', y: '-8%' },
//       { x: '0%', y: '-8%' },
//     ]

//     const decorativeImages: HTMLImageElement[] = imagesRef.current.filter(
//       (ref): ref is HTMLImageElement => ref !== null,
//     )

//     const originalSrcs: string[] = decorativeImages.map((img) => img.src)

//     const handleMouseEnter = (): void => {
//       const shuffledPaths: string[] = [...imagePaths].sort(() => Math.random() - 0.5)

//       let selectedPaths: string[] = []

//       if (decorativeImages.length > imagePaths.length) {
//         for (let i = 0; i < decorativeImages.length; i++) {
//           if (i < imagePaths.length) {
//             selectedPaths.push(shuffledPaths[i])
//           } else {
//             const availablePaths = shuffledPaths.filter(
//               (path) => path !== selectedPaths[selectedPaths.length - 1],
//             )

//             const randomPath =
//               availablePaths[Math.floor(Math.random() * availablePaths.length)]

//             selectedPaths.push(randomPath)
//           }
//         }
//       } else {
//         selectedPaths = shuffledPaths.slice(0, decorativeImages.length)
//       }

//       decorativeImages.forEach((img, index) => {
//         const newImagePath = selectedPaths[index]
//         const translation = translations[index % translations.length]

//         gsap.to(img, {
//           duration: 0.7,
//           x: translation.x,
//           y: translation.y,
//           opacity: 0,
//           onComplete: () => {
//             img.src = newImagePath

//             gsap.set(img, {
//               x: translation.x,
//               y: translation.y,
//               opacity: 0,
//               scale: 0,
//             })

//             gsap.to(img, {
//               duration: 0.7,
//               opacity: 1,
//               scale: 1,
//             })
//           },
//         })
//       })
//     }

//     const handleMouseLeave = (): void => {
//       decorativeImages.forEach((img, index) => {
//         const translation = translations[index % translations.length]
//         const originalSrc = originalSrcs[index]

//         gsap.to(img, {
//           duration: 0.7,
//           x: translation.x,
//           y: translation.y,
//           opacity: 0,
//           onComplete: () => {
//             img.src = originalSrc

//             gsap.set(img, {
//               x: '0%',
//               y: '0%',
//               opacity: 0,
//               scale: 0,
//             })

//             gsap.to(img, {
//               duration: 0.7,
//               opacity: 1,
//               scale: 1,
//             })
//           },
//         })
//       })
//     }

//     const buttonElement = heroButtonRef.current

//     if (buttonElement && decorativeImages.length > 0) {
//       buttonElement.addEventListener('mouseenter', handleMouseEnter)
//       buttonElement.addEventListener('mouseleave', handleMouseLeave)

//       return () => {
//         buttonElement.removeEventListener('mouseenter', handleMouseEnter)
//         buttonElement.removeEventListener('mouseleave', handleMouseLeave)
//       }
//     }
//   }, [])

//   const setImageRef =
//     (index: number) => (el: HTMLImageElement | null) => {
//       imagesRef.current[index] = el
//     }

//   return (
//     <RevealWrapper
//       as="section"
//       className="relative overflow-hidden pt-[110px] pb-16 sm:pt-[120px] md:pt-[150px] md:pb-24 lg:pb-32 xl:pt-[190px] xl:pb-[180px]"
//     >
//       <HeroGradientAnimation />

//       <div className="container relative z-10 px-5 sm:px-6">
//         <div className="flex items-center justify-center">
//           <div className="rv-badge mb-5 sm:mb-6">
//             <span className="rv-badge-text text-[11px] uppercase tracking-[1.5px] sm:text-xs">
//               Digital Marketing Agency
//             </span>
//           </div>
//         </div>

//         <h1
//           className="
//             mx-auto
//             max-w-[950px]
//             text-center
//             font-normal
//             leading-[1.12]
//             tracking-[-0.02em]
//             text-[42px]
//             sm:text-[52px]
//             md:text-[72px]
//             lg:text-[88px]
//           "
//         >
//           Building <i className="font-instrument">visibility</i>, generating{' '}
//           <i className="font-instrument">demand</i>, and scaling{' '}
//           <i className="font-instrument">growth</i> through digital marketing
//           systems
//         </h1>

//         <p
//           className="
//             mx-auto
//             mt-5
//             max-w-[760px]
//             text-center
//             text-[15px]
//             leading-7
//             text-black/65
//             sm:text-[16px]
//             md:mt-7
//             md:text-[20px]
//             md:leading-9
//           "
//         >
//           We are a growth marketing partner helping businesses strengthen
//           their digital presence through{' '}
//           <strong className="font-semibold text-black">
//             SEO, performance marketing, social media marketing, digital PR,
//             Generative AI optimization, and integrated digital marketing
//             strategy.
//           </strong>
//         </p>

//         <ul className="mt-8 flex list-none justify-center md:mt-12">
//           <li
//             className="inline cursor-pointer text-center"
//             ref={heroButtonRef}
//           >
//             <Link
//               href="/contact"
//               className="
//                 rv-button
//                 rv-button-primary
//                 inline-flex
//                 w-full
//                 min-w-[250px]
//                 justify-center
//                 sm:min-w-[280px]
//               "
//             >
//               <div className="rv-button-top">
//                 <span className="text-sm font-medium uppercase tracking-wide text-white sm:text-base">
//                   Start a Conversation
//                 </span>
//               </div>

//               <div className="rv-button-bottom">
//                 <span className="text-nowrap text-sm font-medium uppercase tracking-wide sm:text-base">
//                   Start a Conversation
//                 </span>
//               </div>
//             </Link>

//             <p
//               className="
//                 mx-auto
//                 mt-5
//                 max-w-[320px]
//                 text-center
//                 text-sm
//                 leading-6
//                 text-black/50
//                 sm:max-w-none
//                 sm:text-base
//               "
//             >
//               14+ years helping businesses grow through digital marketing.
//             </p>
//           </li>
//         </ul>
//       </div>

//       {/* Decorative Images */}
//       <figure className="absolute left-[8%] top-[10%] hidden md:block lg:left-[24%] lg:top-[12%]">
//         <img
//           src="/images/home-4/random-1.jpeg"
//           alt=""
//           className="decorative-image w-[120px] lg:w-[140px]"
//           ref={setImageRef(0)}
//         />
//       </figure>

//       <figure className="absolute right-[12%] top-[10%] hidden md:block lg:right-[28%] lg:top-[12%]">
//         <img
//           src="/images/home-4/random-2.jpeg"
//           alt=""
//           className="decorative-image w-[120px] lg:w-[140px]"
//           ref={setImageRef(1)}
//         />
//       </figure>

//       <figure className="absolute left-[2%] top-[42%] hidden xl:block">
//         <img
//           src="/images/home-4/random-3.jpeg"
//           alt=""
//           className="decorative-image w-[260px]"
//           ref={setImageRef(2)}
//         />
//       </figure>

//       <figure className="absolute right-[2%] top-[34%] hidden xl:block">
//         <img
//           src="/images/home-4/random-4.jpeg"
//           alt=""
//           className="decorative-image w-[150px]"
//           ref={setImageRef(3)}
//         />
//       </figure>

//       <figure className="absolute bottom-[6%] left-[12%] hidden lg:block">
//         <img
//           src="/images/home-4/random-5.png"
//           alt=""
//           className="decorative-image w-[130px]"
//           ref={setImageRef(4)}
//         />
//       </figure>

//       <figure className="absolute bottom-[3%] right-[5%] hidden lg:block">
//         <img
//           src="/images/home-4/random-6.png"
//           alt=""
//           className="decorative-image w-[260px]"
//           ref={setImageRef(5)}
//         />
//       </figure>
//     </RevealWrapper>
//   )
// }

// export default HeroV11
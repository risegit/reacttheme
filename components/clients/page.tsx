// clients.tsx
'use client'
import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo1 from '@/components/clients/images/anc.png'
import logo2 from '@/components/clients/images/abnd.png'
import logo3 from '@/components/clients/images/alps.png'
import logo4 from '@/components/clients/images/amigo.png'
import logo5 from '@/components/clients/images/ashtech.png'
import logo6 from '@/components/clients/images/aviglobal.png'
import logo7 from '@/components/clients/images/bay.png'
import logo8 from '@/components/clients/images/beyondesign.png'
import logo9 from '@/components/clients/images/cocoon.png'
import logo10 from '@/components/clients/images/cultfit.png'
import logo11 from '@/components/clients/images/digisuraksha.png'
import logo12 from '@/components/clients/images/dsm.png'
import logo13 from '@/components/clients/images/feriadoss.png'
import logo14 from '@/components/clients/images/fitnessworld.png'
import logo15 from '@/components/clients/images/galaxy.png'
import logo16 from '@/components/clients/images/greatescape.png'
import logo17 from '@/components/clients/images/harkesh.png'
import logo18 from '@/components/clients/images/hepo.png'
import logo19 from '@/components/clients/images/hettich.png'
import logo20 from '@/components/clients/images/hod.png'
import logo21 from '@/components/clients/images/host.png'
import logo22 from '@/components/clients/images/icpa.png'
import logo23 from '@/components/clients/images/instacurry.png'
import logo24 from '@/components/clients/images/kalayatan.png'
import logo25 from '@/components/clients/images/kapadia.png'
import logo26 from '@/components/clients/images/kserve.png'
import logo27 from '@/components/clients/images/lloyds.png'
import logo28 from '@/components/clients/images/nursinghome.png'
import logo29 from '@/components/clients/images/neptunus.png'
import logo30 from '@/components/clients/images/nexdigm.png'
import logo31 from '@/components/clients/images/orwogro.png'
import logo32 from '@/components/clients/images/precision.png'
import logo33 from '@/components/clients/images/promodirect.png'
import logo34 from '@/components/clients/images/qdevices.png'
import logo35 from '@/components/clients/images/qms.png'
import logo36 from '@/components/clients/images/quint.png'
import logo37 from '@/components/clients/images/rexseal.png'
import logo38 from '@/components/clients/images/river.png'
import logo39 from '@/components/clients/images/roche.png'
import logo40 from '@/components/clients/images/rolliflex.png'
import logo41 from '@/components/clients/images/rolliflex (2).png'
import logo42 from '@/components/clients/images/sbi.png'
import logo43 from '@/components/clients/images/sevenhats.png'
import logo46 from '@/components/clients/images/stoneshippers.png'
import logo47 from '@/components/clients/images/stonestry.png'
import logo48 from '@/components/clients/images/swan.png'
import logo49 from '@/components/clients/images/talsuccess.png'
import logo50 from '@/components/clients/images/dripbar.png'
import logo51 from '@/components/clients/images/toshvin.png'
import logo52 from '@/components/clients/images/unitec.png'
import logo53 from '@/components/clients/images/vams.png'
import logo54 from '@/components/clients/images/raliance.png'
import logo55 from '@/components/clients/images/zktecoo.png'
// import logo54 from "@/components/clients/images/victorykorea.png"
import dynamic from 'next/dynamic'

// 🚀 Disable SSR for animation components
const RevealWrapper = dynamic(() => import('../animation/RevealWrapper'), {
  ssr: false,
})

const TextAppearAnimation = dynamic(() => import('../animation/TextAppearAnimation'), {
  ssr: false,
})

const ClientsLogos = ({ showAll = false }) => {
  const pathname = usePathname()
  const isWorkPage = pathname === '/work' || showAll

  // Array of all logos for easy mapping
  const allLogos = [
    { id: 42, src: logo42, alt: 'SBI Life' },
    { id: 10, src: logo10, alt: 'Cult' },

    { id: 54, src: logo54, alt: 'Reliance' },
    { id: 15, src: logo15, alt: 'Galaxy Surfactants' },
    { id: 19, src: logo19, alt: 'Hettich' },
    { id: 22, src: logo22, alt: 'ICPA' },
    { id: 30, src: logo30, alt: 'Nexdigm' },
    { id: 5, src: logo5, alt: 'Ashtech India' },
    { id: 48, src: logo48, alt: 'Swan' },
    { id: 9, src: logo9, alt: 'Cocoon Fine Rugs' },
    { id: 16, src: logo16, alt: 'Great Escape' },
    { id: 33, src: logo33, alt: 'Promom Direct' },
    { id: 14, src: logo14, alt: 'Fitness World' },
    { id: 27, src: logo27, alt: 'Lloyds' },
    { id: 55, src: logo55, alt: 'ZKTeco' },
    { id: 17, src: logo17, alt: 'Harkesh Rubber' },

    { id: 8, src: logo8, alt: 'Beyondesign' },
    { id: 51, src: logo51, alt: 'Toshvin Analytical' },
    { id: 12, src: logo12, alt: 'DSM' },
    { id: 35, src: logo35, alt: 'QMS Medical Allied Services' },
    { id: 3, src: logo3, alt: 'Alps Chemicals' },
    { id: 28, src: logo28, alt: 'My India Nursing Home' },
    { id: 39, src: logo39, alt: 'Roche' },
    { id: 6, src: logo6, alt: 'Avi Global Plast' },
    { id: 31, src: logo31, alt: 'Orwo Gro' },
    { id: 26, src: logo26, alt: 'Kserve' },
    { id: 43, src: logo43, alt: 'Seven Hats Consulting' },
    { id: 36, src: logo36, alt: 'Quint Consulting Services' },
    // { id: 50, src: logo50, alt: 'The Drip Bar' },
    { id: 24, src: logo24, alt: 'Kalayatan Cargo' },
    { id: 41, src: logo41, alt: 'Rolliflex' },
    { id: 2, src: logo2, alt: 'Abnd Logo' },
    { id: 47, src: logo47, alt: 'Stonestry' },
    { id: 18, src: logo18, alt: 'HEPO India' },
    { id: 53, src: logo53, alt: 'VAMS' },
    { id: 29, src: logo29, alt: 'Neptunus' },
    { id: 38, src: logo38, alt: 'River Comics' },
    { id: 49, src: logo49, alt: 'Tal Success' },
    { id: 13, src: logo13, alt: 'Feriadoss and More' },
    { id: 40, src: logo40, alt: 'Rolliflex Cables' },
    { id: 20, src: logo20, alt: 'HOD' },
    { id: 32, src: logo32, alt: 'Precision Electricals' },
    { id: 1, src: logo1, alt: 'A C Pharma Specialities LLP' },
    { id: 52, src: logo52, alt: 'Unitec Fibers' },
    { id: 37, src: logo37, alt: 'Rexseal' },
    { id: 46, src: logo46, alt: 'Stone Shippers Limited' },
    { id: 11, src: logo11, alt: 'Digi Suraksha' },
    { id: 25, src: logo25, alt: 'Kapadia' },
    { id: 34, src: logo34, alt: 'Q Devices' },
    { id: 7, src: logo7, alt: 'Bayy Cosmetics' },
    // { id: 23, src: logo23, alt: 'Insta Curry Cups' },
    { id: 4, src: logo4, alt: 'Amigo Academy' },
    { id: 21, src: logo21, alt: 'Host My Trips' },
  ]

  // Determine which logos to show based on page
  const logos = isWorkPage ? allLogos : allLogos.slice(0, 20)

  return (
    <section className="relative mx-auto w-full max-w-[1920px] pb-10 pt-10 max-md:pt-10 md:pb-12 md:pt-12 lg:pb-14 lg:pt-14 xl:pb-16 xl:pt-16">
      <div className="container mx-auto px-4">
        <div className="container">
          <div className="mb-8 text-center">
            <RevealWrapper className="rv-badge reveal-me">
              <span className="rv-badge-text">Clients</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto mt-6 max-w-[770px]">
                TRUSTED BY BUSINESSES <i className="font-instrument">across industries</i>
              </h2>
            </TextAppearAnimation>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="w-full">
          {/* Desktop Grid - Minimal gap, no padding */}
          <div className={`hidden gap-0 md:grid ${isWorkPage ? 'md:grid-cols-5' : 'md:grid-cols-5'}`}>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="group flex items-center justify-center border-b border-r border-gray-100 p-0 transition-all duration-300 hover:scale-105">
                <div className="relative h-48 w-48">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-4 grayscale transition-all duration-300 group-hover:grayscale-0"
                    sizes="(max-width: 192px) 100vw, 192px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Grid - Minimal gap, no padding */}
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 md:hidden">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="group flex items-center justify-center border-b border-r border-gray-100 bg-white p-0 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="relative h-36 w-36">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-3 grayscale transition-all duration-300 group-hover:grayscale-0"
                    sizes="(max-width: 144px) 100vw, 144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button - Only show on home page */}
        {!isWorkPage && (
          <div className="mt-10 flex justify-center md:mt-12">
            <Link href="/work" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className="text-white">See More Clients</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">See More Clients</span>
              </div>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .object-contain {
          object-fit: contain;
        }
      `}</style>
    </section>
  )
}

export default ClientsLogos

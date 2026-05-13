'use client'
import React, { useMemo } from 'react'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import logo1 from "@/components/clients/images/a_c_pharma_specialities_llp_logo.jpg"
import logo2 from "@/components/clients/images/Abnd Logo.jpg"
import logo3 from "@/components/clients/images/alps_chemicals_logo.jpg"
import logo4 from "@/components/clients/images/Amigo Academy Pvt Ltd-logo.jpg"
import logo5 from "@/components/clients/images/ashtech_india_pvt_ltd_logo.jpg"
import logo6 from "@/components/clients/images/avi_global_plast_pvt_ltd_logo.jpg"
import logo7 from "@/components/clients/images/BAYY-COSMETICS-LLP-Logo.jpg"
import logo8 from "@/components/clients/images/beyondesign_logo.jpg"
import logo9 from "@/components/clients/images/Cocoon Fine Rugs- logo.jpg"
import logo10 from "@/components/clients/images/cult.jpg"
import logo11 from "@/components/clients/images/digi_suraksha_logo.jpg"
import logo12 from "@/components/clients/images/dsm.jpg"
import logo13 from "@/components/clients/images/FERIADOSS AND MORE PRIVATE LIMITED- Logo.jpg"
import logo14 from "@/components/clients/images/fitness_world.jpg"
import logo15 from "@/components/clients/images/galaxysurfactantslimited_logo.jpg"
import logo16 from "@/components/clients/images/Great escape - Logo.jpg"
import logo17 from "@/components/clients/images/Harkesh Rubber LLP- Logo.jpg"
import logo18 from "@/components/clients/images/HEPO INDIA PRIVATE LIMITED- Logo.jpg"
import logo19 from "@/components/clients/images/Hettich - Logo.jpg"
import logo20 from "@/components/clients/images/hod.jpg"
import logo21 from "@/components/clients/images/Host My Trips- Logo.jpg"
import logo22 from "@/components/clients/images/icpa.jpg"
import logo23 from "@/components/clients/images/Insta curry Cups Logo.jpg"
import logo24 from "@/components/clients/images/kalayatan_cargo_logo.jpg"
import logo25 from "@/components/clients/images/kapadia.jpg"
import logo26 from "@/components/clients/images/kserve.jpg"
import logo27 from "@/components/clients/images/lloyds-metals - Logo.jpg"
import logo28 from "@/components/clients/images/My India Nursing Home - Logo.jpg"
import logo29 from "@/components/clients/images/neptunus.jpg"
import logo30 from "@/components/clients/images/nexdigm.jpg"
import logo31 from "@/components/clients/images/Orwo Gro.jpg"
import logo32 from "@/components/clients/images/Precision Electricals logo.jpg"
import logo33 from "@/components/clients/images/Promom direct - Logo.jpg"
import logo34 from "@/components/clients/images/Q Devices - logo.jpg"
import logo35 from "@/components/clients/images/QMS Medical Allied Services- Logo.jpg"
import logo36 from "@/components/clients/images/Quint Consulting Services Private Ltd- Logo.jpg"
import logo37 from "@/components/clients/images/rexseal-new-logo-2.jpg"
import logo38 from "@/components/clients/images/River-Comics-logo.jpg"
import logo39 from "@/components/clients/images/roche.jpg"
import logo40 from "@/components/clients/images/rolliflex_cables_logo.jpg"
import logo41 from "@/components/clients/images/rolliflex.jpg"
import logo42 from "@/components/clients/images/SBI life.jpg"
import logo43 from "@/components/clients/images/Seven Hats Consulting - Logo.jpg"
import logo44 from "@/components/clients/images/Sir HN Hospital Trust- Logo.jpg"
import logo45 from "@/components/clients/images/Square Logo.jpg"
import logo46 from "@/components/clients/images/Stone Shippers Limited- Logo.jpg"
import logo47 from "@/components/clients/images/Stonestry - Logo.jpg"
import logo48 from "@/components/clients/images/Swan - Logo.jpg"
import logo49 from "@/components/clients/images/Tal Success - Logo.jpg"
import logo50 from "@/components/clients/images/The Drip Bar - Logo.jpg"
import logo51 from "@/components/clients/images/toshvin_analytical_pvt_ltd__logo.jpg"
import logo52 from "@/components/clients/images/Unitec Fibers - Logo.jpg"
import logo53 from "@/components/clients/images/vams.jpg"
import logo54 from "@/components/clients/images/Victory Kore Dry- Logo.jpg"
import dynamic from 'next/dynamic'

const TextAppearAnimation = dynamic(() => import('../animation/TextAppearAnimation'), {
  ssr: false,
})

const ClientsLogos = ({ showAll = false }) => {
  const pathname = usePathname();
  const isWorkPage = pathname === '/work' || showAll;
  
  // Array of all logos for easy mapping
  const allLogos = [
  { id: 42, src: logo42, alt: "SBI Life" },
  { id: 17, src: logo17, alt: "Harkesh Rubber" },
  { id: 8, src: logo8, alt: "Beyondesign" },
  { id: 51, src: logo51, alt: "Toshvin Analytical" },
  { id: 12, src: logo12, alt: "DSM" },
  { id: 35, src: logo35, alt: "QMS Medical Allied Services" },
  { id: 3, src: logo3, alt: "Alps Chemicals" },
  { id: 28, src: logo28, alt: "My India Nursing Home" },
  { id: 45, src: logo45, alt: "Square Logo" },
  { id: 22, src: logo22, alt: "ICPA" },
  { id: 54, src: logo54, alt: "Victory Korea Dry" },
  { id: 15, src: logo15, alt: "Galaxy Surfactants" },
  { id: 39, src: logo39, alt: "Roche" },
  { id: 6, src: logo6, alt: "Avi Global Plast" },
  { id: 31, src: logo31, alt: "Orwo Gro" },
  { id: 48, src: logo48, alt: "Swan" },
  { id: 19, src: logo19, alt: "Hettich" },
  { id: 26, src: logo26, alt: "Kserve" },
  { id: 43, src: logo43, alt: "Seven Hats Consulting" },
  { id: 10, src: logo10, alt: "Cult" },
  { id: 36, src: logo36, alt: "Quint Consulting Services" },
  { id: 14, src: logo14, alt: "Fitness World" },
  { id: 50, src: logo50, alt: "The Drip Bar" },
  { id: 24, src: logo24, alt: "Kalayatan Cargo" },
  { id: 41, src: logo41, alt: "Rolliflex" },
  { id: 2, src: logo2, alt: "Abnd Logo" },
  { id: 47, src: logo47, alt: "Stonestry" },
  { id: 33, src: logo33, alt: "Promom Direct" },
  { id: 18, src: logo18, alt: "HEPO India" },
  { id: 53, src: logo53, alt: "VAMS" },
  { id: 9, src: logo9, alt: "Cocoon Fine Rugs" },
  { id: 29, src: logo29, alt: "Neptunus" },
  { id: 38, src: logo38, alt: "River Comics" },
  { id: 44, src: logo44, alt: "Sir HN Hospital Trust" },
  { id: 5, src: logo5, alt: "Ashtech India" },
  { id: 49, src: logo49, alt: "Tal Success" },
  { id: 13, src: logo13, alt: "Feriadoss and More" },
  { id: 40, src: logo40, alt: "Rolliflex Cables" },
  { id: 20, src: logo20, alt: "HOD" },
  { id: 32, src: logo32, alt: "Precision Electricals" },
  { id: 27, src: logo27, alt: "Lloyds" },
  { id: 1, src: logo1, alt: "A C Pharma Specialities LLP" },
  { id: 52, src: logo52, alt: "Unitec Fibers" },
  { id: 37, src: logo37, alt: "Rexseal" },
  { id: 16, src: logo16, alt: "Great Escape" },
  { id: 46, src: logo46, alt: "Stone Shippers Limited" },
  { id: 11, src: logo11, alt: "Digi Suraksha" },
  { id: 25, src: logo25, alt: "Kapadia" },
  { id: 34, src: logo34, alt: "Q Devices" },
  { id: 7, src: logo7, alt: "Bayy Cosmetics" },
  { id: 30, src: logo30, alt: "Nexdigm" },
  { id: 23, src: logo23, alt: "Insta Curry Cups" },
  { id: 4, src: logo4, alt: "Amigo Academy" },
  { id: 21, src: logo21, alt: "Host My Trips" },
]
  // Determine which logos to show based on page
  const logos = isWorkPage ? allLogos : allLogos.slice(0, 20)

  return (
    <section className="relative mx-auto w-full pt-14 max-w-[1920px] xl:pb-[100px] xl:pt-[10px] max-md:pt-0.5">
      <div className="container px-4 mx-auto">
        <div className="container">
          <div className="mb-8 text-center">
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto max-w-[770px]">TRUSTED BY BUSINESSES <i className="font-instrument">across industries</i></h2>
            </TextAppearAnimation>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="w-full">
          {/* Desktop Grid */}
          <div className={`hidden md:grid gap-4 lg:gap-6 ${isWorkPage ? 'md:grid-cols-5' : 'md:grid-cols-5'}`}>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-3 lg:p-4 bg-white  transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <div className="relative w-24 h-16 lg:w-28 lg:h-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 112px) 100vw, 112px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-3">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-2 bg-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <div className="relative w-20 h-14">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button - Only show on home page */}
        {!isWorkPage && (
          <div className="flex justify-center mt-10 md:mt-12">
            <Link href="/work" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>See More Clients</span>
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
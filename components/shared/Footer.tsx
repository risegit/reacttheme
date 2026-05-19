import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'

const Footer = () => {
  const addressLines = [
    "Vastu Prestige, 203-B & C, 2nd Floor,",
    "New Link Road, Above Tanishq Showroom,",
    "Andheri (W), Mumbai,",
    "Maharashtra 400053"
  ]

  return (
    <FooterProvider>
      <div className="container pt-26 pb-8 lg:pt-0 lg:pb-0">
        <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo + tagline column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                className="h-auto w-[120px] object-contain"
                src={logo}
                alt="logo"
                width={120}
                height={48}
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              We craft digital experiences that drive growth — from SEO to full-funnel marketing.
            </p>

            {/* CTA card */}
            <Link
              href="/contact"
              className="group flex w-fit items-center gap-3 border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white">Free Strategy Call</p>
                <p className="text-xs text-white/40">1 spot left this month</p>
              </div>
              <figure className="relative ml-2 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-primary">
                <Image
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-4 group-hover:opacity-0"
                />
                <Image
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className="absolute h-4 w-4 -translate-x-4 translate-y-8 opacity-0 transition-all duration-500 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100"
                />
              </figure>
            </Link>
          </div>

          {/* Dynamic nav sections */}
          {footerData.map((section, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-6 font-satoshi text-[11px] font-bold uppercase tracking-[3px] text-white/40">
                {section.title}
              </h5>
              <ul className="space-y-3">
                {section.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center gap-2 text-xl text-white/70 transition-all duration-200 hover:text-primary"
                    >
                      <span className="inline-block h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address column */}
          <div>
            <h5 className="mb-6 font-satoshi text-[11px] font-bold uppercase tracking-[3px] text-white/40">
              Our Address
            </h5>
            <address className="not-italic">
              {addressLines.map((line, idx) => (
                <p key={idx} className="mb-1.5 text-xl leading-relaxed text-white/70">
                  {line}
                </p>
              ))}
            </address>
            <a
              href="https://maps.google.com/?q=Vastu+Prestige+Andheri+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-primary/70 transition-colors hover:text-primary"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View on Map
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row pt-2">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-white/30 transition-colors hover:text-white/60">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-white/30 transition-colors hover:text-white/60">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </FooterProvider>
  )
}

export default Footer
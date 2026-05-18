'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const FooterProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()

  if (pathName === '/password') return null
  if (pathName === '/not-found') return null
  return (
    <footer className="relative bottom-0 w-full overflow-hidden bg-black pb-24 pt-20 sm:pt-14 md:pt-6 lg:fixed lg:-z-10 lg:pb-8">
      {children}
    </footer>
  )
}

export default FooterProvider

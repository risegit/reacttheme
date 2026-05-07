import ContactForm from '@/components/shared/ContactForm'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface CTAProps {
  children: ReactNode
  showContactForm?: boolean
  headingClass?: string
  buttonText?: string
}

const CTA: FC<CTAProps> = ({ children, showContactForm = false,  headingClass = '', buttonText = 'Start a Conversation' }) => {
  return (
    <section className="relative pb-[70px] pt-14 md:pt-16 lg:pb-[140px] lg:pt-[88px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper>
          <h4
            className={cn(
              'text-center font-normal xl:text-[96px] xl:leading-[1.1] xl:tracking-[-2.88px]',
              headingClass,
            )}>
            {children}
          </h4>
        </RevealWrapper>
        <RevealWrapper as="ul" className="mt-14 flex list-none items-center justify-center">
        <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span className='text-white'>Start a Conversation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Start a Conversation</span>
              </div>
            </Link>
        </RevealWrapper>
        {showContactForm && <ContactForm />}
      </div>
    </section>
  )
}

export default CTA

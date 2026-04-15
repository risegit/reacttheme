'use client'
import { useState } from 'react'
import Careerform from '@/components/career-form/page'

const jobRoles = [
    'SEO Specialists',
    'Performance marketing specialists',
    'Social media marketers',
    'Content writers',
    'Designers and visual creatives',
    'Developers',
    'Marketing strategists',
]

export default function CareerSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <h2 className="mb-6 mt-5 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 sm:mt-10 md:mb-10 lg:py-10 xl:leading-[1.1]">
                Areas We Usually Hire<i className="font-instrument"> for</i>
            </h2>
            {/* GRID */}
            <p className="md:max-w-[670px] mb-5">
                <strong>Our team works across different parts of digital marketing:</strong>
            </p>
            <p className='mt-6 mb-5'>Typical roles include:</p>
            <div className="grid lg:grid-cols-2 gap-10 items-start">

                {/* LEFT → ACCORDION */}
                <div className="border rounded-lg overflow-hidden">
                    {jobRoles.map((role, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div key={index} className="border-b last:border-none">

                                {/* HEADER */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-100 transition"
                                >
                                    <span className="text-sm md:text-base font-medium text-gray-800 capitalize">
                                        {role}
                                    </span>

                                    <span className="text-xl text-gray-500">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {/* CONTENT */}
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 px-5 pb-4' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-600 text-sm">
                                        This role involves working on real business problems,
                                        collaborating with teams, and continuously learning new tools.
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* RIGHT → FORM */}
                <div className="border rounded-xl shadow-sm p-4 md:p-6">

                    {/* Slightly compact form */}
                    <div className="[&_.container]:!px-0 [&_.container]:!max-w-full">
                        <Careerform />
                    </div>

                </div>
                
            </div>
        </section>
    )
}
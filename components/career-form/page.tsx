'use client'
import React, { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    subject: '',
    message: '',
    resume:'',
  })

  const [selectedFile, setSelectedFile] = useState('')
  
    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      setSelectedFile(file ? `Selected file: ${file.name}` : '')
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert(`${formData.name} Your Data Has Been Submited`)
    // Add your form submission logic here (e.g., API call)
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[20px]">
      <div className="container">
        <RevealWrapper
          as="form"
          onSubmit={handleSubmit}
          className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2">
          <div className="md:col-span-full">
            <label
              htmlFor="name"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Phone 
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="service"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Subject
            </label>
             <input
              type="text"
              id="subject"
              name="email"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Position you are applying for"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          <div className="w-full">
              <label
                htmlFor="resume"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Resume*
              </label>
              <div className="mt-3 border border-secondary/10 p-3 dark:border-dark">
                <div className="flex items-center justify-space-between">
                  <div className="mx-auto flex flex-wrap items-center gap-6">
                    <label className="relative cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.png,.jpg"
                        onChange={handleFileChange}
                      />
                      <figure className="inline-flex gap-2 rounded-full border border-secondary/30 px-2 py-1 text-base text-secondary/70 transition-colors hover:bg-gray-100 dark:border-backgroundBody/30 dark:bg-dark/10 dark:text-backgroundBody/70 dark:hover:bg-dark-300 md:px-6 md:py-1">
                        <img
                          src="/images/icons/file-upload.svg"
                          className="left-0 inline-flex dark:hidden"
                          alt="drag&drop"
                        />
                        <img
                          src="/images/icons/file-upload-dark.svg"
                          className="left-0 hidden dark:inline"
                          alt="drag&drop"
                        />
                        <span> Upload File </span>
                      </figure>
                    </label>
                    <h3 className="mb-2 text-[13px] leading-7 tracking-[0.4px] text-secondary/70 dark:text-backgroundBody/70">
                      Or drag and drop here
                    </h3>
                  </div>
                </div>
                <div>{selectedFile}</div>
              </div>
            </div>

          <div className="md:col-span-full">
            <label
              htmlFor="message"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Comment
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=""
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required></textarea>
          </div>

          <div className="col-span-full sm:mt-5 md:mx-auto">
            <button type="submit" className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
              <div className="rv-button-top"> 
                <span>Send Message</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Send Message</span>
              </div>
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactForm

'use client'
import React, { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const serviceOptions = [
    "Seo Services",
    "Digital PR & Authority Building",
    "Content Writing",
    "Performance Marketing",
    "Social Media Marketing",
    "Lead Generation Systems",
    "Conversion Rate Optimisation (CRO)",
    "Digital Marketing Strategy & Audits",
    "Email Marketing",
    "Website Design & Development",
    "Marketing Analytics & Tracking",
    "Graphic Design & Marketing Collaterals"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service)
      if (isSelected) {
        return { ...prev, services: prev.services.filter(s => s !== service) }
      } else {
        return { ...prev, services: [...prev.services, service] }
      }
    })
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully ✅");

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        services: [],
        message: "",
      });

    } else {
      alert("Failed to send message ❌");
      console.error(data);
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong ❌");
  }
};

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper
          as="form"
          onSubmit={handleSubmit}
          className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2">

          {/* Full Name - Full Width */}
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
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
            />
          </div>

          {/* Work Email */}
          <div>
            <label
              htmlFor="email"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          {/* Service Type - Custom Dropdown with Checkboxes - Full Width */}
          <div>
            <label
              htmlFor="service"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Service Type*
            </label>

            {/* Custom Dropdown Trigger */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="mt-3 w-full cursor-pointer border bg-backgroundBody py-4 px-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark flex justify-between items-center"
            >
              <span className={formData.services.length === 0 ? "text-gray-400" : ""}>
                {formData.services.length === 0
                  ? "Select services"
                  : `${formData.services.length} service${formData.services.length > 1 ? 's' : ''} selected`}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Custom Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 z-50 mt-1 max-h-80 overflow-auto border bg-backgroundBody dark:border-dark dark:bg-dark shadow-lg">
                <div className="py-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-3 text-lg leading-[1.4] tracking-[0.4px] text-colorText dark:text-dark-100">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Services Tags (Optional - Shows what's selected) */}
            {formData.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className="ml-1 hover:text-primary-dark"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Number */}
          <div>
            <label
              htmlFor="email"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Phone No
            </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              id="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter mobile number"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          {/* Project Brief - Full Width */}
          <div className="md:col-span-full">
            <label
              htmlFor="message"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Project Brief*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project goals and timeline"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-full sm:mt-14 md:mx-auto">
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
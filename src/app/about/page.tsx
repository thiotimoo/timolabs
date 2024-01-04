import AboutSection from '@/components/Section/AboutSection'
import TechStackSection from '@/components/Section/TechStack'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex max-w-screen-md flex-col w-full divide-y divide-adaptive">
        <AboutSection/>
        <TechStackSection/>
    </main>
  )
}

export default AboutPage
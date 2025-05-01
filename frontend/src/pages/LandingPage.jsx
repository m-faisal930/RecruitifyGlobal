import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import JobSearchFilters from '../components/JobSearchFilters'
import JobCard from '../components/JobCard'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ViewmoreButton from '../components/ViewmoreButton'
import FeaturedJobsSection from '../components/FeaturedJobsSection'
import HowItWorksSection from '../components/HowItWorksSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/Services'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import TechStacks from '../components/TechStacks'

export default function LandingPage() {
    const job =           {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechSolutions Inc.",
            location: "Lahore, Pakistan",
            type: "Full-time",
            salary: "150k - 200k",
            postedDate: "2 days ago",
            skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
          }
  return (
    <div>
      <Navbar />
      <div className='mt-10'>

      <HeroSection />
      </div>


      <div className="">
        {/* Job listings grid */}
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <Team />
        <Testimonial />
        {/* <TechStacks /> */}
          {/* <HowItWorksSection /> */}
          <ContactSection />

      </div>
      <Footer />
    </div>
  );
}

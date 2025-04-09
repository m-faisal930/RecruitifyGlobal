import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import JobSearchFilters from '../components/JobSearchFilters'
import JobCard from '../components/JobCard'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ViewmoreButton from '../components/ViewmoreButton'

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
      <HeroSection />
      <JobSearchFilters />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 mx-7">
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
      </div>
      <div className="flex justify-center mt-6">
        <ViewmoreButton />
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Job listings grid */}
        <AboutSection />
        <div className="bg-white">
          {/* <AboutSection /> */}
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

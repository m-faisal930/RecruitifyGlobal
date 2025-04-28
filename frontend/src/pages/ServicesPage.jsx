import React from 'react'
import PageHero from '../components/PageHero'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />
      <ServicesSection />
      <Footer />
    </div>
  );
}

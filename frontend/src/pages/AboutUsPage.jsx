// import {
//   FaUsers,
//   FaChartLine,
//   FaHandshake,
//   FaMapMarkerAlt,
//   FaLightbulb,
// } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import PageHero from '../components/PageHero';
// import StatsSection from '../components/StatsSection';
// import Team from '../components/Team';

// const AboutUsPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-white">
//         {/* Hero Section */}
//         <PageHero
//           breadcrumbs={[
//             { label: 'Home', href: '/' },
//             { label: 'About', href: '/about' },
//           ]}
//         />

//         {/* Stats Section */}
//         <StatsSection />

//         {/* Team Section */}
//         <Team />

//         {/* Our Story */}
//         <section className="py-16">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="grid gap-12 md:grid-cols-2 md:items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
//                 <div className="mt-6 space-y-4 text-gray-600">
//                   <p>
//                     In the heart of a bustling city, amidst a world shifting
//                     towards digital transformation, a passionate HR professional
//                     named Jawad Hussain decided it was time to change the game.
//                   </p>
//                   <p>
//                     After nearly a decade of experience in Executive Search for
//                     multiple sectors including IT, Tech Startups, Oil & Gas,
//                     FMCG, MNCs, Education, Recruitment Agencies both local and
//                     International he had seen the gaps, the rushed hires, the
//                     impersonal candidate experiences, and the companies
//                     struggling to find the right talent.
//                   </p>
//                   <p>
//                     So, with courage in her heart and a vision in his mind, in
//                     2025 he founded Recruitify Global — Your strategic
//                     headhunting partner.
//                   </p>
//                 </div>
//               </div>
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                   alt="Our team working together"
//                   className="w-full h-auto object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Values */}
//         <section className="py-16 bg-gray-50">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold text-gray-900">
//                 Our Mission & Values
//               </h2>
//               <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//                 What drives us every day to serve Pakistan's job market better
//               </p>
//             </div>


//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AboutUsPage;






















// src/pages/AboutUsPage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaSearch,
} from 'react-icons/fa'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import StatsSection from '../components/StatsSection'
import Team from '../components/Team'
import Footer from '../components/Footer'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
}

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <Team />

      {/* Under Our Team */}
      <motion.section
        className="py-12 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={fadeInUp}
          custom={0}
        >
          <p className="text-gray-700 italic">
            Recruitify Global staff and advisors consist of the following principal team members.
          </p>
        </motion.div>
        <motion.div
          className="mt-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-600"
          variants={fadeInUp}
          custom={1}
        >
          <strong className="block mb-2 text-gray-800">
            Jawad Hussain
          </strong>
          <p>
            A Bahria University graduate, Certified HR Professional & Global Recruiter with 10 years’ 
            expertise in Diversity, Equity & Inclusion, Talent Acquisition across IT, Startups, Oil & Gas, 
            FMCG, MNCs, Education & Agencies. He leads program strategy & operations at Recruitify Global.
          </p>
        </motion.div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} custom={0}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 underline decoration-buttons/50">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  In the heart of a bustling city… a passionate HR expert, Jawad Hussain, decided it was time to change the game.
                </p>
                <p>
                  After nearly a decade in executive search across multiple sectors, he witnessed rushed hires and impersonal experiences.
                </p>
                <p>
                  In 2025 he founded Recruitify Global — your strategic headhunting partner.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              custom={1}
              className="transform hover:-rotate-3 transition-transform duration-500"
            >
              <img
                className="w-full rounded-xl shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our team working together"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Search Mythology */}
      <motion.section
        className="py-16 bg-gradient-to-r from-buttons/10 to-highlight/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* subtle skew bar */}
        <div className="absolute inset-0 -skew-y-2 bg-buttons/5"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
            custom={0}
          >
            <FaSearch className="inline-block mr-2 text-buttons" />
            Search Mythology
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={fadeInUp}
            custom={1}
          >
            We search “live” for candidates by leveraging our experts’ headhunting & industry-specific consulting—
            ensuring deep sector, function, seniority & complexity alignment.
          </motion.p>
        </div>
      </motion.section>

      {/* Vision / Mission / Values */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 relative inline-block">
            <span className="absolute -bottom-1 left-1/2 w-24 h-1 bg-buttons transform -translate-x-1/2 text-center"></span>
            Vision, Mission & Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FaLightbulb,
                title: 'Our Vision',
                text: `To become a globally recognized recruitment partner known for transforming hiring into a strategic, people-first process.`,
              },
              {
                icon: FaChartLine,
                title: 'Our Mission',
                text: `To connect great companies with exceptional talent through strategic headhunting, data-driven recruitment & cultural alignment.`,
              },
              {
                icon: FaHandshake,
                title: 'Our Core Values',
                text: `Integrity, transparency & empathy guide us as we understand both companies’ needs and candidates’ goals.`,
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                className="bg-lightdiv p-6 rounded-2xl text-center hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                custom={i}
              >
                <Icon className="w-10 h-10 mx-auto text-buttons mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  )
}

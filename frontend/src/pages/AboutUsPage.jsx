import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaMapMarkerAlt,
  FaLightbulb,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import StatsSection from '../components/StatsSection';
import Team from '../components/Team';

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ]}
        />

        {/* Stats Section */}
        <StatsSection />

        {/* Team Section */}
        <Team />

        {/* Our Story */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    Founded in 2023 in Lahore, JobPortal began with a simple
                    mission: to revolutionize how Pakistanis find employment and
                    how employers discover talent.
                  </p>
                  <p>
                    What started as a small team of HR professionals and
                    technologists has grown into Pakistan's fastest-growing job
                    platform, serving thousands of job seekers and hundreds of
                    companies nationwide.
                  </p>
                  <p>
                    Today, we're proud to have facilitated over 25,000
                    successful hires across all major industries, from tech
                    startups to multinational corporations.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our team working together"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                What drives us every day to serve Pakistan's job market better
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaUsers className="h-8 w-8 text-blue-600" />,
                  title: 'Empowering Job Seekers',
                  description:
                    'We provide tools and resources to help candidates showcase their skills and find meaningful work.',
                },
                {
                  icon: <FaChartLine className="h-8 w-8 text-blue-600" />,
                  title: 'Data-Driven Matching',
                  description:
                    'Our smart algorithms connect the right candidates with the right opportunities.',
                },
                {
                  icon: <FaHandshake className="h-8 w-8 text-blue-600" />,
                  title: 'Employer Partnerships',
                  description:
                    'We work closely with companies to understand their hiring needs and culture.',
                },
                {
                  icon: <FaLightbulb className="h-8 w-8 text-blue-600" />,
                  title: 'Innovation',
                  description:
                    'Constantly improving our platform with new features based on user feedback.',
                },
                {
                  icon: <FaMapMarkerAlt className="h-8 w-8 text-blue-600" />,
                  title: 'Local Focus',
                  description:
                    "Tailored solutions for Pakistan's unique job market challenges.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to join Pakistan's leading job platform?
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/jobs"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Browse Jobs
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;

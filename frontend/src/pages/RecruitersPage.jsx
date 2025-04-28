import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Testimonial from '../components/Testimonial';
import { registerRecruiter } from '../services/api'; // Adjust the import path as necessary

export default function RecruitersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companyWebsite: '',
    industry: '',
    hiringNeeds: '',
    companySize: '',

    termsAgreed: false,
  });
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // In your RecruitersPage component
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        console.log('Form Data:', formData); // Log the form data for debugging
      const response = await registerRecruiter(formData);
      console.log('Registration successful:', response);

      // Show success message
      alert(
        'Registration submitted successfully! We will contact you shortly.'
      );

      // Close modal and reset form
      setIsFormOpen(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        companyWebsite: '',
        industry: '',
        hiringNeeds: '',
        companySize: '',
        termsAgreed: false,
      });
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || 'Registration failed. Please try again.');
    }
    {
      error && (
        <div className="text-red-500 mb-4 p-2 bg-red-50 rounded">{error}</div>
      );
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Recruiter Registration Data:', formData);
  //     alert('Registration submitted successfully! We will contact you shortly.');
  //     setIsFormOpen(false);
  //     // Reset form
  //     setFormData({
  //       companyName: '',
  //       contactPerson: '',
  //       email: '',
  //       phone: '',
  //       companyWebsite: '',
  //       industry: '',
  //       hiringNeeds: '',
  //       companySize: '',

  //       termsAgreed: false
  //     });
  //   };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Recruiters', href: '/recruiters' },
          ]}
        />

        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          {/* Benefits Section */}
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Partner With Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Access Top Talent',
                  desc: 'Connect with qualified candidates actively seeking new opportunities',
                  icon: '👥',
                },
                {
                  title: 'Streamlined Process',
                  desc: 'Our platform simplifies recruitment with powerful tools',
                  icon: '⚡',
                },
                {
                  title: 'Cost Effective',
                  desc: 'Reduce hiring costs with our competitive pricing',
                  icon: '💰',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={item}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Your Next Star Employee?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who have successfully hired through our
              platform.
            </p>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={item} className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              What Our Partners Say
            </h3>
            {/* <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We reduced our time-to-hire by 40% using this platform. The quality of candidates is outstanding.",
                name: "Sarah Johnson",
                company: "Tech Innovations Inc."
              },
              {
                quote: "The recruitment process has never been easier. We've filled 15 positions in just 3 months.",
                name: "Michael Chen",
                company: "Global Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -3 }}
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </motion.div>
            ))}
          </div> */}
            <Testimonial />
          </motion.div>
        </motion.section>

        {/* Registration Modal */}
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Recruiter Registration
                  </h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Industry</option>
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Retail">Retail</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hiring Needs *
                      </label>
                      <select
                        name="hiringNeeds"
                        value={formData.hiringNeeds}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Hiring Needs</option>
                        <option value="1-5 positions">1-5 positions</option>
                        <option value="6-10 positions">6-10 positions</option>
                        <option value="11-20 positions">11-20 positions</option>
                        <option value="20+ positions">20+ positions</option>
                        <option value="Ongoing recruitment">
                          Ongoing recruitment
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Company Size</option>
                        <option value="1-10 employees">1-10 employees</option>
                        <option value="11-50 employees">11-50 employees</option>
                        <option value="51-200 employees">
                          51-200 employees
                        </option>
                        <option value="201-500 employees">
                          201-500 employees
                        </option>
                        <option value="501-1000 employees">
                          501-1000 employees
                        </option>
                        <option value="1000+ employees">1000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="termsAgreed"
                        type="checkbox"
                        checked={formData.termsAgreed}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-medium text-gray-700"
                      >
                        I agree to the{' '}
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:from-blue-700 hover:to-blue-600 transition-all"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Complete Registration
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
        <Footer />
      </div>
    </>
  );
}
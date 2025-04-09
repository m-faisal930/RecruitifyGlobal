import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
    <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team - we're here to help with any questions
              about our job portal.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Contact Card - Phone */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <FaPhone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Phone Support
                </h3>
                <p className="mt-2 text-gray-600">
                  Call us directly for immediate assistance
                </p>
                <div className="mt-4">
                  <a
                    href="tel:+923001234567"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    +92 300 1234567
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri, 9am-5pm PST
                  </p>
                </div>
              </div>

              {/* Contact Card - Email */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-2 text-gray-600">
                  Send us an email and we'll respond within 24 hours
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:support@jobportal.pk"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    support@jobportal.pk
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    General inquiries
                  </p>
                </div>
              </div>

              {/* Contact Card - Location */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Visit Us
                </h3>
                <p className="mt-2 text-gray-600">
                  Our office is open for scheduled meetings
                </p>
                <div className="mt-4">
                  <p className="text-gray-700">Office #42, DHA Phase 5</p>
                  <p className="text-gray-700">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Other ways to connect
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                      <FaWhatsapp className="text-green-500 h-6 w-6" />
                      WhatsApp Support
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Chat with our support team directly
                    </p>
                    <a
                      href="https://wa.me/923001234567"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +92 300 1234567
                    </a>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                      <FaTelegram className="text-blue-400 h-6 w-6" />
                      Telegram Channel
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Join our Telegram for job alerts and updates
                    </p>
                    <a
                      href="https://t.me/jobportalpk"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @jobportalpk
                    </a>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Monday-Friday:</span> 9:00
                        AM - 6:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Saturday:</span> 10:00 AM
                        - 4:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Location
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.12646498271!2d74.358744!3d31.483576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

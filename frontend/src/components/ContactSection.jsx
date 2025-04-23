// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useState } from 'react';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section id='contact' className="py-16 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Get In Touch
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Have questions or need assistance? Reach out to our team - we're
//             here to help!
//           </p>
//         </div>

//         <div className="grid gap-12 md:grid-cols-2">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
//                   <Mail className="h-6 w-6" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
//                 <p className="mt-1 text-gray-600">support@jobportal.pk</p>
//                 <p className="mt-1 text-gray-600">info@jobportal.pk</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
//                   <Phone className="h-6 w-6" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
//                 <p className="mt-1 text-gray-600">+92 300 1234567</p>
//                 <p className="mt-1 text-gray-600">Mon-Fri, 9am-5pm PST</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
//                   <MapPin className="h-6 w-6" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
//                 <p className="mt-1 text-gray-600">Office #42, DHA Phase 5</p>
//                 <p className="mt-1 text-gray-600">Lahore, Pakistan</p>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.12646498271!2d74.358744!3d31.483576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 className="rounded-lg shadow-sm"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 ></textarea>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

























// src/components/ContactSection.jsx
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="bg-light py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-work text-3xl sm:text-4xl font-bold text-dark">
            Get In <span className="text-buttons">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team—we’re here
            to help!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                label: 'Email Us',
                lines: ['support@recruitifyglobal.com', 'info@recruitifyglobal.com'],
              },
              {
                icon: Phone,
                label: 'Call Us',
                lines: ['+1 (555) 123-4567', 'Mon-Fri, 9am-5pm CST'],
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                lines: ['123 Main Street, Suite 100', 'Austin, TX, USA'],
              },
            ].map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightdiv text-buttons transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-work font-semibold text-dark">
                    {label}
                  </h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.12646498271!2d74.358744!3d31.483576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Full Name', type: 'text', value: formData.name },
                { id: 'email', label: 'Email Address', type: 'email', value: formData.email },
              ].map(({ id, label, type, value }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required
                    className="mt-1 block w-full rounded-xl border border-lightdiv bg-light p-3 text-gray-900 shadow-sm focus:border-buttons focus:ring-buttons transition-colors"
                    value={value}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, [id]: e.target.value }))
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-xl border border-lightdiv bg-light p-3 text-gray-900 shadow-sm focus:border-buttons focus:ring-buttons transition-colors"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-buttons px-6 py-3 text-base font-work font-medium text-white shadow transition-transform duration-200 hover:scale-105 hover:bg-[#0041A8]"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

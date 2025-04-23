// import { Users, Rocket, Handshake } from 'lucide-react';

// const AboutSection = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 md:grid-cols-2">
//           {/* Left Column - Image */}
//           <div className="flex items-center justify-center">
//             <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 md:h-80">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Users className="h-32 w-32 text-blue-600 opacity-20" />
//               </div>
//               <div className="relative flex h-full items-center justify-center p-8">
//                 <div className="text-center">
//                   <Rocket className="mx-auto h-12 w-12 text-blue-600" />
//                   <h3 className="mt-4 text-2xl font-bold text-gray-900">
//                     500+ Jobs Posted
//                   </h3>
//                   <p className="mt-2 text-gray-600">
//                     Connecting talent with opportunities across Pakistan
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//               About Our Job Portal
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               We're dedicated to revolutionizing the job search experience in
//               Pakistan. Our platform connects talented professionals with top
//               employers across major industries, making the hiring process
//               seamless and efficient.
//             </p>

//             <div className="mt-8 grid grid-cols-2 gap-4">
//               {[
//                 {
//                   icon: <Handshake className="h-6 w-6 text-blue-600" />,
//                   title: 'Trusted Platform',
//                   desc: 'Verified employers and authentic listings',
//                 },
//                 {
//                   icon: <Rocket className="h-6 w-6 text-blue-600" />,
//                   title: 'Fast Results',
//                   desc: '85% of applicants hear back within a week',
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900">
//                         {item.title}
//                       </h4>
//                       <p className="text-sm text-gray-600">{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8">
//               <a
//                 href="/about"
//                 className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-blue-700"
//               >
//                 Learn more about us
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="ml-2 h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;













// src/components/AboutSection.jsx
import React from 'react'
import aboutImage from '../assets/WbQnbas.png';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="bg-light py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-2/3">
          <span className="inline-block text-xs uppercase font-work font-medium text-buttons border-b-2 border-buttons pb-1">
            About us
          </span>
          <h2 className="font-work text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            About <span className="text-buttons">Recruitify Global</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Recruitify Global is on a mission to make your next career move
            effortless. We connect top talent with their dream roles through our
            streamlined platform, personalized recommendations, and expert
            support.
          </p>
          <p className="text-gray-700">
            Whether you’re seeking a full-time position, contract work, or an
            internship, our intuitive interface and powerful search make finding
            the perfect opportunity faster than ever.
          </p>
          <Link
            to={'/about'}
            class="relative inline-block px-4 py-2 font-medium group mt-2"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white">
              Want To Know More?
            </span>
          </Link>
        </div>

        {/* Illustration */}
        <div className="md:w-1/3">
          <img
            src={aboutImage}
            alt="About Recruitify Global"
            className="w-full rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

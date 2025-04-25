// // src/components/PageHero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';

// /**
//  * @param {{ breadcrumbs: { label: string, href: string }[] }} props
//  */
// export default function PageHero({ breadcrumbs }) {
//   return (
//     <section id="page-hero" className="relative bg-light py-5 overflow-hidden">
//       {/* Animated gradient blobs */}
//       <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/3 bg-buttons/30 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-dark/20 rounded-full blur-3xl animate-pulse delay-500" />

//       <div className="relative z-10 flex justify-center">
//         <nav className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 space-x-2">
//           {breadcrumbs.map((crumb, idx) => {
//             const isLast = idx === breadcrumbs.length - 1;
//             return (
//               <React.Fragment key={crumb.href}>
//                 {isLast ? (
//                   <span className="bg-buttons text-light font-work text-sm px-4 py-1 rounded-full">
//                     {crumb.label}
//                   </span>
//                 ) : (
//                   <Link
//                     to={crumb.href}
//                     className="text-dark font-work text-sm hover:text-buttons transition-colors"
//                   >
//                     {crumb.label}
//                   </Link>
//                 )}
//                 {!isLast && (
//                   <ChevronRight className="w-4 h-4 text-dark opacity-70" />
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </nav>
//       </div>
//     </section>
//   );
// }






// src/components/PageHero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronRight, Briefcase, MapPin, Calendar, Users } from 'lucide-react';

// /**
//  * @param {{ breadcrumbs: { label: string, href: string }[] }} props
//  */
// export default function PageHero({ breadcrumbs }) {
//   return (
//     //  <section id="page-hero" className="relative bg-light py-10 overflow-hidden">
//     //   {/* Animated gradient blobs - simplified for testing */}
//     //   <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-buttons to-highlight rounded-full opacity-30 blur-3xl animate-blob" />
//     //   <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-highlight to-buttons rounded-full opacity-30 blur-3xl animate-blob animate-delay-[2000ms]" />

//     //   {/* Test with basic animations first */}
//     //   <Briefcase className="absolute top-16 left-16 w-12 h-12 text-buttons opacity-60 animate-spin animate-duration-[20s]" />
//     //   <MapPin className="absolute top-28 right-20 w-16 h-16 text-highlight opacity-50 animate-pulse animate-duration-[4s]" />

//     //       <div className="relative z-10 flex justify-center">
//     //         <nav className="inline-flex items-center bg-white/30 backdrop-blur-lg rounded-full px-8 py-3 space-x-3">
//     //           {breadcrumbs.map((crumb, idx) => {
//     //             const isLast = idx === breadcrumbs.length - 1;
//     //             return (
//     //               <React.Fragment key={crumb.href}>
//     //                 {isLast ? (
//     //                   <span className="bg-buttons text-light font-work text-sm px-4 py-1 rounded-full">
//     //                     {crumb.label}
//     //                   </span>
//     //                 ) : (
//     //                   <Link
//     //                     to={crumb.href}
//     //                     className="text-dark font-work text-sm hover:text-buttons transition-colors"
//     //                   >
//     //                     {crumb.label}
//     //                   </Link>
//     //                 )}
//     //                 {!isLast && (
//     //                   <ChevronRight className="w-4 h-4 text-dark opacity-70" />
//     //                 )}
//     //               </React.Fragment>
//     //             );
//     //           })}
//     //         </nav>
//     //       </div>
//     //     </section>

//     <section id="page-hero" className="relative bg-light py-10 overflow-hidden">
//       {/* Animated gradient blobs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-buttons to-highlight rounded-full opacity-30 blur-3xl animate-blob" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-highlight to-buttons rounded-full opacity-30 blur-3xl animate-blob-delay-2" />
//       <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-bl from-dark to-light rounded-full opacity-20 blur-2xl animate-blob-delay-4" />

//       {/* Colorful icon accents */}
//       <Briefcase className="absolute top-16 left-16 w-12 h-12 text-buttons opacity-60 animate-spin-slow" />
//       <MapPin className="absolute top-28 right-20 w-16 h-16 text-highlight opacity-50 animate-pulse-slow" />
//       <Calendar className="absolute bottom-24 left-32 w-14 h-14 text-buttons opacity-50 animate-spin-slow" />
//       <Users className="absolute bottom-10 right-10 w-20 h-20 text-highlight opacity-40 animate-pulse-delay-3" />

//       {/* Rest of your component remains the same */}
//       <div className="relative z-10 flex justify-center">
//         <nav className="inline-flex items-center bg-white/30 backdrop-blur-lg rounded-full px-8 py-3 space-x-3">
//           {breadcrumbs.map((crumb, idx) => {
//             const isLast = idx === breadcrumbs.length - 1;
//             return (
//               <React.Fragment key={crumb.href}>
//                 {isLast ? (
//                   <span className="bg-buttons text-light font-work text-sm px-4 py-1 rounded-full">
//                     {crumb.label}
//                   </span>
//                 ) : (
//                   <Link
//                     to={crumb.href}
//                     className="text-dark font-work text-sm hover:text-buttons transition-colors"
//                   >
//                     {crumb.label}
//                   </Link>
//                 )}
//                 {!isLast && (
//                   <ChevronRight className="w-4 h-4 text-dark opacity-70" />
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </nav>
//       </div>
//     </section>
//   );
// }























// src/components/PageHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, MapPin, Calendar, Users } from 'lucide-react';

/**
 * @param {{ breadcrumbs: { label: string, href: string }[] }} props
 */
export default function PageHero({ breadcrumbs }) {
  return (
    <section id="page-hero" className="relative bg-light py-10 overflow-hidden">
      {/* ...animated blobs & icons unchanged... */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-buttons to-highlight rounded-full opacity-30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-highlight to-buttons rounded-full opacity-30 blur-3xl animate-blob-delay-2" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-bl from-dark to-light rounded-full opacity-20 blur-2xl animate-blob-delay-4" />

      {/* Colorful icon accents */}
      {/* <Briefcase className="absolute top-16 left-16 w-12 h-12 text-buttons opacity-60 animate-spin-slow" />
      <MapPin className="absolute top-28 right-20 w-16 h-16 text-highlight opacity-50 animate-pulse-slow" />
      <Calendar className="absolute bottom-24 left-32 w-14 h-14 text-buttons opacity-50 animate-spin-slow" />
      <Users className="absolute bottom-10 right-10 w-20 h-20 text-highlight opacity-40 animate-pulse-delay-3" />  */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-buttons to-highlight rounded-full opacity-30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-highlight to-buttons rounded-full opacity-30 blur-3xl animate-blob-delay-2" />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-bl from-dark to-light rounded-full opacity-20 blur-2xl animate-blob-delay-4" />

      {/* Colorful icon accents */}
      <Briefcase className="absolute top-12 left-12 w-8 h-8 text-[#0041A8] opacity-50 animate-spin-slow" />
      <MapPin className="absolute top-24 right-16 w-6 h-6 text-[#5F8DB8] opacity-40 animate-pulse-slow" />
      <Calendar className="absolute bottom-20 left-28 w-8 h-8 text-[#0041A8] opacity-50 animate-spin-slow" />
      <Users className="absolute bottom-8 right-12 w-10 h-10 text-[#5F8DB8] opacity-35 animate-pulse-delay-3" />

      <div className="relative z-10 flex justify-center">
        {/* Flowbite‐style breadcrumb */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {breadcrumbs.map((crumb, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.href} className="inline-flex items-center">
                  {isFirst ? (
                    // First item uses the home icon + link
                    <Link
                      to={crumb.href}
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 "
                    >
                      <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      {crumb.label}
                    </Link>
                  ) : (
                    // Subsequent items with arrow + link/text
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 w-3 h-3 text-gray-600 hover:text-gray-900 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      {isLast ? (
                        <span className="ms-1 text-sm font-medium  md:ms-2 text-gray-600 hover:text-gray-900">
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          to={crumb.href}
                          className="ms-1 text-sm font-medium text-gray-600 hover:text-gray-900 md:ms-2 "
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

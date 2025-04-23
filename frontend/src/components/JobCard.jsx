// // import {
// //   Briefcase,
// //   MapPin,
// //   Clock,
// //   DollarSign,
// //   Bookmark,
// //   Share2,
// // } from 'lucide-react';

// // const JobCard = () => {
// //   return (
// //     <div className="group rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-300">
// //       <div className="flex items-start justify-between">
// //         <div className="flex-1">
// //           {/* Company Logo & Basic Info */}
// //           <div className="flex items-center gap-3">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
// //               <Briefcase className="h-6 w-6 text-blue-600" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
// //                 Senior Frontend Developer
// //               </h3>
// //               <p className="text-gray-600">TechSolutions Inc.</p>
// //             </div>
// //           </div>

// //           {/* Job Details */}
// //           <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
// //             <div className="flex items-center gap-1 text-sm text-gray-600">
// //               <MapPin className="h-4 w-4 text-gray-400" />
// //               <span>Lahore, Pakistan</span>
// //             </div>
// //             <div className="flex items-center gap-1 text-sm text-gray-600">
// //               <Clock className="h-4 w-4 text-gray-400" />
// //               <span>Full-time</span>
// //             </div>
// //             <div className="flex items-center gap-1 text-sm text-gray-600">
// //               {/* <DollarSign className="h-4 w-4 text-gray-400" /> */}
// //               <span>PKR 150k - 200k</span>
// //             </div>
// //           </div>

// //           {/* Skills/Tags */}
// //           <div className="mt-4 flex flex-wrap gap-2">
// //             {['React', 'TypeScript', 'Tailwind CSS', 'Redux'].map((skill) => (
// //               <span
// //                 key={skill}
// //                 className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
// //               >
// //                 {skill}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Save/Share Buttons */}
// //         <div className="flex flex-col gap-2">
// //           <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-600">
// //             <Bookmark className="h-5 w-5" />
// //           </button>
// //           <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-600">
// //             <Share2 className="h-5 w-5" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Footer with Apply Button */}
// //       <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
// //         <p className="text-sm text-gray-500">Posted 2 days ago</p>
// //         <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
// //           Apply Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobCard;





































































// import { Briefcase, MapPin, Clock, Bookmark, Share2 } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const JobCard = ({ job }) => {
//   return (
//     <div className="group h-full flex flex-col rounded-xl border border-gray-200 bg-gray-100 p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-300">
//       <Link to={`/jobs/${job.id}`}>
        
//         <div className="flex flex-1 flex-col">
//           {/* Company Logo & Basic Info */}
//           <div className="flex items-start gap-3">
//             <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
//               <Briefcase className="h-6 w-6 text-blue-600" />
//             </div>
//             <div className="min-w-0">
//               <h3 className="truncate text-lg font-semibold text-gray-900 group-hover:text-blue-600">
//                 {job.title}
//               </h3>
//               <p className="truncate text-gray-600">{job.company}</p>
//             </div>
//           </div>

//           {/* Job Details */}
//           <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400" />
//               <span className="truncate">{job.location}</span>
//             </div>
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
//               <span className="truncate">{job.type}</span>
//             </div>
//             <div className="flex items-center gap-1 text-sm text-gray-600">
//               <span className="truncate">{job.salary}</span>
//             </div>
//           </div>

//           {/* Skills/Tags */}
//           <div className="mt-4 flex flex-wrap gap-2">
//             {job.skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </Link>
      

//       {/* Save/Share Buttons */}
//       <div className="mt-4 flex justify-end gap-2">
//         <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-600">
//           <Bookmark className="h-5 w-5" />
//         </button>
//         <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-600">
//           <Share2 className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Footer with Apply Button */}
//       <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
//         <p className="text-sm text-gray-500">{job.postedDate}</p>
//         <Link to={`/apply/${job.id}`} className="flex-shrink-0">
//           <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 hover:cursor-pointer">
//             Apply Now
//           </button>
//         </Link>
//         {/* <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 hover:cursor-pointer">
//           Apply Now
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default JobCard;



























// src/components/JobCard.jsx
import React from 'react'
import { Clock, Briefcase, DollarSign, Calendar } from 'lucide-react'

/**
 * @typedef Job
 * @property {string} title
 * @property {string} location
 * @property {string} type
 * @property {string} experience
 * @property {string} salary
 * @property {string} postedOn    ISO date string
 * @property {string[]} skills
 * @property {() => void} onView
 */

/**
 * @param {{ job: Job }} props
 */
const JobCard = ({ job }) => {
  const {
    title,
    location,
    type,
    experience,
    salary,
    postedOn,
    skills = [],
    onView,
  } = job

  const daysAgo = Math.max(
    0,
    Math.floor((Date.now() - new Date(postedOn)) / (1000 * 60 * 60 * 24))
  )

  return (
    <div className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
      {/* SKILL TAGS */}
      <div className="px-6 py-4 bg-lightdiv flex flex-wrap gap-2">
        {skills.slice(0, 4).map((skill) => (
          // <span
          //   key={skill}
          //   className="bg-lightdiv text-dark text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors"
          // >
          //   {skill}
          // </span>
          <span className="bg-[#5F8DB8] text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
            {skill}
          </span>
        ))}
      </div>

      <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* TITLE & LOCATION */}
      <div className="px-6 py-4 flex-1 space-y-1">
        <h3 className="text-xl font-semibold text-dark">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>

      {/* DETAILS */}
      <div className="px-6 space-y-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 bg-white text-dark text-sm font-medium px-3 py-1 rounded-full shadow-sm transition-colors group-hover:bg-gray-50">
            <Clock className="w-4 h-4" /> {type}
          </span>
          <span className="inline-flex items-center gap-1 bg-white text-dark text-sm font-medium px-3 py-1 rounded-full shadow-sm transition-colors group-hover:bg-gray-50">
            <Briefcase className="w-4 h-4" /> {experience}
          </span>
          <span className="inline-flex items-center gap-1 bg-white text-dark text-sm font-medium px-3 py-1 rounded-full shadow-sm transition-colors group-hover:bg-gray-50">
            <DollarSign className="w-4 h-4" /> {salary}
          </span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto px-6 py-5 bg-white border-t border-gray-100 flex items-center justify-between transition-colors duration-300 group-hover:bg-gray-50">
        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
          <Calendar className="w-4 h-4" /> {daysAgo} days ago
        </span>
        <button
          onClick={onView}
          className=" px-6 py-2 bg-buttons text-[#0041A8] hover:text-white  text-sm font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#0041A8] transform cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard

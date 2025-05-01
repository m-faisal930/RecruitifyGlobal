
// // src/components/AboutSection.jsx
// import React from 'react'
// import aboutImage from '../assets/WbQnbas.png';
// import { Link } from 'react-router-dom';

// export default function AboutSection() {
//   return (
//     <section id="about" className="bg-gray-50 py-16">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
//         {/* Text Content */}
//         <div className="md:w-2/3">
//           <span className="inline-block text-xs uppercase font-work font-medium text-buttons border-b-2 border-buttons pb-1">
//             About us
//           </span>
//           <h2 className="font-work text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
//             About <span className="text-buttons">Recruitify Global</span>
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Recruitify Global is on a mission to make your next career move
//             effortless. We connect top talent with their dream roles through our
//             streamlined platform, personalized recommendations, and expert
//             support.
//           </p>
//           <p className="text-gray-700">
//             Whether you’re seeking a full-time position, contract work, or an
//             internship, our intuitive interface and powerful search make finding
//             the perfect opportunity faster than ever.
//           </p>
//           <Link
//             to={'/about'}
//             class="relative inline-block px-4 py-2 font-medium group mt-2"
//           >
//             <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//             <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//             <span class="relative text-black group-hover:text-white">
//               Want To Know More?
//             </span>
//           </Link>
//         </div>

//         {/* Illustration */}
//         <div className="md:w-1/3">
//           <img
//             src={aboutImage}
//             alt="About Recruitify Global"
//             className="w-full rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


















import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImage from '../assets/WbQnbas1.png';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className="bg-gray-50 py-16 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div className="md:w-2/3" variants={container}>
          <motion.span
            className="inline-block text-xs uppercase font-work font-medium text-buttons border-b-2 border-buttons pb-1"
            variants={item}
          >
            About us
          </motion.span>

          <motion.h2
            className="font-work text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            variants={item}
          >
            About{' '}
            <motion.span
              className="text-buttons inline-block"
              whileHover={{
                scale: 1.05,
                transition: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              }}
            >
              Recruitify Global
            </motion.span>
          </motion.h2>

          <motion.p className="text-gray-700 mb-4" variants={item}>
            Recruitify Global is a specialized recruitment agency dedicated to
            bridging the gap between top tier talent and leading organizations.
          </motion.p>

          <motion.p className="text-gray-700" variants={item}>
            With a deep understanding of talent acquisition, executive search,
            and employer branding, we help businesses build high performing
            teams while empowering job seekers to find meaningful
            career opportunities.
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2"
          >
            <Link
              to={'/about'}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Want To Know More?
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={aboutImage}
            alt="About Recruitify Global"
            className="w-full rounded-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            }}
            transition={{
              scale: { type: 'spring', stiffness: 300 },
              shadow: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
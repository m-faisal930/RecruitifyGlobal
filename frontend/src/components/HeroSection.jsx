

// import React, {useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// // import HeroIllustration from '../assets/HeroIllustration3.png';
// import HeroIllustration from '../assets/first.jpg';

// const HeroSection = () => {

//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.1 });



//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);



//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };


//   return (
//     <motion.section
//       id="home"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={container}
//       className="bg-gray-50 font-work px-4 sm:px-6 lg:px-8 xl:px-20 relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, 15, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full filter blur-3xl opacity-20"
//           animate={{
//             x: [0, -20, 0],
//             y: [0, -15, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: 5,
//           }}
//         />
//       </div>

//       <div className="max-w-screen-xl mx-auto py-8 relative z-10">
//         {/* HERO CONTENT */}
//         <div className="flex flex-col-reverse items-center md:flex-row md:justify-between mt-5">
//           {/* Left text */}
//           <motion.div
//             className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left text-gray-800"
//             variants={item}
//           >
//             <motion.h1
//               className="text-4xl sm:text-5xl font-bold leading-tight mb-4 inline-flex items-center justify-center md:justify-start"
//               variants={item}
//             >
//               <span>Your Strategic Headhunting Partner</span>
//             </motion.h1>

//             <motion.div
//               className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start"
//               variants={item}
//             >
//               {/* Browse Jobs */}
//               <motion.a
//                 href="/services"
//                 className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
//                 whileHover={{ y: -5 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
//                   <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                 <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                   Our Services
//                 </span>
//               </motion.a>

//               {/* Subscribe Us */}
//               <motion.a
//                 href="/contact"
//                 className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
//                 whileHover={{ y: -5 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
//                   <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                 <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                   Contact Us
//                 </span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Right illustration */}
//           <motion.div
//             className="w-full md:w-1/2 flex justify-center md:justify-end"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.img
//               src={HeroIllustration}
//               alt="Happy candidate at desk"
//               className="w-full max-w-sm"
//               whileHover={{
//                 y: -10,
//                 transition: {
//                   yoyo: Infinity,
//                   duration: 2,
//                   ease: 'easeInOut',
//                 },
//               }}
//             />
//           </motion.div>
//         </div>

//         {/* CATEGORIES
//         <motion.div className="mt-12 text-center" variants={item}>
//           <motion.p
//             className="text-lg mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             Find the right job or internship position for you:
//           </motion.p>
//           <div className="flex flex-wrap justify-center gap-4 px-2">
//             {categories.map((cat, index) => (
//               <motion.button
//                 key={cat}
//                 className="px-4 py-2 border border-gray-800 rounded-full text-sm font-medium
//                          hover:bg-gray-100 transition"
//                 whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 + index * 0.1 }}
//               >
//                 {cat}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div> */}
//       </div>
//     </motion.section>
//   );
// };

// export default HeroSection;




















import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroIllustration from '../assets/first.jpg';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const floatingElements = Array(8).fill(null);

  return (
    <motion.section
      id="home"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 font-work px-4 sm:px-6 lg:px-8 xl:px-20 min-h-screen flex items-center"
    >
      {/* Futuristic grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>

      {/* Floating animated elements */}
      {floatingElements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10 backdrop-blur-sm"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto py-8 relative z-10 w-full">
        {/* HERO CONTENT */}
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between gap-12">
          {/* Left text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={item}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* <span className="text-sm font-medium text-white/80">
                Strategic Talent Solutions
              </span> */}
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
              variants={item}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Your Strategic</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/50 z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
                />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Headhunting Partner
              </span>
            </motion.h1>



            <motion.div
              className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center md:justify-start"
              variants={item}
            >
              {/* Our Services Button */}
              <motion.a
                href="/services"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium group rounded-xl"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group-hover:from-blue-700 group-hover:to-indigo-700"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/20 to-transparent opacity-20"></span>
                <span className="absolute inset-0 w-full h-full border border-white/10 rounded-xl"></span>
                <span className="relative w-full text-left text-white text-lg font-semibold flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Our Services
                </span>
              </motion.a>

              {/* Contact Us Button */}
              <motion.a
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium group rounded-xl"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-transparent border-2 border-white/30 rounded-xl group-hover:border-white/50"></span>
                <span className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-sm rounded-xl"></span>
                <span className="relative w-full text-left text-white text-lg font-semibold flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Us
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              {/* Image container with futuristic border */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 p-1 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
                <motion.img
                  src={HeroIllustration}
                  alt="Strategic headhunting partner"
                  className="w-full max-w-lg rounded-xl relative z-10 object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.5,
                      ease: 'easeInOut',
                    },
                  }}
                />
              </div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500/10 backdrop-blur-sm rounded-full border border-white/10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-500/10 backdrop-blur-sm rounded-lg border border-white/10"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
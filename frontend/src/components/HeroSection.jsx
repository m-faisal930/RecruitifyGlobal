
// // import React, { useState } from 'react';

// // const HeroSection = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your subscription logic here (API call, etc.)
// //     console.log('Subscribed:', formData);
// //     alert(`Thanks for subscribing, ${formData.name}!`);
// //     setIsModalOpen(false);
// //     setFormData({ name: '', email: '' });
// //   };

// //   return (
// //     <section className="relative">
// //       {/* ... (rest of your existing hero section code) ... */}

// //       {/* Container */}
// //       <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
// //         {/* Heading Div */}
// //         <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
// //           <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
// //             Find Your Dream Job Without The{' '}
// //             <span className="px-4 text-[#1353fe]">Hassles</span>
// //           </h1>
// //           <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
// //             Browse and apply to quality job listings with our streamlined portal
// //           </p>
// //           {/* Button Wrap */}
// //           <div className="flex justify-center">
// //             <a
// //               href="#"
// //               className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
// //             >
// //               Browse Jobs
// //             </a>

// //             {/* <a
// //               href="#"
// //               className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] hover:bg-[#1353fe] hover:text-white transition-colors duration-200"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 // Add your subscription logic here
// //                 // For example: open a modal, redirect to a signup page, etc.
// //                 alert('Subscribe to our newsletter!');
// //               }}
// //             >
// //               <img
// //                 src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
// //                 alt="Subscribe"
// //                 className="mr-2 inline-block w-6"
// //               />
// //               <p className="text-black hover:text-white">Subscribe</p>
// //             </a> */}

// //             {/* Modified Subscribe Button */}
// //             <button
// //               onClick={() => setIsModalOpen(true)}
// //               className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] hover:bg-[#1353fe] hover:text-white transition-colors duration-200"
// //             >
// //               <img
// //                 src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
// //                 alt="Subscribe"
// //                 className="mr-2 inline-block w-6"
// //               />
// //               <p className="text-black hover:text-white">Subscribe</p>
// //             </button>

// //             {/* <a
// //               href="#"
// //               className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]"
// //             >
// //               <img
// //                 src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
// //                 alt=""
// //                 className="mr-2 inline-block w-6"
// //               />
// //               <p className="text-black">View Showreel</p>
// //             </a> */}
// //           </div>
// //         </div>
// //       </div>

// //       {/* BG Images */}
// //       <img
// //         src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
// //         alt=""
// //         className="hidden sm:inline-block absolute bottom-0 left-0 right-auto top-auto -z-10 md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
// //       />
// //       <img
// //         src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
// //         alt=""
// //         className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
// //       />

// //       {/* Subscription Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
// //           <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
// //             {/* Close Button */}
// //             <button
// //               onClick={() => setIsModalOpen(false)}
// //               className="absolute right-4 top-4 text-gray-500 hover:text-black"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-6 w-6"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M6 18L18 6M6 6l12 12"
// //                 />
// //               </svg>
// //             </button>

// //             <h2 className="mb-6 text-2xl font-semibold">Join Our Newsletter</h2>

// //             <form onSubmit={handleSubmit}>
// //               <div className="mb-4">
// //                 <label
// //                   htmlFor="name"
// //                   className="mb-2 block text-sm font-medium"
// //                 >
// //                   Your Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleInputChange}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#1353fe] focus:outline-none"
// //                   required
// //                 />
// //               </div>

// //               <div className="mb-6">
// //                 <label
// //                   htmlFor="email"
// //                   className="mb-2 block text-sm font-medium"
// //                 >
// //                   Email Address
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                   className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#1353fe] focus:outline-none"
// //                   required
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full rounded-xl bg-[#1353fe] px-6 py-3 font-semibold text-white hover:bg-[#0d46d0] transition-colors duration-200"
// //               >
// //                 Subscribe Now
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default HeroSection;














// // src/components/Hero.jsx
// // import React from 'react';
// import HeroIllustration from '../assets/HeroIllustration2.png';
// import { useState, useEffect } from 'react';

// // import GreenAsterisk from '../assets/green-asterisk.svg';

// const HeroSection = () => {
//     const words = ['Dream', 'Desired','Perfect', 'Ideal'];
//     const [currentWord, setCurrentWord] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentWord((prev) => (prev + 1) % words.length);
//       }, 2000);
//       return () => clearInterval(interval);
//     }, []);
  
//   const categories = [
//     'Graphic Design',
//     'Administration',
//     'Business Management',
//     'Marketing',
//   ];


//   return (
//     <>
//       <section
//         id="home"
//         className="bg-gray-50 font-work px-4 sm:px-6 lg:px-8 xl:px-20"
//       >
//         <div className="max-w-screen-xl mx-auto py-8">
//           {/* HERO CONTENT */}
//           <div className="flex flex-col-reverse items-center md:flex-row md:justify-between mt-5">
//             {/* Left text */}
//             <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left text-gray-800">
//               {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 inline-flex items-center justify-center md:justify-start">
//                 <span>
//                   Apply <span className="text-[#0041A8]">Effortlessly</span> to
//                   <br />
//                   Your Desired Jobs
//                 </span>
//               </h1> */}

//               <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 inline-flex items-center justify-center md:justify-start">
//                 <span>
//                   Apply <span className="">Effortlessly</span> to
//                   <br />
//                   Your{' '}
//                   <span className="text-[#0041A8] transition-all duration-500">
//                     {words[currentWord]}
//                   </span>{' '}
//                   Jobs
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-700 mb-6">
//                 Start now and prepare yourself to get a new journey in a
//                 <br />
//                 professional field!
//               </p>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
//                 {/* Browse Jobs */}
//                 <a
//                   href="#jobs"
//                   className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
//                 >
//                   <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
//                     <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                   </span>
//                   <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                   <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                     Browse Jobs
//                   </span>
//                 </a>

//                 {/* Subscribe Us */}
//                 <a
//                   href="#subscribe"
//                   className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
//                 >
//                   <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
//                     <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                   </span>
//                   <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                   <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                     Subscribe Us
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* Right illustration */}
//             <div className="w-full md:w-1/3 flex justify-center md:justify-end">
//               <img
//                 src={HeroIllustration}
//                 alt="Happy candidate at desk"
//                 className="w-full max-w-sm"
//               />
//             </div>
//           </div>

//           {/* CATEGORIES */}
//           <div className="mt-12 text-center">
//             <p className="text-lg mb-4">
//               Find the right job or internship position for you:
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 px-2">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   className="px-4 py-2 border border-gray-800 rounded-full text-sm font-medium
//                            hover:bg-gray-100 transition"
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;















import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroIllustration from '../assets/HeroIllustration2.png';

const HeroSection = () => {
  const words = ['Dream', 'Desired', 'Perfect', 'Ideal'];
  const [currentWord, setCurrentWord] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const categories = [
    'Graphic Design',
    'Administration',
    'Business Management',
    'Marketing',
  ];

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

  const wordVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <motion.section
      id="home"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="bg-gray-50 font-work px-4 sm:px-6 lg:px-8 xl:px-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"
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
        <motion.div
          className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto py-8 relative z-10">
        {/* HERO CONTENT */}
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between mt-5">
          {/* Left text */}
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left text-gray-800"
            variants={item}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4 inline-flex items-center justify-center md:justify-start"
              variants={item}
            >
              <span>
                Apply <span className="">Effortlessly</span> to
                <br />
                Your{' '}
                <motion.span
                  className="text-[#0041A8] inline-block"
                  key={words[currentWord]}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={wordVariants}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>{' '}
                Jobs
              </span>
            </motion.h1>

            <motion.p className="text-lg text-gray-700 mb-6" variants={item}>
              Start now and prepare yourself to get a new journey in a
              <br />
              professional field!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start"
              variants={item}
            >
              {/* Browse Jobs */}
              <motion.a
                href="#jobs"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Browse Jobs
                </span>
              </motion.a>

              {/* Subscribe Us */}
              <motion.a
                href="#subscribe"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#5F8DB8] rounded-xl group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#4E7895] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4E7895] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Subscribe Us
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.img
              src={HeroIllustration}
              alt="Happy candidate at desk"
              className="w-full max-w-sm"
              whileHover={{
                y: -10,
                transition: {
                  yoyo: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
              }}
            />
          </motion.div>
        </div>

        {/* CATEGORIES
        <motion.div className="mt-12 text-center" variants={item}>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Find the right job or internship position for you:
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 px-2">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                className="px-4 py-2 border border-gray-800 rounded-full text-sm font-medium
                         hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
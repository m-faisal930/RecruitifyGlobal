// // src/components/ServicesSection.jsx
// import React from 'react';
// import { UserCheck, UserPlus, FileText, Award, LifeBuoy } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: 'Talent Acquisition',
//     desc: 'Finding top talent matching your needs with precision and speed.',
//     icon: UserCheck,
//   },
//   {
//     title: 'Recruitment Outsourcing',
//     desc: 'Reduce turnover and boost ROI by outsourcing hiring to our expert team.',
//     icon: UserPlus,
//   },
//   {
//     title: 'Staff Contracting',
//     desc: 'Flexible staffing solutions on spec and on time for every project.',
//     icon: Award,
//   },
//   {
//     title: 'Employee Branding',
//     desc: 'Create a positive image of your company to attract top talent.',
//     icon: Award,
//   },
//   {
//     title: 'Resume Writing',
//     desc: 'Professional resume writing services to help your candidates stand out.',
//     icon: FileText,
//   },
//   {
//     title: 'HR Consultancy Services',
//     desc: 'Expert HR guidance to save you time, effort, and reduce risk.',
//     icon: LifeBuoy,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section id="services" className="bg-gray-50 py-12">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="font-work text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
//           What We Offer
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map(({ title, desc, icon: Icon }, idx) => (
//             <motion.div
//               key={title}
//               className="group bg-white rounded-2xl border  border-[#0041A8] p-8 flex flex-col items-center text-center relative overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1, duration: 0.6 }}
//             >
//               {/* dotted-circle icon */}
//               <div className="relative mb-6 text-[#0041A8]">
//                 <div className="border-2 border-dashed border-buttons rounded-full p-4 group-hover:bg-buttons/10 transition-colors">
//                   <Icon className="w-6 h-6 text-[#0041A8]" />
//                 </div>
//                 {/* small dots */}
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-buttons rounded-full" />
//                 <span className="absolute bottom-0 left-1/4 w-2 h-2 bg-buttons rounded-full" />
//                 <span className="absolute top-1/3 left-0 w-2 h-2 bg-buttons rounded-full" />
//               </div>

//               <h3 className="font-work text-lg font-semibold text-gray-800 mb-2">
//                 {title}
//               </h3>
//               <p className="text-gray-600 text-sm flex-grow">{desc}</p>

//               <button
//                 className="
//                 mt-6 inline-flex items-center justify-center
//                 w-10 h-10 bg-buttons text-light rounded-full
//                 opacity-0 group-hover:opacity-100 transition-opacity
//               "
//               >
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



















import React from 'react';
import { UserCheck, UserPlus, FileText, Award, LifeBuoy } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Talent Acquisition',
    desc: 'Finding top talent matching your needs with precision and speed.',
    icon: UserCheck,
    color: '#3B82F6', // blue
  },
  {
    title: 'Recruitment Outsourcing',
    desc: 'Reduce turnover and boost ROI by outsourcing hiring to our expert team.',
    icon: UserPlus,
    color: '#10B981', // emerald
  },
  {
    title: 'Staff Contracting',
    desc: 'Flexible staffing solutions on spec and on time for every project.',
    icon: Award,
    color: '#F59E0B', // amber
  },
  {
    title: 'Employee Branding',
    desc: 'Create a positive image of your company to attract top talent.',
    icon: Award,
    color: '#8B5CF6', // violet
  },
  {
    title: 'Resume Writing',
    desc: 'Professional resume writing services to help your candidates stand out.',
    icon: FileText,
    color: '#EC4899', // pink
  },
  {
    title: 'HR Consultancy Services',
    desc: 'Expert HR guidance to save you time, effort, and reduce risk.',
    icon: LifeBuoy,
    color: '#06B6D4', // cyan
  },
];

const ServiceCard = ({ title, desc, icon: Icon, color, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, y: -5 },
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 10 },
  };

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Gradient background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}10, transparent 70%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -20],
              x: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        variants={{
          hover: { borderColor: color },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div className="relative mb-6" variants={iconVariants}>
        <div
          className="rounded-full p-4 transition-all duration-300 group-hover:shadow-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 20px 5px ${color}40`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <h3 className="font-work text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm flex-grow">{desc}</p>

      <motion.button
        className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </motion.button>
    </motion.div>
  );
};

export default function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="services"
      className="bg-gray-50 py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="font-work text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
          <div className="w-20 h-1 bg-[#0041A8] mx-auto mt-4"></div>
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.title} index={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
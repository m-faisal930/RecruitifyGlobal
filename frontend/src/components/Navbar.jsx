


// // src/components/Navbar.jsx
// import React, { useState, useEffect, useRef } from 'react'
// import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom'

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { 
//     name: 'For Business', 
//     href: '',
//     subItems: [
//       { name: 'Services', href: '/services' },
//       { name: 'Specialization', href: '/specialization' }
//     ]
//   },
//   { name: 'For Recruiters', href: '/recruiters' },
//   { name: 'Job Opportunities', href: '/jobs' },
//   { name: 'Contact Us', href: '/contact' },
// ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('#home')
//   const [hoveredBusiness, setHoveredBusiness] = useState(false)
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
//   const dropdownRef = useRef(null)
//   let hoverTimeout = useRef(null)
//   const navigator = useNavigate()

//   // Handle navbar background on scroll
//   useEffect(() => {
//     const handleScrollBg = () => setIsScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', handleScrollBg)
//     return () => window.removeEventListener('scroll', handleScrollBg)
//   }, [])

//   // Scroll-spy to highlight active nav item
//   useEffect(() => {
//     const handleScrollSpy = () => {
//       const midpoint = window.innerHeight / 2
//       let current = '#home'
//       navItems.forEach(({ href }) => {
//         const sec = document.querySelector(href)
//         if (sec) {
//           const top = sec.getBoundingClientRect().top
//           if (top <= midpoint) {
//             current = href
//           }
//         }
//       })
//       setActiveSection(current)
//     }
//     window.addEventListener('scroll', handleScrollSpy)
//     return () => window.removeEventListener('scroll', handleScrollSpy)
//   }, [])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setHoveredBusiness(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleMouseEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setHoveredBusiness(true)
//   }

//   const handleMouseLeave = () => {
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredBusiness(false)
//     }, 300) // 300ms delay before closing
//   }

//   const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
//   const bgClass =
//     isScrolled || mobileOpen
//       ? 'bg-light/95 backdrop-blur-sm shadow-lg'
//       : 'bg-light';

//   const handleNavClick = (e, href) => {
//     e.preventDefault()
//     setMobileOpen(false)
//     navigator(href)
//     // const target = document.querySelector(href)
//     // if (target) {
//     //   target.scrollIntoView({ behavior: 'smooth' })
//     // }
//   }

//   const toggleMobileSubmenu = (e) => {
//     e.preventDefault()
//     setMobileSubmenuOpen(!mobileSubmenuOpen)
//   }

//   return (
//     <nav className={`${baseNavClasses} ${bgClass}`}>
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <a
//             href="/"
//             className="text-2xl font-bold hover:text-buttons transition-colors"
//           >
//             <img src={logo} alt="Logo" className="h-40 pt-3" />
//           </a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map(({ name, href, subItems }) => {
//               const isActive = activeSection === href
              
//               if (name === 'For Business' && subItems) {
//                 return (
//                   <div 
//                     key={href}
//                     className="relative group"
//                     ref={dropdownRef}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <button
//                       className={`
//                         group relative px-3 py-2 font-medium transition-colors cursor-pointer
//                         ${
//                           isActive
//                             ? 'text-gray-900 font-bold'
//                             : 'text-[#0041A8] hover:text-gray-500'
//                         }
//                       `}
//                     >
//                       {name}
//                       <span
//                         className={`
//                           absolute left-0 -bottom-1 h-0.5 bg-buttons transition-all duration-300
//                           ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
//                         `}
//                       />
//                     </button>
                    
//                     <div 
//                       className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 ${hoveredBusiness ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
//                       onMouseEnter={handleMouseEnter}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {subItems.map((subItem) => (
//                         <a
//                           key={subItem.href}
//                           href={subItem.href}
//                           onClick={(e) => handleNavClick(e, subItem.href)}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                         >
//                           {subItem.name}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 )
//               }

//               return (
//                 <a
//                   key={href}
//                   href={href}
//                   onClick={(e) => handleNavClick(e, href)}
//                   className={`
//                     group relative px-3 py-2 font-medium transition-colors cursor-pointer
//                     ${
//                       isActive
//                         ? 'text-gray-900 font-bold'
//                         : 'text-[#0041A8] hover:text-gray-500'
//                     }
//                   `}
//                 >
//                   {name}
//                   <span
//                     className={`
//                       absolute left-0 -bottom-1 h-0.5 bg-buttons transition-all duration-300
//                       ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
//                     `}
//                   />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMobileOpen(o => !o)}
//             className="md:hidden p-2 text-dark hover:text-buttons focus:outline-none transition-colors"
//           >
//             {mobileOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                    stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                    stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-light">
//           <div className="px-4 pt-2 pb-4 space-y-1">
//             {navItems.map(({ name, href, subItems }) => {
//               const isActive = activeSection === href
              
//               if (name === 'For Business' && subItems) {
//                 return (
//                   <div key={href}>
//                     <div className="flex items-center justify-between">
//                       <a
//                         href={href}
//                         onClick={(e) => handleNavClick(e, href)}
//                         className={`
//                           block rounded-md px-3 py-2 font-work transition-colors
//                           ${isActive ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
//                         `}
//                       >
//                         {name}
//                       </a>
//                       <button 
//                         onClick={toggleMobileSubmenu}
//                         className="p-2 text-dark hover:text-buttons focus:outline-none transition-colors"
//                       >
//                         <svg 
//                           xmlns="http://www.w3.org/2000/svg" 
//                           className={`h-5 w-5 transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-45' : ''}`} 
//                           viewBox="0 0 20 20" 
//                           fill="currentColor"
//                         >
//                           <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//                         </svg>
//                       </button>
//                     </div>
//                     {mobileSubmenuOpen && (
//                       <div className="pl-4">
//                         {subItems.map((subItem) => (
//                           <a
//                             key={subItem.href}
//                             href={subItem.href}
//                             onClick={(e) => handleNavClick(e, subItem.href)}
//                             className={`
//                               block rounded-md px-3 py-2 font-work transition-colors text-sm
//                               ${activeSection === subItem.href ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
//                             `}
//                           >
//                             {subItem.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )
//               }

//               return (
//                 <a
//                   key={href}
//                   href={href}
//                   onClick={(e) => handleNavClick(e, href)}
//                   className={`
//                     block rounded-md px-3 py-2 font-work transition-colors
//                     ${isActive ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
//                   `}
//                 >
//                   {name}
//                 </a>
//               )
//             })}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



















// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.jpg';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   {
//     name: 'For Business',
//     href: '',
//     subItems: [
//       { name: 'Services', href: '/services' },
//       { name: 'Specialization', href: '/specialization' },
//     ],
//   },
//   { name: 'For Recruiters', href: '/recruiters' },
//   { name: 'Job Opportunities', href: '/jobs' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('/');
//   const [hoveredBusiness, setHoveredBusiness] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   let hoverTimeout = useRef(null);
//   const navigator = useNavigate();

//   // Handle navbar background on scroll
//   useEffect(() => {
//     const handleScrollBg = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScrollBg);
//     return () => window.removeEventListener('scroll', handleScrollBg);
//   }, []);

//   // Scroll-spy to highlight active nav item
//   useEffect(() => {
//     const handleScrollSpy = () => {
//       const midpoint = window.innerHeight / 2;
//       let current = '/';
//       navItems.forEach(({ href }) => {
//         const sec = document.querySelector(href);
//         if (sec) {
//           const top = sec.getBoundingClientRect().top;
//           if (top <= midpoint) {
//             current = href;
//           }
//         }
//       });
//       setActiveSection(current);
//     };
//     window.addEventListener('scroll', handleScrollSpy);
//     return () => window.removeEventListener('scroll', handleScrollSpy);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setHoveredBusiness(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleMouseEnter = () => {
//     clearTimeout(hoverTimeout.current);
//     setHoveredBusiness(true);
//   };

//   const handleMouseLeave = () => {
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredBusiness(false);
//     }, 300);
//   };

//   const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`;
//   const bgClass =
//     isScrolled || mobileOpen
//       ? 'bg-gray-900/95 backdrop-blur-md shadow-xl'
//       : 'bg-gray-900/95 backdrop-blur-md';

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     setMobileOpen(false);
//     navigator(href);
//   };

//   const toggleMobileSubmenu = (e) => {
//     e.preventDefault();
//     setMobileSubmenuOpen(!mobileSubmenuOpen);
//   };

//   return (
//     <motion.nav
//       className={`${baseNavClasses} ${bgClass}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//     >
//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.a
//             href="/"
//             className="text-2xl font-bold transition-colors"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={logo} alt="Logo" className="h-12" />
//           </motion.a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6">
//             {navItems.map(({ name, href, subItems }) => {
//               const isActive = activeSection === href;

//               if (name === 'For Business' && subItems) {
//                 return (
//                   <div
//                     key={href}
//                     className="relative group"
//                     ref={dropdownRef}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <motion.button
//                       className={`
//                         relative px-4 py-2 font-medium transition-colors cursor-pointer
//                         ${
//                           isActive
//                             ? 'text-white font-semibold'
//                             : 'text-gray-300 hover:text-white'
//                         }
//                       `}
//                       whileHover={{ y: -2 }}
//                     >
//                       {name}
//                       <motion.span
//                         className={`
//                           absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300
//                           ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
//                         `}
//                         layoutId="navUnderline"
//                       />
//                     </motion.button>

//                     <AnimatePresence>
//                       {hoveredBusiness && (
//                         <motion.div
//                           className="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-gray-800/95 backdrop-blur-md border border-gray-700 py-2 z-50"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 10 }}
//                           transition={{ duration: 0.2 }}
//                           onMouseEnter={handleMouseEnter}
//                           onMouseLeave={handleMouseLeave}
//                         >
//                           {subItems.map((subItem) => (
//                             <motion.a
//                               key={subItem.href}
//                               href={subItem.href}
//                               onClick={(e) => handleNavClick(e, subItem.href)}
//                               className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
//                               whileHover={{ x: 5 }}
//                             >
//                               {subItem.name}
//                             </motion.a>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               }

//               return (
//                 <motion.a
//                   key={href}
//                   href={href}
//                   onClick={(e) => handleNavClick(e, href)}
//                   className={`
//                     group relative px-4 py-2 font-medium transition-colors cursor-pointer
//                     ${
//                       isActive
//                         ? 'text-white font-semibold'
//                         : 'text-gray-300 hover:text-white'
//                     }
//                   `}
//                   whileHover={{ y: -2 }}
//                 >
//                   {name}
//                   <motion.span
//                     className={`
//                       absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300
//                       ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
//                     `}
//                     layoutId="navUnderline"
//                   />
//                 </motion.a>
//               );
//             })}
//           </div>

//           {/* Mobile Toggle */}
//           <motion.button
//             onClick={() => setMobileOpen((o) => !o)}
//             className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
//             whileTap={{ scale: 0.9 }}
//           >
//             {mobileOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="px-4 pt-2 pb-6 space-y-1">
//               {navItems.map(({ name, href, subItems }) => {
//                 const isActive = activeSection === href;

//                 if (name === 'For Business' && subItems) {
//                   return (
//                     <div key={href}>
//                       <div className="flex items-center justify-between">
//                         <motion.a
//                           href={href}
//                           onClick={(e) => handleNavClick(e, href)}
//                           className={`
//                             block rounded-lg px-4 py-3 font-medium transition-colors
//                             ${
//                               isActive
//                                 ? 'text-white bg-gray-800'
//                                 : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                             }
//                           `}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           {name}
//                         </motion.a>
//                         <motion.button
//                           onClick={toggleMobileSubmenu}
//                           className="p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className={`h-5 w-5 transition-transform duration-200 ${
//                               mobileSubmenuOpen ? 'rotate-45' : ''
//                             }`}
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </motion.button>
//                       </div>
//                       <AnimatePresence>
//                         {mobileSubmenuOpen && (
//                           <motion.div
//                             className="pl-4"
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.2 }}
//                           >
//                             {subItems.map((subItem) => (
//                               <motion.a
//                                 key={subItem.href}
//                                 href={subItem.href}
//                                 onClick={(e) => handleNavClick(e, subItem.href)}
//                                 className={`
//                                   block rounded-lg px-4 py-2.5 font-medium text-sm transition-colors
//                                   ${
//                                     activeSection === subItem.href
//                                       ? 'text-white bg-gray-800'
//                                       : 'text-gray-400 hover:text-white hover:bg-gray-800'
//                                   }
//                                 `}
//                                 whileTap={{ scale: 0.95 }}
//                               >
//                                 {subItem.name}
//                               </motion.a>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 }

//                 return (
//                   <motion.a
//                     key={href}
//                     href={href}
//                     onClick={(e) => handleNavClick(e, href)}
//                     className={`
//                       block rounded-lg px-4 py-3 font-medium transition-colors
//                       ${
//                         isActive
//                           ? 'text-white bg-gray-800'
//                           : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                       }
//                     `}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {name}
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }












import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'For Business',
    href: '/business',
    subItems: [
      { name: 'Services', href: '/services' },
      { name: 'Specialization', href: '/specialization' },
    ],
  },
  { name: 'For Recruiters', href: '/recruiters' },
  { name: 'Job Opportunities', href: '/jobs' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredBusiness, setHoveredBusiness] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Track current route for active link highlighting
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScrollBg = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScrollBg);
    return () => window.removeEventListener('scroll', handleScrollBg);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredBusiness(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setHoveredBusiness(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredBusiness(false);
    }, 300);
  };

  const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`;
  // Light by default, dark when scrolled or mobile menu open
  const bgClass =
    isScrolled || mobileOpen
      ? 'bg-gray-900/95 backdrop-blur-md shadow-xl text-white'
      : 'bg-white/95 backdrop-blur-md shadow-sm text-gray-800';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(href);
  };

  const toggleMobileSubmenu = (e) => {
    e.preventDefault();
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  // Check if route is active (including subroutes)
  const isRouteActive = (href) => {
    // Special case for home
    if (href === '/') return activeRoute === '/';

    // Check if current route starts with the href (for nested routes)
    return activeRoute.startsWith(href);
  };

  // Text and hover colors change based on scroll state
  const getTextColorClass = (isActive, isScrolled) => {
    if (isScrolled || mobileOpen) {
      return isActive
        ? 'text-white font-semibold'
        : 'text-gray-300 hover:text-white';
    }
    return isActive
      ? 'text-gray-900 font-semibold'
      : 'text-gray-600 hover:text-gray-900';
  };

  const getMobileTextColorClass = (isActive) => {
    if (isScrolled || mobileOpen) {
      return isActive
        ? 'text-white bg-gray-800'
        : 'text-gray-300 hover:text-white hover:bg-gray-800';
    }
    return isActive
      ? 'text-gray-900 bg-gray-100'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100';
  };

  return (
    <motion.nav
      className={`${baseNavClasses} ${bgClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - changes color based on scroll state */}
          <motion.a
            href="/"
            className="text-2xl font-bold transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo}
              alt="Logo"
              className='h-12 transition-all duration-300'

            />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ name, href, subItems }) => {
              const isActive = isRouteActive(href);
              const textColorClass = getTextColorClass(
                isActive,
                isScrolled || mobileOpen
              );

              if (name === 'For Business' && subItems) {
                return (
                  <div
                    key={href}
                    className="relative group"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.button
                      className={`relative px-4 py-2 font-medium transition-colors cursor-pointer ${textColorClass}`}
                      whileHover={{ y: -2 }}
                    >
                      {name}
                      <motion.span
                        className={`
                          absolute left-0 -bottom-1 h-0.5 transition-all duration-300
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                          ${
                            isScrolled || mobileOpen
                              ? 'bg-gradient-to-r from-blue-400 to-indigo-400'
                              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                          }
                        `}
                        layoutId="navUnderline"
                      />
                    </motion.button>

                    <AnimatePresence>
                      {hoveredBusiness && (
                        <motion.div
                          className={`absolute left-0 mt-2 w-56 rounded-xl shadow-2xl py-2 z-50 ${
                            isScrolled || mobileOpen
                              ? 'bg-gray-800/95 backdrop-blur-md border border-gray-700'
                              : 'bg-white/95 backdrop-blur-md border border-gray-200'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {subItems.map((subItem) => {
                            const isSubActive = isRouteActive(subItem.href);
                            return (
                              <motion.a
                                key={subItem.href}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  isScrolled || mobileOpen
                                    ? isSubActive
                                      ? 'text-white bg-gray-700/50'
                                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    : isSubActive
                                    ? 'text-gray-900 bg-gray-100'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                                whileHover={{ x: 5 }}
                              >
                                {subItem.name}
                              </motion.a>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`group relative px-4 py-2 font-medium transition-colors cursor-pointer ${textColorClass}`}
                  whileHover={{ y: -2 }}
                >
                  {name}
                  <motion.span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                      ${
                        isScrolled || mobileOpen
                          ? 'bg-gradient-to-r from-blue-400 to-indigo-400'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                      }
                    `}
                    layoutId="navUnderline"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Toggle - changes color based on scroll state */}
          <motion.button
            onClick={() => setMobileOpen((o) => !o)}
            className={`md:hidden p-2 focus:outline-none transition-colors ${
              isScrolled || mobileOpen
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`md:hidden overflow-hidden border-t ${
              isScrolled || mobileOpen
                ? 'bg-gray-900/95 backdrop-blur-md border-gray-800'
                : 'bg-white/95 backdrop-blur-md border-gray-200'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map(({ name, href, subItems }) => {
                const isActive = isRouteActive(href);
                const textColorClass = getMobileTextColorClass(isActive);

                if (name === 'For Business' && subItems) {
                  return (
                    <div key={href}>
                      <div className="flex items-center justify-between">
                        <motion.a
                          href={href}
                          onClick={(e) => handleNavClick(e, href)}
                          className={`block rounded-lg px-4 py-3 font-medium transition-colors ${textColorClass}`}
                          whileTap={{ scale: 0.95 }}
                        >
                          {name}
                        </motion.a>
                        <motion.button
                          onClick={toggleMobileSubmenu}
                          className={`p-2 focus:outline-none transition-colors ${
                            isScrolled || mobileOpen
                              ? 'text-gray-300 hover:text-white'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileSubmenuOpen ? 'rotate-45' : ''
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.button>
                      </div>
                      <AnimatePresence>
                        {mobileSubmenuOpen && (
                          <motion.div
                            className="pl-4"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {subItems.map((subItem) => {
                              const isSubActive = isRouteActive(subItem.href);
                              return (
                                <motion.a
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={(e) =>
                                    handleNavClick(e, subItem.href)
                                  }
                                  className={`block rounded-lg px-4 py-2.5 font-medium text-sm transition-colors ${
                                    isScrolled || mobileOpen
                                      ? isSubActive
                                        ? 'text-white bg-gray-800'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                      : isSubActive
                                      ? 'text-gray-900 bg-gray-100'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                  }`}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {subItem.name}
                                </motion.a>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`block rounded-lg px-4 py-3 font-medium transition-colors ${textColorClass}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
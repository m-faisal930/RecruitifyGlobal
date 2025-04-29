

// // src/components/Navbar.jsx
// import React, { useState, useEffect } from 'react'
// import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'For Business', href: '/' },
//   { name: 'Job Opportunities', href: '/jobs' },
//   { name: 'For Recruiters', href: '/recruiters' },
//   { name: 'About', href: '/about' },
//   // { name: 'How It Works', href: '#how-it-works' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('/')
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

//   const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
//   const bgClass = isScrolled || mobileOpen
//     ? 'bg-light/95 backdrop-blur-sm shadow-lg'
//     : 'bg-transparent'

//   const handleNavClick = (e, href) => {
//     // console.log('clicked', href)
//     e.preventDefault()
//     setMobileOpen(false)
//     navigator(href)
//     // const target = document.querySelector(href)
//     // if (target) {
//     //   target.scrollIntoView({ behavior: 'smooth' })
//     // }
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
//             {/* Recruitify Global */}
//           </a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map(({ name, href }) => {
//               const isActive = activeSection === href
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
//             {navItems.map(({ name, href }) => {
//               const isActive = activeSection === href
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





















// // src/components/Navbar.jsx
// import React, { useState, useEffect } from 'react'
// import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom'

// const navItems = [
//   { name: 'Home', href: '/' },
//   { 
//     name: 'For Business', 
//     href: '/business',
//     subItems: [
//       { name: 'Services', href: '/business/services' },
//       { name: 'Specialization', href: '/business/specialization' }
//     ]
//   },
//   { name: 'Job Opportunities', href: '/jobs' },
//   { name: 'For Recruiters', href: '/recruiters' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('/')
//   const [hoveredBusiness, setHoveredBusiness] = useState(false)
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
//       let current = '/'
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

//   const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
//   const bgClass = isScrolled || mobileOpen
//     ? 'bg-light/95 backdrop-blur-sm shadow-lg'
//     : 'bg-transparent'

//   const handleNavClick = (e, href) => {
//     e.preventDefault()
//     setMobileOpen(false)
//     navigator(href)
//     // const target = document.querySelector(href)
//     // if (target) {
//     //   target.scrollIntoView({ behavior: 'smooth' })
//     // }
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
//                     onMouseEnter={() => setHoveredBusiness(true)}
//                     onMouseLeave={() => setHoveredBusiness(false)}
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
                    
//                     {hoveredBusiness && (
//                       <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
//                         {subItems.map((subItem) => (
//                           <a
//                             key={subItem.href}
//                             href={subItem.href}
//                             onClick={(e) => handleNavClick(e, subItem.href)}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
//                     <a
//                       href={href}
//                       onClick={(e) => handleNavClick(e, href)}
//                       className={`
//                         block rounded-md px-3 py-2 font-work transition-colors
//                         ${isActive ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
//                       `}
//                     >
//                       {name}
//                     </a>
//                     <div className="pl-4">
//                       {subItems.map((subItem) => (
//                         <a
//                           key={subItem.href}
//                           href={subItem.href}
//                           onClick={(e) => handleNavClick(e, subItem.href)}
//                           className={`
//                             block rounded-md px-3 py-2 font-work transition-colors text-sm
//                             ${activeSection === subItem.href ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
//                           `}
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

































// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'For Business', 
    href: '',
    subItems: [
      { name: 'Services', href: '/services' },
      { name: 'Specialization', href: '/specialization' }
    ]
  },
  { name: 'For Recruiters', href: '/recruiters' },
  { name: 'Job Opportunities', href: '/jobs' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [hoveredBusiness, setHoveredBusiness] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  let hoverTimeout = useRef(null)
  const navigator = useNavigate()

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScrollBg = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScrollBg)
    return () => window.removeEventListener('scroll', handleScrollBg)
  }, [])

  // Scroll-spy to highlight active nav item
  useEffect(() => {
    const handleScrollSpy = () => {
      const midpoint = window.innerHeight / 2
      let current = '#home'
      navItems.forEach(({ href }) => {
        const sec = document.querySelector(href)
        if (sec) {
          const top = sec.getBoundingClientRect().top
          if (top <= midpoint) {
            current = href
          }
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredBusiness(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current)
    setHoveredBusiness(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredBusiness(false)
    }, 300) // 300ms delay before closing
  }

  const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
  const bgClass = isScrolled || mobileOpen
    ? 'bg-light/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent'

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    navigator(href)
    // const target = document.querySelector(href)
    // if (target) {
    //   target.scrollIntoView({ behavior: 'smooth' })
    // }
  }

  const toggleMobileSubmenu = (e) => {
    e.preventDefault()
    setMobileSubmenuOpen(!mobileSubmenuOpen)
  }

  return (
    <nav className={`${baseNavClasses} ${bgClass}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold hover:text-buttons transition-colors"
          >
            <img src={logo} alt="Logo" className="h-40 pt-3" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href, subItems }) => {
              const isActive = activeSection === href
              
              if (name === 'For Business' && subItems) {
                return (
                  <div 
                    key={href}
                    className="relative group"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`
                        group relative px-3 py-2 font-medium transition-colors cursor-pointer
                        ${
                          isActive
                            ? 'text-gray-900 font-bold'
                            : 'text-[#0041A8] hover:text-gray-500'
                        }
                      `}
                    >
                      {name}
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-0.5 bg-buttons transition-all duration-300
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}
                      />
                    </button>
                    
                    <div 
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 ${hoveredBusiness ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {subItems.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`
                    group relative px-3 py-2 font-medium transition-colors cursor-pointer
                    ${
                      isActive
                        ? 'text-gray-900 font-bold'
                        : 'text-[#0041A8] hover:text-gray-500'
                    }
                  `}
                >
                  {name}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 bg-buttons transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 text-dark hover:text-buttons focus:outline-none transition-colors"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-light">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map(({ name, href, subItems }) => {
              const isActive = activeSection === href
              
              if (name === 'For Business' && subItems) {
                return (
                  <div key={href}>
                    <div className="flex items-center justify-between">
                      <a
                        href={href}
                        onClick={(e) => handleNavClick(e, href)}
                        className={`
                          block rounded-md px-3 py-2 font-work transition-colors
                          ${isActive ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
                        `}
                      >
                        {name}
                      </a>
                      <button 
                        onClick={toggleMobileSubmenu}
                        className="p-2 text-dark hover:text-buttons focus:outline-none transition-colors"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-45' : ''}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {mobileSubmenuOpen && (
                      <div className="pl-4">
                        {subItems.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className={`
                              block rounded-md px-3 py-2 font-work transition-colors text-sm
                              ${activeSection === subItem.href ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
                            `}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`
                    block rounded-md px-3 py-2 font-work transition-colors
                    ${isActive ? 'text-buttons bg-lightdiv' : 'text-dark hover:text-buttons hover:bg-lightdiv'}
                  `}
                >
                  {name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
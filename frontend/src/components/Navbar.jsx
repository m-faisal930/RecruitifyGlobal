
// // src/components/Navbar.jsx
// import React, { useState, useEffect } from 'react'

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'Jobs', href: '#jobs' },
//     { name: 'About', href: '#about' },
//     { name: 'How It Works', href: '#how-it-works' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
//   const activeBg = isScrolled || mobileOpen
//     ? 'bg-light/95 backdrop-blur-sm shadow-lg'
//     : 'bg-transparent'

//   return (
//     <nav className={`${baseNavClasses} ${activeBg}`}>
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <a href="#home" className="text-2xl font-bold text-dark hover:text-buttons transition-colors">
//             Recruitify Global
//           </a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map(item => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="group relative px-3 py-2 font-medium text-dark transition-colors hover:text-buttons"
//               >
//                 {item.name}
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-buttons transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMobileOpen(o => !o)}
//             className="md:hidden p-2 text-dark hover:text-buttons focus:outline-none transition-colors"
//           >
//             {mobileOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
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
//             {navItems.map(item => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setMobileOpen(false)}
//                 className="block rounded-md px-3 py-2 font-work text-dark transition-colors hover:bg-lightdiv hover:text-buttons"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar






















// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Jobs', href: '#jobs' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

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

  const baseNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 font-work`
  const bgClass = isScrolled || mobileOpen
    ? 'bg-light/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent'

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${baseNavClasses} ${bgClass}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold text-dark hover:text-buttons transition-colors"
          >
            Recruitify Global
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href }) => {
              const isActive = activeSection === href
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`
                    group relative px-3 py-2 font-medium transition-colors
                    ${isActive ? 'text-buttons' : 'text-dark hover:text-buttons'}
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
              )
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
            {navItems.map(({ name, href }) => {
              const isActive = activeSection === href
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

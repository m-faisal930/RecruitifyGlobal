import {MenuIcon, XIcon } from 'lucide-react';
import { FaSignInAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'Jobs', link: './jobs' },
  { title: 'About', link: '/about' },
  { title: 'Contact Us', link: '/contact' }, // ✅ Now inside the mobile menu
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowNav = () => setShowNav(!showNav);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-10">
          {/* Mobile Toggle Button */}
          <button
            onClick={handleShowNav}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            {showNav ? (
              <XIcon size={25} strokeWidth={3} />
            ) : (
              <MenuIcon size={25} strokeWidth={3} />
            )}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-stone-900 md:text-2xl">
              Job Portal
            </span>
          </a>

          {/* Navigation Links (Hidden on Mobile) */}
          <div
            className={`absolute left-0 right-0 top-[54px] w-full bg-white shadow-md transition-all duration-300 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:shadow-none ${
              showNav ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col gap-2 p-4 md:flex-row md:items-center md:gap-6 md:p-0">
              {navLinks.map(({ title, link }) => (
                <a
                  key={title}
                  href={link}
                  className="rounded-md px-3 py-2 text-slate-600 hover:bg-gray-100 hover:text-blue-600 md:hover:bg-transparent"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Login Button (Always Visible) */}
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          <FaSignInAlt size={18} />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
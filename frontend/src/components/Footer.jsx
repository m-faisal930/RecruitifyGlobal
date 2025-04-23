import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowUp } from 'react-icons/hi';
import { MdOutlineSend } from 'react-icons/md';
// import { BsBriefcase } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-30" />

            </div>
            <p className="mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base">
              Connecting talent with opportunities across Pakistan since 2023.
            </p>
            <div className="mt-4 flex gap-3 sm:mt-6 sm:gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {['Home', 'Browse Jobs', 'Companies', 'About Us'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Resources</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {['Blog', 'Career Tips', 'FAQ', 'Help Center'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Legal</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter - Fixed submit button */}
          <div className="mt-6 sm:col-span-2 md:col-span-4 lg:col-span-1 lg:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base">
              Subscribe to get job alerts and career tips
            </p>
            <form className="mt-3 flex w-full max-w-xs sm:mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-l-lg border-0 bg-gray-800 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-600 sm:px-4 sm:py-2.5 sm:text-base"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 rounded-r-lg bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-700 sm:px-3 sm:py-2.5"
                aria-label="Subscribe"
              >
                <MdOutlineSend className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800 sm:mt-12"></div>

        {/* Bottom footer */}
        <div className="mt-6 flex flex-col items-center justify-between sm:mt-8 md:flex-row">
          <p className="text-xs text-gray-500 sm:text-sm">
            &copy; {new Date().getFullYear()} Recruitify Global. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-400 hover:text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              Back to top
              <HiOutlineArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

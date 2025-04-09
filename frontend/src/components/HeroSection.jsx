
import React, { useState } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here (API call, etc.)
    console.log('Subscribed:', formData);
    alert(`Thanks for subscribing, ${formData.name}!`);
    setIsModalOpen(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="relative">
      {/* ... (rest of your existing hero section code) ... */}

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Heading Div */}
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            Find Your Dream Job Without The{' '}
            <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
              Hassles
            </span>
            .
          </h1>
          <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
            Browse and apply to quality job listings with our streamlined portal
          </p>
          {/* Button Wrap */}
          <div className="flex justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
            >
              Browse Jobs
            </a>

            {/* <a
              href="#"
              className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] hover:bg-[#1353fe] hover:text-white transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                // Add your subscription logic here
                // For example: open a modal, redirect to a signup page, etc.
                alert('Subscribe to our newsletter!');
              }}
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                alt="Subscribe"
                className="mr-2 inline-block w-6"
              />
              <p className="text-black hover:text-white">Subscribe</p>
            </a> */}

            {/* Modified Subscribe Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] hover:bg-[#1353fe] hover:text-white transition-colors duration-200"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                alt="Subscribe"
                className="mr-2 inline-block w-6"
              />
              <p className="text-black hover:text-white">Subscribe</p>
            </button>

            {/* <a
              href="#"
              className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                alt=""
                className="mr-2 inline-block w-6"
              />
              <p className="text-black">View Showreel</p>
            </a> */}
          </div>
        </div>
      </div>

      {/* BG Images */}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt=""
        className="hidden sm:inline-block absolute bottom-0 left-0 right-auto top-auto -z-10 md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
      />
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt=""
        className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
      />

      {/* Subscription Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>

            <h2 className="mb-6 text-2xl font-semibold">Join Our Newsletter</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#1353fe] focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#1353fe] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1353fe] px-6 py-3 font-semibold text-white hover:bg-[#0d46d0] transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
import { Users, Rocket, Handshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-32 w-32 text-blue-600 opacity-20" />
              </div>
              <div className="relative flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <Rocket className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    500+ Jobs Posted
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Connecting talent with opportunities across Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Our Job Portal
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're dedicated to revolutionizing the job search experience in
              Pakistan. Our platform connects talented professionals with top
              employers across major industries, making the hiring process
              seamless and efficient.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Handshake className="h-6 w-6 text-blue-600" />,
                  title: 'Trusted Platform',
                  desc: 'Verified employers and authentic listings',
                },
                {
                  icon: <Rocket className="h-6 w-6 text-blue-600" />,
                  title: 'Fast Results',
                  desc: '85% of applicants hear back within a week',
                },
              ].map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-blue-700"
              >
                Learn more about us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

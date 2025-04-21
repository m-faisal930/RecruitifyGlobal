import { useParams } from 'react-router-dom';
import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiClock,
  FiCalendar,
  FiChevronLeft,
} from 'react-icons/fi';
import { useJobs } from '../context/JobContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobDetailsPage = () => {
  const { id } = useParams();
  const { jobs } = useJobs();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jobs.length > 0) {
      const foundJob = jobs.find((j) => j._id === id);
      setJob(foundJob);
      setLoading(false);
    }
  }, [id, jobs]);

  // Format date to "Posted X days ago" format
  const formatPostedDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Format deadline date
  const formatDeadline = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse bg-white rounded-xl shadow-sm p-8">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 rounded w-full mb-2"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Job Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                The job you're looking for doesn't exist or may have been
                removed.
              </p>
              <Link
                to="/jobs"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiChevronLeft className="mr-2" />
                Back to Jobs
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-10">
        {/* Back button and apply section */}
        <div className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-4 flex flex-col sm:flex-row justify-between items-center">
              <Link
                to="/jobs"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-0"
              >
                <FiChevronLeft className="mr-1" />
                Back to all jobs
              </Link>
              <Link to={`/apply/${job._id}`} className="flex-shrink-0">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md">
                Apply Now
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main job details */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Job header */}
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    {job.department} • {job.location}
                  </p>
                </div>
                <div className="flex items-center sm:block sm:text-right">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      job.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Meta information */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FiBriefcase className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">{job.type}</span>
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">
                    {formatPostedDate(job.posted)}
                  </span>
                </div>
              </div>
            </div>

            {/* Job content */}
            <div className="p-6 sm:p-8">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 mb-6">{job.description}</p>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <FiCalendar className="mr-2 text-blue-500" />
                      Application Deadline
                    </h3>
                    <p className="text-gray-700">
                      {formatDeadline(job.deadline)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <FiMapPin className="mr-2 text-blue-500" />
                      Location
                    </h3>
                    <p className="text-gray-700">{job.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-gray-50 px-6 sm:px-8 py-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Ready to apply?
                  </h3>
                  <p className="text-gray-600">
                    Submit your application before the deadline.
                  </p>
                </div>
                <Link to={`/apply/${job._id}`} className="flex-shrink-0">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:cursor-pointer hover:to-indigo-700 transition-colors shadow-md w-full sm:w-auto">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetailsPage;

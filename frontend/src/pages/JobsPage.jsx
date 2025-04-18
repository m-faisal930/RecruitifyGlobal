import { useState, useEffect } from 'react';
import { FiSearch, FiBriefcase, FiMapPin, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



// Jobs Listing Page
const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    salary: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Mock data fetch
  useEffect(() => {
    const fetchJobs = async () => {
      // Simulate API call
      setTimeout(() => {
        setJobs([
          {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechSolutions Inc.",
            location: "Lahore, Pakistan",
            type: "Full-time",
            salary: "150k - 200k",
            postedDate: "2 days ago",
            skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
          },
          {
            id: 2,
            title: "Backend Engineer",
            company: "DataSystems Ltd.",
            location: "Karachi, Pakistan",
            type: "Full-time",
            salary: "120k - 180k",
            postedDate: "1 week ago",
            skills: ["Node.js", "MongoDB", "AWS", "Docker"]
          },
          {
            id: 3,
            title: "UX Designer",
            company: "CreativeMinds",
            location: "Islamabad, Pakistan",
            type: "Contract",
            salary: "80k - 120k",
            postedDate: "3 days ago",
            skills: ["Figma", "UI/UX", "Prototyping", "User Research"]
          },
          {
            id: 4,
            title: "DevOps Specialist",
            company: "CloudTech",
            location: "Remote",
            type: "Full-time",
            salary: "180k - 250k",
            postedDate: "Just now",
            skills: ["Kubernetes", "CI/CD", "Terraform", "AWS"]
          },
          {
            id: 5,
            title: "Product Manager",
            company: "InnovatePK",
            location: "Lahore, Pakistan",
            type: "Full-time",
            salary: "200k - 300k",
            postedDate: "5 days ago",
            skills: ["Agile", "Scrum", "Product Roadmap", "Market Research"]
          },
          {
            id: 6,
            title: "Data Scientist",
            company: "AnalyticsPro",
            location: "Karachi, Pakistan",
            type: "Part-time",
            salary: "100k - 150k",
            postedDate: "1 day ago",
            skills: ["Python", "Machine Learning", "Pandas", "SQL"]
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchJobs();
  }, []);

  // Filter jobs based on filters
  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.location === '' || job.location.includes(filters.location)) &&
      (filters.type === '' || job.type === filters.type) &&
      (filters.salary === '' || 
        (parseInt(job.salary.split('k')[0]) >= parseInt(filters.salary))
    )
  )}
  );

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-gray-50 mt-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Find Your Dream Job
            </h1>
            <p className="mt-2 text-lg">
              Browse {jobs.length} opportunities across Pakistan
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or keywords"
                  className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>

              {/* Location */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiMapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                >
                  <option value="">All Locations</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Job Type */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Salary */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-400">PKR</span>
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-12 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.salary}
                  onChange={(e) =>
                    setFilters({ ...filters, salary: e.target.value })
                  }
                >
                  <option value="">Any Salary</option>
                  <option value="50">50k+</option>
                  <option value="100">100k+</option>
                  <option value="150">150k+</option>
                  <option value="200">200k+</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredJobs.length}</span>{' '}
              results
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Sort by:</span>
              <select className="rounded-lg border-0 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500">
                <option>Most Recent</option>
                <option>Highest Salary</option>
                <option>Most Relevant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4 mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-24 ml-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredJobs.length === 0 ? (
                <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">
                    No jobs found
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Try adjusting your search filters
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        search: '',
                        location: '',
                        type: '',
                        salary: '',
                      })
                    }
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {currentJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-between">
                      <button
                        onClick={() =>
                          paginate(currentPage > 1 ? currentPage - 1 : 1)
                        }
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <FiChevronLeft className="h-5 w-5" />
                        Previous
                      </button>
                      <div className="hidden sm:flex sm:gap-2">
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium ${
                              currentPage === index + 1
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          paginate(
                            currentPage < totalPages
                              ? currentPage + 1
                              : totalPages
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                        <FiChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsPage;
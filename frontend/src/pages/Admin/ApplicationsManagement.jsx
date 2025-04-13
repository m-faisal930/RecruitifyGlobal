// import { useState } from 'react';
// import {
//   FaSearch,
//   FaFileAlt,
//   FaCheck,
//   FaTimes,
//   FaEnvelope,
// } from 'react-icons/fa';

// const ApplicantsManagement = () => {
//   const [applicants, setApplicants] = useState([
//     {
//       id: 1,
//       name: 'Ali Khan',
//       email: 'ali.khan@example.com',
//       job: 'Senior Frontend Developer',
//       status: 'pending',
//       applied: '2023-05-18',
//       cv: 'ali_khan_cv.pdf',
//     },
//     {
//       id: 2,
//       name: 'Fatima Ahmed',
//       email: 'fatima.ahmed@example.com',
//       job: 'Backend Engineer',
//       status: 'reviewed',
//       applied: '2023-05-15',
//       cv: 'fatima_ahmed_cv.pdf',
//     },
//     {
//       id: 3,
//       name: 'Usman Malik',
//       email: 'usman.malik@example.com',
//       job: 'UX Designer',
//       status: 'rejected',
//       applied: '2023-05-10',
//       cv: 'usman_malik_cv.pdf',
//     },
//     {
//       id: 4,
//       name: 'Sana Khan',
//       email: 'sana.khan@example.com',
//       job: 'DevOps Specialist',
//       status: 'shortlisted',
//       applied: '2023-05-08',
//       cv: 'sana_khan_cv.pdf',
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('all');

//   const updateStatus = (id, newStatus) => {
//     setApplicants(
//       applicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: newStatus } : applicant
//       )
//     );
//   };

//   const filteredApplicants = applicants.filter((applicant) => {
//     const matchesSearch =
//       applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       applicant.job.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesStatus =
//       selectedStatus === 'all' || applicant.status === selectedStatus;

//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
//           Applicants Management
//         </h1>
//         <div className="flex space-x-3 w-full sm:w-auto">
//           <div className="relative flex-1 sm:w-64">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search applicants..."
//               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <select
//             className="block w-full sm:w-40 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             value={selectedStatus}
//             onChange={(e) => setSelectedStatus(e.target.value)}
//           >
//             <option value="all">All Statuses</option>
//             <option value="pending">Pending</option>
//             <option value="reviewed">Reviewed</option>
//             <option value="shortlisted">Shortlisted</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>
//       </div>

//       {/* Applicants Table */}
//       <div className="bg-white shadow-sm rounded-xl overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Applicant
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Job Applied
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Applied On
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   CV
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Status
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredApplicants.map((applicant) => (
//                 <tr key={applicant.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="font-medium text-gray-900">
//                       {applicant.name}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {applicant.email}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {applicant.job}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {applicant.applied}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <a
//                       href={`/cvs/${applicant.cv}`}
//                       className="text-blue-600 hover:text-blue-800 inline-flex items-center"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaFileAlt className="mr-1" /> View CV
//                     </a>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         applicant.status === 'pending'
//                           ? 'bg-yellow-100 text-yellow-800'
//                           : applicant.status === 'reviewed'
//                           ? 'bg-blue-100 text-blue-800'
//                           : applicant.status === 'shortlisted'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-red-100 text-red-800'
//                       }`}
//                     >
//                       {applicant.status.charAt(0).toUpperCase() +
//                         applicant.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <div className="flex justify-end space-x-3">
//                       <button
//                         onClick={() =>
//                           updateStatus(applicant.id, 'shortlisted')
//                         }
//                         className="text-gray-500 hover:text-green-600"
//                         title="Shortlist"
//                       >
//                         <FaCheck size={16} />
//                       </button>
//                       <button
//                         onClick={() => updateStatus(applicant.id, 'rejected')}
//                         className="text-gray-500 hover:text-red-600"
//                         title="Reject"
//                       >
//                         <FaTimes size={16} />
//                       </button>
//                       <button
//                         className="text-gray-500 hover:text-blue-600"
//                         title="Send Email"
//                       >
//                         <FaEnvelope size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicantsManagement;





















































import { useState } from 'react';
import {
  FaSearch,
  FaFileAlt,
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaCalendarAlt,
  FaUserTie,
  FaGraduationCap,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ApplicantsManagement = () => {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: 'Ali Khan',
      email: 'ali.khan@example.com',
      phone: '+923001234567',
      linkedin: 'linkedin.com/in/alikhan',
      jobId: 101,
      jobTitle: 'Senior Frontend Developer',
      status: 'pending',
      appliedDate: '2023-05-18',
      cv: 'ali_khan_cv.pdf',
      coverLetter:
        'Experienced React developer with 5+ years in building scalable applications...',
      education: 'BS Computer Science - LUMS (2018)',
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Redux', 'Node.js'],
      notes: '',
    },
    {
      id: 2,
      name: 'Fatima Ahmed',
      email: 'fatima.ahmed@example.com',
      phone: '+923001234568',
      linkedin: 'linkedin.com/in/fatimaahmed',
      jobId: 102,
      jobTitle: 'Backend Engineer',
      status: 'reviewed',
      appliedDate: '2023-05-15',
      cv: 'fatima_ahmed_cv.pdf',
      coverLetter:
        'Backend specialist with expertise in Node.js and database design...',
      education: 'MS Software Engineering - FAST (2020)',
      experience: '4 years',
      skills: ['Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      notes: 'Strong background in database optimization',
    },
    {
      id: 3,
      name: 'Usman Malik',
      email: 'usman.malik@example.com',
      phone: '+923001234569',
      linkedin: 'linkedin.com/in/usmanmalik',
      jobId: 103,
      jobTitle: 'UX Designer',
      status: 'rejected',
      appliedDate: '2023-05-10',
      cv: 'usman_malik_cv.pdf',
      coverLetter:
        'Creative designer with a focus on user-centered design principles...',
      education: 'BFA Design - NCA (2019)',
      experience: '3 years',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      notes: 'Portfolio review needed',
    },
    {
      id: 4,
      name: 'Sana Khan',
      email: 'sana.khan@example.com',
      phone: '+923001234570',
      linkedin: 'linkedin.com/in/sanakhan',
      jobId: 104,
      jobTitle: 'DevOps Specialist',
      status: 'shortlisted',
      appliedDate: '2023-05-08',
      cv: 'sana_khan_cv.pdf',
      coverLetter:
        'DevOps engineer with CI/CD pipeline expertise and cloud infrastructure management...',
      education: 'BS Computer Engineering - GIKI (2017)',
      experience: '6 years',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      notes: 'Scheduled for technical interview',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedJob, setSelectedJob] = useState('all');
  const [notes, setNotes] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // Unique job titles for filter dropdown
  const jobTitles = [...new Set(applicants.map((app) => app.jobTitle))];

  const updateStatus = (id, newStatus) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: newStatus } : applicant
      )
    );
  };

  const saveNotes = (id) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id ? { ...applicant, notes } : applicant
      )
    );
    setNotes('');
  };

  const viewApplicantDetails = (applicant) => {
    setSelectedApplicant(applicant);
    navigate(`/admin/applicants/${applicant.id}`);
  };

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === 'all' || applicant.status === selectedStatus;

    const matchesJob =
      selectedJob === 'all' || applicant.jobTitle === selectedJob;

    return matchesSearch && matchesStatus && matchesJob;
  });

  const statusCounts = applicants.reduce((acc, applicant) => {
    acc[applicant.status] = (acc[applicant.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Applicants Management
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applicants..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="block w-full sm:w-40 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="pending">
              Pending ({statusCounts.pending || 0})
            </option>
            <option value="reviewed">
              Reviewed ({statusCounts.reviewed || 0})
            </option>
            <option value="shortlisted">
              Shortlisted ({statusCounts.shortlisted || 0})
            </option>
            <option value="rejected">
              Rejected ({statusCounts.rejected || 0})
            </option>
          </select>
          <select
            className="block w-full sm:w-48 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            <option value="all">All Jobs</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Applicants
              </p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {applicants.length}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FaUserTie size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Shortlisted</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.shortlisted || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600">
              <FaCheck size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Review
              </p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.pending || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <FaFileAlt size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Rejected</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.rejected || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600">
              <FaTimes size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Applicants Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applicant
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applied
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Experience
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => viewApplicantDetails(applicant)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {applicant.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {applicant.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {applicant.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {applicant.jobTitle}
                    </div>
                    <div className="text-sm text-gray-500">
                      #{applicant.jobId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {applicant.appliedDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {applicant.experience}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        applicant.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : applicant.status === 'reviewed'
                          ? 'bg-blue-100 text-blue-800'
                          : applicant.status === 'shortlisted'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {applicant.status.charAt(0).toUpperCase() +
                        applicant.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(applicant.id, 'shortlisted');
                        }}
                        className="text-gray-500 hover:text-green-600 p-1 rounded-full hover:bg-green-50"
                        title="Shortlist"
                      >
                        <FaCheck size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(applicant.id, 'rejected');
                        }}
                        className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                        title="Reject"
                      >
                        <FaTimes size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${applicant.email}`;
                        }}
                        className="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50"
                        title="Send Email"
                      >
                        <FaEnvelope size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicant Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-semibold text-gray-900">
                Applicant Details
              </h3>
              <button
                onClick={() => setSelectedApplicant(null)}
                className="text-gray-400 hover:text-gray-500 p-1"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold mb-4">
                        {selectedApplicant.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {selectedApplicant.name}
                      </h3>
                      <p className="text-gray-500">
                        {selectedApplicant.jobTitle}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Contact Information
                        </h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-400" />
                            <a
                              href={`mailto:${selectedApplicant.email}`}
                              className="hover:text-blue-600"
                            >
                              {selectedApplicant.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <FaPhone className="mr-2 text-gray-400" />
                            <a
                              href={`tel:${selectedApplicant.phone}`}
                              className="hover:text-blue-600"
                            >
                              {selectedApplicant.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <FaLinkedin className="mr-2 text-gray-400" />
                            <a
                              href={`https://${selectedApplicant.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600"
                            >
                              {selectedApplicant.linkedin}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Education
                        </h4>
                        <p className="mt-2 text-sm text-gray-700 flex items-center">
                          <FaGraduationCap className="mr-2 text-gray-400" />
                          {selectedApplicant.education}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Experience
                        </h4>
                        <p className="mt-2 text-sm text-gray-700">
                          {selectedApplicant.experience}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Skills
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {selectedApplicant.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Cover Letter
                      </h4>
                      <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                        {selectedApplicant.coverLetter}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Documents
                      </h4>
                      <div className="mt-2">
                        <a
                          href={`/cvs/${selectedApplicant.cv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <FaFileAlt className="mr-2" />
                          View CV
                          <FaExternalLinkAlt className="ml-2 text-xs" />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Status
                      </h4>
                      <div className="mt-2 flex items-center space-x-4">
                        <select
                          value={selectedApplicant.status}
                          onChange={(e) => {
                            setSelectedApplicant({
                              ...selectedApplicant,
                              status: e.target.value,
                            });
                            updateStatus(selectedApplicant.id, e.target.value);
                          }}
                          className="block w-48 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Notes
                      </h4>
                      <div className="mt-2">
                        <textarea
                          rows={3}
                          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Add private notes about this applicant..."
                          value={selectedApplicant.notes || ''}
                          onChange={(e) =>
                            setSelectedApplicant({
                              ...selectedApplicant,
                              notes: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => saveNotes(selectedApplicant.id)}
                          className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${selectedApplicant.email}`)
                        }
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FaEnvelope className="mr-2" />
                        Send Email
                      </button>
                      <button
                        onClick={() =>
                          (window.location.href = `tel:${selectedApplicant.phone}`)
                        }
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FaPhone className="mr-2" />
                        Call Applicant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsManagement;
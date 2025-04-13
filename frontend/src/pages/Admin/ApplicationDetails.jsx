import { useParams, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFileAlt,
  FaCalendarAlt,
  FaUserTie,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCheck,
  FaTimes,
  FaEdit,
} from 'react-icons/fa';
import { useState } from 'react';

// Mock data - replace with API calls in your implementation
const mockApplications = [
  {
    id: '1',
    name: 'Ali Khan',
    email: 'ali.khan@example.com',
    phone: '+923001234567',
    linkedin: 'linkedin.com/in/alikhan',
    jobId: '101',
    jobTitle: 'Senior Frontend Developer',
    status: 'shortlisted',
    appliedDate: '2023-05-18',
    cv: 'ali_khan_cv.pdf',
    coverLetter:
      'Experienced React developer with 5+ years in building scalable applications. I have extensive experience with modern JavaScript frameworks and a proven track record of delivering high-quality user interfaces.',
    education: 'BS Computer Science - LUMS (2018)',
    experience: '5 years',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'GraphQL', 'Jest'],
    notes: 'Strong technical skills. Scheduled for final interview on June 15.',
    screeningQuestions: [
      { question: 'Years of React experience', answer: '5 years' },
      {
        question: 'Familiarity with testing',
        answer: 'Experience with Jest and React Testing Library',
      },
    ],
  },
];

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');

  // In a real app, you would fetch this data from your backend
  const application = mockApplications.find((app) => app.id === id);

  if (!application) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Application not found</p>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    // Here you would make an API call to update the status
    console.log(`Status changed to ${newStatus}`);
  };

  const saveNotes = () => {
    // Here you would make an API call to save the notes
    console.log('Notes saved:', notes);
    setIsEditingNotes(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Applications
        </button>
        <div className="flex space-x-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              application.status === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : application.status === 'reviewed'
                ? 'bg-blue-100 text-blue-800'
                : application.status === 'shortlisted'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {application.status.charAt(0).toUpperCase() +
              application.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Candidate info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Candidate profile */}
            <div className="flex flex-col items-center mb-6">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold mb-4">
                {application.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {application.name}
              </h2>
              <p className="text-gray-500">{application.jobTitle}</p>
            </div>

            {/* Contact information */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    <a
                      href={`mailto:${application.email}`}
                      className="hover:text-blue-600"
                    >
                      {application.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaPhone className="mr-2 text-gray-400" />
                    <a
                      href={`tel:${application.phone}`}
                      className="hover:text-blue-600"
                    >
                      {application.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaLinkedin className="mr-2 text-gray-400" />
                    <a
                      href={`https://${application.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      {application.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Education
                </h3>
                <p className="text-sm text-gray-700 flex items-center">
                  <FaGraduationCap className="mr-2 text-gray-400" />
                  {application.education}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Experience
                </h3>
                <p className="text-sm text-gray-700 flex items-center">
                  <FaUserTie className="mr-2 text-gray-400" />
                  {application.experience}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {application.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applied date */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Applied
                </h3>
                <p className="text-sm text-gray-700 flex items-center">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  {application.appliedDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Application details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Cover letter */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Cover Letter
              </h3>
              <div className="prose max-w-none text-gray-700">
                <p>{application.coverLetter}</p>
              </div>
            </div>

            {/* Screening questions */}
            {application.screeningQuestions && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Screening Questions
                </h3>
                <div className="space-y-4">
                  {application.screeningQuestions.map((q, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-700">
                        {q.question}
                      </h4>
                      <p className="text-gray-600 mt-1">{q.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Documents
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`/cvs/${application.cv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaFileAlt className="mr-2" />
                  View CV
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
                {/* Additional documents would be listed here */}
              </div>
            </div>

            {/* Status update */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Update Status
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleStatusChange('shortlisted')}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    status === 'shortlisted' ||
                    application.status === 'shortlisted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <FaCheck className="mr-2" />
                  Shortlist
                </button>
                <button
                  onClick={() => handleStatusChange('rejected')}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    status === 'rejected' || application.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <FaTimes className="mr-2" />
                  Reject
                </button>
                <button
                  onClick={() => handleStatusChange('reviewed')}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    status === 'reviewed' || application.status === 'reviewed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Reviewed
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Private Notes
                </h3>
                {!isEditingNotes && (
                  <button
                    onClick={() => {
                      setNotes(application.notes || '');
                      setIsEditingNotes(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    <FaEdit className="mr-1" />
                    Edit
                  </button>
                )}
              </div>

              {isEditingNotes ? (
                <div>
                  <textarea
                    rows={3}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end space-x-3 mt-3">
                    <button
                      onClick={() => setIsEditingNotes(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveNotes}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Save Notes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="prose max-w-none text-gray-700">
                  {application.notes || (
                    <p className="text-gray-400">No notes yet</p>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${application.email}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaEnvelope className="mr-2" />
                Send Email
              </a>
              <a
                href={`tel:${application.phone}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaPhone className="mr-2" />
                Call Candidate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;

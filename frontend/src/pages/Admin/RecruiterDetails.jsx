import { useParams, useNavigate } from 'react-router-dom';
import {
    FaEdit,
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RecruiterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [recruiter, setRecruiter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recruiter details on component mount
  useEffect(() => {
    const fetchRecruiter = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recruiters/${id}`
        );
        setRecruiter(response.data.data);
        setNotes(response.data.data.notes || '');
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchRecruiter();
  }, [id]);

  const saveNotes = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/recruiters/${id}`, {
        notes: notes,
      });
      setIsEditingNotes(false);
      setRecruiter((prev) => ({ ...prev, notes: notes }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save notes');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading recruiter details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!recruiter) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Recruiter not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Recruiters
        </button>

        <div className="flex space-x-3">
          {recruiter.status && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center">
              {/* <FaCheckCircle className="mr-1" /> */}
              {recruiter.status}
            </span>
          )}
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Recruiter info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            {/* Recruiter profile */}
            <div className="flex flex-col items-center mb-6">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold mb-4">
                {recruiter.contactPerson.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                {recruiter.contactPerson}
              </h2>
              <p className="text-gray-500">{recruiter.companyName}</p>
            </div>

            {/* Contact information */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-medium text-gray-500 mt-6 mb-2">
                  Contact Information
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    <a
                      href={`mailto:${recruiter.email}`}
                      className="hover:text-blue-600"
                    >
                      {recruiter.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaPhone className="mr-2 text-gray-400" />
                    <a
                      href={`tel:${recruiter.phone}`}
                      className="hover:text-blue-600"
                    >
                      {recruiter.phone}
                    </a>
                  </div>
                  {recruiter.companyWebsite && (
                    <div className="flex items-center text-sm text-gray-700">
                      <FaGlobe className="mr-2 text-gray-400" />
                      <a
                        href={recruiter.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                      >
                        {recruiter.companyWebsite}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Company Details */}
              <div>
                <h2 className="text-2xl font-medium text-gray-500 mt-6 mb-2">
                  Company Information
                  <FaBuilding className="ml-2 text-gray-400 inline-block" />
                </h2>
                <div className="space-y-3">
                  {recruiter.industry && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Industry
                      </h4>
                      <p className="text-sm text-gray-700">
                        {recruiter.industry}
                      </p>
                    </div>
                  )}

                  {recruiter.companySize && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Company Size
                      </h4>
                      <p className="text-sm text-gray-700 flex items-center">
                        <FaUsers className="mr-2 text-gray-400" />
                        {recruiter.companySize}
                      </p>
                    </div>
                  )}

                  {recruiter.hiringNeeds && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Hiring Needs
                      </h4>
                      <p className="text-sm text-gray-700 flex items-center">
                        <FaBriefcase className="mr-2 text-gray-400" />
                        {recruiter.hiringNeeds}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Created date */}
              {recruiter.createdAt && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Joined Platform
                  </h3>
                  <p className="text-sm text-gray-700">
                    {new Date(recruiter.createdAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column - Additional details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Notes */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Private Notes
                </h3>
                {!isEditingNotes && (
                  <button
                    onClick={() => setIsEditingNotes(true)}
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
                  {recruiter.notes || (
                    <p className="text-gray-400">No notes yet</p>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${recruiter.email}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaEnvelope className="mr-2" />
                Send Email
              </a>
              <a
                href={`tel:${recruiter.phone}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaPhone className="mr-2" />
                Call Recruiter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDetails;

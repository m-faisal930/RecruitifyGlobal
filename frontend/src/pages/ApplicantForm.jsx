import React, { useState } from 'react';
import { FiUpload, FiTrash2, FiPlus, FiCalendar, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    headline: '',
    phone: '',
    address: '',
    summary: '',
    resume: null,
    coverLetter: null,
    skills: '',
    languages: '',
  });

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  const [newEducation, setNewEducation] = useState({
    school: '',
    field: '',
    degree: '',
    start: '',
    end: '',
  });

  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    industry: '',
    summary: '',
    start: '',
    end: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email';
    } else if (name === 'phone' && !/^[0-9+\-\s]+$/.test(value)) {
      error = 'Please enter a valid phone number';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [name]: 'File size should be less than 5MB' }));
        return;
      }
      setErrors(prev => ({ ...prev, [name]: '' }));
      setFormData(prev => ({ ...prev, [name]: file }));
    }
  };

  const handleEducationInputChange = (e) => {
    setNewEducation(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleExperienceInputChange = (e) => {
    setNewExperience(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addEducation = () => {
    const requiredFields = ['school', 'field', 'degree', 'start', 'end'];
    const missingFields = requiredFields.filter(field => !newEducation[field].trim());

    if (missingFields.length > 0) {
      alert(`Please fill out all education fields: ${missingFields.join(', ')}`);
      return;
    }

    const startDate = new Date(newEducation.start);
    const endDate = new Date(newEducation.end);

    if (startDate >= endDate) {
      alert('Start date must be earlier than end date for education.');
      return;
    }

    setEducationList(prev => [...prev, newEducation]);
    setNewEducation({ school: '', field: '', degree: '', start: '', end: '' });
  };

  const addExperience = () => {
    const requiredFields = ['title', 'company', 'start', 'end'];
    const missingFields = requiredFields.filter(field => !newExperience[field].trim());

    if (missingFields.length > 0) {
      alert(`Please fill out all required experience fields: ${missingFields.join(', ')}`);
      return;
    }

    if (newExperience.summary.length > 300) {
      alert('Summary must be under 300 characters.');
      return;
    }

    const startDate = new Date(newExperience.start);
    const endDate = new Date(newExperience.end);

    if (startDate >= endDate) {
      alert('Start date must be earlier than end date for experience.');
      return;
    }

    setExperienceList(prev => [...prev, newExperience]);
    setNewExperience({
      title: '',
      company: '',
      industry: '',
      summary: '',
      start: '',
      end: '',
    });
  };

  const deleteEducation = (index) => {
    setEducationList(prev => prev.filter((_, i) => i !== index));
  };

  const deleteExperience = (index) => {
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'headline', 'resume'];
    const newErrors = {};

    requiredFields.forEach(field => {
      const value = formData[field];
      if (!value || (typeof value === 'string' && !value.trim())) {
        newErrors[field] = 'This field is required';
      }
    });

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (Array.isArray(value)) {
          // Handle arrays if needed
        } else if (typeof value === 'object' && value !== null) {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value);
        }
      });

      educationList.forEach((edu, index) => {
        Object.entries(edu).forEach(([key, value]) => {
          formDataToSend.append(`education[${index}].${key}`, value);
        });
      });

      experienceList.forEach((exp, index) => {
        Object.entries(exp).forEach(([key, value]) => {
          formDataToSend.append(`experience[${index}].${key}`, value);
        });
      });

      // Simulated API submission
      console.log('Form data submitted:', Object.fromEntries(formDataToSend.entries()));
      alert('Application submitted successfully!');

      // Reset
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        headline: '',
        phone: '',
        address: '',
        summary: '',
        resume: null,
        coverLetter: null,
        skills: '',
        languages: '',
      });
      setEducationList([]);
      setExperienceList([]);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Job Application Form</h2>
          <p className="opacity-90">Complete the form to apply for the position</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Info Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'firstName', label: 'First Name', type: 'text' },
                { name: 'lastName', label: 'Last Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700 font-medium mb-1">
                    {field.label}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">
                Professional Headline
                <span className="text-red-500">*</span>
              </label>
              <input
                name="headline"
                type="text"
                value={formData.headline}
                onChange={handleChange}
                placeholder="e.g., Senior Frontend Developer"
                className={`w-full border ${errors.headline ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.headline && <p className="text-red-500 text-sm mt-1">{errors.headline}</p>}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </section>

          {/* Summary Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Professional Summary
            </h3>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows={4}
              placeholder="Briefly describe your professional background and key achievements..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <FiBookOpen className="w-5 h-5" />
              </span>
              Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { name: 'school', label: 'School/University', placeholder: 'Harvard University' },
                { name: 'degree', label: 'Degree', placeholder: 'Bachelor of Science' },
                { name: 'field', label: 'Field of Study', placeholder: 'Computer Science' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-600 text-sm mb-1">{field.label}</label>
                  <input
                    name={field.name}
                    value={newEducation[field.name]}
                    onChange={handleEducationInputChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Start Date</label>
                  <div className="relative">
                    <input
                      name="start"
                      type="date"
                      value={newEducation.start}
                      onChange={handleEducationInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">End Date</label>
                  <div className="relative">
                    <input
                      name="end"
                      type="date"
                      value={newEducation.end}
                      onChange={handleEducationInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={addEducation}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <FiPlus className="mr-2" />
              Add Education
            </button>

            {educationList.length > 0 && (
              <div className="mt-4 space-y-3">
                {educationList.map((edu, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex justify-between items-start bg-gray-50">
                    <div>
                      <h4 className="font-medium">{edu.degree} in {edu.field}</h4>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.start} - {edu.end}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteEducation(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Delete education"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Experience Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <FiBriefcase className="w-5 h-5" />
              </span>
              Work Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { name: 'title', label: 'Job Title', placeholder: 'Software Engineer' },
                { name: 'company', label: 'Company', placeholder: 'Tech Corp Inc.' },
                { name: 'industry', label: 'Industry', placeholder: 'Information Technology' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-600 text-sm mb-1">{field.label}</label>
                  <input
                    name={field.name}
                    value={newExperience[field.name]}
                    onChange={handleExperienceInputChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Start Date</label>
                  <div className="relative">
                    <input
                      name="start"
                      type="date"
                      value={newExperience.start}
                      onChange={handleExperienceInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">End Date</label>
                  <div className="relative">
                    <input
                      name="end"
                      type="date"
                      value={newExperience.end}
                      onChange={handleExperienceInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-600 text-sm mb-1">Summary</label>
                <textarea
                  name="summary"
                  value={newExperience.summary}
                  onChange={handleExperienceInputChange}
                  rows={3}
                  placeholder="Describe your responsibilities and achievements..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{newExperience.summary.length}/300 characters</p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={addExperience}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <FiPlus className="mr-2" />
              Add Experience
            </button>

            {experienceList.length > 0 && (
              <div className="mt-4 space-y-3">
                {experienceList.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex justify-between items-start bg-gray-50">
                    <div>
                      <h4 className="font-medium">{exp.title} at {exp.company}</h4>
                      <p className="text-gray-600">{exp.industry}</p>
                      <p className="text-sm text-gray-500">{exp.start} - {exp.end}</p>
                      {exp.summary && <p className="mt-2 text-gray-700 text-sm">{exp.summary}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteExperience(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Delete experience"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Skills & Languages */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Skills & Languages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Skills</label>
                <input
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., JavaScript, React, Project Management"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Languages</label>
                <input
                  name="languages"
                  type="text"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="e.g., English (Fluent), Spanish (Basic)"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <FiUpload className="w-5 h-5" />
              </span>
              Documents
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className={`border ${errors.resume ? 'border-red-500' : 'border-gray-300'} rounded-lg p-4`}>
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {formData.resume ? formData.resume.name : 'Upload your resume'}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC or DOCX (Max 5MB)</p>
                    <input
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                </div>
                {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Cover Letter (Optional)</label>
                <div className="border border-gray-300 rounded-lg p-4">
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {formData.coverLetter ? formData.coverLetter.name : 'Upload your cover letter'}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC or DOCX (Max 5MB)</p>
                    <input
                      name="coverLetter"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Submit Section */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Required fields
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;
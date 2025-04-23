// src/components/FeaturedJobsSection.jsx
import React from 'react';
import JobCard from './JobCard';

const dummyJobs = [
  {
    id: '1',
    title: 'Workplace Site Manager',
    location: 'Sunnyvale, CA, USA',
    type: 'Full Time',
    experience: '3–5 Years',
    salary: '$125K–$175K/yr',
    postedOn: '2025-04-20',
    skills: ['Project Mgmt', 'Safety', 'Coordination', 'Budgeting'],
    onView: () => alert('Viewing Workplace Site Manager'),
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    location: 'New York, NY, USA',
    type: 'Full Time',
    experience: '2–4 Years',
    salary: '$90K–$120K/yr',
    postedOn: '2025-04-18',
    skills: ['React', 'JavaScript', 'CSS', 'HTML'],
    onView: () => alert('Viewing Frontend Engineer'),
  },
  {
    id: '3',
    title: 'Data Analyst',
    location: 'London, UK',
    type: 'Part Time',
    experience: '1–3 Years',
    salary: '£60K–£80K/yr',
    postedOn: '2025-04-17',
    skills: ['SQL', 'Excel', 'Python', 'BI Tools'],
    onView: () => alert('Viewing Data Analyst'),
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    location: 'Berlin, Germany',
    type: 'Contract',
    experience: '5+ Years',
    salary: '€50K–€70K/yr',
    postedOn: '2025-04-19',
    skills: ['Figma', 'Prototyping', 'User Res.', 'Adobe XD'],
    onView: () => alert('Viewing UX/UI Designer'),
  },
];

export default function FeaturedJobsSection() {
  return (
    <section id="jobs" className="bg-light py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-work text-3xl text-dark mb-8">Featured Jobs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dummyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

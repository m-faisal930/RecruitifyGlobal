import React from 'react'
import { Link } from 'react-router-dom';

export default function ViewmoreButton() {
  return (
    <div>
      <Link
        to={'/jobs'}
        className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center"
      >
        <span>View More Jobs</span>
        <svg
          className="w-6 h-6 ml-2"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        //   className=""
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
    </div>
  );
}

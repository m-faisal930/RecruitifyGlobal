// src/components/PageHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * @param {{ breadcrumbs: { label: string, href: string }[] }} props
 */
export default function PageHero({ breadcrumbs }) {
  return (
    <section id="page-hero" className="relative bg-light py-5 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/3 bg-buttons/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-dark/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 flex justify-center">
        <nav className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 space-x-2">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.href}>
                {isLast ? (
                  <span className="bg-buttons text-light font-work text-sm px-4 py-1 rounded-full">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="text-dark font-work text-sm hover:text-buttons transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-dark opacity-70" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

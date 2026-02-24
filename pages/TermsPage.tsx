import React from 'react';
import { Navigation } from '../components/Navigation';

export const TermsPage: React.FC = () => {
  return (
    <div className="font-sans text-base min-h-screen bg-aaag-light text-aaag-dark">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-aaag-blue">Terms of Service</h1>
        <p className="text-gray-700 leading-relaxed">
          This page describes the general terms for using AAAG informational materials.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For commercial or legal requests, contact us at info@aaag.kz.
        </p>
      </main>
    </div>
  );
};

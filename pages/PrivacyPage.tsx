import React from 'react';
import { Navigation } from '../components/Navigation';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="font-sans text-base min-h-screen bg-aaag-light text-aaag-dark">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-aaag-blue">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed">
          This page outlines how Alatau Advance Air Group handles contact and usage information.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For data requests or clarifications, contact us at info@aaag.kz.
        </p>
      </main>
    </div>
  );
};

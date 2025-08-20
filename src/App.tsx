import React from 'react';
import { Header } from './components/Header';
import { ProjectOverview } from './components/ProjectOverview';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow w-full">
        <ProjectOverview />
        <FeatureSection />
      </main>
      <Footer />
    </div>;
}
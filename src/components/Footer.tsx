import React from 'react';
export function Footer() {
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">
              SAP SuccessFactors Portfolio Project
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              HR Management System Simulation
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Portfolio Project. All rights
            reserved.
          </p>
          <p className="mt-1">
            This is a simulation project for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>;
}
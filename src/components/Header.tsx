import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Portfolio Project</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-200 transition-colors">Overview</li>
            <li className="hover:text-blue-200 transition-colors">Features</li>
            <li className="hover:text-blue-200 transition-colors">Contact</li>
          </ul>
        </nav>
      </div>
    </header>;
}
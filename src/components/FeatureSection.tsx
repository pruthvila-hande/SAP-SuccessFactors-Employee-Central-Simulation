import React from 'react';
import { UsersIcon, ShieldIcon, GlobeIcon, BarChart2Icon } from 'lucide-react';
export function FeatureSection() {
  const features = [{
    title: 'Employee Lifecycle Management',
    description: 'Simulated hire-to-retire processes by configuring Employee Central modules with comprehensive workflow automation for onboarding, transfers, promotions, and offboarding.',
    icon: <UsersIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'GDPR Compliance & Security',
    description: 'Improved data protection through role-based permissions, ensuring sensitive employee information is only accessible to authorized personnel in compliance with GDPR requirements.',
    icon: <ShieldIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Localization Workflows',
    description: 'Configured country-specific workflows and requirements to support global operations, including local legal regulations, time off policies, and compensation structures.',
    icon: <GlobeIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Workforce Analytics',
    description: 'Designed interactive Story Reports for workforce analytics, providing simulated real-time insights into headcount metrics, turnover rates, and demographic analysis.',
    icon: <BarChart2Icon className="h-10 w-10 text-blue-600" />
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Project Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Implementation Process
          </h3>
          <div className="space-y-6">
            <div className="relative pl-8 pb-6 border-l-2 border-blue-300">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                System Configuration
              </h4>
              <p className="text-gray-600">
                Set up core Employee Central modules, configured position
                management, and established organizational structures.
              </p>
            </div>
            <div className="relative pl-8 pb-6 border-l-2 border-blue-300">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Security & Compliance
              </h4>
              <p className="text-gray-600">
                Implemented role-based access controls and permission sets
                aligned with GDPR requirements.
              </p>
            </div>
            <div className="relative pl-8 pb-6 border-l-2 border-blue-300">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Workflow Development
              </h4>
              <p className="text-gray-600">
                Created and tested automated workflows for employee transactions
                across multiple countries.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800">
                Reporting & Analytics
              </h4>
              <p className="text-gray-600">
                Designed and implemented Story Reports for headcount tracking
                and turnover analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
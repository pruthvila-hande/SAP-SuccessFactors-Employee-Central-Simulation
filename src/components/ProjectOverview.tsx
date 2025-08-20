import React from 'react';
export function ProjectOverview() {
  return <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          SAP SuccessFactors Employee Central Simulation
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Training project focused on implementing and configuring a complete HR
          management system
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Dashboard visualization of SAP SuccessFactors" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Project Overview
              </h3>
              <p className="text-gray-700">
                A comprehensive simulation of SAP SuccessFactors Employee
                Central, focusing on the complete hire-to-retire process. This
                training project demonstrates proficiency in configuring HR
                modules, implementing security controls, and designing
                analytical reports.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Key Accomplishments
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Configured complete hire-to-retire employee lifecycle
                  processes
                </li>
                <li>Implemented GDPR-compliant role-based permissions</li>
                <li>Set up localization workflows for multiple regions</li>
                <li>
                  Designed analytical workforce reports for headcount and
                  turnover
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
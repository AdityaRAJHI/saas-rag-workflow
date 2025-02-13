import React from 'react';
import { Plus } from 'lucide-react';

const projects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'In Progress',
    resources: 5,
    progress: 65,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'Planning',
    resources: 3,
    progress: 25,
  },
  {
    id: '3',
    name: 'Database Migration',
    status: 'Completed',
    resources: 4,
    progress: 100,
  },
];

export function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.name}
                </h3>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${project.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-500">
                  Resources Allocated: {project.resources}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <button className="text-sm text-indigo-600 hover:text-indigo-900">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

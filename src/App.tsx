import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Box, Database, Flower as Flow } from 'lucide-react';
import { Dashboard } from './pages/Dashboard';
import { Resources } from './pages/Resources';
import { Projects } from './pages/Projects';
import { Workflows } from './pages/Workflows';
import { cn } from './lib/utils';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Database className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    RAG System
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      cn(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        isActive
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      )
                    }
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/resources"
                    className={({ isActive }) =>
                      cn(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        isActive
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      )
                    }
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Resources
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      cn(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        isActive
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      )
                    }
                  >
                    <Box className="h-4 w-4 mr-2" />
                    Projects
                  </NavLink>
                  <NavLink
                    to="/workflows"
                    className={({ isActive }) =>
                      cn(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        isActive
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      )
                    }
                  >
                    <Flow className="h-4 w-4 mr-2" />
                    Workflows
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/workflows" element={<Workflows />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

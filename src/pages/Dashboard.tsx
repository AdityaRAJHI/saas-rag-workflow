import React from 'react';
import { ResourceOverview } from '../components/ResourceOverview';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <ResourceOverview />
    </div>
  );
}

import React from 'react';
import { WorkflowEditor } from '../components/WorkflowEditor';

export function Workflows() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Workflows</h1>
      </div>
      <WorkflowEditor />
    </div>
  );
}

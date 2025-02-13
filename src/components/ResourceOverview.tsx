import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useResourceStore } from '../store/resourceStore';

export function ResourceOverview() {
  const resources = useResourceStore((state) => state.resources);

  const resourcesByType = resources.reduce((acc, resource) => {
    const type = resource.type;
    if (!acc[type]) {
      acc[type] = {
        type,
        total: 0,
        available: 0,
        averageUtilization: 0,
      };
    }
    acc[type].total += 1;
    if (resource.availability) acc[type].available += 1;
    acc[type].averageUtilization +=
      resource.utilizationPercentage / acc[type].total;
    return acc;
  }, {} as Record<string, any>);

  const chartData = Object.values(resourcesByType);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Resource Overview</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" name="Total Resources" />
            <Bar dataKey="available" fill="#82ca9d" name="Available" />
            <Bar
              dataKey="averageUtilization"
              fill="#ffc658"
              name="Avg. Utilization %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

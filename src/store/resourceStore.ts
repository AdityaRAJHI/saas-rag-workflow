import { create } from 'zustand';

export type ResourceType = 'HUMAN' | 'EQUIPMENT' | 'SOFTWARE';

export interface Resource {
  id: string;
  name: string;
  type: ResourceType;
  availability: boolean;
  utilizationPercentage: number;
}

interface ResourceState {
  resources: Resource[];
  addResource: (resource: Resource) => void;
  updateResource: (id: string, updates: Partial<Resource>) => void;
  removeResource: (id: string) => void;
}

export const useResourceStore = create<ResourceState>((set) => ({
  resources: [
    {
      id: '1',
      name: 'John Doe',
      type: 'HUMAN',
      availability: true,
      utilizationPercentage: 75,
    },
    {
      id: '2',
      name: 'Development Server',
      type: 'EQUIPMENT',
      availability: true,
      utilizationPercentage: 45,
    },
    {
      id: '3',
      name: 'Adobe Creative Suite',
      type: 'SOFTWARE',
      availability: true,
      utilizationPercentage: 30,
    },
  ],
  addResource: (resource) =>
    set((state) => ({
      resources: [...state.resources, resource],
    })),
  updateResource: (id, updates) =>
    set((state) => ({
      resources: state.resources.map((resource) =>
        resource.id === id ? { ...resource, ...updates } : resource
      ),
    })),
  removeResource: (id) =>
    set((state) => ({
      resources: state.resources.filter((resource) => resource.id !== id),
    })),
}));

import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ResourceNode } from './nodes/ResourceNode';
import { ProcessNode } from './nodes/ProcessNode';
import { TriggerNode } from './nodes/TriggerNode';

const nodeTypes = {
  resourceNode: ResourceNode,
  processNode: ProcessNode,
  triggerNode: TriggerNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'triggerNode',
    position: { x: 100, y: 100 },
    data: { label: 'Resource Request' },
  },
  {
    id: '2',
    type: 'processNode',
    position: { x: 400, y: 100 },
    data: { label: 'Check Availability' },
  },
  {
    id: '3',
    type: 'resourceNode',
    position: { x: 700, y: 100 },
    data: { label: 'Assign Resource' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export function WorkflowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[600px] bg-white rounded-lg shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

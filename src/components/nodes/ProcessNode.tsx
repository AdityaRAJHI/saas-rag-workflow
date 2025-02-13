import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Cog } from 'lucide-react';

export const ProcessNode = memo(({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      <div className="flex items-center">
        <Cog className="h-6 w-6 text-blue-500 mr-2" />
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  );
});

ProcessNode.displayName = 'ProcessNode';

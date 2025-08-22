import React from 'react';
import Math from './Math';

interface MathRendererProps {
  children: string;
  className?: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ children, className = '' }) => {
  // Split text by math delimiters
  const parts = children.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Check if it's a block math expression ($$...$$)
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const mathContent = part.slice(2, -2);
          return <Math key={index} block={true}>{mathContent}</Math>;
        }
        // Check if it's an inline math expression ($...$)
        else if (part.startsWith('$') && part.endsWith('$')) {
          const mathContent = part.slice(1, -1);
          return <Math key={index}>{mathContent}</Math>;
        }
        // Regular text
        else {
          return <span key={index}>{part}</span>;
        }
      })}
    </span>
  );
};

export default MathRenderer;

import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathProps {
  children: string;
  block?: boolean;
  className?: string;
}

const Math: React.FC<MathProps> = ({ children, block = false, className = '' }) => {
  try {
    if (block) {
      return <BlockMath math={children} className={`math-block ${className}`} />;
    } else {
      return <InlineMath math={children} className={`math-inline ${className}`} />;
    }
  } catch (error) {
    console.error('Math rendering error:', error);
    return (
      <span className={className} style={{ color: 'inherit' }}>
        {block ? `$$${children}$$` : `$${children}$`}
      </span>
    );
  }
};

export default Math;

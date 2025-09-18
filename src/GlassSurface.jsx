import { useEffect, useRef, useId } from 'react';
import './index.css';

const GlassSurface = ({ children, style = {}, className = '' }) => {
  return (
    <div className={`glass-surface ${className}`} style={style}>
      {children}
    </div>
  );
};

export default GlassSurface;

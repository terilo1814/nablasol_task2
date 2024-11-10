// Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="tooltip-icon" 
      onMouseEnter={() => setIsVisible(true)} 
      onMouseLeave={() => setIsVisible(false)}
    >❔
      {isVisible && <span className="tooltip-text">{text}</span>}
    </span>
  );
};

export default Tooltip;

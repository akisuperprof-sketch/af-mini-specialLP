import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center font-medium transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

export default Button;

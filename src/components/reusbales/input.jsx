import React from 'react';

const AquaInput = ({
  placeholder = 'Enter text...', // Default placeholder text
  value,
  onChange,
  type = 'text', // Default type is 'text'
  name,
  id,
  onBlur,
  onFocus,
  className = '', // Allows adding custom classes
  ...props // For any other props that may be passed
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props} // Spread any additional props (e.g., disabled, readOnly, etc.)
    />
  );
};

export default AquaInput;

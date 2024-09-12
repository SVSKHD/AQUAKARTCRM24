import React, { ReactNode } from 'react';
import clsx from 'clsx';

// Define the type for Button props
type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  padding?: 'normal' | 'tight' | 'loose';
  fullWidth?: boolean;
  disabled?: boolean;
};

const AquaButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'md',
  color = 'primary',
  padding = 'normal',
  fullWidth = false,
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium focus:outline-none rounded-lg transition duration-300';

  // Size variants
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-md py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };

  // Color variants
  const colorClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
  };

  // Padding variants
  const paddingClasses = {
    normal: '',
    tight: 'px-1 py-1',
    loose: 'px-8 py-4',
  };

  // Disabled state
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        colorClasses[color],
        paddingClasses[padding],
        disabledClasses,
        {
          'w-full': fullWidth,
        }
      )}
    >
      {children}
    </button>
  );
};

export default AquaButton;

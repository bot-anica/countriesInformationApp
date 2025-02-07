import React from 'react';

interface SpinnerProps {
  fullScreen?: boolean;
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  fullScreen = false, 
  size = 'medium',
  message = 'Loading...'
}) => {
  const sizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const spinnerContent = (
    <>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg
          className="text-white opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {message && <p className="mt-2 text-white text-opacity-80">{message}</p>}
    </>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#9C1AB1] to-[#3B0764]">
        {spinnerContent}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {spinnerContent}
    </div>
  );
};

export default Spinner; 
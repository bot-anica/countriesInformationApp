import React from 'react';

interface ErrorMessageProps {
  message: string;
  fullScreen?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9C1AB1] to-[#3B0764]">
        <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <svg 
                className="w-8 h-8 text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Error</h2>
            <p className="text-white text-opacity-80">{message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <p className="text-white text-opacity-80">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage; 
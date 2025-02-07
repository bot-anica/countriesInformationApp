import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const BackButton: React.FC = React.memo(() => {
  const navigate = useNavigate();
  
  const handleClick = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  return (
    <button
      onClick={handleClick}
      className="mb-8 px-4 sm:px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 
               text-white rounded-lg transition-all duration-200 text-sm sm:text-base"
    >
      ← Back to List
    </button>
  );
});

BackButton.displayName = 'BackButton';

export default BackButton; 
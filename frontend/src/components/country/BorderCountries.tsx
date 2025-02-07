import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICountryMainInfo } from '../../interfaces/ICountry';
import { MESSAGES, ROUTES } from '../../constants';
import { getWhiteOpacity } from '../../theme/utils';

interface BorderButtonProps {
  countryCode: string;
  commonName: string;
  onNavigate: (code: string) => void;
}

const BorderButton = React.memo(({ countryCode, commonName, onNavigate }: BorderButtonProps) => (
  <button
    onClick={() => onNavigate(countryCode)}
    className={`px-3 sm:px-4 py-1.5 sm:py-2 ${getWhiteOpacity(20)} 
              hover:bg-opacity-30 text-white rounded-lg transition-all 
              duration-200 text-sm sm:text-base`}
  >
    {commonName}
  </button>
));

BorderButton.displayName = 'BorderButton';

interface BorderCountriesProps {
  borders: ICountryMainInfo[] | null;
}

const BorderCountries: React.FC<BorderCountriesProps> = React.memo(({ borders }) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback((countryCode: string) => {
    navigate(ROUTES.getCountryRoute(countryCode));
  }, [navigate]);

  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
        {MESSAGES.HEADERS.BORDER_COUNTRIES}
      </h2>
      <div className="flex flex-wrap gap-2">
        {Array.isArray(borders) && borders.length > 0 ? 
          borders.map((border) => (
            <BorderButton
              key={border.countryCode}
              countryCode={border.countryCode}
              commonName={border.commonName}
              onNavigate={handleNavigate}
            />
          )) : 
          <p className="text-white text-opacity-60 text-sm sm:text-base">
            {MESSAGES.ERRORS.NO_BORDER_COUNTRIES}
          </p>
        }
      </div>
    </div>
  );
});

BorderCountries.displayName = 'BorderCountries';

export default BorderCountries; 
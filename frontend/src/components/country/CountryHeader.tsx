import React from 'react';

interface CountryHeaderProps {
  flagUrl?: string;
  commonName: string;
  region: string;
}

const CountryHeader: React.FC<CountryHeaderProps> = React.memo(({ 
  flagUrl, 
  commonName, 
  region 
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
      {flagUrl && (
        <img
          src={flagUrl}
          alt={`Flag of ${commonName}`}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
          loading="lazy"
        />
      )}
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
          {commonName}
        </h1>
        <p className="text-sm sm:text-base text-white text-opacity-80">
          {region}
        </p>
      </div>
    </div>
  );
});

CountryHeader.displayName = 'CountryHeader';

export default CountryHeader; 
import React, { useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchCountries } from '../store/countrySlice';
import { RootState } from '../store';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import Container from '../components/layout/Container';
import SEO from '../components/SEO';
import { getWhiteOpacity } from '../theme/utils';
import { ROUTES } from '../constants';

const CountryCard = React.memo(({ 
  countryCode, 
  name, 
  onNavigate 
}: { 
  countryCode: string; 
  name: string; 
  onNavigate: (code: string) => void;
}) => (
  <div
    onClick={() => onNavigate(countryCode)}
    className={`${getWhiteOpacity(10)} hover:bg-opacity-20 
              rounded-lg p-3 sm:p-4 transition-all duration-200 
              cursor-pointer group`}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getWhiteOpacity(20)} 
                    flex items-center justify-center shrink-0 
                    group-hover:bg-opacity-30 transition-all duration-200`}>
        <span className="text-sm sm:text-base font-semibold text-white">
          {countryCode}
        </span>
      </div>
      <h2 className="text-sm sm:text-base text-white font-medium leading-tight truncate">
        {name}
      </h2>
    </div>
  </div>
));

CountryCard.displayName = 'CountryCard';

const CountryList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { countries, loading, error } = useAppSelector((state: RootState) => state.country);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleNavigate = useCallback((countryCode: string) => {
    navigate(ROUTES.getCountryRoute(countryCode));
  }, [navigate]);

  const renderedCountries = useMemo(() => (
    countries.map((country) => (
      <CountryCard
        key={country.countryCode}
        countryCode={country.countryCode}
        name={country.name}
        onNavigate={handleNavigate}
      />
    ))
  ), [countries, handleNavigate]);

  if (loading) {
    return <Spinner fullScreen message="Loading countries..." />;
  }

  if (error) {
    return <ErrorMessage message={error} fullScreen />;
  }

  return (
    <>
      <SEO 
        title="Countries List"
        description="Explore information about countries around the world, including population data and geographical details."
        url="/"
      />
      <Container fullHeight>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 lg:mb-12 tracking-tight">
          <span className="font-black">Country Info </span>
          <span className="font-light">App</span>
        </h1>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 xs:gap-4 sm:gap-6">
          {renderedCountries}
        </div>
      </Container>
    </>
  );
};

export default CountryList; 
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchCountryInfo } from '../store/countrySlice';
import { RootState } from '../store';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import Container from '../components/layout/Container';
import BackButton from '../components/country/BackButton';
import CountryHeader from '../components/country/CountryHeader';
import BorderCountries from '../components/country/BorderCountries';
import PopulationChart from '../components/country/PopulationChart';
import SEO from '../components/SEO';
import { getWhiteOpacity } from '../theme/utils';

const CountryInfo: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const dispatch = useAppDispatch();
  const { countryInfo, loading, error } = useAppSelector((state: RootState) => state.country);

  useEffect(() => {
    if (countryCode) {
      dispatch(fetchCountryInfo(countryCode));
    }
  }, [countryCode, dispatch]);

  if (loading || !countryInfo) {
    return <Spinner fullScreen message="Loading country information..." />;
  }

  if (error) {
    return <ErrorMessage message={error} fullScreen />;
  }

  return (
    <>
      <SEO 
        title={countryInfo.commonName}
        description={`Explore detailed information about ${countryInfo.commonName}, including population trends and neighboring countries.`}
        keywords={[
          countryInfo.commonName,
          countryInfo.region,
          'country',
          'population',
          'statistics'
        ]}
        image={countryInfo.flagUrl}
        url={`/country/${countryInfo.countryCode}`}
      />
      <Container fullHeight>
        <BackButton />

        <div className={`${getWhiteOpacity(10)} rounded-xl p-4 xs:p-5 sm:p-6 lg:p-8`}>
          <CountryHeader 
            flagUrl={countryInfo.flagUrl}
            commonName={countryInfo.commonName}
            region={countryInfo.region}
          />

          <BorderCountries borders={countryInfo.borders} />
          
          <PopulationChart population={countryInfo.population} />
        </div>
      </Container>
    </>
  );
};

export default CountryInfo; 
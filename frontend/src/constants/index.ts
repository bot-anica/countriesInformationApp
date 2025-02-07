export const ROUTES = {
  HOME: '/',
  COUNTRY_DETAILS: '/country/:countryCode',
  getCountryRoute: (countryCode: string) => `/country/${countryCode}`,
};

export const MESSAGES = {
  LOADING: {
    COUNTRIES: 'Loading countries...',
    COUNTRY_INFO: 'Loading country information...',
  },
  ERRORS: {
    COUNTRY_NOT_FOUND: 'Country not found',
    NO_BORDER_COUNTRIES: 'No border countries',
    NO_POPULATION_DATA: 'No population data available',
  },
  HEADERS: {
    BORDER_COUNTRIES: 'Border Countries:',
    POPULATION_OVER_TIME: 'Population Over Time',
  },
};

export const CHART_COLORS = {
  LINE: 'rgb(75, 192, 192)',
  GRID: 'rgba(255, 255, 255, 0.1)',
  TEXT: 'rgba(255, 255, 255, 0.8)',
}; 
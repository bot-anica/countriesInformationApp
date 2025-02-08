import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import Spinner from './components/Spinner';

const CountryList = React.lazy(() => import('./pages/CountryList'));
const CountryInfo = React.lazy(() => import('./pages/CountryInfo'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<CountryList />} />
              <Route path="/country/:countryCode" element={<CountryInfo />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </Provider>
  );
};

export default App; 
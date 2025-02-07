import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import CountryList from './pages/CountryList';
import CountryInfo from './pages/CountryInfo';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:countryCode" element={<CountryInfo />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </Provider>
  );
};

export default App; 
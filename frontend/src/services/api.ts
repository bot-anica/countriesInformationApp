import axios from 'axios';
import { ICountry, ICountryInfo } from '../interfaces/ICountry';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const api = {
  getCountries: async (): Promise<ICountry[]> => {
    const response = await axios.get(`${API_URL}/countries`);
    return response.data;
  },

  getCountryInfo: async (countryCode: string): Promise<ICountryInfo> => {
    const response = await axios.get(`${API_URL}/countries/${countryCode}`);
    return response.data;
  },
}; 
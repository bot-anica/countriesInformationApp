import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { ICountryInfo, ICountry } from '../interfaces/ICountry';

interface CountryState {
  countries: ICountry[];
  countryInfo: ICountryInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: CountryState = {
  countries: [],
  countryInfo: null,
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async () => {
    const response = await api.getCountries();
    return response;
  }
);

export const fetchCountryInfo = createAsyncThunk(
  'country/fetchCountryInfo',
  async (countryCode: string) => {
    const response = await api.getCountryInfo(countryCode);
    return response;
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Countries
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch countries';
      })
      // Fetch Country Info
      .addCase(fetchCountryInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.countryInfo = action.payload;
      })
      .addCase(fetchCountryInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch country info';
      });
  },
});

export default countrySlice.reducer; 
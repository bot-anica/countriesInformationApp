import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { IPopulationData } from '../interfaces/ICountryInfo';

@Injectable()
export class CountriesNowApiService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  async getPopulation(countryName: string): Promise<IPopulationData[]> {
    const baseUrl = this.configService.get<string>('countriesNowApiUrl');
    
    try {
      const { data } = await axios.post(`${baseUrl}/countries/population`, {
        country: countryName,
      });

      return data.data.populationCounts.map((count: any) => ({
        year: count.year,
        value: count.value,
      }));
    } catch (error) {
      console.error(`Error fetching population data for ${countryName}:`, error);
      return [];
    }
  }

  async getFlag(countryCode: string): Promise<string> {
    const baseUrl = this.configService.get<string>('countriesNowApiUrl');
    
    try {
      const { data } = await axios.post(`${baseUrl}/countries/flag/images`, {
        iso2: countryCode,
      });

      return data.data.flag;
    } catch (error) {
      console.error(`Error fetching flag for ${countryCode}:`, error);
      return null;
    }
  }
} 
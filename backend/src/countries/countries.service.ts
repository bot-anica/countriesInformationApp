import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ICountryInfo } from './interfaces/ICountryInfo';
import axios from 'axios';
import { ICountry } from './interfaces/ICountry';
import { DateNagerApiService } from './services/date-nager-api.service';
import { CountriesNowApiService } from './services/countries-now-api.service';

@Injectable()
export class CountriesService {
  constructor(
    private readonly configService: ConfigService,
    private readonly dateNagerApi: DateNagerApiService,
    private readonly countriesNowApi: CountriesNowApiService,
  ) {}

  async getAvailableCountries(): Promise<ICountry[]> {
    const baseUrl = this.configService.get<string>('dateNagerApiUrl');
    const response = await axios.get(`${baseUrl}/AvailableCountries`);
    return response.data;
  }

  async getCountryInfo(countryCode: string): Promise<ICountryInfo> {
    try {
      const mainInfo = await this.dateNagerApi.getCountryInfo(countryCode);

      const [population, flagUrl] = await Promise.all([
        this.countriesNowApi.getPopulation(mainInfo.commonName),
        this.countriesNowApi.getFlag(countryCode),
      ]);

      return {
        ...mainInfo,
        population,
        flagUrl,
      };
    } catch (error) {
      throw new NotFoundException(`Country with code ${countryCode} not found`);
    }
  }
} 
import { Injectable, NotFoundException } from '@nestjs/common';

import { ICountry } from './interfaces/ICountry';
import { ICountryInfo } from './interfaces/ICountryInfo';
import { DateNagerApiService } from './services/date-nager-api.service';
import { CountriesNowApiService } from './services/countries-now-api.service';

@Injectable()
export class CountriesService {
  constructor(
    private readonly dateNagerApi: DateNagerApiService,
    private readonly countriesNowApi: CountriesNowApiService,
  ) {}

  async getAvailableCountries(): Promise<ICountry[]> {
    return await this.dateNagerApi.getAvailableCountries();
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

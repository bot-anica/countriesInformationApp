import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ICountry } from './interfaces/ICountry';
import { ICountryInfo } from './interfaces/ICountryInfo';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAvailableCountries(): Promise<ICountry[]> {
    return this.countriesService.getAvailableCountries();
  }

  @Get(':countryCode')
  getCountryInfo(@Param('countryCode') countryCode: string): Promise<ICountryInfo> {
    return this.countriesService.getCountryInfo(countryCode);
  }
}
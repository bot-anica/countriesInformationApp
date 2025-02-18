import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ICountryMainInfo } from '../interfaces/ICountryInfo';
import { ICountry } from '../interfaces/ICountry';

@Injectable()
export class DateNagerApiService {
  constructor(private readonly configService: ConfigService) {}

  async getAvailableCountries(): Promise<ICountry[]> {
    const baseUrl = this.configService.get<string>('dateNagerApiUrl');

    try {
      const response = await axios.get(`${baseUrl}/AvailableCountries`);

      return response.data;
    } catch (error) {
      throw new NotFoundException(
        `Failed to fetch all available countries list`,
      );
    }
  }

  async getCountryInfo(countryCode: string): Promise<ICountryMainInfo> {
    const baseUrl = this.configService.get<string>('dateNagerApiUrl');

    try {
      const { data } = await axios.get(`${baseUrl}/CountryInfo/${countryCode}`);

      return {
        commonName: data.commonName,
        officialName: data.officialName,
        countryCode: data.countryCode,
        region: data.region,
        borders: data.borders,
      };
    } catch (error) {
      throw new NotFoundException(
        `Failed to fetch country info for ${countryCode}`,
      );
    }
  }
}

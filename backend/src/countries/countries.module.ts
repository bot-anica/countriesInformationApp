import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { ConfigModule } from '@nestjs/config';
import { DateNagerApiService } from './services/date-nager-api.service';
import { CountriesNowApiService } from './services/countries-now-api.service';

@Module({
  imports: [ConfigModule],
  controllers: [CountriesController],
  providers: [CountriesService, DateNagerApiService, CountriesNowApiService],
})
export class CountriesModule {}

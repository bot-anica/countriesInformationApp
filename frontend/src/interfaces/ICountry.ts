export interface ICountry {
  countryCode: string;
  name: string;
}

export interface ICountryMainInfo {
  countryCode: string;
  commonName: string;
}

export interface IPopulationData {
  year: string;
  value: number;
}

export interface ICountryInfo {
  countryCode: string;
  commonName: string;
  flagUrl?: string;
  region: string;
  borders: ICountryMainInfo[] | null;
  population: IPopulationData[];
}